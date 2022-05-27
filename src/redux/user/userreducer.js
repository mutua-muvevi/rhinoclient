import userTypes from './usertypes';

const initialState = {
	loading: false,
	user: null,
	users: null,
	admin: null,
	errMessage: undefined,
	authenticated: false
};

const userReducer = (state = initialState, { type, payload }) => {
	switch (type) {
		case userTypes.START_FETCH_USER:
			return { 
				...state,
				loading: true,
				errMessage: undefined,
				authenticated: false
			};
		case userTypes.SUCCESS_FETCH_USER:
			return {
				...state,
				loading: false,
				authenticated: true,
				errMessage: undefined,
				user: payload
			};
		case userTypes.FAIL_FETCH_USER:
			return {
				...state,
				loading: false,
				errMessage: payload,
				authenticated: false,
				user: null
			};

			
		case userTypes.START_FETCH_USERS:
			return { 
				...state,
				loading: true,
				errMessage: undefined,
				authenticated: false
			};
		case userTypes.SUCCESS_FETCH_USERS:
			return {
				...state,
				loading: false,
				authenticated: true,
				errMessage: undefined,
				users: payload,
			};
		case userTypes.FAIL_FETCH_USERS:
			return {
				...state,
				loading: false,
				errMessage: payload,
				authenticated: false,
				users: null,
			};


			
		case userTypes.START_FETCH_ADMIN:
			return { 
				...state,
				loading: true,
				errMessage: undefined,
				authenticated: false
			};
		case userTypes.SUCCESS_FETCH_ADMIN:
			return {
				...state,
				loading: false,
				authenticated: true,
				errMessage: undefined,
				admin: payload,
			};
		case userTypes.FAIL_FETCH_ADMIN:
			return {
				...state,
				loading: false,
				errMessage: payload,
				authenticated: false,
				admin: null,
			};


		default:
			return state;
	}
};

export default userReducer;