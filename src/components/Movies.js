import React, { Fragment } from 'react';
import StyledHeader from '../styled/StyledHeader';
import StyledHeaderTitle from '../styled/StyledHeaderTitle';
import FontAwesomeIcon from './FontAwesomeIcon';
import StyledHorizontalScroll from '../styled/StyledHorizontalScroll';
import { movies } from '../staticData';
import Movie from './Movie';

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
                    <Movie
                        key={movie.id}
                        name={movie.name}
                        poster={movie.poster}
                        duration={movie.duration}
                        year={movie.year}
                    />
                ))}
            </StyledHorizontalScroll>
        </Fragment>
    );
};

export default Movies;