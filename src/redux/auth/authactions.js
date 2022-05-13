import authTypes from "./authtypes";
import axios from "axios";


export const startRegisterUser = () => ({
	type: authTypes.START_REGISTER_USER,
	isLoading: true,
	isAuthenticated: false,
})

export const registerUserSuccess = (token) => ({
	type: authTypes.SUCCESS_REGISTER_USER,
	isLoading: false,
	isAuthenticated: true,
	payload: token,
})

export const registerUserFail = (errMessage) => ({
	type: authTypes.FAIL_REGISTER_USER,
	isLoading: false,
	isAuthenticated: false,
	payload: errMessage,
})


export const startLoginUser = () => ({
	type: authTypes.START_LOGIN_USER,
	isLoading: true,
	isAuthenticated: false,
})

export const loginUserSuccess = (token) => ({
	type: authTypes.SUCCESS_LOGIN_USER,
	isLoading: false,
	isAuthenticated: true,
	payload: token,
})

export const loginUserFail = (errMessage) => ({
	type: authTypes.FAIL_LOGIN_USER,
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


export const registerUser = (formData) => {
	return async (dispatch) => {
		try {
			const res = await axios.post(
				`http://localhost:7000/api/user/register`,
				formData,
				{
					headers: {
					"Content-Type": "application/json",
					},
				}
			)
			startRegisterUser()
			dispatch(registerUserSuccess(res.data.data.user))
		} catch (error) {
			dispatch(registerUserFail(error.response.data.error))
		}
	}
}

export const loginUser = (formData) => {
	return async (dispatch) => {
		try {
			const res = await axios.post(
				`http://localhost:7000/api/user/login`,
				formData,
				{
					headers: {
						"Content-Type": "application/json",
					},
				}
				
			)
			startLoginUser()
			dispatch(loginUserSuccess(res.data.token))
		} catch (error) {
			dispatch(loginUserFail(error.response.data.error))
		}
	}
}


export const forgotPassword = (formData) => {
	return async (dispatch) => {
		try {
			const res = await axios.post(
				`http://localhost:7000/api/user/forgotpassword`,
				formData,
				{
					headers: {
					"Content-Type": "application/json",
					},
				}
			)
			loadForgotPassword()
			dispatch(postForgotPasswordSuccess(res.data.data))
		} catch (error) {
			dispatch(postForgotPasswordFail(error.response.data.error))
		}
	}
}

export const resetPassword = (values, params) => {
	return async (dispatch) => {
		try {
			const res = await axios.post(
				`http://localhost:7000/api/user/resetpasword/${params}`,
				values,
				{
					headers: {
					"Content-Type": "application/json",
					},
				}
			)
			dispatch(loadForgotPassword())
			postForgotPasswordSuccess(res.data.data)
		} catch (error) {
			dispatch(postResetPasswordFail(error.response.data.error))
		}
	}
}