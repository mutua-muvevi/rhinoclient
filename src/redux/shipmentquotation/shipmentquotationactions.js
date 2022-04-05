import shipmentQuotationTypes from "./shipmentquotationtypes";
import axios from "axios";

export const fetchCollectionsStart = () => ({
	type: shipmentQuotationTypes.START,
})

export const fetchCollectionsSuccess = (shipment) => ({
	type: shipmentQuotationTypes.SUCCESS,
	payload: shipment,
})

export const fetchCollectionsFail = (errMessage) => ({
	type: shipmentQuotationTypes.FAIL,
	payload: errMessage,
})

export const getShipment = () => {
	return async (dispatch) => {
		try {
			const res = await axios.get(
				"https://rhinojonapi.herokuapp.com/api/shipmentquotation/all"
			)
			fetchCollectionsStart()
			dispatch(fetchCollectionsSuccess(res.data.data))
		} catch (error) {
			dispatch(fetchCollectionsFail(error.message))
		}
	}
}