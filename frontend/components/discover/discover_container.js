import { connect } from 'react-redux';
import Discover from './discover';
import { requestAllListings, requestListing} from '../../actions/listings_actions';
import { updateFilter } from '../../actions/location_filter_actions';
import { clearFilters } from '../../actions/filter_actions';


const mapStateToProps = (state, errors) => {
  return {
  listings: state.entities.listings,
  filters: state.ui.filters}
};

const mapDispatchToProps = dispatch => ({
  requestListing: (id) => dispatch(requestListing(id)),
  requestAllListings: () => dispatch(requestAllListings()),
  updateFilter: (filter, value) => dispatch(updateFilter(filter, value)),
  clearFilters: () => dispatch(clearFilters())
});

export default connect(mapStateToProps, mapDispatchToProps)(Discover);