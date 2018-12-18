import React from 'react';
import { Route } from 'react-router-dom';
import StyledMovieContainer from '../styled/StyledMovieContainer';
import Movies from './Movies';
import MovieDetails from './MovieDetails';

const App = () => {
    return (
        <StyledMovieContainer>
            <Route exact path="/" component={Movies}/>
            <Route exact path="/movies/:id" component={MovieDetails}/>
        </StyledMovieContainer>
    );
}

export default App;