import { createStore, applyMiddleware,compose} from 'redux';
import logger from 'redux-logger';
import api from '../middleware/api';
import rootReducer from '../reducers';
// import DevTools from '../containers/DevTools';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const configureStore = initialState => {
    const store = createStore(
        rootReducer, 
        initialState,
        composeEnhancers(
            applyMiddleware(logger, api)
        )
    );

    // if (module.hot) {
    //     module.hot.accept('../reducers', () => {
    //         store.replaceReducer(rootReducer);
    //     })
    // }

    return store;
}

export default configureStore;
