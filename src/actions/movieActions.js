import { createAction } from 'redux-actions';
import { normalize, schema } from 'normalizr';
import { apiPayloadCreator } from '../utils/appUtils';
import { API, SET_MOVIES } from '../constants/actionTypes';

const getMoviesAC = createAction(API, apiPayloadCreator);

const setMovies = (movies) => {
    const movieSchema = new schema.Entity('movies');
    const movieListSchema = new schema.Array(movieSchema);
    const normalizedData = normalize(movies, movieListSchema);    

    return {
        type: SET_MOVIES,
        payload: normalizedData.entities.movies
    };
};

export const getMovies = () => getMoviesAC({ url: '/vcvx0', onSuccess: setMovies });

