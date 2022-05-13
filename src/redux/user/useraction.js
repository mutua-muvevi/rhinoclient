import userTypes from "./usertypes";
import axios from "axios"

export const fetchUserStart = () => ({
	type: userTypes.START_FETCH_USER
})

export const fetchUserSuccess = (user) => ({
	type: userTypes.SUCCESS_FETCH_USER,
	// loading: false,
	// authenticated: true,
	payload: user,
})

export const fetchUserFail = (errMessage) => ({
	type: userTypes.FAIL_FETCH_USER,
	// loading: false,
	// authenticated: false,
	payload: errMessage,
})

export const fetchUser = (token) => {
	console.log("THE TOKEN WE GET IS", token)
	return async (dispatch) => {
		try {
			const res = await axios.get(
				`https://localhost:7000/api/user/me`,
				{
					headers: {
						Authorization:`Bearer ${token}`,
					}
				}
			)
			// console.log("The user dispatch", token)
			fetchUserStart()
			dispatch(fetchUserSuccess(res.data.data))
			console.log("THE RES UIS", res)
		} catch (error) {
			dispatch(fetchUserFail(error.response))
			console.log("ERR Data from user", error.message)
			debugger
		}
	}
}