import authTypes from "./authtypes";
import axios from "axios";


export const fetchAuthorizedUser = () => ({
	type: authTypes.START_LOADING_USER,
	isLoading: true,
	isAuthenticated: false,
})

export const fetchSuccessAuthUser = (token) => ({
	type: authTypes.SUCCESS_CURRENT_USER,
	isLoading: false,
	isAuthenticated: true,
	payload: token,
})

export const fetchFailAuthUser = (errMessage) => ({
	type: authTypes.FAIL_CURRENT_USER,
	isLoading: false,
	isAuthenticated: false,
	payload: errMessage,
})


export const loadForgotPassword = () => ({
	type: authTypes.START_FORGOT_PASSWORD,
	isLoading: true,
	isAuthenticated: false,
})

export const postForgotPasswordSuccess = (data) => ({
	type: authTypes.SUCCESS_FORGOT_PASSWORD,
	isLoading: false,
	payload: data,
	isAuthenticated: false,
})

export const postForgotPasswordFail = (errMessage) => ({
  type: authTypes.FAIL_FORGOT_PASSWORD,
  isLoading: false,
  payload: errMessage,
  isAuthenticated: false,
})

export const loadResetPassword = () => ({
	type: authTypes.START_RESET_PASSWORD,
	isLoading: true,
	isAuthenticated: false,
})

export const postResetPasswordSuccess = (data) => ({
	type: authTypes.SUCCESS_RESET_PASSWORD,
	isLoading: false,
	payload: data,
	isAuthenticated: false,
})

export const postResetPasswordFail = (errMessage) => ({
	type: authTypes.FAIL_RESET_PASSWORD,
	isLoading: false,
	payload: errMessage,
	isAuthenticated: false,
})


export const postAuthUser = (formData) => {
	return async (dispatch) => {
		try {
			if (formData.firstname) {
				const res = await axios.post(
					`http://localhost:7000/api/user/register`,
					formData,
					{
						headers: {
						"Content-Type": "application/json",
						},
					}
				)
				fetchAuthorizedUser()
				dispatch(fetchSuccessAuthUser(res.data.data.user))
			} else {
				const res = await axios.post(
					`http://localhost:7000/api/user/login`,
					formData,
					{
						headers: {
						"Content-Type": "application/json",
						},
					}
				)
				fetchAuthorizedUser()
				dispatch(fetchSuccessAuthUser(res.data.token))
			}

		} catch (error) {
			dispatch(fetchFailAuthUser(error.response.data.error))
		}
	}
}

export const forgotPassword = (formData) => {
	return async (dispatch) => {
		try {
			const res = axios.post(
				`http://localhost:7000/api/user/forgotpassword`,
				formData,
				{
					headers: {
					"Content-Type": "application/json",
					},
				}
			)
			loadForgotPassword()
			postForgotPasswordSuccess(res)
			console.log("THE RES", res.data.data)
		} catch (error) {
			dispatch(postForgotPasswordFail(error.response))
			console.log("THE RESET ERROR!!!!", error.response)
		}
	}
}

export const resetPassword = (values, params) => {
	return async (dispatch) => {
		try {
			const res = axios.post(
				`http://localhost:7000/api/user/resetpasword/${params}`,
				values,
				{
					headers: {
					"Content-Type": "application/json",
					},
				}
			)
			loadForgotPassword()
			postForgotPasswordSuccess(res.data.data)
		} catch (error) {
			dispatch(postResetPasswordFail(error.response.data.error))
			console.log("THE RESET ERROR", error.response.data.error)
		}
	}
}