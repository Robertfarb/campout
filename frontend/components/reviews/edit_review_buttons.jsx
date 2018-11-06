import React from 'react';
import { withRouter } from 'react-router-dom';
import { logoutCurrentUser } from '../../actions/session_actions';

class EditReviewButton extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { review, deleteReview } = this.props
    const currUser = this.props.currUser === undefined ? {id: null} : this.props.currUser

    if (review.user_id === currUser.id) {
      return (
        <div className="review-index-item">
          <button onClick={() => deleteReview(review)} className="delete-review">Delete Review</button>
          <button className="update-review">Update Review</button>
        </div>
      )
    } else {
      return (
        <div className="hidden">
        </div>
      )
    }
  }
}
 
export default EditReviewButton;