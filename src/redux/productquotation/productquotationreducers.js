import productQuotationTypes from './productquotationtypes';

const initialState = {
	productQuotation: [],
	isLoading: true,
	errMessage: undefined,
};

const productQuotationReducer = (state = initialState, { type, payload }) => {
	switch (type) {
		case productQuotationTypes.START:
			return { 
				...state, 
				isLoading: true 
			};
		case productQuotationTypes.SUCCESS:
			return {
				...state,
				isLoading: false,
				productQuotation: payload,
			};
		case productQuotationTypes.FAIL:
			return {
				...state,
				isLoading: false,
				errMessage: payload,
			};
		default:
			return state;
	}
};

export default productQuotationReducer;