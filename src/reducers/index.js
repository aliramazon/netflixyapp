import { combineReducers } from 'redux';
import movies from './movies';
import selectedMovies from './selectedMovies';
import isLoading from './isLoading';

export default combineReducers({
    movies,
    selectedMovies,
    isLoading
});