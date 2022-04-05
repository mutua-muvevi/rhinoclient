import enquiriesTypes from "./enquiriestypes";
import axios from "axios";

export const fetchCollectionsStart = () => ({
	type: enquiriesTypes.START,
})

export const fetchCollectionsSuccess = (quotation) => ({
	type: enquiriesTypes.SUCCESS,
	payload: quotation,
})

export const fetchCollectionsFail = (errMessage) => ({
	type: enquiriesTypes.FAIL,
	payload: errMessage,
})

export const getProductQuotations = () => {
	return async (dispatch) => {
		try {
			const res = await axios.get(
				"https://rhinojonapi.herokuapp.com/api/quotation/all"
			)
			fetchCollectionsStart()
			dispatch(fetchCollectionsSuccess(res.data.data))
		} catch (error) {
			dispatch(fetchCollectionsFail(error.message))
		}
	}
}