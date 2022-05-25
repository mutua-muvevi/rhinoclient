import quotationTypes from './quotationtypes';

const initialState = {
	isLoading: true,
	quotation: [],
	errMessage: undefined,
};

const quotationReducer = (state = initialState, { type, payload }) => {
	switch (type) {
		case quotationTypes.GET_ALL_QUOTATION_START:
			return { 
				...state, 
				isLoading: true,
				errMessage: undefined,
			};
		case quotationTypes.GET_ALL_QUOTATION_SUCCESS:
			return {
				...state,
				isLoading: false,
				quotation: payload,
				errMessage: undefined,
			};
		case quotationTypes.GET_ALL_QUOTATION_FAIL:
			return {
				...state,
				isLoading: false,
				errMessage: payload,
			};


		case quotationTypes.POST_QUOTATION_START:
			return { 
				...state, 
				isLoading: true,
				errMessage: undefined,
			};
		case quotationTypes.POST_QUOTATION_SUCCESS:
			return {
				...state,
				isLoading: false,
				quotation: payload,
				errMessage: undefined,
			};
		case quotationTypes.POST_QUOTATION_FAIL:
			return {
				...state,
				isLoading: false,
				errMessage: payload,
			};

			
		default:
			return state;
	}
};

export default quotationReducer;