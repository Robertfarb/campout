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
        <form onSubmit={this.handleSubmit}>
          <div onClick={this.props.closeModal} className="close-x">X</div>
          {this.renderErrors()}
          <div className="login-form">
          <br/>
          <label>Username:
            <input type="text"
              value={this.state.username}
              onChange={this.update('username')}
              className="login-input"
            />
          </label>
          <br/>
          <label>Password:
            <input type="password"
              value={this.state.password}
              onChange={this.update('password')}
              className="login-input"
            />
          </label>
          <br/>
          <input className="session-submit" type="submit" value={this.props.formType}/>
          </div>
          <br/>
        </form>
        <span className="signup-prompt">Don't have a Campout account?</span>
        <button className="signup" onClick={this.props.openModal('signup')}>Signup!</button>
      </div>
    );
  }
}

export default withRouter(SessionForm);