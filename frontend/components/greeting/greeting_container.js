import React from 'react';
import { connect } from 'react-redux';
import Greeting from './greeting';

const mapStateToProps = (state, entities: { users }) => ({
  currentUser: users[session.id]
});

const mapDispatchToProps = dispatch => ({
  logout: () => (logout())
});

export default connect(mapStateToProps, mapDispatchToProps)(Greeting);