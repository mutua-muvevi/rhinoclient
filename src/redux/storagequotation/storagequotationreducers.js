import storageQuotationTypes from './storagequotationtypes';

const initialState = {
	storageQuotation: [],
	isLoading: true,
	errMessage: undefined,
};

const storageQuotationReducer = (state = initialState, { type, payload }) => {
	switch (type) {
		case storageQuotationTypes.START:
			return { 
				...state, 
				isLoading: true 
			};
		case storageQuotationTypes.SUCCESS:
			return {
				...state,
				isLoading: false,
				storageQuotation: payload,
			};
		case storageQuotationTypes.FAIL:
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