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

export const fetchUser = (token) => {
	return async (dispatch) => {
		try {
			const res = await axios.get(
				`http://localhost:7000/api/user/me`,
				{
					headers: {
						Authorization:`Bearer ${token}`,
					}
				}
			)
			fetchUserStart()
			dispatch(fetchUserSuccess(res.data.data))
			// console.log("THE RES UIS", res)
		} catch (error) {
			dispatch(fetchUserFail(error.response))
			// console.log("THE ERROR IS", error.response)
		}
	}
}