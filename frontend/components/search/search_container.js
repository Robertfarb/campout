import { connect } from 'react-redux';
import Search from './search';
import { updateFilter } from '../../actions/location_filter_actions';
import { clearFilters, updateFilterValue } from '../../actions/filter_actions';
import { receiveGeolocation } from '../../actions/location_filter_actions'


const mapStateToProps = state => ({
    listings: state.entities.listings,
    filters: state.ui.filters
});

const mapDispatchToProps = dispatch => ({
  requestListing: (id) => dispatch(requestListing(id)),
  requestAllListings: () => dispatch(requestAllListings()),
  updateFilter: (filter, value) => dispatch(updateFilter(filter, value)),
  clearFilters: () => dispatch(clearFilters()),
  updateFilteredListings: (filteredListings) => dispatch(updateFilteredListings(filteredListings)),
  receiveGeolocation: (loc) => dispatch(receiveGeolocation(loc))
});

export default connect(mapStateToProps, mapDispatchToProps)(Search);