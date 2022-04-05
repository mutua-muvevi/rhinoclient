import allStorageTypes from "./allstoragetypes";
import axios from "axios";

export const fetchCollectionsStart = () => ({
	type: allStorageTypes.START,
})

export const fetchCollectionsSuccess = (shipment) => ({
	type: allStorageTypes.SUCCESS,
	payload: shipment,
})

export const fetchCollectionsFail = (errMessage) => ({
	type: allStorageTypes.FAIL,
	payload: errMessage,
})

export const getSingleStorage = () => {
	return async (dispatch) => {
		try {
			const res = await axios.get(
				`https://rhinojonapi.herokuapp.com/api/storage/all`
			)
			fetchCollectionsStart()
			dispatch(fetchCollectionsSuccess(res.data.data))
		} catch (error) {
			dispatch(fetchCollectionsFail(error.message))
		}
	}
}