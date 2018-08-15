import React from 'react';
import ReactDOM from 'react-dom';
import MarkerManager from '../../util/marker_manager';
import { withRouter } from 'react-router-dom';


class ListingsMap extends React.Component {
  constructor (props) {
    super(props);
    
    this.handleMarkerClick = this.handleMarkerClick.bind(this)
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
  }

  registerListeners () {
    google.maps.event.addListener(this.map, 'idle', () => {
      const { north, south, east, west } = this.map.getBounds().toJSON();
      const bounds = {
        northEast: {lat: north, long: east},
        southWest: {lat: south, long: west}
      };
      this.props.changeFilter('bounds', bounds);
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