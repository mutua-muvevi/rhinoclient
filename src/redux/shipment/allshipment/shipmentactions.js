import shipmentTypes from "./shipmenttypes";
import axios from "axios";

export const fetchCollectionsStart = () => ({
  type: shipmentTypes.START,
})

export const fetchCollectionsSuccess = (shipment) => ({
  type: shipmentTypes.SUCCESS,
  payload: shipment,
})

export const fetchCollectionsFail = (errMessage) => ({
  type: shipmentTypes.FAIL,
  payload: errMessage,
})

export const getShipment = () => {
	return async (dispatch) => {
		try {
			const res = await axios.get(
				"https://rhinojonapi.herokuapp.com/api/shipping/all"
			)
			fetchCollectionsStart()
			dispatch(fetchCollectionsSuccess(res.data.data))
		} catch (error) {
			dispatch(fetchCollectionsFail(error.message))
		}
	}
}