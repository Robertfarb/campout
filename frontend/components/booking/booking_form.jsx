import React from 'react';
import { withRouter } from 'react-router-dom';

class BookingForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      check_in: '',
      check_out: '',
      total_price: '',
      total_guests: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.renderErrors = this.renderErrors.bind(this);
  }

  componentDidMount() {
    this.props.clearErrors();
  }

  componentWillUnmount() {
    this.props.clearErrors();
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const booking = Object.assign({}, this.state);
    this.props.processForm(user).then(this.props.closeModal)
  }

  handleNumGuests () {

  }

  renderErrors() {
    return (
      <ul className="signin-errors">
        {this.props.errors.map((error, idx) => (
          <li key={`error-${idx}`} className="signin-error">
            {error}
          </li>
        ))}
      </ul>
    );
  }

  render() {
    return (
      <div className="booking-form-container">
        <form onSubmit={this.handleSubmit}>
          {this.renderErrors()}
          <div className="daily-price-header"></div>
          <div className="login-form">
            <br />
            <input type="text"
              value={this.state.username}
              onChange={this.update('username')}
              className="login-input"
              placeholder="Username"
            />
            <br />
            <label>
              <input type="password"
                value={this.state.password}
                onChange={this.update('password')}
                className="login-input"
                placeholder="Password"
              />
            </label>
            <br />
            <input className="login-button" type="submit" value="Log In" />
          </div>
          <br />
          {this.renderErrors()}
        </form>
        <div className="signup-prompt">
          <span className="signup-prompt">Don't have a Campout account? </span><br />
          <button className="signup" onClick={() => this.props.openModal('signup')}>Signup!</button>
          <span className="signup-demo-split">|</span>
          <button className="demo" onClick={() => this.demoLogin()}>Demo</button>
        </div>
      </div>
    );
  }
}

export default withRouter(BookingForm)