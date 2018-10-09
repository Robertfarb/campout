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
        TEST!
      </div>
    )
  }
}

export default withRouter(ReviewsIndex);