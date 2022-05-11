import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import authReducer from './auth/authreducer';

import userReducer from './user/userreducer';

import shipmentReducer from './shipment/shipmentreducer';
import contactReducer from "./contact/contactreducers";

import storageReducer from "./storage/allstorage/allstoragereducers";
import singleStorageReducer from "./storage/singlestorage/singlestoragereducers";
import productQuotationReducer from "./productquotation/productquotationreducers";
import enquiriesReducer from "./enquiries/enquiriesreducers";

const config = {
	key: 'root',
	storage,
	whitelist: [
		"auth", 
		"user", 
		"contact", 
		"shipment", 
		"singleshipment", 
		"storage", 
		"singleStorage", 
		"productQuotation", 
		"enquiries"
	],
};

const rootReducer = combineReducers({
	auth: authReducer,
	user: userReducer,

	contact: contactReducer,

	shipment: shipmentReducer,

	storage: storageReducer,
	singleStorage: singleStorageReducer,

	productQuotation: productQuotationReducer,

	enquiries: enquiriesReducer

});

const persistedReducer = persistReducer(config, rootReducer);

export default persistedReducer;