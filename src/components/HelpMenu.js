import React from 'react';
import FontAwesomeIcon from './FontAwesomeIcon';
import { helpMsg } from '../constants/toasts';

const HelpMenu = ({ showToast }) => (
    <FontAwesomeIcon 
        icon='bars'
        text='help'
        onClick={showToast.bind(null, 'success', helpMsg)}
    />
);



export default HelpMenu;