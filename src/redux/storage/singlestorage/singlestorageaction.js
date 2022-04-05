import singleStorageTypes from "./singlestoragetypes";
import axios from "axios";

export const fetchCollectionsStart = () => ({
	type: singleStorageTypes.START,
})

export const fetchCollectionsSuccess = (storage) => ({
	type: singleStorageTypes.SUCCESS,
	payload: storage,
})

export const fetchCollectionsFail = (errMessage) => ({
	type: singleStorageTypes.FAIL,
	payload: errMessage,
})

export const getSingleStorage = (id) => {
	return async (dispatch) => {
		try {
			const res = await axios.get(
				`https://rhinojonapi.herokuapp.com/api/storage/item/${id}`
			)
			fetchCollectionsStart()
			dispatch(fetchCollectionsSuccess(res.data.data))
		} catch (error) {
			dispatch(fetchCollectionsFail(error.message))
		}
	}
}