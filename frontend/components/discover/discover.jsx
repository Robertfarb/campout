import React from 'react';
import ReactDOM from 'react-dom';
import ListingsMap from '../map/listings_map';
import ListingsIndex from '../listings/listings_index';
import FiltersContainer from '../filter/filter_container';



class Discover extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount () {
    // this.props.requestAllListings();
  }

  render() {

    return (
      <div className="map-search-container">
        <div className="filters-aside">
        <FiltersContainer />
        </div>
        <ListingsIndex 
          listings={this.props.listings} 
          requestAllListings={this.props.requestAllListings}
          updateFilter={this.props.updateFilter}
          clearFilters={this.props.clearFilters}
          filters={this.props.filters}
          updateFilteredListings={this.props.updateFilteredListings}
        />
        <ListingsMap 
          listings={this.props.listings}
          updateFilter={this.props.updateFilter}
          geoLocation={this.props.geoLocation}
          receiveGeolocation={this.props.receiveGeolocation}
        />
      </div>
    )
  }
}

export default Discover;