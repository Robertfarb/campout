import React from 'react';
import { withRouter } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { EditReviewFormContainer } from './create_review_form_container'
import EditReviewButton from './edit_review_buttons';

class ReviewIndexItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { review } = this.props

    return (
      <li className="review-index-item">
        <h2 className="review-username">{review.author_name}</h2>
        <p className="review-body">{review.review_body}</p>
        <EditReviewButton 
          key={this.props.idx}
          review={review} 
          deleteReview={this.props.deleteReview}
        />
      </li>
    )
  }
}

export default ReviewIndexItem;