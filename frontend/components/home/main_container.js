import { connect } from 'react-redux';
import MainPage from './main';
import { requestAllListings } from '../../actions/listings_actions';

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
    requestAllListings: () => dispatch(requestAllListings())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MainPage);