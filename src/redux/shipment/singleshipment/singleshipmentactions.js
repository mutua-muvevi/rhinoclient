import singleshipmentTypes from "./singleshipmenttypes";
import axios from "axios";

export const fetchCollectionsStart = () => ({
	type: singleshipmentTypes.START,
})

export const fetchCollectionsSuccess = (shipment) => ({
	type: singleshipmentTypes.SUCCESS,
	payload: shipment,
})

export const fetchCollectionsFail = (errMessage) => ({
	type: singleshipmentTypes.FAIL,
	payload: errMessage,
})

export const getSingleShipment = (id) => {
	return async (dispatch) => {
		try {
			const res = await axios.get(
				`https://rhinojonapi.herokuapp.com/api/shipping/item/${id}`
			)
			fetchCollectionsStart()
			dispatch(fetchCollectionsSuccess(res.data.data))
		} catch (error) {
			dispatch(fetchCollectionsFail(error.message))
		}
	}
}