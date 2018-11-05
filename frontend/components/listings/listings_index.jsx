import React from 'react';
import { withRouter } from 'react-router-dom';
import ListingIndexItem from './listing_index_item';
import { applyListingFilters } from '../../util/filter_util';

class ListingIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  componentWillUnmount () {
    this.props.clearFilters();
  }

  render() {
    const filtListings = applyListingFilters(this.props.filters, this.props.listings);

    if (filtListings.length === 0) {
      return (
        <div className="no-listings-avail">
          <h1>Sorry, there are no listings available that match your Search!</h1>
        </div>
      )
    };

    return (
      <div className="listing-index">
      {filtListings.map(listing => (
        <ListingIndexItem 
          key={listing.id} 
          listing={listing}
        /> 
      ))}
    </div>
  )};
}

export default withRouter(ListingIndex);