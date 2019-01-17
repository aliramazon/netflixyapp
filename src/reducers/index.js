import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { combineReducers } from 'redux';
import movies from './movies';
import selectedMovies from './selectedMovies';
import isLoading from './isLoading';

const rootReducer = combineReducers({
    movies,
    selectedMovies,
    isLoading
});

const persistConfig = {
    key: 'netflixy',
    storage
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export default persistedReducer;

