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
				user: null,
				users: null,
				admin: null,
				errMessage: undefined,
				authenticated: false
			};
		case userTypes.SUCCESS_FETCH_USER:
			return {
				...state,
				loading: false,
				authenticated: true,
				errMessage: undefined,
				user: payload,
				users: null,
				admin: null,
			};
		case userTypes.FAIL_FETCH_USER:
			return {
				...state,
				loading: false,
				errMessage: payload,
				authenticated: false,
				user: null,
				users: null,
				admin: null,
			};

			
		case userTypes.START_FETCH_USERS:
			return { 
				...state,
				loading: true,
				user: null,
				users: null,
				admin: null,
				errMessage: undefined,
				authenticated: false
			};
		case userTypes.SUCCESS_FETCH_USERS:
			return {
				...state,
				loading: false,
				authenticated: true,
				errMessage: undefined,
				user: null,
				users: payload,
				admin: null,
			};
		case userTypes.FAIL_FETCH_USERS:
			return {
				...state,
				loading: false,
				errMessage: payload,
				authenticated: false,
				user: null,
				users: null,
				admin: null,
			};


			
		case userTypes.START_FETCH_ADMIN:
			return { 
				...state,
				loading: true,
				user: null,
				users: null,
				admin: null,
				errMessage: undefined,
				authenticated: false
			};
		case userTypes.SUCCESS_FETCH_ADMIN:
			return {
				...state,
				loading: false,
				authenticated: true,
				errMessage: undefined,
				user: null,
				users: null,
				admin: payload,
			};
		case userTypes.FAIL_FETCH_ADMIN:
			return {
				...state,
				loading: false,
				errMessage: payload,
				authenticated: false,
				user: null,
				users: null,
				admin: null,
			};


		default:
			return state;
	}
};

export default userReducer;