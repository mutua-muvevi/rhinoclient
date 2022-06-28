import contactTypes from "./contacttypes";
import axios from "axios";

export const startSending = () => ({
	type: contactTypes.SENDING_START,
})

export const sendingSuccess = (contact) => ({
	type: contactTypes.SENDING_SUCCESS,
	payload: contact,
})

export const sendingFail = (errMessage) => ({
	type: contactTypes.SENDING_FAIL,
	payload: errMessage,
})

export const sendContacts = (values) => {
	return async (dispatch) => {
		try {
			const res = await axios.post(
				"https://rhinojonapi.herokuapp.com/api/contact/post",
				values
			)
			startSending()
			dispatch(sendingSuccess(res.data.data))
		} catch (error) {
			dispatch(sendingFail(error.response.data.error))
		}
	}
}