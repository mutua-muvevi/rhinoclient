import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import tourReducer from './tour/tour.reducer';
import shipmentReducer from './shipment/shipmentreducer';
import authReducer from './auth/auth.reducer';
import userReducer from './users/users.reducer';

const config = {
	key: 'root',
	storage,
	whitelist: ['auth', 'tours'],
};

const rootReducer = combineReducers({
	shipment: shipmentReducer,
	tour: tourReducer,
	auth: authReducer,
	user: userReducer,
});

const persistedReducer = persistReducer(config, rootReducer);

export default persistedReducer;