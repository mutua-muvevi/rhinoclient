import allStorageTypes from './allstoragetypes';

const initialState = {
	storage: [],
	isLoading: true,
	errMessage: undefined,
};

const storageReducer = (state = initialState, { type, payload }) => {
	switch (type) {
		case allStorageTypes.START:
			return { 
				...state, 
				isLoading: true 
			};
		case allStorageTypes.SUCCESS:
			return {
				...state,
				isLoading: false,
				storage: payload,
			};
		case allStorageTypes.FAIL:
			return {
				...state,
				isLoading: false,
				errMessage: payload,
			};
		default:
			return state;
	}
};

export default storageReducer;