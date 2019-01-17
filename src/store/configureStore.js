import { createStore, applyMiddleware,compose} from 'redux';
import { persistStore } from 'redux-persist';
import logger from 'redux-logger';
import api from '../middleware/api';
import toastMiddleware from '../middleware/toasts';
import rootReducer from '../reducers';
import DevTools from '../containers/DevTools';

const configureStore = initialState => {
    const store = createStore(
        rootReducer, 
        initialState,
        compose(
            applyMiddleware(api, toastMiddleware, logger),
            DevTools.instrument()
        )
    );

    if (module.hot) {
        module.hot.accept('../reducers', () => {
            store.replaceReducer(rootReducer);
        })
    }

    const persiststore = persistStore(store);


    return { store, persiststore };
}

export default configureStore;
