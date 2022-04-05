import authTypes from './authtypes';

const initialState = {
  token: null,
  isLoading: true,
  errMessage: undefined,
};

const authReducer = (state = initialState, { type, payload }) => {
	switch (type) {
		case authTypes.START_LOADING_USER:
			return { 
				...state, 
				isLoading: true 
			};
		case authTypes.SUCCESS_CURRENT_USER:
			return {
				...state,
				isLoading: false,
				token: payload,
			};
		case authTypes.FAIL_CURRENT_USER:
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