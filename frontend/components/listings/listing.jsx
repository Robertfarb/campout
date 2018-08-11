import React from 'react';
import { withRouter } from 'react-router-dom';

class Listing extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillReceiveProps (ownProps) {
    if (this.props.listingId != ownProps.match.params.listingId) {
      this.props.requestListing(this.props.match.params.listingId)
      }
  }

  componentDidMount () {
    this.props.requestListing(this.props.listingId)
  }
  

  render() {
    if (!this.props.listing) return (<div><p>loading</p></div>); //in in order to catch if no listing comes back

    return (
      <div className="listing-container">
        <div className="listing-left">
          <div className="listing-title">
            <h1>{this.props.listing.title}</h1>
          </div>

          <div className="listing-description">
            <aside className="details-aside">
              <img className="host-avatar"></img>
              <div className="host-info"></div>
            </aside>
            <main>
              <div className="listing-description-text-wrapper">
                <p>{this.props.listing.description}</p>
              </div>
            </main>
          </div>

          <div className="listing-details">
            <aside className="details-aside"><p>Details</p></aside>
            <main className="Listing Details">
              <ul>
                <li>Check in After: {this.props.listing.checkin_after}</li>
                <li>Checkout Before: {this.props.listing.checkout_before}</li>
                <li>Campsite Area: {this.props.listing.is_glamping}</li>
                <li>Pets Allowed: {this.props.listing.pet_friendly}</li>
                <li>Showers Available: {this.props.listing.has_showers}</li>
                <li>Max Group Size: {this.props.listing.max_capacity}</li>
              </ul>
            </main>
          </div>

          <div className="listing-activities">
            <aside className="details-aside"><p>Activities</p></aside>
            <main>
              
              <ul className="activities-list">
                {
                  this.props.listing.activities.map((activity) =>
                  <li key={this.props.listing.activities.indexOf(activity)}>{activity}</li>)
                }
              </ul>
            </main>
          </div>

          <div className="listing-current-status">
            <h1>The vibe at {this.props.listing.title}</h1>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>

        <div className="listing-right">
          <h1>Calendar goes here</h1>
        </div>
      </div>
    );
  }
}

export default withRouter(Listing);