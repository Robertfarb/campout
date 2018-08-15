import { connect } from 'react-redux';
import Discover from './discover';
import { requestAllListings, requestListing} from '../../actions/listings_actions';
import { updateFilter } from '../../actions/location_filter_actions';



const mapStateToProps = (state, errors) => ({
  listings: state.entities.listings,
});

const mapDispatchToProps = dispatch => ({
  requestListing: (id) => dispatch(requestListing(id)),
  requestAllListings: () => dispatch(requestAllListings()),
  updateFilter: (filter, value) => dispatch(updateFilter(filter, value))
});

export default connect(mapStateToProps, mapDispatchToProps)(Discover);