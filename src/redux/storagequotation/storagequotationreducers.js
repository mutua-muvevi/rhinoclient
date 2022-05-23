import storageQuotationTypes from './storagequotationtypes';

const initialState = {
	storageQuotation: [],
	isLoading: true,
	errMessage: undefined,
};

const storageQuotationReducer = (state = initialState, { type, payload }) => {
	switch (type) {
		case storageQuotationTypes.GET_ALL_STORAGE_QUOTATION_START:
			return { 
				...state, 
				isLoading: true 
			};
		case storageQuotationTypes.GET_ALL_STORAGE_QUOTATION_SUCCESS:
			return {
				...state,
				isLoading: false,
				storageQuotation: payload,
			};
		case storageQuotationTypes.GET_ALL_STORAGE_QUOTATION_FAIL:
			return {
				...state,
				isLoading: false,
				errMessage: payload,
			};


		case storageQuotationTypes.POST_STORAGE_QUOTATION_START:
			return { 
				...state, 
				isLoading: true 
			};
		case storageQuotationTypes.POST_STORAGE_QUOTATION_SUCCESS:
			return {
				...state,
				isLoading: false,
				storageQuotation: payload,
			};
		case storageQuotationTypes.POST_STORAGE_QUOTATION_FAIL:
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