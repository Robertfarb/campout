import React from 'react';
import ReactDOM from 'react-dom';

class ListingsMap extends React.Component {
  constructor (props) {
    super(props);
  }

  render() {
    return (
      <div className="listings-map-wrapper">
        <div id='map-container' ref='map' className='listings-map'>
          
        </div>
      </div>
    )
  }
}

  export default ListingsMap;