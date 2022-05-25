import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import authReducer from './auth/authreducer';

import userReducer from './user/userreducer';

import shipmentReducer from './shipment/shipmentreducer';
import storageReducer from "./storage/storagereducer";

import contactReducer from "./contact/contactreducers";
import storageQuotationReducer from "./quotation/quotationreducers";
import emailReducer from "./email/emailreducer";


const config = {
	key: 'root',
	storage,
	whitelist: [
		"auth", 
		"user", 
		"shipment", 
		"storage", 
		"quotation",
		"contact",
	],
};

const rootReducer = combineReducers({
	auth: authReducer,
	user: userReducer,

	storage: storageReducer,
	shipment: shipmentReducer,
	
	email: emailReducer,
	quotation: storageQuotationReducer,

	contact: contactReducer,

});

const persistedReducer = persistReducer(config, rootReducer);

export default persistedReducer;