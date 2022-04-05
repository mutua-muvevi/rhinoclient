import singleStorageTypes from './singlestoragetypes';

const initialState = {
	storage: null,
	isLoading: true,
	errMessage: undefined,
};

const singleStorageReducer = (state = initialState, { type, payload }) => {
	switch (type) {
		case singleStorageTypes.START:
			return { 
				...state, 
				isLoading: true 
			};
		case singleStorageTypes.SUCCESS:
			return {
				...state,
				isLoading: false,
				storage: payload,
			};
		case singleStorageTypes.FAIL:
			return {
				...state,
				isLoading: false,
				errMessage: payload,
			};
		default:
			return state;
	}
};

export default singleStorageReducer;