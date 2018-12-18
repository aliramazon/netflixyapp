import React from 'react';
import StyledHeader from '../styled/StyledHeader';
import StyledHeaderTitle from '../styled/StyledHeaderTitle';
import FontAwesomeIcon from './FontAwesomeIcon';

const Movies = () => {
    return (
        <StyledHeader>
            <FontAwesomeIcon icon="bars" text="help" />
            <StyledHeaderTitle>
                The Movie Recommeder
            </StyledHeaderTitle>
            <FontAwesomeIcon icon="search" />
        </StyledHeader>
    );
};

export default Movies;