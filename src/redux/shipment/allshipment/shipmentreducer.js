import shipmentTypes from './shipmenttypes';

const initialState = {
  shipment: [],
  isLoading: true,
  errMessage: undefined,
};

const shipmentReducer = (state = initialState, { type, payload }) => {
	switch (type) {
		case shipmentTypes.START:
			return { 
				...state, 
				isLoading: true 
			};
		case shipmentTypes.SUCCESS:
			return {
				...state,
				isLoading: false,
				shipment: payload,
			};
		case shipmentTypes.FAIL:
			return {
				...state,
				isLoading: false,
				errMessage: payload,
			};
		default:
			return state;
	}
};

export default shipmentReducer;