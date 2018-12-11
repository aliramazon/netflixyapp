import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import api from '../middleware/api';
import rootReducer from '../reducers';

const configureStore = initialState => {
    const store = createStore(
        rootReducer, 
        initialState,
        applyMiddleware(api, logger)
    );

    return store;
}

export default configureStore;
