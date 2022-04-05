import userTypes from './usertypes';

const initialState = {
  user: [],
  isLoading: true,
  errMessage: undefined,
};

const userReducer = (state = initialState, { type, payload }) => {
	switch (type) {
		case userTypes.START_USER:
			return { 
				...state,
				isLoading: true 
			};
		case userTypes.SUCCESS_USER:
			return {
				...state,
				isLoading: false,
				currentUser: payload,
			};
		case userTypes.FAIL_USER:
			return {
				...state,
				isLoading: false,
				errMessage: payload,
			};
		default:
			return state;
	}
};

export default userReducer;