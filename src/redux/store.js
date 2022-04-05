import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import { persistStore } from 'redux-persist';
import logger from 'redux-logger';

import persistedReducer from './root-reducer';

const middlewares = [logger, thunk];

export const store = createStore(
	persistedReducer,
	applyMiddleware(...middlewares)
);

export const persistor = persistStore(store);