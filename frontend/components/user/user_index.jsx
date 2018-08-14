import React from 'react';
import { withRouter } from 'react-router-dom';


class UserIndex extends React.Component {
  constructor(props) {
    super(props);

    this.handleDelete = this.handleDelete.bind(this);
  }
  
  componentDidMount() {
    window.scrollTo(0, 0)
    this.props.requestAllBookings();
  }

  handleDelete (id) {
    this.props.deleteBooking(id)
    .then(() => this.props.requestAllBookings());
    console.log("test")
  }

  render() {
    if (Object.values(this.props.bookings).length === 0) return (
      <div className="user-homepage">
        <h1>You currently have no bookings, <br/>Time to go camping!</h1>
      </div>
    )

    return (
      <div className="user-homepage">
        <h1>Your Bookings</h1>
        <div className="user-bookings-index">
          {Object.values(this.props.bookings).map(booking => (
            <div className="booking-index-item" key={booking.id}>
              <img className="booking-img"src={booking.listing.listingIcon}></img>
              <div className="booking-details">
                <h2>{booking.listing.title}</h2>
                <p>{booking.listing.description}</p>
                <div className="booking-dates">
                  <p>{booking.check_in}</p> - <p>{booking.check_out}</p>
                </div>
                {/* <button onClick={() => this.props.deleteBooking(booking.id)}>Cancel Booking</button> */}
                <button onClick={() => this.handleDelete(booking.id)}>Cancel Booking</button>
              </div>
            </div>
            ))}
        </div>
      </div>

    )
  }
}


export default UserIndex;