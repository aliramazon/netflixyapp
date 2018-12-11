import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import api from '../middleware/api';
import rootReducer from '../reducers';
import DevTools from '../containers/DevTools';

const configureStore = initialState => {
    const store = createStore(
        rootReducer, 
        initialState,
        compose(
            applyMiddleware(logger, api),
            DevTools.instrument()
        )
    );

    if (module.hot) {
        module.hot.accept('../reducers', () => {
            store.replaceReducer(rootReducer);
        })
    }

    return store;
}

export default configureStore;
