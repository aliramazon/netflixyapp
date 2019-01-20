import React from 'react';
import { connect } from 'react-redux';
import MovieDetails from '../components/MovieDetails';
import { selectMovie } from '../actions/movieActions';


const MovieDetailsContainer = props => <MovieDetails {...props} />

const mapStateToProps = state => ({
    selectedMovie: state.movies[state.selectedMovie]
});

const mapDispatchToProps = dispatch => ({
    selectMovie: (movieId) => dispatch(selectMovie(movieId))
});

export default connect(mapStateToProps, mapDispatchToProps)(MovieDetailsContainer);