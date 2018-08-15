import React from 'react';
import ReactDOM from 'react-dom';
import MarkerManager from '../../util/marker_manager';

class ListingsMap extends React.Component {
  constructor (props) {
    super(props);
    
    this.handleMarkerClick = this.handleMarkerClick
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount () {
    const listingsArr = Object.values(this.props.listings)
    const mapOptions = {
      center: { lat: 37.865101, lng: -119.538329},
      zoom: 6
    };

    this.map = new google.maps.Map(this.mapNode, mapOptions)
    this.MarkerManager = new MarkerManager(this.map)
    this.MarkerManager.updateMarkers(listingsArr)
  }

  handleMarkerClick (listing) {
    this.props.history.push(`listings/${listing.id}`);
  }

  handleClick (listing) {
    this.props.history.push({
      pathname: 'benches/new',
      search: `lat=${coords.lat}&lng=$coords.lng`
    })
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

  export default ListingsMap;