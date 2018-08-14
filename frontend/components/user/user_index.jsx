import React from 'react';
import { withRouter } from 'react-router-dom';


class UserIndex extends React.Component {
  constructor(props) {
    super(props);
  }
  
  componentDidMount() {
    window.scrollTo(0, 0)
    this.props.requestAllBookings();
  }


  render() {
    // debugger;
    if (Object.values(this.props.bookings).length === 0) return null;

    return (
      <div className="user-bookings-index">
      <h1>Your Bookings</h1>
        {Object.values(this.props.bookings).map(booking => (
          <div key={booking.id}>
            <img className="booking-img"src={booking.listing.listingIcon}></img>
            <div className="booking-details">
              <h2>{booking.listing.title}</h2>
              <p>{booking.listing.description}</p>
            </div>
          </div>
          ))}
      </div>

    )
  }
}


export default UserIndex;