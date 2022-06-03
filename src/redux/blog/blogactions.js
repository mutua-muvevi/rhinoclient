import blogTypes from "./blogtypes";
import axios from "axios";

export const getAllBlogs = () => ({
	type: blogTypes.GET_ALL_BLOGS_START,
})

export const getAllBlogsSuccess = (blog) => ({
	type: blogTypes.GET_ALL_BLOGS_SUCCESS,
	payload: blog,
})

export const getAllBlogsFail = (errMessage) => ({
	type: blogTypes.GET_ALL_BLOGS_FAIL,
	payload: errMessage,
})


export const getOneBlog = () => ({
	type: blogTypes.GET_ONE_BLOG_START,
})

export const getOneBlogSuccess = (blog) => ({
	type: blogTypes.GET_ONE_BLOG_SUCCESS,
	payload: blog,
})

export const getOneBlogFail = (errMessage) => ({
	type: blogTypes.GET_ONE_BLOG_FAIL,
	payload: errMessage,
})


export const postBlog = () => ({
	type: blogTypes.POST_BLOG_START,
})

export const postBlogSuccess = (blog) => ({
	type: blogTypes.POST_BLOG_SUCCESS,
	payload: blog,
})

export const postBlogFail = (errMessage) => ({
	type: blogTypes.POST_BLOG_FAIL,
	payload: errMessage,
})


export const editBlog = () => ({
	type: blogTypes.EDIT_BLOG_START,
})

export const editBlogSuccess = (blog) => ({
	type: blogTypes.EDIT_BLOG_SUCCESS,
	payload: blog,
})

export const editBlogFail = (errMessage) => ({
	type: blogTypes.EDIT_BLOG_FAIL,
	payload: errMessage,
})


export const deleteBlog = () => ({
	type: blogTypes.DELETE_BLOG_START,
})

export const deleteBlogSuccess = (blog) => ({
	type: blogTypes.DELETE_BLOG_SUCCESS,
	payload: blog,
})

export const deleteBlogFail = (errMessage) => ({
	type: blogTypes.DELETE_BLOG_FAIL,
	payload: errMessage,
})





export const getBlogs = () => {
	return async (dispatch) => {
		try {
			const res = await axios.get(
				"http://localhost:7000/api/blogs/all"
			)
			getAllBlogs()
			dispatch(getAllBlogsSuccess(res.data.data))
		} catch (error) {
			dispatch(getAllBlogsFail(error.response.data.error))
		}
	}
}

export const getSingleBlog = (id) => {
	return async (dispatch) => {
		try {
			const res = await axios.get(
				`http://localhost:7000/api/blogs/blog/${id}`
			)
			getOneBlog()
			dispatch(getOneBlogSuccess(res.data.data))
		} catch (error) {
			dispatch(getOneBlogFail(error.response.data.error))
		}
	}
}

export const postABlog = (values, token) => {
	return async (dispatch) => {
		try {
			const res = await axios.post(
				`http://localhost:7000/api/blogs/post`,
				values,
				{
					headers: {
						"Content-Type": "application/json",
						Authorization:`Bearer ${token}`
					},
				}
				)
			
			postBlog()
			dispatch(postBlogSuccess(res.data.data))
		} catch (error) {
			dispatch(postBlogFail(error.response.data.error))
		}
	}
}

export const editABlog = (values, token, id) => {
	return async (dispatch) => {
		try {
			const res = await axios.put(
				`http://localhost:7000/api/blogs/edit/${id}`,
				values,
				{
					headers: {
						"Content-Type": "application/json",
						Authorization:`Bearer ${token}`
					},
				}
				)
			
				editBlog()
			dispatch(editBlogSuccess(res.data.data))
		} catch (error) {
			dispatch(editBlogFail(error.response.data.error))
		}
	}
}

export const deleteABlog = (id, token) => {
	return async (dispatch) => {
		try {
			const res = await axios.delete(
				`http://localhost:7000/api/blogs/delete/${id}`,
					{
						headers: {
							"Content-Type": "application/json",
							Authorization:`Bearer ${token}`
						},
					}
				)
			
				editBlog()
			dispatch(editBlogSuccess(res.data.data))
		} catch (error) {
			dispatch(editBlogFail(error.response.data.error))
		}
	}
}
