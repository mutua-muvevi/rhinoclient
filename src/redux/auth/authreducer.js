import authTypes from './authtypes';

const initialState = {
	token: null,
	data: null,
	isLoading: false,
	isAuthenticated: false,
	errMessage: undefined,
};

const authReducer = (state = initialState, { type, payload }) => {
	switch (type) {
		case authTypes.START_LOADING_USER:
			return { 
				...state, 
				isLoading: true,
				isAuthenticated: false,
			};
		case authTypes.SUCCESS_CURRENT_USER:
			return {
				...state,
				isLoading: false,
				token: payload,
				isAuthenticated: true
			};
		case authTypes.FAIL_CURRENT_USER:
			return {
				...state,
				isLoading: false,
				errMessage: payload,
				isAuthenticated: false
			};
		
		case authTypes.START_FORGOT_PASSWORD:
			return {
				...state,
				isLoading: true,
				isAuthenticated: false,
			}

		case authTypes.SUCCESS_FORGOT_PASSWORD: 
			console.log("FORGOT PASSWORD REDUCER", payload)
			return {
				...state,
				isLoading: false,
				isAuthenticated: true,
				data: payload,
			}

		case authTypes.FAIL_FORGOT_PASSWORD: 
			return {
				...state,
				isLoading: false,
				isAuthenticated: false,
				errMessage: payload,
			}

		default:
			return state;
	}
};

export default authReducer;