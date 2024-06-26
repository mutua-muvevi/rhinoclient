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



export const editAdminStart = () => ({
	type: userTypes.START_EDIT_ADMIN
})

export const editAdminSuccess = (user) => ({
	type: userTypes.SUCCESS_EDIT_ADMIN,
	payload: user,
})

export const editAdminFail = (errMessage) => ({
	type: userTypes.FAIL_EDIT_ADMIN,
	payload: errMessage,
})


export const fetchUser = (token) => {
	return async (dispatch) => {
		try {
			const res = await axios.get(
				// `http://localhost:8500/api/user/me`,
				`https://drab-jade-bison-cuff.cyclic.app/api/user/me`,
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
				// `http://localhost:8500/api/user/users`,
				`https://drab-jade-bison-cuff.cyclic.app//api/user/users`,
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
				// `http://localhost:8500/api/user/admin`,
				`https://drab-jade-bison-cuff.cyclic.app/api/user/admin`,
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

export const editUser = ({id, token, values}) => {

	return async (dispatch) => {
		try {
			const res = await axios.put(
				// `http://localhost:8500/api/user/edit/${id}`,
				`https://drab-jade-bison-cuff.cyclic.app/api/user/edit/${id}`,
				values,
				{
					headers: {
						Authorization:`Bearer ${token}`,
					}
				}
			)

			editAdminStart()
			dispatch(editAdminSuccess(res.data.data))
			return res;
		} catch (error) {
			dispatch(editAdminFail(error.response.data.error))
		}
	}
}