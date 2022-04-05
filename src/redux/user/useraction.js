import userCollectionTypes from "./usertypes";
import axios from "axios"

export const fetchCollectionStart = () => ({
	type: userCollectionTypes.START_USER,
})

export const fetchCollectionSuccess = (tour) => ({
	type: userCollectionTypes.SUCCESS_USER,
	payload: tour,
})

export const fetchCollectionFail = (errMessage) => ({
	type: userCollectionTypes.FAIL_USER,
	payload: errMessage,
})

export const loadCurrentUser = (token) => {
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