import React from 'react';
import { withRouter } from 'react-router-dom';

class Listing extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillReceiveProps (ownProps) {
    if (this.props.listingId != ownProps.match.params.listingId) {
      this.props.requestListing(ownProps.match.params.listingId)
      }
  }

  componentDidMount () {
    this.props.requestListing(this.props.listingId)
  }
  

  render() {
    if (!this.props.listing) return null; //in in order to catch if no listing comes back

    return (
      <div className="listing-show-page">
        <div className="listing-photos">
          <div className="listing-container">
            <div className="listing-left">
              <div className="listing-title">
                <h1>{this.props.listing.title}</h1>
              </div>

              <div className="listing-description">
                <aside className="details-aside">
                  <img className="host-avatar" src={window.images.parkRanger}></img>
                  <div className="host-info">
                    <h3>Hosted By</h3>
                    <p>{this.props.listing.host.first_name} {this.props.listing.host.last_name}</p>
                  </div>
                </aside>
                <main>
                  <div className="listing-description-text-wrapper">
                    <p>{this.props.listing.description}</p>
                  </div>
                </main>
              </div>

              <div className="listing-details listing-description">
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

              <div className="listing-activities listing-description">
                <aside className="details-aside"><p>Activities</p></aside>
                <main>
                  <ul className="activities-list">
                  <li>Hiking</li>
                  <li>Biking</li>
                  <li>Climbing</li>
                  <li>Wildlife atching</li>
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
        </div>
      </div>
    );
  }
}

export default withRouter(Listing);