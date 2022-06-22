import userTypes from "./usertypes";
import axios from "axios"

export const fetchUserStart = () => ({
	type: userTypes.START_FETCH_USER
})

export const fetchUserSuccess = (user) => ({
	type: userTypes.SUCCESS_FETCH_USER,
	payload: user,
})

export const fetchUserFail = (errMessage) => ({
	type: userTypes.FAIL_FETCH_USER,
	payload: errMessage,
})


export const fetchUsersStart = () => ({
	type: userTypes.START_FETCH_USERS
})

export const fetchUsersSuccess = (user) => ({
	type: userTypes.SUCCESS_FETCH_USERS,
	payload: user,
})

export const fetchUsersFail = (errMessage) => ({
	type: userTypes.FAIL_FETCH_USERS,
	payload: errMessage,
})



export const fetchAdminStart = () => ({
	type: userTypes.START_FETCH_ADMIN
})

export const fetchAdminSuccess = (user) => ({
	type: userTypes.SUCCESS_FETCH_ADMIN,
	payload: user,
})

export const fetchAdminFail = (errMessage) => ({
	type: userTypes.FAIL_FETCH_ADMIN,
	payload: errMessage,
})


export const fetchUser = (token) => {
	return async (dispatch) => {
		try {
			const res = await axios.get(
				`/api/user/me`,
				{
					headers: {
						Authorization:`Bearer ${token}`,
					}
				}
			)
			fetchUserStart()
			dispatch(fetchUserSuccess(res.data.data))
		} catch (error) {
			dispatch(fetchUserFail(error.response))
		}
	}
}

export const fetchAllUsers = (token) => {
	return async (dispatch) => {
		try {
			const res = await axios.get(
				`/api/user/users`,
				{
					headers: {
						Authorization:`Bearer ${token}`,
					}
				}
			)
			fetchUserStart()
			dispatch(fetchUsersSuccess(res.data.data))
		} catch (error) {
			dispatch(fetchUsersFail(error.response.data.error))
		}
	}
}

export const fetchAllAdmin = (token) => {
	return async (dispatch) => {
		try {
			const res = await axios.get(
				`/api/user/admin`,
				{
					headers: {
						Authorization:`Bearer ${token}`,
					}
				}
			)
			fetchAdminStart()
			dispatch(fetchAdminSuccess(res.data.data))
		} catch (error) {
			dispatch(fetchAdminFail(error.response.data.error))
		}
	}
}