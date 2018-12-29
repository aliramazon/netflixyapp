import React from 'react';
import { Route } from 'react-router-dom';
import StyledMovieContainer from '../styled/StyledMovieContainer';
import MoviesContainer from '../containers/MoviesContainer';
import MovieDetails from './MovieDetails';

const App = () => {
    return (
        <StyledMovieContainer>
            <Route exact path="/" component={MoviesContainer}/>
            <Route exact path="/movies/:id" component={MovieDetails}/>
        </StyledMovieContainer>
    );
}

export default App;