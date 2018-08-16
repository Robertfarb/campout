import { connect } from 'react-redux';
import Filter from './filter';
import {  receiveFilter, removeFilter,
          receivePriceFilter, removePriceFilter,
          clearFilters, receiveCapacityFilter, 
          removeCapacityFilter} from '../../actions/filter_actions';

const mapStateToProps = state => ({
  filters: state.ui.filters
});

const mapDispatchToProps = dispatch => ({
  receiveFilter: (filter) => dispatch(receiveFilter(filter)),
  removeFilter: () => dispatch(removeFilter()),
  receivePriceFilter: (price) => dispatch(receivePriceFilter(price)),
  removePriceFilter: () => dispatch(removePriceFilter()),
  clearFilters: () => dispatch(clearFilters()),
  receiveCapacityFilter: (cap) => dispatch(receiveCapacityFilter(cap)),
  removeCapacityFilter: () => dispatch(removeCapacityFilter())
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);