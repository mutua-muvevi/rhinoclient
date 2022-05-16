import userTypes from './usertypes';

const initialState = {
	loading: false,
	user: null,
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
			};
		case userTypes.FAIL_FETCH_USER:
			return {
				...state,
				loading: false,
				errMessage: payload,
				authenticated: false,
				user: null
			};
		default:
			return state;
	}
};

export default userReducer;