import blogTypes from "./blogtypes";

const initialState = {
	loading: false,
	data: null,
	blog: null,
	newBlog: {
		title: "",
		subtitle: "",
		author: "",
		category: "",
		header: "",
		subHeader: "",
		paragraph: [""],
		content: [],
		tags: []
	},
	newBlogError: null,
	paragraph: [],
	paragraphError: null,
	errMessage: undefined,
	getOneError: undefined
}

const blogReducer = ( state = initialState, { type, payload } ) => {
	switch(type){
		case blogTypes.GET_ALL_BLOGS_START: 
			return { 
				...state, 
				loading: true,
				newBlog: {},
				errMessage: undefined,
				getOneError: undefined,
			};
			case blogTypes.GET_ALL_BLOGS_SUCCESS: 
			return { 
				...state, 
				loading: false,
				data: payload,
				newBlog: {},
				errMessage: undefined,
				getOneError: undefined,
			};
		case blogTypes.GET_ALL_BLOGS_FAIL: 
			return { 
				...state, 
				loading: false,
				newBlog: {},
				errMessage: payload,
				getOneError: undefined
			};

			
		case blogTypes.GET_ONE_BLOG_START: 
			return { 
				...state, 
				loading: true,
				errMessage: undefined,
				newBlog: {},
				getOneError: undefined,
			};
		case blogTypes.GET_ONE_BLOG_SUCCESS: 
			return { 
				...state, 
				loading: false,
				blog: payload,
				newBlog: {},
				errMessage: undefined,
				getOneError: undefined,
			};
		case blogTypes.GET_ONE_BLOG_FAIL: 
			return { 
				...state, 
				loading: false,
				newBlog: {},
				errMessage: payload,
				getOneError: undefined
			};




		case blogTypes.POST_BLOG_START: 
			return { 
				...state, 
				loading: true,
				newBlog: {},
				errMessage: undefined,
				getOneError: undefined,
			};
		case blogTypes.POST_BLOG_SUCCESS: 
			return { 
				...state, 
				loading: false,
				newBlog: {},
				data: payload,
				errMessage: undefined,
				getOneError: undefined,
			};
		case blogTypes.POST_BLOG_FAIL: 
			return { 
				...state, 
				loading: false,
				newBlog: {},
				errMessage: payload,
				getOneError: undefined
			};



		case blogTypes.EDIT_BLOG_START: 
			return { 
				...state, 
				loading: true,
				newBlog: {},
				errMessage: undefined,
				getOneError: undefined,
			};
		case blogTypes.EDIT_BLOG_SUCCESS: 
			return { 
				...state, 
				loading: false,
				newBlog: {},
				data: payload,
				errMessage: undefined,
				getOneError: undefined,
			};
		case blogTypes.EDIT_BLOG_FAIL: 
			return { 
				...state, 
				loading: false,
				newBlog: {},
				errMessage: payload,
				getOneError: undefined
			};

			
			
		case blogTypes.DELETE_BLOG_START: 
			return { 
				...state, 
				loading: true,
				newBlog: {},
				errMessage: undefined,
				getOneError: undefined,
			};
		case blogTypes.DELETE_BLOG_SUCCESS: 
			return { 
				...state, 
				loading: false,
				data: payload,
				newBlog: {},
				errMessage: undefined,
				getOneError: undefined,
			};
		case blogTypes.DELETE_BLOG_FAIL: 
			return { 
				...state, 
				loading: false,
				newBlog: {},
				errMessage: payload,
				getOneError: undefined
			};

		case blogTypes.WRITE_NEW_BLOG: 
			return {
				...state,
				loading: false,
				newBlog: {
					title: payload.title,
					subtitle: payload.subtitle,
					author: payload.author,
					category: payload.category,
					coverImage: payload.coverImage,
					content: payload.content,
				}
			};

		case blogTypes.WRITE_NEW_BLOG_FAIL: 
			return {
				...state,
				loading: false,
				newBlogError: payload
			}

			
		case blogTypes.WRITE_NEW_BLOG_PARAGRAPH: {
			return {
					...state,
					loading: false,
					newBlog: {
						...state.newBlog.paragraph,
						paragraph: payload
					}
				}
			}
			
		case blogTypes.WRITE_NEW_BLOG_PARAGRAPH_FAIL: 
			return {
				...state,
				loading: false,
				newBlogError: payload
			}



		case blogTypes.WRITE_NEW_BLOG_LIST: {
			debugger
			return {
					...state,
					loading: false,
					
				}
			}
			
		case blogTypes.WRITE_NEW_BLOG_LIST_FAIL: 
			return {
				...state,
				loading: false,
				newBlogError: payload
			}


		default: 
			return state
	}
}

export default blogReducer