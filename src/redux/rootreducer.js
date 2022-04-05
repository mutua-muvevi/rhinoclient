import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import shipmentReducer from './shipment/allshipment/shipmentreducer';
import authReducer from './auth/authreducer';
import userReducer from './user/userreducer';
import contactReducer from "./contact/contactreducers";
import singleShipmentReducer from "./shipment/singleshipment/singleshipmentreducer";
import storageReducer from "./storage/allstorage/allstoragereducers";
import singleStorageReducer from "./storage/singlestorage/singlestoragereducers";
import productQuotationReducer from "./productquotation/productquotationreducers";
import enquiriesReducer from "./enquiries/enquiriesreducers";

const config = {
	key: 'root',
	storage,
	// whitelist: [],
};

const rootReducer = combineReducers({
	auth: authReducer,
	user: userReducer,

	contact: contactReducer,

	shipment: shipmentReducer,
	singleshipment: singleShipmentReducer,

	storage: storageReducer,
	singleStorage: singleStorageReducer,

	productQuotation: productQuotationReducer,

	enquiries: enquiriesReducer

});

const persistedReducer = persistReducer(config, rootReducer);

export default persistedReducer;