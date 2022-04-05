import userTypes from "./usertypes";
import axios from "axios"

export const fetchCollectionStart = () => ({
	type: userTypes.START_USER,
})

export const fetchCollectionSuccess = (user) => ({
	type: userTypes.SUCCESS_USER,
	payload: user,
})

export const fetchCollectionFail = (errMessage) => ({
	type: userTypes.FAIL_USER,
	payload: errMessage,
})

export const loadUser = (token) => {
	return async (dispatch) => {
		try {
			const res = await axios.get(
					`https://rhinojonapi.herokuapp.com/api/user/me`,
					{
						headers: {
							authorization: `Bearer ${token}`,
						},
					}
				)
				fetchCollectionStart()
				dispatch(fetchCollectionSuccess(res.data.data))
		} catch (error) {
			dispatch(fetchCollectionFail(error.message))
		}
	}
}