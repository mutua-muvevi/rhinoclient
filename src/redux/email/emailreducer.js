import emailTypes from './emailtypes';

const initialState = {
	emails: [],
    email: {},
	isLoading: true,
	errMessage: undefined,
};

const emailReducer = (state = initialState, { type, payload }) => {
	switch (type) {
		case emailTypes.SENDING_EMAIL_START:
			return { 
				...state, 
				isLoading: true,
				errMessage: undefined,
			};
		case emailTypes.SENDING_EMAIL_SUCCESS:
			return {
				...state,
				isLoading: false,
				products: payload,
				errMessage: undefined,
			};
		case emailTypes.SENDING_EMAIL_FAIL:
			return {
				...state,
				isLoading: false,
				errMessage: payload,
			};


            
		case emailTypes.GET_ALL_EMAILSL_START:
			return { 
				...state, 
				isLoading: true,
				errMessage: undefined,
			};
		case emailTypes.GET_ALL_EMAILS_SUCCESS:
			return {
				...state,
				isLoading: false,
				products: payload,
				errMessage: undefined,
			};
		case emailTypes.GET_ALL_EMAILS_FAIL:
			return {
				...state,
				isLoading: false,
				errMessage: payload,
			};


		default:
			return state;
	}
};

export default emailReducer;