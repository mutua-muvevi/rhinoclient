import authUserTypes from "./authtypes"
import axios from "axios"

export const fetchAuthorizedUser = () => ({
  type: authUserTypes.START_LOADING_USER,
})

export const fetchSuccessAuthUser = (token) => ({
  type: authUserTypes.SUCCESS_CURRENT_USER,
  payload: token,
})

export const fetchFailAuthUser = (errMessage) => ({
  type: authUserTypes.FAIL_CURRENT_USER,
  payload: errMessage,
})

export const loadAuthUser = (formData) => {
	return async (dispatch) => {
		try {
			if (!formData.fullName) {
				const res = await axios.post(
				`https://rhinojonapi.herokuapp.com/api/user/register`,
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
				`https://rhinojonapi.herokuapp.com/api/user/login`,
				formData,
				{
					headers: {
					"Content-Type": "application/json",
					},
				}
				)
				fetchAuthorizedUser()
				dispatch(fetchSuccessAuthUser(res.data.data.user))
			}
		} catch (error) {
			dispatch(fetchFailAuthUser(error.message))
		}
	}
}