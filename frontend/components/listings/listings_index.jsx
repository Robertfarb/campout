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
    return (
      <div className="listing-index">
      {Object.values(this.props.listings).map(listing => (
        <ListingIndexItem key={listing.id} listing={listing}/> 
      ))}
    </div>
  )}
}


export default ListingIndex;

