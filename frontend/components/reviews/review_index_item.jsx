import React from 'react';
import { withRouter } from 'react-router-dom';
import { Link } from 'react-router-dom';

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
      </li>
    )
  }
}

export default ReviewIndexItem;