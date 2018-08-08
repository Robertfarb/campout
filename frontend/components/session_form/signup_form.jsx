import React from 'react';
import { withRouter } from 'react-router-dom';

class SignUpForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: 'First name...',
      lastName: 'Last name...',
      username: 'Username...',
      password: 'Password...',
      email: 'Email address...',
      zipCode: 'Zip code...'
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.renderErrors = this.renderErrors.bind(this);
  }
}

update(field) {
  return e => this.setState({
    [field]: e.currentTarget.value
  });
}

handleSubmit(e) {
  e.preventDefault();
  const user = Object.assign({}, this.state);
  this.props.processForm(user).then(this.props.closeModal);
}

renderErrors() {
  const errors = () => (
    <ul>
      {this.props.errors.map((error, idx) => (
        <li key={`error-${idx}`}>
          {error}
        </li>
      ))}
    </ul>
  );

  this.props.errors ? errors : nil
}

render () {
  return (
    <div className="signup-form-conatiner">
      <h2>Join Campout</h2>
      <h3>Discover the best camping near me!</h3>
      <form onSubmit={this.handleSubmit}>
      <div onClick={this.props.closeModal} className="close-x">X</div>
      {this.renderErrors()}
      <div className="signup-form">
          <input type="text"
           value={this.state.firstName}
           onChange={this.update('firstName')}
           className="signup-input"
          />
          <input type="text"
            value={this.state.lastName}
           onChange={this.update('lastName')}
          className="signup-input"
          />
          <input type="text"
            value={this.state.userName}
           onChange={this.update('userName')}
          className="signup-input"
          />
      </div>
      </form>
    </div>
  )
}
