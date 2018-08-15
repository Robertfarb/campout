import React from 'react';
import ReactDOM from 'react-dom';
import ListingsMap from '../map/listings_map';
import ListingsIndex from '../listings/listings_index';


class Search extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount () {
    this.props.requestAllListings();
  }

  render() {
    if (Object.values(this.props.listings).length === 0) return null;
  

    return (
      <div className="map-search-container">
        <ListingsIndex listings={this.props.listings} requestAllListings={this.props.requestAllListings}/>
        <ListingsMap />
      </div>
    )
  }
}

export default Search;