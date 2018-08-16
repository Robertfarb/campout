import { connect } from 'react-redux';
import Filter from './filter';

const mapStateToProps = state => ({
  filters: state.ui.filters
});

const mapDispatchToProps = dispatch => ({
  receiveFilter: (filter) => dispatch(receiveFilter(filter)),
  removeFilter: () => dispatch(removeFilter()),
  receivePriceFilter: (price) => dispatch(receivePriceFilter(price)),
  removePriceFilter: () => dispatch(removePriceFilter()),
  clearFilters: () => dispatch(clearFilters())
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);