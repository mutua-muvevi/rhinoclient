import shipmentQuotationTypes from './shipmentquotationtypes';

const initialState = {
	shipmentQuotation: [],
	isLoading: true,
	errMessage: undefined,
};

const storageQuotationReducer = (state = initialState, { type, payload }) => {
	switch (type) {
		case shipmentQuotationTypes.START:
			return { 
				...state, 
				isLoading: true 
			};
		case shipmentQuotationTypes.SUCCESS:
			return {
				...state,
				isLoading: false,
				shipmentQuotation: payload,
			};
		case shipmentQuotationTypes.FAIL:
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