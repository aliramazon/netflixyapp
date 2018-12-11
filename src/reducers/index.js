import { combineReducers } from 'redux';
import movies from './movies';
import selectedMovies from './selectedMovies';

export default combineReducers({
    movies,
    selectedMovies
});