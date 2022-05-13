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
				loading: true 
			};
		case userTypes.SUCCESS_FETCH_USER:
			return {
				...state,
				loading: false,
				authenticated: true,
				user: payload,
			};
		case userTypes.FAIL_FETCH_USER:
			return {
				...state,
				loading: false,
				errMessage: payload,
			};
		default:
			return state;
	}
};

export default userReducer;