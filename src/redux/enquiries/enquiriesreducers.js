import enquiriesTypes from './enquiriestypes';

const initialState = {
	quotation: [],
	isLoading: true,
	errMessage: undefined,
};

const enquiriesReducer = (state = initialState, { type, payload }) => {
	switch (type) {
		case enquiriesTypes.START:
			return { 
				...state, 
				isLoading: true 
			};
		case enquiriesTypes.SUCCESS:
			return {
				...state,
				isLoading: false,
				quotation: payload,
			};
		case enquiriesTypes.FAIL:
			return {
				...state,
				isLoading: false,
				errMessage: payload,
			};
		default:
			return state;
	}
};

export default enquiriesReducer;