import React from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import Movies from '../components/Movies';
import { getMovies } from '../actions/movieActions';

const MoviesContainer = props => <Movies {...props} />;

const mapStateToProps = state => ({
    movies: _.values(state.movies)
});

const mapDispatchToProps = dispatch => ({
    getMovies: () => dispatch(getMovies())
})

export default connect(
    mapStateToProps, 
    mapDispatchToProps
)(MoviesContainer);