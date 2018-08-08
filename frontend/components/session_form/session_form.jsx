import React from 'react';
import {withRouter} from 'react-router-dom';
import { openModal } from '../../actions/modal_actions';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.renderErrors = this.renderErrors.bind(this);
  }

  update (field) {
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
      <div className="login-form-container">
        <div className="welcome-back">
          <big>Welcome Back!</big><br/>
          <small>It's about time to go camping again!</small>
        </div>
        <form onSubmit={this.handleSubmit}>
          {this.renderErrors()}
          <div className="login-form">
          <br/>
          <input type="text"
            value={this.state.username}
            onChange={this.update('username')}
            className="login-input"
            placeholder="Username"
          />
          <br/>
          <label>
            <input type="password"
              value={this.state.password}
              onChange={this.update('password')}
              className="login-input"
              placeholder="Password"
            />
          </label>
          <br/>
          <input className="login-button" type="submit" value={this.props.formType}/>
          </div>
          <br/>
        </form>
        <span className="signup-prompt">Don't have a Campout account?</span>
        <button className="signup" onClick={() => this.props.openModal('signup')}>Signup!</button>
      </div>
    );
  }
}

export default withRouter(SessionForm)