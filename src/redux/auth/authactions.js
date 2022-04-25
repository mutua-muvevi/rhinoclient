import authTypes from "./authtypes"
import axios from "axios"

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