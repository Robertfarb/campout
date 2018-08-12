import React from 'react';
import { withRouter } from 'react-router-dom';
import ListingImageCarousel from './listing_image_carousel';

class Listing extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillReceiveProps(ownProps) {
    if (this.props.listingId != ownProps.match.params.listingId) {
      this.props.requestListing(ownProps.match.params.listingId)
    }
  }

  componentDidMount() {
    window.scrollTo(0, 0)
    this.props.requestListing(this.props.listingId)
  }


  render() {
    if (!this.props.listing) return null; //in in order to catch if no listing comes back
    let glamping;
    let pet_friendly;
    let has_showers;
  }
}
