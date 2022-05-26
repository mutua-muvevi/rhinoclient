import quotationTypes from './quotationtypes';

const initialState = {
	isLoading: false,
	quotation: null,
	errMessage: undefined,
	quotationError: undefined
};

const quotationReducer = (state = initialState, { type, payload }) => {
	switch (type) {
		case quotationTypes.GET_ALL_QUOTATION_START:
			return { 
				...state, 
				isLoading: true,
				quotation: null,
				errMessage: undefined,
				quotationError: undefined
			};
		case quotationTypes.GET_ALL_QUOTATION_SUCCESS:
			return {
				...state,
				isLoading: false,
				quotation: payload,
				errMessage: undefined,
				quotationError: undefined
			};
		case quotationTypes.GET_ALL_QUOTATION_FAIL:
			return {
				...state,
				isLoading: false,
				quotation: null,
				errMessage: payload,
				quotationError: undefined
			};


		case quotationTypes.POST_QUOTATION_START:
			return { 
				...state, 
				isLoading: true,
				quotation: null,
				errMessage: undefined,
				quotationError: undefined
			};
		case quotationTypes.POST_QUOTATION_SUCCESS:
			return {
				...state,
				isLoading: false,
				quotation: payload,
				errMessage: undefined,
				quotationError: undefined
			};
		case quotationTypes.POST_QUOTATION_FAIL:
			return {
				...state,
				isLoading: false,
				quotation: null,
				errMessage: undefined,
				quotationError: payload
			};

			
		default:
			return state;
	}
};

export default quotationReducer;