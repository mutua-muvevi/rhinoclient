import storageTypes from "./storagetypes";

const initialState = {
	loading: false,
	data: null,

	allStorage: null,
	allStorageError: null,
	storage: null,
	storageError: null,
	editStorage: null,
	editStorageError: null,

	errMessage: undefined,
	getOneError: undefined
}

const storageReducer = ( state = initialState, { type, payload } ) => {
	switch(type){
		case storageTypes.GET_ALL_STORAGE_START: 
			return { 
				...state, 
				loading: true,
				allStorage: null,
				allStorageError: null,
			};
		case storageTypes.GET_ALL_STORAGE_SUCCESS: 
			return { 
				...state, 
				loading: false,
				allStorage: payload,
				allStorageError: null
			};
		case storageTypes.GET_ALL_STORAGE_FAIL: 
			return { 
				...state, 
				loading: false,
				allStorage: null,
				allStorageError: payload,
			};

			
		case storageTypes.GET_ONE_STORAGE_START: 
			return { 
				...state, 
				loading: true,
				storage: null,
				storageError: null,
			};
		case storageTypes.GET_ONE_STORAGE_SUCCESS: 
			return { 
				...state, 
				loading: false,
				storage: payload,
				storageError: null,
			};
		case storageTypes.GET_ONE_STORAGE_FAIL: 
			return { 
				...state, 
				loading: false,
				storage: null,
				storageError: payload,
			};


		case storageTypes.GET_STORAGE_BY_TRACKNO_START: 
			return { 
				...state, 
				loading: true,
				storage: null,
				storageError: null,
			};
		case storageTypes.GET_STORAGE_BY_TRACKNO_SUCCESS: 
			return { 
				...state, 
				loading: false,
				storage: payload,
				storageError: null,
			};
		case storageTypes.GET_STORAGE_BY_TRACKNO_FAIL: 
			return { 
				...state, 
				loading: false,
				storage: null,
				storageError: payload,
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