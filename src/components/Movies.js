import React, { Fragment } from 'react';
import StyledHeader from '../styled/StyledHeader';
import StyledHeaderTitle from '../styled/StyledHeaderTitle';
import FontAwesomeIcon from './FontAwesomeIcon';
import StyledHorizontalScroll from '../styled/StyledHorizontalScroll';
import { movies } from '../staticData';

const Movies = () => {
    return (
        <Fragment>
            <StyledHeader>
                <FontAwesomeIcon icon="bars" text="help" />
                <StyledHeaderTitle>
                    The Movie Recommeder
                </StyledHeaderTitle>
                <FontAwesomeIcon icon="search" />
            </StyledHeader>
            <StyledHorizontalScroll>
                {movies.map(movie => (
                    <div
                        style={{
                            border: '1px solid red',
                            margin: '1rem'
                        }}
                        key={movie.id}
                    >
                        {movie.name}
                    </div>
                ))}
            </StyledHorizontalScroll>
        </Fragment>
    );
};

export default Movies;