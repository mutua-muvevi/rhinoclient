import storageTypes from "./storagetypes";

const initialState = {
	loading: false,
	data: null,
	storage: null,
	errMessage: undefined,
	getOneError: undefined
}

const storageReducer = ( state = initialState, { type, payload } ) => {
	switch(type){
		case storageTypes.GET_ALL_STORAGE_START: 
			return { 
				...state, 
				loading: true,
				storage: null,
				data: null,
				errMessage: undefined,
				getOneError: undefined,
			};
		case storageTypes.GET_ALL_STORAGE_SUCCESS: 
			return { 
				...state, 
				loading: false,
				data: payload,
				storage: null,
				errMessage: undefined,
				getOneError: undefined,
			};
		case storageTypes.GET_ALL_STORAGE_FAIL: 
			return { 
				...state, 
				loading: false,
				storage: null,
				data: null,
				errMessage: payload,
				getOneError: undefined
			};

			
		case storageTypes.GET_ONE_STORAGE_START: 
			return { 
				...state, 
				loading: true,
				storage: null,
				data: null,
				errMessage: undefined,
				getOneError: undefined,
			};
		case storageTypes.GET_ONE_STORAGE_SUCCESS: 
			return { 
				...state, 
				loading: false,
				storage: payload,
				data: null,
				errMessage: undefined,
				getOneError: undefined
			};
		case storageTypes.GET_ONE_STORAGE_FAIL: 
			return { 
				...state, 
				loading: false,
				storage: null,
				data: null,
				errMessage: undefined,
				getOneError: payload
			};


		case storageTypes.GET_STORAGE_BY_TRACKNO_START: 
			return { 
				...state, 
				loading: true,
				storage: null,
				data: null,
				errMessage: undefined,
				getOneError: undefined,
			};
		case storageTypes.GET_STORAGE_BY_TRACKNO_SUCCESS: 
			return { 
				...state, 
				loading: false,
				storage: payload,
				data: null,
				errMessage: undefined,
				getOneError: undefined
			};
		case storageTypes.GET_STORAGE_BY_TRACKNO_FAIL: 
			return { 
				...state, 
				loading: false,
				storage: null,
				data: null,
				errMessage: undefined,
				getOneError: payload
			};



		case storageTypes.POST_STORAGE_START: 
			return { 
				...state, 
				loading: true,
				storage: null,
				data: null,
				errMessage: undefined,
				getOneError: undefined,
			};
		case storageTypes.POST_STORAGE_SUCCESS: 
			return { 
				...state, 
				loading: false,
				storage: null,
				data: null,
				errMessage: undefined,
				getOneError: payload
			};
		case storageTypes.POST_STORAGE_FAIL: 
			return { 
				...state, 
				loading: false,
				storage: null,
				data: null,
				errMessage: undefined,
				getOneError: payload
			};



		case storageTypes.EDIT_STORAGE_START: 
			return { 
				...state, 
				loading: true,
				storage: null,
				data: null,
				errMessage: undefined,
				getOneError: undefined,
			};
		case storageTypes.EDIT_STORAGE_SUCCESS: 
			return { 
				...state, 
				loading: false,
				data: payload,
				storage: null,
				errMessage: undefined,
				getOneError: undefined,
			};
		case storageTypes.EDIT_STORAGE_FAIL: 
			return { 
				...state, 
				loading: false,
				storage: null,
				data: null,
				errMessage: undefined,
				getOneError: payload
			};

		default: 
			return state
	}
}

export default storageReducer