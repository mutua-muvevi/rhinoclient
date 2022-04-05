import storageQuotationTypes from "./storagequotationtypes";
import axios from "axios";

export const fetchCollectionsStart = () => ({
	type: storageQuotationTypes.START,
})

export const fetchCollectionsSuccess = (storage) => ({
	type: storageQuotationTypes.SUCCESS,
	payload: storage,
})

export const fetchCollectionsFail = (errMessage) => ({
	type: storageQuotationTypes.FAIL,
	payload: errMessage,
})

export const getShipment = () => {
	return async (dispatch) => {
		try {
			const res = await axios.get(
				"https://rhinojonapi.herokuapp.com/api/storage/all"
			)
			fetchCollectionsStart()
			dispatch(fetchCollectionsSuccess(res.data.data))
		} catch (error) {
			dispatch(fetchCollectionsFail(error.message))
		}
	}
}