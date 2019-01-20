import React, { Component, Fragment } from 'react';
import ReactStars from 'react-stars';
import styled from 'styled-components';
import StyledHeader from '../styled/StyledHeader';
import StyledHeaderLink from '../styled/StyledHeaderLink';
import FontAwesomeIcon from './FontAwesomeIcon';
import StyledPoster from '../styled/StyledPoster';
import StyledMovieTitle from '../styled/StyledMovieTitle';
import StyledMovieLengthYear from '../styled/StyledMovieLengthYear';
import { devices } from '../utils/styledUtils';

const StyledMovieDetails = styled.div`
    display: flex;
    flex-direction: column;

    ${devices.md`
        position: relative;
        flex-direction: row;
    `}

`;


const StyledMovieInfo = styled.div`
    padding: 2rem 0 1rem 0;

    ${devices.md`
        margin-left: 13rem;
    `}
`;

const StyledMovieDescription = styled.div`
    margin-top: 3rem;
    margin-bottom: 1rem;
    font-size: 1.4rem;
    line-height: 1.5;
    color: rgba(255, 255, 255, .5);
`;

const StyledSmallBtn = styled.a`
    display: inline-block;
    background: ${props => props.theme.colorPink};
    border: none;
    border-radius: .5rem;
    color: ${props => props.theme.colorWhite};
    margin: 2rem 0 1.5rem 0;
    padding: 1rem 3rem;
    text-transform: uppercase;
    z-index: 10;
    outline: none !important;
    transition: all .5s;


    &:hover {
       cursor: pointer;
       background: ${props => props.theme.colorRed};
    };
`;


class MovieDetails extends Component {

    static defaultProps = {
        selectedMovie: {
            name: "",
            poster: "",
            year: "",
            duration: "",
            trailer: "",
            details: "",
            id: "0"
        }
    }

    componentDidMount() {
        const movieId = +this.props.match.params.id;
        this.props.selectMovie(movieId);
    }


    render() {
      const { poster, name, duration, details, year } = this.props.selectedMovie;

      return (
        <Fragment>
            <StyledHeader>
                <StyledHeaderLink href="/">
                    <FontAwesomeIcon icon="chevron-left" text="Go back" />
                </StyledHeaderLink>
            </StyledHeader>
            <StyledMovieDetails>
                <StyledPoster src={poster} alt={`Movie: ${name}`} isExpanded />
                <StyledMovieInfo>
                    <StyledMovieTitle isLarge>{name}</StyledMovieTitle>
                    <StyledMovieLengthYear>
                        {`${duration} ${year}`}
                    </StyledMovieLengthYear>
                    <StyledMovieDescription>
                        {details}
                    </StyledMovieDescription>
                    <StyledSmallBtn>watch trailer</StyledSmallBtn>
                    <ReactStars count={5} size={24} color2={"#ffd700"}/>
                </StyledMovieInfo>
            </StyledMovieDetails>
        </Fragment>
      );
    }
}


export default MovieDetails;
