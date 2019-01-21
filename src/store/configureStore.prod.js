import { createStore, applyMiddleware } from 'redux';
import { persistStore } from 'redux-persist';
import api from '../middleware/api';
import toastMiddleware from '../middleware/toasts';
import rootReducer from '../reducers';

const configureStore = initialState => {
    const store = createStore(
        rootReducer, 
        initialState,
        applyMiddleware(api, toastMiddleware)
    );

    
    const persiststore = persistStore(store);
    return { store, persiststore };
}

export default configureStore;
