import singleshipmentTypes from './singleshipmenttypes';

const initialState = {
  singleShipment: null,
  isLoading: true,
  errMessage: undefined,
};

const singleShipmentReducer = (state = initialState, { type, payload }) => {
	switch (type) {
		case singleshipmentTypes.START:
			return { 
				...state, 
				isLoading: true 
			};
		case singleshipmentTypes.SUCCESS:
			return {
				...state,
				isLoading: false,
				singleShipment: payload,
			};
		case singleshipmentTypes.FAIL:
			return {
				...state,
				isLoading: false,
				errMessage: payload,
			};
		default:
			return state;
	}
};

export default singleShipmentReducer;