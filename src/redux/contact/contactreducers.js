import contactTypes from './contacttypes';

const initialState = {
	contact: [],
	isLoading: true,
	errMessage: undefined,
};

const contactReducer = (state = initialState, { type, payload }) => {
	switch (type) {
		case contactTypes.START:
			return { 
				...state, 
				isLoading: true 
			};
		case contactTypes.SUCCESS:
			return {
				...state,
				isLoading: false,
				products: payload,
			};
		case contactTypes.FAIL:
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