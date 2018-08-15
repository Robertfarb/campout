import React from 'react';
import ReactDOM from 'react-dom';

class ListingsMap extends React.Component {
  constructor (props) {
    super(props);
  }

  componentDidMount () {
    const mapOptions = {
      center: {lat: 37.7758, lng: -122.435},
      zoom: 13
    };

    this.map = new google.maps.Map(this.mapNode, mapOptions)
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