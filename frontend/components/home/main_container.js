import { connect } from 'react-redux';
import MainPage from './main';
import { requestAllListings } from '../../actions/listings_actions';
import { clearFilters } from '../../actions/filter_actions';
import { receiveFilter, receivePriceFilter } from '../../actions/filter_actions';
import { receiveGeolocation } from '../../actions/location_filter_actions';

const mapStateToProps = (state, errors) => ({
  errors: errors.session,
  formType: 'signup',
  listings: state.entities.listings
});

const mapDispatchToProps = dispatch => {
  return {
    processForm: (user) => dispatch(signup(user)),
    closeModal: () => dispatch(closeModal()),
    openModal: (modalType) => dispatch(openModal(modalType)),
    requestAllListings: (bounds) => dispatch(requestAllListings(bounds)),
    clearFilters: () => dispatch(clearFilters),
    receiveFilter: (filter) => dispatch(receiveFilter(filter)),
    receivePriceFilter: (price) => dispatch(receivePriceFilter(price)),
    receiveGeolocation: (loc) => dispatch(receiveGeolocation)
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MainPage);