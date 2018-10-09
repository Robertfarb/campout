import React from 'react';
import { withRouter } from 'react-router-dom';

class ReviewForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = props.review;
    this.handleSubmit = this.handleSubmit.bind(this);
    this.update = this.update.bind(this);
  }

  update (field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit (e) {
    e.preventDefault();
    this.props.action(this.state)
  }

  render () {
    if (this.props.currentUser === undefined) {
      return (
        <div>
          <button className="booking-login login-review" onClick={() => this.props.openModal("login")}>Login To Review</button>
        </div>
      )
    }else if (this.props.formType === "Add Review" && this.props.currentUser.id ) {
      return (
        <div className="review-form-container">
          <form onSubmit={this.handleSubmit}>
            <input 
              type="text"
              onChange={this.update("review_body")}
              value={this.state.review_body}
            />
            <input
              type="submit"
              value={this.props.formType}
            />
          </form>
        </div>
      )
    }
  }
}

export default withRouter(ReviewForm);