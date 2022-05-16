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
		case authTypes.START_REGISTER_USER:
			return { 
				...state, 
				isLoading: true,
				isAuthenticated: false,
			};
		case authTypes.SUCCESS_REGISTER_USER:
			return {
				...state,
				isLoading: false,
				token: payload,
				isAuthenticated: true,
				errMessage: undefined
			};
		case authTypes.FAIL_REGISTER_USER:
			return {
				...state,
				isLoading: false,
				errMessage: payload,
				isAuthenticated: false
			};
		

		case authTypes.START_LOGIN_USER:
			return { 
				...state, 
				isLoading: true,
				isAuthenticated: false,
			};
		case authTypes.SUCCESS_LOGIN_USER:
			return {
				...state,
				isLoading: false,
				token: payload,
				isAuthenticated: true,
				errMessage: undefined
			};
		case authTypes.FAIL_LOGIN_USER:
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
			return {
				...state,
				isLoading: false,
				isAuthenticated: true,
				data: payload,
				errMessage: undefined
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