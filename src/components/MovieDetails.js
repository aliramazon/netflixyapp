import React from 'react';
import StyledHeader from '../styled/StyledHeader';
import StyledHeaderLink from '../styled/StyledHeaderLink';
import FontAwesomeIcon from './FontAwesomeIcon';

const MovieDetails = (props) => {
    
    return (
        <StyledHeader>
            <StyledHeaderLink href="/">
                <FontAwesomeIcon icon="chevron-left" text="Go back" />
            </StyledHeaderLink>
        </StyledHeader>
    );
};


export default MovieDetails;
