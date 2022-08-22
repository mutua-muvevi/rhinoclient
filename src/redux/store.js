import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';

import { persistStore } from 'redux-persist';

import persistedReducer from './rootreducer';

const middlewares = [ thunk];

if (process.env.NODE_ENV === `development`) {
	const { logger } = require(`redux-logger`);
	middlewares.push(logger);
}

export const store = createStore(
	persistedReducer,
	applyMiddleware(...middlewares)
);

export const persistor = persistStore(store);