import React from 'react';
import { withRouter } from 'react-router-dom';


class ListingIndexItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { listing } = this.props
    debugger;

    return (
      <div className="listing-index-item">
        <img src={listing.listingIcon} alt="listing icon" />
        <div className="listing-info">
          <h1>{listing.title}</h1>
          <p>{listing.description}</p>
        </div>
      </div>
    )
  }
}


export default ListingIndexItem;