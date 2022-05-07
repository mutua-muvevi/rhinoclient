import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';


import { persistStore } from 'redux-persist';

import persistedReducer from './rootreducer';

const middlewares = [logger, thunk];

export const store = createStore(
	persistedReducer,
	applyMiddleware(...middlewares)
);

export const persistor = persistStore(store);