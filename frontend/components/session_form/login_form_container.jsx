import { connect } from 'react-redux';
import React from 'react';
import { login, clearErrors} from '../../actions/session_actions'
import { openModal, closeModal } from '../../actions/modal_actions'
import SessionForm from './session_form';

const mapStateToProps = ({ errors }) => ({
  errors: errors.session,
  formType: 'login'
});

const mapDispatchToProps = dispatch => {
  return {
    processForm: (user) => dispatch(login(user)),
    closeModal: () => dispatch(closeModal()),
    clearErrors: () => dispatch(clearErrors()),
    openModal: (modalType) => dispatch(openModal(modalType)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);