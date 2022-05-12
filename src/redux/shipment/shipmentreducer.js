import shipmentTypes from "./shipmenttypes";

const initialState = {
	loading: false,
	data: null,
	errMessage: undefined
}

const shipmentReducer = ( state = initialState, { type, payload } ) => {
	switch(type){
		case shipmentTypes.GET_ALL_START: 
			return { 
				...state, 
				isLoading: true,
			};
		case shipmentTypes.GET_ALL_SUCCESS: 
			return { 
				...state, 
				isLoading: false,
				data: payload,
			};
		case shipmentTypes.GET_ALL_FAIL: 
			return { 
				...state, 
				isLoading: false,
				errMessage: payload,
			};

			
		case shipmentTypes.GET_ONE_START: 
			return { 
				...state, 
				isLoading: true,
			};
		case shipmentTypes.GET_ONE_SUCCESS: 
			return { 
				...state, 
				isLoading: false,
				data: payload,
			};
		case shipmentTypes.GET_ONE_FAIL: 
			return { 
				...state, 
				isLoading: false,
				errMessage: payload,
			};


		case shipmentTypes.POST_START: 
			return { 
				...state, 
				isLoading: true,
			};
		case shipmentTypes.POST_SUCCESS: 
			return { 
				...state, 
				isLoading: false,
				data: payload,
			};
		case shipmentTypes.POST_FAIL: 
			return { 
				...state, 
				isLoading: false,
				errMessage: payload,
			};

			
		case shipmentTypes.ADD_EVENT_START: 
			return { 
				...state, 
				isLoading: true,
			};
		case shipmentTypes.ADD_EVENT_SUCCESS: 
			return { 
				...state, 
				isLoading: false,
				data: payload,
			};
		case shipmentTypes.ADD_EVENT_FAIL: 
			return { 
				...state, 
				isLoading: false,
				errMessage: payload,
			};


		default: 
			return state
	}
}

export default shipmentReducer