import { connect } from 'react-redux';
import Discover from './discover';
import { requestAllListings, requestListing, updateFilteredListings} from '../../actions/listings_actions';
import { updateFilter } from '../../actions/location_filter_actions';
import { clearFilters, updateFilterValue } from '../../actions/filter_actions';
import { receiveGeolocation } from '../../actions/location_filter_actions';

const mapStateToProps = (state, errors) => {
  return {
  listings: state.entities.listings,
  filters: state.ui.filters,
  geoLocation: state.ui.geoLocation["address"],
  }
};

const mapDispatchToProps = dispatch => ({
  requestListing: (id) => dispatch(requestListing(id)),
  requestAllListings: () => dispatch(requestAllListings()),
  updateFilter: (filter, value) => dispatch(updateFilter(filter, value)),
  clearFilters: () => dispatch(clearFilters()),
  updateFilteredListings: (filteredListings) => dispatch(updateFilteredListings(filteredListings)),
  receiveGeolocation: (loc) => dispatch(receiveGeolocation(loc))
});

export default connect(mapStateToProps, mapDispatchToProps)(Discover);