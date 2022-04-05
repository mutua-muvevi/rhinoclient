import contactTypes from "./contacttypes";
import axios from "axios";

export const fetchCollectionsStart = () => ({
	type: contactTypes.START,
})

export const fetchCollectionsSuccess = (contact) => ({
	type: contactTypes.SUCCESS,
	payload: contact,
})

export const fetchCollectionsFail = (errMessage) => ({
	type: contactTypes.FAIL,
	payload: errMessage,
})

export const getProductQuotations = () => {
	return async (dispatch) => {
		try {
			const res = await axios.get(
				"https://rhinojonapi.herokuapp.com/api/contact/all"
			)
			fetchCollectionsStart()
			dispatch(fetchCollectionsSuccess(res.data.data))
		} catch (error) {
			dispatch(fetchCollectionsFail(error.message))
		}
	}
}