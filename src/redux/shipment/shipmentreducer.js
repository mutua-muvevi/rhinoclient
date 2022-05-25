import shipmentTypes from "./shipmenttypes";

const initialState = {
	loading: false,
	data: null,
	shipment: null,
	errMessage: undefined,
	getOneError: undefined
}

const shipmentReducer = ( state = initialState, { type, payload } ) => {
	switch(type){
		case shipmentTypes.GET_ALL_SHIPMENT_START: 
			return { 
				...state, 
				loading: true,
				shipment: null,
				data: null,
				errMessage: undefined,
				getOneError: undefined,
			};
			case shipmentTypes.GET_ALL_SHIPMENT_SUCCESS: 
			return { 
				...state, 
				loading: false,
				data: payload,
				shipment: null,
				errMessage: undefined,
				getOneError: undefined,
			};
		case shipmentTypes.GET_ALL_SHIPMENT_FAIL: 
			return { 
				...state, 
				loading: false,
				shipment: null,
				data: null,
				errMessage: payload,
				getOneError: undefined
			};

			
		case shipmentTypes.GET_ONE_SHIPMENT_START: 
			return { 
				...state, 
				loading: true,
				shipment: null,
				data: null,
				errMessage: undefined,
				getOneError: undefined,
			};
		case shipmentTypes.GET_ONE_SHIPMENT_SUCCESS: 
			return { 
				...state, 
				loading: false,
				data: null,
				shipment: payload,
				errMessage: undefined,
				getOneError: undefined,
			};
		case shipmentTypes.GET_ONE_SHIPMENT_FAIL: 
			return { 
				...state, 
				loading: false,
				shipment: null,
				data: null,
				errMessage: payload,
				getOneError: undefined
			};


		case shipmentTypes.GET_SHIPMENT_BY_TRACKNO_START: 
			return { 
				...state, 
				loading: true,
				shipment: null,
				data: null,
				errMessage: undefined,
				getOneError: undefined,
			};
		case shipmentTypes.GET_SHIPMENT_BY_TRACKNO_SUCCESS: 
			return { 
				...state, 
				loading: false,
				data: null,
				shipment: payload,
				errMessage: undefined,
				getOneError: undefined,
			};
		case shipmentTypes.GET_SHIPMENT_BY_TRACKNO_FAIL: 
			return { 
				...state, 
				loading: false,
				shipment: null,
				data: null,
				errMessage: undefined,
				getOneError: payload
			};



		case shipmentTypes.POST_SHIPMENT_START: 
			return { 
				...state, 
				loading: true,
				shipment: null,
				data: null,
				errMessage: undefined,
				getOneError: undefined,
			};
		case shipmentTypes.POST_SHIPMENT_SUCCESS: 
			return { 
				...state, 
				loading: false,
				data: payload,
				shipment: null,
				errMessage: undefined,
				getOneError: undefined,
			};
		case shipmentTypes.POST_SHIPMENT_FAIL: 
			return { 
				...state, 
				loading: false,
				shipment: null,
				data: null,
				errMessage: payload,
				getOneError: undefined
			};



		case shipmentTypes.EDIT_SHIPMENT_START: 
			return { 
				...state, 
				loading: true,
				shipment: null,
				data: null,
				errMessage: undefined,
				getOneError: undefined,
			};
		case shipmentTypes.EDIT_SHIPMENT_SUCCESS: 
			return { 
				...state, 
				loading: false,
				data: payload,
				shipment: null,
				errMessage: undefined,
				getOneError: undefined,
			};
		case shipmentTypes.EDIT_SHIPMENT_FAIL: 
			return { 
				...state, 
				loading: false,
				shipment: null,
				data: null,
				errMessage: payload,
				getOneError: undefined
			};

			
			
		case shipmentTypes.ADD_SHIPMENT_EVENT_START: 
			return { 
				...state, 
				loading: true,
				shipment: null,
				data: null,
				errMessage: undefined,
				getOneError: undefined,
			};
		case shipmentTypes.ADD_SHIPMENT_EVENT_SUCCESS: 
			return { 
				...state, 
				loading: false,
				data: payload,
				shipment: null,
				errMessage: undefined,
				getOneError: undefined,
			};
		case shipmentTypes.ADD_SHIPMENT_EVENT_FAIL: 
			return { 
				...state, 
				loading: false,
				shipment: null,
				data: null,
				errMessage: payload,
				getOneError: undefined
			};


		default: 
			return state
	}
}

export default shipmentReducer