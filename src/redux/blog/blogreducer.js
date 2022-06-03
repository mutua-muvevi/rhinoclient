import blogTypes from "./blogtypes";

const initialState = {
	loading: false,
	data: null,
	blog: null,
	errMessage: undefined,
	getOneError: undefined
}

const blogReducer = ( state = initialState, { type, payload } ) => {
	switch(type){
		case blogTypes.GET_ALL_BLOGS_START: 
			return { 
				...state, 
				loading: true,
				errMessage: undefined,
				getOneError: undefined,
			};
			case blogTypes.GET_ALL_BLOGS_SUCCESS: 
			return { 
				...state, 
				loading: false,
				data: payload,
				errMessage: undefined,
				getOneError: undefined,
			};
		case blogTypes.GET_ALL_BLOGS_FAIL: 
			return { 
				...state, 
				loading: false,
				errMessage: payload,
				getOneError: undefined
			};

			
		case blogTypes.GET_ONE_BLOG_START: 
			return { 
				...state, 
				loading: true,
				errMessage: undefined,
				getOneError: undefined,
			};
		case blogTypes.GET_ONE_BLOG_SUCCESS: 
			return { 
				...state, 
				loading: false,
				blog: payload,
				errMessage: undefined,
				getOneError: undefined,
			};
		case blogTypes.GET_ONE_BLOG_FAIL: 
			return { 
				...state, 
				loading: false,
				errMessage: payload,
				getOneError: undefined
			};




		case blogTypes.POST_BLOG_START: 
			return { 
				...state, 
				loading: true,
				errMessage: undefined,
				getOneError: undefined,
			};
		case blogTypes.POST_BLOG_SUCCESS: 
			return { 
				...state, 
				loading: false,
				data: payload,
				errMessage: undefined,
				getOneError: undefined,
			};
		case blogTypes.POST_BLOG_FAIL: 
			return { 
				...state, 
				loading: false,
				errMessage: payload,
				getOneError: undefined
			};



		case blogTypes.EDIT_BLOG_START: 
			return { 
				...state, 
				loading: true,
				errMessage: undefined,
				getOneError: undefined,
			};
		case blogTypes.EDIT_BLOG_SUCCESS: 
			return { 
				...state, 
				loading: false,
				data: payload,
				errMessage: undefined,
				getOneError: undefined,
			};
		case blogTypes.EDIT_BLOG_FAIL: 
			return { 
				...state, 
				loading: false,
				errMessage: payload,
				getOneError: undefined
			};

			
			
		case blogTypes.DELETE_BLOG_START: 
			return { 
				...state, 
				loading: true,
				errMessage: undefined,
				getOneError: undefined,
			};
		case blogTypes.DELETE_BLOG_SUCCESS: 
			return { 
				...state, 
				loading: false,
				data: payload,
				errMessage: undefined,
				getOneError: undefined,
			};
		case blogTypes.DELETE_BLOG_FAIL: 
			return { 
				...state, 
				loading: false,
				errMessage: payload,
				getOneError: undefined
			};


		default: 
			return state
	}
}

export default blogReducer