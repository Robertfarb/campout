import React from 'react';
import ReactDOM from 'react-dom';
import MarkerManager from '../../util/marker_manager';
import { withRouter } from 'react-router-dom';
import { receiveGeolocation } from '../../actions/location_filter_actions';

class ListingsMap extends React.Component {
  constructor (props) { 
    super(props);
    
    this.handleMarkerClick = this.handleMarkerClick.bind(this);
    this.registerListeners = this.registerListeners.bind(this);
    this.centerMapOnSearch = this.centerMapOnSearch.bind(this);
    this.geoCoder = new google.maps.Geocoder();
    this.applyListingFilters = this.applyListingFilters.bind(this);
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

  componentDidUpdate () {
    debugger;
    let filteredListings = this.applyListingFilters();
    this.MarkerManager.updateMarkers(filteredListings)
  }

  applyListingFilters() {
    let filters = this.props.filters;
    let filteredListings = Object.values(this.props.listings);

    if (filters['glamping'] === true) {
      filteredListings = filteredListings.filter(listing => {
        if (listing.is_glamping) return listing
      });
    }

    if (filters['camping'] === true) {
      filteredListings = filteredListings.filter(listing => {
        if (listing.is_glamping === false) return listing
      });
    }

    if (filters['petFriendly'] === true) {
      filteredListings = filteredListings.filter(listing => {
        if (listing.pet_friendly) return listing
      });
    }

    if (filters['toilets'] === true) {
      filteredListings = filteredListings.filter(listing => {
        if (listing.is_toilets) return listing
      });
    }

    if (filters['showers'] === true) {
      filteredListings = filteredListings.filter(listing => {
        if (listing.has_showers) return listing
      });
    }

    if (filters['maxPrice'] < 10000) {
      filteredListings = filteredListings.filter(listing => {
        if (listing.price_daily < filters['maxPrice']) return listing
      });
    }

    if (filters['maxCapacity'] < 100) {
      filteredListings = filteredListings.filter(listing => {
        if (listing.max_capacity > filters['maxCapacity']) return listing
      });
    }

    return filteredListings;
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
          return null;
       }}
    });
  }

  componentDidUpdate () {
    const listingsArr = Object.values(this.props.listings)
    this.MarkerManager.updateMarkers(listingsArr)
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