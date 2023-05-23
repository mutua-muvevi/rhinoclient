import shipmentTypes from "./shipmenttypes";

const initialState = {
	loading: false,
	data: null,

	shipment: null,
	shipmentError: null,
	allShipment: null,
	allShipmentError: null,
	editShipment: null,
	editShipmentError: null,
	deleteShipment: null,
	deleteShipmentError: null,

	event: null,
	eventError: null,
	editEvent: null,
	editEventError: null,
	deleteEvent: null,
	deleteEventError: null,

	errMessage: undefined,
	getOneError: undefined
}

const shipmentReducer = ( state = initialState, { type, payload } ) => {
	switch(type){
		case shipmentTypes.GET_ALL_SHIPMENT_START: 
			return { 
				...state, 
				loading: true,
				allShipment: null,
			};
			case shipmentTypes.GET_ALL_SHIPMENT_SUCCESS: 
			return { 
				...state, 
				loading: false,
				allShipment: payload,
				allShipmentError: null
			};
		case shipmentTypes.GET_ALL_SHIPMENT_FAIL: 
			return { 
				...state, 
				loading: false,
				allShipment: null,
				allShipmentError: payload
			};

			
		case shipmentTypes.GET_ONE_SHIPMENT_START: 
			return { 
				...state, 
				loading: true,
				shipment: null,
			};
		case shipmentTypes.GET_ONE_SHIPMENT_SUCCESS: 
			return { 
				...state, 
				loading: false,
				shipment: payload,
				shipmentError: null
			};
		case shipmentTypes.GET_ONE_SHIPMENT_FAIL: 
			return { 
				...state, 
				loading: false,
				shipment: null,
				shipmentError: payload
			};


		case shipmentTypes.GET_SHIPMENT_BY_TRACKNO_START: 
			return { 
				...state, 
				loading: true,
				shipment: null,
				shipmentError: null,
			};
		case shipmentTypes.GET_SHIPMENT_BY_TRACKNO_SUCCESS: 
			return { 
				...state, 
				loading: false,
				shipment: payload,
				shipmentError: null
			};
		case shipmentTypes.GET_SHIPMENT_BY_TRACKNO_FAIL: 
			return { 
				...state, 
				loading: false,
				shipment: null,
				shipmentError: payload
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
				editShipment: null,
				editShipmentError: null
			};
		case shipmentTypes.EDIT_SHIPMENT_SUCCESS: 
			return { 
				...state, 
				loading: false,
				editShipment: payload,
				editShipmentError: null
			};
		case shipmentTypes.EDIT_SHIPMENT_FAIL: 
			return { 
				...state, 
				loading: false,
				editShipment: null,
				editShipmentError: payload
			};



		case shipmentTypes.DELETE_SHIPMENT_START: 
			return { 
				...state, 
				loading: true,
				deleteShipment: null,
				deleteShipmentError: null
			};
		case shipmentTypes.DELETE_SHIPMENT_SUCCESS: 
			return { 
				...state, 
				loading: false,
				deleteShipment: payload,
				deleteShipmentError: null
			};
		case shipmentTypes.DELETE_SHIPMENT_FAIL: 
			return { 
				...state, 
				loading: false,
				deleteShipment: null,
				deleteShipmentError: payload
			};

			
			
		case shipmentTypes.SET_EVENT_START: 
			return { 
				...state, 
				loading: true,
				event: null,
				eventError: null
			};
		case shipmentTypes.SET_EVENT_SUCCESS: 
			return { 
				...state, 
				loading: false,
				event: payload,
				eventError: null
			};
		case shipmentTypes.SET_EVENT_FAIL: 
			return { 
				...state, 
				loading: false,
				event: null,
				eventError: payload
			};

			
			
		case shipmentTypes.ADD_SHIPMENT_EVENT_START: 
			return { 
				...state, 
				loading: true,
				event: null,
				eventError: null
			};
		case shipmentTypes.ADD_SHIPMENT_EVENT_SUCCESS: 
			return { 
				...state, 
				loading: false,
				event: payload,
				eventError: null
			};
		case shipmentTypes.ADD_SHIPMENT_EVENT_FAIL: 
			return { 
				...state, 
				loading: false,
				event: null,
				eventError: payload
			};


			
			
		case shipmentTypes.EDIT_SHIPMENT_EVENT_START: 
			return { 
				...state, 
				loading: true,
				editEvent: null,
				editEventError: null
			};
		case shipmentTypes.EDIT_SHIPMENT_EVENT_SUCCESS: 
			return { 
				...state, 
				loading: false,
				editEvent: payload,
				editEventError: null
			};
		case shipmentTypes.EDIT_SHIPMENT_EVENT_FAIL: 
			return { 
				...state, 
				loading: false,
				editEvent: null,
				editEventError: payload
			};


			
			
		case shipmentTypes.DELETE_SHIPMENT_EVENT_START: 
			return { 
				...state, 
				loading: true,
				deleteEvent: null,
				deleteEventError: null
			};
		case shipmentTypes.DELETE_SHIPMENT_EVENT_SUCCESS: 
			return { 
				...state, 
				loading: false,
				deleteEvent: payload,
				deleteEventError: null
			};
		case shipmentTypes.DELETE_SHIPMENT_EVENT_FAIL: 
			return { 
				...state, 
				loading: false,
				deleteEvent: null,
				deleteEventError: payload
			};


		default: 
			return state
	}
}

export default shipmentReducer