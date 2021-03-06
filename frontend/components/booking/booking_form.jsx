import React from 'react';
import { withRouter } from 'react-router-dom';
import { openModal } from '../../actions/modal_actions';
import { DateRangePicker, DayPickerRangeController } from 'react-dates';

class BookingForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      check_in: '',
      check_out: '',
      total_price: 0,
      total_guests: 1
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.renderErrors = this.renderErrors.bind(this);
    this.handleNumGuests = this.handleNumGuests.bind(this);
    this.handleDateChange = this.handleDateChange.bind(this);
  }

  componentDidMount() {
  }

  componentWillUnmount() {
    this.setState({check_in: '', check_out: ''})
  }

  totalPrice () {
    (this.state.check_out - this.state.check_in) * total_price
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const booking = Object.assign({}, this.state);
    booking.guest_id = this.props.currentUserId;
    booking.listing_id = this.props.match.params.listingId
    this.props.createBooking(booking)
      .then(() => this.props.requestAllBookings())
      .then(() => this.props.history.push(`/users/${this.props.currentUserId}`));
  }

  handleNumGuests (operation) {
    const max_capacity = this.props.listings[this.props.match.params.listingId].max_capacity
    if (operation === "minus" && this.state.total_guests > 0) {
      this.setState({ total_guests: this.state.total_guests - 1 })
    } else if (operation === "plus" && this.state.total_guests < max_capacity) {
      this.setState({ total_guests: this.state.total_guests + 1 })
    }
  }

  handleDateChange (type) {
    this.setState({[type]: [e.currentTarget.value]})
  }

  renderErrors() {
    return (
      <ul className="booking-errors">
        {this.props.errors.map((error, idx) => (
          <li key={`error-${idx}`} className="signin-error">
            {error}
          </li>
        ))}
      </ul>
    );
  }

  render() {
    const listingId = this.props.match.params.listingId;
    const currListing = this.props.listings[listingId];
    const today = new Date().toJSON().slice(0, 10).toString();

    if (this.props.match.params['listingId'] === undefined) return null

    if (!this.props.currentUserId) {
      return (
        <div>
          <button className="booking-login sticky-button" onClick={() => this.props.openModal("login")}>Log In to Book</button>
        </div>
      )
    } else {
      return (
        <div className="booking-form-container">
          <form onSubmit={this.handleSubmit}>
            {this.renderErrors()}
            <div className="daily-price-header">
              ${currListing.price_daily}<br/>
              <p className="per-night">per night</p>
            </div>
            <div className="booking-form">
              <br />
              <div className="booking-details">
                <div className="booking-date-input">
                  <h5 className="check">Check in</h5>
                  <input type="date"
                    min={ today }
                    onChange={this.update("check_in")}
                    className="booking-check-in booking-date"
                  />
                </div>
                <div className="booking-date-input">
                  <h5 className="check">Check out</h5>
                  <input type="date"
                    min={this.state.check_in}
                    onChange={this.update("check_out")}
                    className="booking-check-out booking-date"
                  />  
                </div>
                <div className="booking-guests-selector">
                  <h5 className="guests">Guests</h5>
                  <div className="guest-meter">
                    <a className="booking-minus" onClick={() => this.handleNumGuests("minus")}>-</a>
                    <p className="booking-guests">{this.state.total_guests}</p>
                    <a className="booking-plus" onClick={ () => this.handleNumGuests("plus")}>+</a>
                  </div>
                </div>
              </div>
              <br />
              <input className="booking-submit" type="submit" value="Direct Book" />
            </div>
            <br />
          </form>
        </div>
      );
    }
  }
}

export default withRouter(BookingForm)