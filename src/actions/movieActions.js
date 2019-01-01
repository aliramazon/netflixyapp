import { createAction } from 'redux-actions';
import { apiPayloadCreator } from '../utils/appUtils';
import { API } from '../constants/actionTypes';

const getMoviesAC = createAction(API, apiPayloadCreator);

export const getMovies = () => getMoviesAC({ url: '/vcvx0', onSuccess: setMovies });

const setMovies = (movies) => {
    console.log(movies);
    return { type: ''};
};