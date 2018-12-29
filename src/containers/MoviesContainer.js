import React from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import Movies from '../components/Movies';

const MoviesContainer = props => <Movies {...props} />;

const mapStateToProps = state => ({
    movies: _.values(state.movies)
})

export default connect(
    mapStateToProps, 
    null
)(MoviesContainer);