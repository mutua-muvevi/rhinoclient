import userTypes from "./usertypes";
import axios from "axios"

export const fetchCollectionStart = (creds) => ({
	type: userTypes.START_USER,
	isFetching: true,
	isAuthenticated: false,
	creds
})

export const fetchCollectionSuccess = (user) => ({
	type: userTypes.SUCCESS_USER,
	isFetching: false,
	isAuthenticated: true,
	payload: user,
})

export const fetchCollectionFail = (errMessage) => ({
	type: userTypes.FAIL_USER,
	isFetching: false,
	isAuthenticated: false,
	payload: errMessage,
})

export const loadUser = (token) => {
	return async (dispatch) => {
		try {
			const res = await axios.get(
					`https://localhost:7000/api/user/me`,
					{
						headers: {
							authorization: `Bearer ${token}`,
						},
					}
				)
				fetchCollectionStart()
				dispatch(fetchCollectionSuccess(res.data.data))
		} catch (error) {
			dispatch(fetchCollectionFail(error.response.message))
		}
	}
}