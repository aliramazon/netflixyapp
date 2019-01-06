import React from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import Movies from '../components/Movies';
import { getMovies } from '../actions/movieActions';
import { GET_MOVIES } from '../constants/labels';

const MoviesContainer = props => <Movies {...props} />;

const mapStateToProps = state => ({
    movies: _.shuffle(_.values(state.movies)),
    loading: state.isLoading[GET_MOVIES]
});

const mapDispatchToProps = dispatch => ({
    getMovies: () => dispatch(getMovies())
})

export default connect(
    mapStateToProps, 
    mapDispatchToProps
)(MoviesContainer);