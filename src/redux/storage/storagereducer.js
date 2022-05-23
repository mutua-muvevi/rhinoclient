import storageTypes from "./storagetypes";

const initialState = {
	loading: false,
	data: null,
	errMessage: undefined
}

const shipmentReducer = ( state = initialState, { type, payload } ) => {
	switch(type){
		case storageTypes.GET_ALL_STORAGE_START: 
			return { 
				...state, 
				loading: true,
				data: null,
				errMessage: undefined,
			};
			case storageTypes.GET_ALL_STORAGE_SUCCESS: 
			return { 
				...state, 
				loading: false,
				data: payload,
				errMessage: undefined,
			};
		case storageTypes.GET_ALL_STORAGE_FAIL: 
			return { 
				...state, 
				loading: false,
				errMessage: payload,
			};

			
		case storageTypes.GET_ONE_STORAGE_START: 
			return { 
				...state, 
				loading: true,
				errMessage: undefined,
			};
		case storageTypes.GET_ONE_STORAGE_SUCCESS: 
			return { 
				...state, 
				loading: false,
				data: payload,
				errMessage: undefined,
			};
		case storageTypes.GET_ONE_STORAGE_FAIL: 
			return { 
				...state, 
				loading: false,
				errMessage: payload,
			};



		case storageTypes.POST_STORAGE_START: 
			return { 
				...state, 
				loading: true,
				errMessage: undefined,
			};
		case storageTypes.POST_STORAGE_SUCCESS: 
			return { 
				...state, 
				loading: false,
				data: payload,
				errMessage: undefined,
			};
		case storageTypes.POST_STORAGE_FAIL: 
			return { 
				...state, 
				loading: false,
				errMessage: payload,
			};



		case storageTypes.EDIT_STORAGE_START: 
			return { 
				...state, 
				loading: true,
				errMessage: undefined,
			};
		case storageTypes.EDIT_STORAGE_SUCCESS: 
			return { 
				...state, 
				loading: false,
				data: payload,
				errMessage: undefined,
			};
		case storageTypes.EDIT_STORAGE_FAIL: 
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