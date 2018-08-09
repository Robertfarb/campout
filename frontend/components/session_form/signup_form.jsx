import React from 'react';
import { withRouter } from 'react-router-dom';

class SignUpForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      first_name: '',
      last_name: '',
      username: '',
      password: '',
      zip_code: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.renderErrors = this.renderErrors.bind(this);
  }

update(field) {
  return e => this.setState({
    [field]: e.currentTarget.value
  });
}

handleSubmit(e) {
  e.preventDefault();
  const user = Object.assign({}, this.state);
  this.props.processForm(user).then(() => this.props.closeModal())
};

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
    <div className="signup-modal-child" onClick={e => e.stopPropagation()}>
      <img src={window.images.logoPng} />
      <div className="signup-form-conatiner">
        <div className="welcome-back">
          <big>Join Campout</big><br/>
          <small>Discover the best camping near me!</small>
        </div>
        <form onSubmit={this.handleSubmit}>
        {this.renderErrors()}
        <div className="signup-form">
            <input type="text"
            value={this.state.firstName}
            placeholder="First name..."
            onChange={this.update('first_name')}
            className="signup-input"
            />
            <input type="text"
              value={this.state.lastName}
              placeholder="Last name..."
            onChange={this.update('last_name')}
            className="signup-input"
            />
            <input type="text"
              value={this.state.userName}
            onChange={this.update('username')}
              placeholder="Username..."
            className="signup-input"
            />
            <input type="password"
              value={this.state.password}
              placeholder="password"
            onChange={this.update('password')}
            className="signup-input"
            />
            <input type="text"
              value={this.state.zip_code}
              placeholder="Zip code..."
            onChange={this.update('zip_code')}
            className="signup-input"
            />
        </div>
        <input type="submit" value="Join Campout" className="signup-button"/>
        </form>
      </div>
    </div>
    );
  }
}

export default SignUpForm;