import React from 'react';
import { withRouter } from 'react-router-dom';

class BookingForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      check_in: '',
      check_out: '',
      total_price: 0,
      total_guests: 0
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.renderErrors = this.renderErrors.bind(this);
  }

  componentDidMount() {
    this.props.requestAllBookings();
  }

  componentWillUnmount() {
    this.setState({check_in: '', check_out: ''})
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const booking = Object.assign({}, this.state);
    this.props.createBooking(this.state);
    //Clear errors & rer-render listing
  }

  handleNumGuests () {

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
    // if (currentListing === undefined) return null
    const listingId = this.props.match.params.listingId 
    if (!this.props.currentUserId) {
      return (
        <div>
          <button>Log In to Book</button>
        </div>
      )
    } else {
      return (
        <div className="booking-form-container">
          <form>
            {this.renderErrors()}
            <div className="daily-price-header">
              {this.props.currentListing.price_daily}
            </div>
            <div className="booking-form">
              <br />
              <input type="date"
                // value={this.state.check_in}
                // onChange={this.update('username')}
                className="booking-check-in booking-date"
              />
              <input type="date"
                // value={this.state.check_in}
                // onChange={this.update('username')}
                className="booking-check-out booking-date"
              />
              <div className="booking-guests-selector">
                <a className="booking-minus">-</a>
                <p className="booking-guests">{this.state.total_guests}</p>
                <a className="booking-plus">+</a>
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