import React from 'react';
import { connect } from 'react-redux';
import HelpMenu from '../components/HelpMenu';
import { showToast } from '../actions/toastActions';

const HelpMenuContainer = props => <HelpMenu {...props} />

const mapDispatchToProps = dispatch => ({
    showToast: (type, message) => dispatch(showToast(type, message))
})

export default connect(undefined, mapDispatchToProps)(HelpMenuContainer);