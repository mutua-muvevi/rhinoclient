import storageQuotationTypes from './quotationtypes';

const initialState = {
	isLoading: true,
	quotation: [],
	errMessage: undefined,
};

const storageQuotationReducer = (state = initialState, { type, payload }) => {
	switch (type) {
		case storageQuotationTypes.GET_ALL_QUOTATION_START:
			return { 
				...state, 
				isLoading: true,
				errMessage: undefined,
			};
		case storageQuotationTypes.GET_ALL_QUOTATION_SUCCESS:
			return {
				...state,
				isLoading: false,
				quotation: payload,
				errMessage: undefined,
			};
		case storageQuotationTypes.GET_ALL_QUOTATION_FAIL:
			return {
				...state,
				isLoading: false,
				errMessage: payload,
			};


		case storageQuotationTypes.POST_QUOTATION_START:
			return { 
				...state, 
				isLoading: true,
				errMessage: undefined,
			};
		case storageQuotationTypes.POST_QUOTATION_SUCCESS:
			return {
				...state,
				isLoading: false,
				quotation: payload,
				errMessage: undefined,
			};
		case storageQuotationTypes.POST_QUOTATION_FAIL:
			return {
				...state,
				isLoading: false,
				errMessage: payload,
			};

			
		default:
			return state;
	}
};

export default storageQuotationReducer;