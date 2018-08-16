import React from 'react';
import ReactDOM from 'react-dom';
import ListingsMap from '../map/listings_map';
import ListingsIndex from '../listings/listings_index';



class Discover extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount () {
    this.props.requestAllListings();
  }

  render() {
    if (Object.values(this.props.listings).length === 0) {
      // return (<div>Sorry no listings available</div>)
      // return (<div className="loading-container"><div className="loader">Loading...</div></div>)
    }


    return (
      <div className="map-search-container">
        <ListingsIndex 
        listings={this.props.listings} 
        requestAllListings={this.props.requestAllListings}
        updateFilter={this.props.updateFilter}
        />
        <ListingsMap 
        listings={this.props.listings}
        updateFilter={this.props.updateFilter}
        />
      </div>
    )
  }
}

export default Discover;