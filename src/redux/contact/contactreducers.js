import contactTypes from './contacttypes';

const initialState = {
	contact: [],
	isLoading: true,
	errMessage: undefined,
};

const contactReducer = (state = initialState, { type, payload }) => {
	switch (type) {
		case contactTypes.SENDING_START:
			return { 
				...state, 
				isLoading: true,
				errMessage: undefined,
			};
		case contactTypes.SENDING_SUCCESS:
			return {
				...state,
				isLoading: false,
				products: payload,
				errMessage: undefined,
			};
		case contactTypes.SENDING_FAIL:
			return {
				...state,
				isLoading: false,
				errMessage: payload,
			};
		default:
			return state;
	}
};

export default contactReducer;