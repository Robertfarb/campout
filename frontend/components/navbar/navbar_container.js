import React from 'react';
import { connect } from 'react-redux';
import Navbar from './nav_bar';
import { openModal } from '../../actions/modal_actions';
import { logout } from '../../actions/session_actions';

const mapStateToProps = ({session, entities: { users }}) => ({
  currentUser: users[session.id]
});

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout()),
  openModal: (type) => dispatch(openModal(type))
});

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);