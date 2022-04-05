import userCollectionTypes from './usertypes';

const initialState = {
  currentUser: null,
  isLoading: true,
  errMessage: undefined,
};

const userReducer = (state = initialState, { type, payload }) => {
	switch (type) {
		case userCollectionTypes.START_USER:
			return { 
				...state,
				isLoading: true 
			};
		case userCollectionTypes.SUCCESS_USER:
			return {
				...state,
				isLoading: false,
				currentUser: payload,
			};
		case userCollectionTypes.FAIL_USER:
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