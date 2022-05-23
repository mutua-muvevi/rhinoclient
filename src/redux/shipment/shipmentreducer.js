import shipmentTypes from "./shipmenttypes";

const initialState = {
	loading: false,
	data: null,
	errMessage: undefined
}

const shipmentReducer = ( state = initialState, { type, payload } ) => {
	switch(type){
		case shipmentTypes.GET_ALL_SHIPMENT_START: 
			return { 
				...state, 
				loading: true,
				data: null,
				errMessage: undefined,
			};
			case shipmentTypes.GET_ALL_SHIPMENT_SUCCESS: 
			return { 
				...state, 
				loading: false,
				data: payload,
				errMessage: undefined,
			};
		case shipmentTypes.GET_ALL_SHIPMENT_FAIL: 
			return { 
				...state, 
				loading: false,
				errMessage: payload,
			};

			
		case shipmentTypes.GET_ONE_SHIPMENT_START: 
			return { 
				...state, 
				loading: true,
				errMessage: undefined,
			};
		case shipmentTypes.GET_ONE_SHIPMENT_SUCCESS: 
			return { 
				...state, 
				loading: false,
				data: payload,
				errMessage: undefined,
			};
		case shipmentTypes.GET_ONE_SHIPMENT_FAIL: 
			return { 
				...state, 
				loading: false,
				errMessage: payload,
			};



		case shipmentTypes.POST_SHIPMENT_START: 
			return { 
				...state, 
				loading: true,
				errMessage: undefined,
			};
		case shipmentTypes.POST_SHIPMENT_SUCCESS: 
			return { 
				...state, 
				loading: false,
				data: payload,
				errMessage: undefined,
			};
		case shipmentTypes.POST_SHIPMENT_FAIL: 
			return { 
				...state, 
				loading: false,
				errMessage: payload,
			};



		case shipmentTypes.EDIT_SHIPMENT_START: 
			return { 
				...state, 
				loading: true,
				errMessage: undefined,
			};
		case shipmentTypes.EDIT_SHIPMENT_SUCCESS: 
			return { 
				...state, 
				loading: false,
				data: payload,
				errMessage: undefined,
			};
		case shipmentTypes.EDIT_SHIPMENT_FAIL: 
			return { 
				...state, 
				loading: false,
				errMessage: payload,
			};

			
			
		case shipmentTypes.ADD_SHIPMENT_EVENT_START: 
			return { 
				...state, 
				loading: true,
				errMessage: undefined,
			};
		case shipmentTypes.ADD_SHIPMENT_EVENT_SUCCESS: 
			return { 
				...state, 
				loading: false,
				data: payload,
				errMessage: undefined,
			};
		case shipmentTypes.ADD_SHIPMENT_EVENT_FAIL: 
			return { 
				...state, 
				loading: false,
				errMessage: payload,
			};


		default: 
			return state
	}
}

export default shipmentReducer