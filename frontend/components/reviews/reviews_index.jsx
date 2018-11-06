import React from 'react';
import { withRouter } from 'react-router-dom';
import ReviewIndexItem from './review_index_item';

class ReviewsIndex extends React.Component {
  constructor(props) {
    super(props);
  }
  
  componentWillReceiveProps(newProps) {
    if(newProps.reviews !== this.props.reviews) {
      this.props.requestListing(this.props.listingId);
      this.props.requestAllListings();
    }
  }

  render() {
    const reviews = this.props.listing.reviews === undefined ? 0 : Object.values(this.props.listing.reviews);
    const numReviews = reviews.length > 1 || reviews.length === 0 ? "Reviews" : "Review";

    if (reviews === 0) {
      return (
        <div className="reviews-index">
          <h2 className="reviews-header">0 Reviews</h2>
        </div>
      )
    } else {
      return (
        <div className="reviews-index">
        <h2 className="reviews-header">{reviews.length} {numReviews}</h2>
          <ul>
            {reviews.map((review, idx)=> (
              <ReviewIndexItem 
                key={idx}
                review={review}
                deleteReview={this.props.deleteReview}
                currUser={this.props.currUser}
              />
          ))}
          </ul>
        </div>
      )
    }
  }
}

export default withRouter(ReviewsIndex);