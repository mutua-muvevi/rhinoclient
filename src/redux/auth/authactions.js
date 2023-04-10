import authTypes from "./authtypes";
import axios from "axios";


export const startRegisterUser = () => ({
	type: authTypes.START_REGISTER_USER,
})

export const registerUserSuccess = (token) => ({
	type: authTypes.SUCCESS_REGISTER_USER,
	payload: token,
})

export const registerUserFail = (errMessage) => ({
	type: authTypes.FAIL_REGISTER_USER,
	payload: errMessage,
})


export const startLoginUser = () => ({
	type: authTypes.START_LOGIN_USER,
})

export const loginUserSuccess = (token) => ({
	type: authTypes.SUCCESS_LOGIN_USER,
	payload: token,
})

export const loginUserFail = (errMessage) => ({
	type: authTypes.FAIL_LOGIN_USER,
	payload: errMessage,
})


export const loadForgotPassword = () => ({
	type: authTypes.START_FORGOT_PASSWORD,
})

export const postForgotPasswordSuccess = (data) => ({
	type: authTypes.SUCCESS_FORGOT_PASSWORD,
	payload: data,
})

export const postForgotPasswordFail = (errMessage) => ({
	type: authTypes.FAIL_FORGOT_PASSWORD,
	payload: errMessage,
})

export const loadResetPassword = () => ({
	type: authTypes.START_RESET_PASSWORD,
})

export const postResetPasswordSuccess = (data) => ({
	type: authTypes.SUCCESS_RESET_PASSWORD,
	payload: data,
})

export const postResetPasswordFail = (errMessage) => ({
	type: authTypes.FAIL_RESET_PASSWORD,
	payload: errMessage,
})


export const signOutUser = () => ({
	type: authTypes.LOGOUT_USER
})

export const registerUser = (formData) => {
	return async (dispatch) => {
		try {
			const res = await axios.post(
				`http://localhost:8500/api/user/register`,
				// `https://drab-jade-bison-cuff.cyclic.app/api/user/register`,
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
				`http://localhost:8500/api/user/login`,
				// `https://drab-jade-bison-cuff.cyclic.app/api/user/login`,
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
				`http://localhost:8500/api/user/forgotpassword`,
				// `https://drab-jade-bison-cuff.cyclic.app/api/user/forgotpassword`,
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
				`http://localhost:8500/api/user/resetpasword/${params}`,
				// `https://drab-jade-bison-cuff.cyclic.app/api/user/resetpasword/${params}`,
				values,
				{
					headers: {
						"Content-Type": "application/json",
					},
				}
			)
			loadResetPassword()
			postResetPasswordSuccess(res.data.data)
		} catch (error) {
			dispatch(postResetPasswordFail(error.response.data.error))
		}
	}
}

export const logoutUser = () => {
	return () => {
		try {
			window.localStorage.clear()
		} catch (error) {
			console.log(error)
		}
	}
}