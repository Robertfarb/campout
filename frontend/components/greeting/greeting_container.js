import React from 'react';
import { connect } from 'react-redux';
import Greeting from './greeting';
import { openModal } from '../../actions/modal_actions'

const mapStateToProps = ({session, entities: { users }}) => ({
  currentUser: users[session.id]
});

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout()),
  openModal: () => dispatch(openModal())
});

export default connect(mapStateToProps, mapDispatchToProps)(Greeting);