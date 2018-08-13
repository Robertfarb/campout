import React from 'react';
import { withRouter } from 'react-router-dom';
import ListingIndexItem from './listing_index_item'
import {selectAllListings} from '../../reducers/selectors';


class ListingIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillReceiveProps(ownProps) {
  }

  componentDidMount() {
    window.scrollTo(0, 0)
    this.props.requestAllListings();
  }


  render() {
  //  if (!this.props.listings) return
    return (
      Object.values(this.props.listings).map(listing => (
        <div className="listing-index">
          <ListingIndexItem key={listing.id} listing={listing}/>
        </div>
      )
    )
  )}
}


export default ListingIndex;

