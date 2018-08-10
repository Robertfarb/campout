import React from 'react';
import { withRouter } from 'react-router-dom';

class Listing extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount () {
    this.props.requestListing(this.props.match.params.listingId)
  }

  render() {
    return (
      <div className="listing-container">
        <h1>Test Listing!</h1>
      </div>
    );
  }
}

export default Listing;