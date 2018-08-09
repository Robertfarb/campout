import { connect } from 'react-redux';

const mapStateToProps = ({ errors }) => ({
  errors: errors.session,
  formType: 'signup'
});

const mapDispatchToProps = dispatch => {
  return {
    processForm: (user) => dispatch(signup(user)),
    closeModal: () => dispatch(closeModal()),
    openModal: (modalType) => dispatch(openModal(modalType))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignupForm);