import React from 'react';
import { withRouter } from 'react-router-dom';
import {Link} from 'react-router-dom';

class ListingIndexItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { listing } = this.props

    return (
      <div className="listing-index-item">
        <div className="listing-img-container">
          <a href={`#/listings/${listing.id}`}><img className="listing-img" src={listing.listingIcon} alt="listing icon"/></a>
        </div>
        <div className="listing-info">
          <h1 className="listing-name">{listing.title}</h1>
          <p className="listing-index-description">{listing.description}</p>
        </div>
      </div>
    )
  }
}

export default ListingIndexItem;