import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import authReducer from './auth/authreducer';

import userReducer from './user/userreducer';

import shipmentReducer from './shipment/shipmentreducer';
import storageReducer from "./storage/storagereducer";

import contactReducer from "./contact/contactreducers";
import productQuotationReducer from "./productquotation/productquotationreducers";
import enquiriesReducer from "./enquiries/enquiriesreducers";
import storageQuotationReducer from "./storagequotation/storagequotationreducers";

const config = {
	key: 'root',
	storage,
	whitelist: [
		"auth", 
		"user", 
		"shipment", 
		"storage", 
		"contact",
		"productQuotation", 
		"enquiries"
	],
};

const rootReducer = combineReducers({
	auth: authReducer,
	user: userReducer,

	storage: storageReducer,
	shipment: shipmentReducer,

	storagequotation: storageQuotationReducer,

	contact: contactReducer,
	productQuotation: productQuotationReducer,

	enquiries: enquiriesReducer

});

const persistedReducer = persistReducer(config, rootReducer);

export default persistedReducer;