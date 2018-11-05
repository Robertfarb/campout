import React from 'react';
import { withRouter } from 'react-router-dom';

class EditReviewButton extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { review, deleteReview } = this.props
    
    return (
      <div className="review-index-item">
        <button onClick={() => deleteReview(review)} className="delete-review">Delete Review</button>
        <button className="update-review">Update Review</button>
      </div>
    )
  }
}

export default EditReviewButton;