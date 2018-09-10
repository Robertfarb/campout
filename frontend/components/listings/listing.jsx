import React from 'react';
import { withRouter } from 'react-router-dom';
import ListingImageCarousel from './listing_image_carousel';
import BookingContainer from '../booking/booking_container';

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
    window.scrollTo(0, 0)
    this.props.requestListing(this.props.listingId)
  }

  componentWillUnmount () {
    this.props.requestAllBookings();
  }

  render() {
    if (this.props.listing === undefined) {
      return (<div className="loading-container"><div className="loader">Loading...</div></div>)
    } else if (!this.props.listingId) {
      return (<div className="loading-container"><div className="loader">Loading...</div></div>)
    } else if (!this.props.listing.host) {
      return (<div className="loading-container"><div className="loader">Loading...</div></div>)
    } else if (!this.props.listing.listingPhotos) {
      return (<div className="loading-container"><div className="loader">Loading...</div></div>)
    }
    // debugger;

    let glamping;
    let pet_friendly;
    let has_showers;
    
    this.props.listing.is_glamping ? glamping = "Glamping" : glamping = " Tent Camping"
    this.props.listing.pet_friendly === true ? pet_friendly = "On Leash" : pet_friendly = "No Pets"
    this.props.listing.has_showers === true ? has_showers = "Showers on Site" : has_showers = "Primitive campsite"

    return (
      <div className="listing-show-page">
          <ListingImageCarousel photos={this.props.listing.listingPhotos}/>
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
                <main className="listing-details">
                  <ul>
                    <li><strong>Check in After:&nbsp;</strong> {this.props.listing.checkin_after}</li>
                    <li><strong>Checkout Before:&nbsp;</strong> {this.props.listing.checkout_before}</li>
                    <li><strong>Campsite Area:&nbsp;</strong> { glamping }</li>
                    <li><strong>Pets Allowed:&nbsp;</strong> { pet_friendly }</li>
                    <li><strong>Showers Available:&nbsp;</strong> { has_showers }</li>
                    <li><strong>Max Group Size:&nbsp;</strong> {this.props.listing.max_capacity}</li>
                  </ul>
                </main>
              </div>

              <div className="listing-activities listing-description">
                <aside className="details-aside"><p>Activities</p></aside>
                <main>
                  <ul className="activities-list">
                    <li><img className="host-avatar" src={window.images.hiking}></img>Hiking</li>
                    <li><img className="host-avatar" src={window.images.biking}></img>Biking</li>
                    <li><img className="host-avatar" src={window.images.swimming}></img>Swimming</li>
                    <li><img className="host-avatar" src={window.images.bird}></img>Wildlife watching</li>
                  </ul>
                </main>
              </div>

              <div className="listing-current-status">
                <h2>The vibe at {this.props.listing.title}</h2>
                <div className="status-square-container">
                  <div className="status-square">
                    <h2>{this.props.listing.conditions.elevation}ft</h2>
                    <p>Listing's elevation</p>
                  </div>
                  <div className="status-square">
                    <h2>{this.props.listing.conditions.weather}°F</h2>
                    <p>Current temperature</p>
                  </div>
                  <div className="status-square">
                    <h2>{this.props.listing.conditions.curr_conditions}</h2>
                    <p>Current conditions</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="listing-right">
              <BookingContainer />
            </div>
          </div>
        </div>

    );
  }
}

export default withRouter(Listing);