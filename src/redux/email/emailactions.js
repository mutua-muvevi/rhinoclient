import axios from "axios";
import emailTypes from "./emailtypes";

export const startSendingEmail = () => ({
	type: emailTypes.SENDING_EMAIL_START,
})

export const sendingSuccessEmail = (contact) => ({
	type: emailTypes.SENDING_EMAIL_SUCCESS,
	payload: contact,
})

export const sendingFailEmail = (errMessage) => ({
	type: emailTypes.SENDING_EMAIL_FAIL,
	payload: errMessage,
})


export const gettingEmails = () => ({
	type: emailTypes.GET_ALL_EMAILS_START,
})

export const getEmailSuccess = (contact) => ({
	type: emailTypes.GET_ALL_EMAILS_SUCCESS,
	payload: contact,
})

export const getEmailFail = (errMessage) => ({
	type: emailTypes.GET_ALL_EMAILS_FAIL,
	payload: errMessage,
})



export const sendEmail = (values) => {
	return async (dispatch) => {
		try {
			const res = await axios.post(
				"http://localhost:7000/api/email/post",
				values
			)
			startSendingEmail()
			dispatch(sendingSuccessEmail(res.data.data))
		} catch (error) {
			dispatch(sendingFailEmail(error.response.data.error))
		}
	}
}

export const getEmail = (token) => {
	return async (dispatch) => {
		try {
			const res = await axios.get(
				"http://localhost:7000/api/email/all",
				{
					headers: {
						"Content-Type": "application/json",
						Authorization:`Bearer ${token}`
					},
				}
			)
			gettingEmails()
			dispatch(getEmailSuccess(res.data.data))
		} catch (error) {
			dispatch(getEmailFail(error.response.data.error))
		}
	}
}