import React from 'react';
import ReactDOM from 'react-dom';
import MarkerManager from '../../util/marker_manager';
import { withRouter } from 'react-router-dom';
import { receiveGeolocation } from '../../actions/location_filter_actions';
import { applyListingFilters } from '../../util/filter_util';

class ListingsMap extends React.Component {
  constructor (props) { 
    super(props);
    
    this.handleMarkerClick = this.handleMarkerClick.bind(this);
    this.registerListeners = this.registerListeners.bind(this);
    this.centerMapOnSearch = this.centerMapOnSearch.bind(this);
    this.geoCoder = new google.maps.Geocoder();
    this.getCenter = this.getCenter.bind(this);
  }


  componentDidMount () {
    let geoLocation = this.props.geoLocation;
    let mapCenter = { lat: 37.865101, lng: -119.538329 };
    const listingsArr = Object.values(this.props.listings);

    const mapOptions = {
      center: mapCenter,
      zoom: 6
    };

    this.map = new google.maps.Map(this.mapNode, mapOptions)
    this.MarkerManager = new MarkerManager(this.map, this.handleMarkerClick.bind(this))
    this.MarkerManager.updateMarkers(listingsArr)
    this.registerListeners();
  }

  registerListeners () {
    google.maps.event.addListener(this.map, 'idle', () => {
      const { north, south, east, west } = this.map.getBounds().toJSON();
      const bounds = {
        northEast: {lat: north, long: east},
        southWest: {lat: south, long: west}
      };
      this.props.updateFilter('location', bounds);
    });
  }

  centerMapOnSearch () {
    const geolocation = this.props.geoLocation
    this.geoCoder.geocode({ 'address': geolocation}, (results, status) => {
      if (status === "OK") {
        if (results[0]) {
          this.map.setZoom(7)
          let center = results[0].geometry.location;
          this.map.setCenter(center);
          const newBounds = this.map.getBounds();
          this.map.fitBounds(newBounds);
          this.props.receiveGeolocation("");
        } else {
          return { lat: 37.865101, lng: -119.538329 };
       }}
    });
  }

  getCenter (callBack) {
    const geolocation = this.props.geoLocation;
    let centerCoords;
    this.geoCoder.geocode({ 'address': geolocation }, function (results, status) {
      if (status === "OK") {
        if (results[0]) {
          let lat = results[0].geometry.location.lat();
          let lng = results[0].geometry.location.lng();
          centerCoords = { lat, lng }
          callBack(centerCoords);
        } else {
          centerCoords = { lat: 37.865101, lng: -119.538329 };
          callBack(centerCoords);
        }
      }
    });
  }

  componentDidUpdate () {
    const filteredListings = applyListingFilters(this.props.filters, this.props.listings)
    this.MarkerManager.updateMarkers(filteredListings)
    if (this.props.geoLocation.length > 0) this.centerMapOnSearch();
  }

  handleMarkerClick (listing) {
    this.props.history.push(`listings/${listing.id}`);
  }


  render() {
    return (
      <div className="listings-map-wrapper">
        <div id='map-container' ref={map => this.mapNode = map} className='listings-map'>
        </div>
      </div>
    )
  }
}

export default withRouter(ListingsMap);