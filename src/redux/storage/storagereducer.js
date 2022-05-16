import storageTypes from "./storagetypes";

const initialState = {
	loading: false,
	data: null,
	errMessage: undefined
}

const shipmentReducer = ( state = initialState, { type, payload } ) => {
	switch(type){
		case storageTypes.GET_ALL_START: 
			return { 
				...state, 
				loading: true,
				data: null,
				errMessage: undefined,
			};
			case storageTypes.GET_ALL_SUCCESS: 
			return { 
				...state, 
				loading: false,
				data: payload,
				errMessage: undefined,
			};
		case storageTypes.GET_ALL_FAIL: 
			return { 
				...state, 
				loading: false,
				errMessage: payload,
			};

			
		case storageTypes.GET_ONE_START: 
			return { 
				...state, 
				loading: true,
				errMessage: undefined,
			};
		case storageTypes.GET_ONE_SUCCESS: 
			return { 
				...state, 
				loading: false,
				data: payload,
				errMessage: undefined,
			};
		case storageTypes.GET_ONE_FAIL: 
			return { 
				...state, 
				loading: false,
				errMessage: payload,
			};



		case storageTypes.POST_START: 
			return { 
				...state, 
				loading: true,
				errMessage: undefined,
			};
		case storageTypes.POST_SUCCESS: 
			return { 
				...state, 
				loading: false,
				data: payload,
				errMessage: undefined,
			};
		case storageTypes.POST_FAIL: 
			return { 
				...state, 
				loading: false,
				errMessage: payload,
			};



		case storageTypes.EDIT_START: 
			return { 
				...state, 
				loading: true,
				errMessage: undefined,
			};
		case storageTypes.EDIT_SUCCESS: 
			return { 
				...state, 
				loading: false,
				data: payload,
				errMessage: undefined,
			};
		case storageTypes.EDIT_FAIL: 
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