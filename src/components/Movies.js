import React, { Component, Fragment } from 'react';
import StyledFooter from '../styled/StyledFooter';
import StyledHeader from '../styled/StyledHeader';
import StyledHeaderTitle from '../styled/StyledHeaderTitle';
import FontAwesomeIcon from './FontAwesomeIcon';
import StyledHorizontalScroll from '../styled/StyledHorizontalScroll';
import StyledLargeButton from '../styled/StyledLargeButton';
import { movies } from '../staticData';
import Movie from './Movie';


class Movies extends Component {
    render() {
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
                    {this.props.movies.map(movie => (
                        <Movie
                            key={movie.id}
                            name={movie.name}
                            poster={movie.poster}
                            duration={movie.duration}
                            year={movie.year}
                        />
                    ))}
                </StyledHorizontalScroll>
                <StyledFooter>
                    <StyledLargeButton>
                        Get Recommended Movies
                    </StyledLargeButton>
                </StyledFooter>
            </Fragment>
        );
    }
}

export default Movies;