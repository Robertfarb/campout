import React from 'react';
import ReactDOM from 'react-dom';
import MarkerManager from '../../util/marker_manager';
import { withRouter } from 'react-router-dom';


class ListingsMap extends React.Component {
  constructor (props) {
    super(props);
    
    this.handleMarkerClick = this.handleMarkerClick.bind(this);
    this.registerListeners = this.registerListeners.bind(this);
    this.centerMapOnSearch = this.centerMapOnSearch.bind(this);
    this.geoCoder = new google.maps.Geocoder();
  }

  componentWillReceiveProps () {
    this.centerMapOnSearch();
  }

  componentDidMount () {
    const listingsArr = Object.values(this.props.listings)
    const mapOptions = {
      center: { lat: 37.865101, lng: -119.538329},
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
    let geocoder = new google.maps.Geocoder();
    let resultObj = { lat: 0, lng: 0 }
    geocoder.geocode({ 'address': this.props.geoLocation['address']}, function (results, status) {
      if (status === "OK") {
        const lat = parseFloat(results[0].geometry.location.lat())
        const lng = parseFloat(results[0].geometry.location.lng())
        resultObj["lat"] = lat
        resultObj["lng"] = lng
        this.map.setCenter(new google.maps.LatLng(lat, lng));
        this.map.updateFilter("location", bounds)
      } else {
        return "no luck"
      }
    });
  }

  componentDidUpdate () {
    const listingsArr = Object.values(this.props.listings)
    this.MarkerManager.updateMarkers(listingsArr)
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