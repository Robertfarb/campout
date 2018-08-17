import React from 'react';
import { withRouter } from 'react-router-dom';


class ReviewsIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    
  }

  render() {
    return (
      <div className="listing-index">
        {/* Map over Reviews here and render a Review Index Item for each one */}
      </div>
    )
  }
}

export default withRouter(ReviewsIndex);