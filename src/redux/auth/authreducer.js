import authUserTypes from './authtypes';

const initialState = {
  token: null,
  isLoading: true,
  errMessage: undefined,
};

const authReducer = (state = initialState, { type, payload }) => {
	switch (type) {
		case authUserTypes.START_LOADING_USER:
			return { 
				...state, 
				isLoading: true 
			};
		case authUserTypes.SUCCESS_CURRENT_USER:
			return {
				...state,
				isLoading: false,
				token: payload,
			};
		case authUserTypes.FAIL_CURRENT_USER:
			return {
				...state,
				isLoading: false,
				errMessage: payload,
			};
		default:
			return state;
	}
};

export default authReducer;