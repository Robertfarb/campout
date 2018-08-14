import React from 'react';
import { withRouter } from 'react-router-dom';


class UserIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentwillMount() {
    this.props.reqwuestAllBookings();
  }
  
  componentDidMount() {
    window.scrollTo(0, 0)
    this.props.requestAllBookings();
  }


  render() {
    if (this.props.bookings === undefined) return null;
    debugger;

    return (

      <div className="user-bookings-index">
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