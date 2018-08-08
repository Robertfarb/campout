import { connect } from 'react-redux';
import React from 'react';
import { signup } from '../../actions/session_actions'
import { openModal, closeModal } from '../../actions/modal_actions'
import SignupForm from './signup_form';


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