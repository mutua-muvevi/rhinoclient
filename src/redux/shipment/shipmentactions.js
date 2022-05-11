import shipmentTypes from "./shipmenttypes";
import axios from "axios";

export const getAllShipment = () => ({
	type: shipmentTypes.GET_ALL_START,
})

export const getAllShipmentSuccess = (shipment) => ({
	type: shipmentTypes.GET_ALL_SUCCESS,
	payload: shipment,
})

export const getAllShipmentFail = (errMessage) => ({
	type: shipmentTypes.GET_ALL_FAIL,
	payload: errMessage,
})


export const getOneShipment = () => ({
	type: shipmentTypes.GET_ONE_START,
})

export const getOneShipmentSuccess = (shipment) => ({
	type: shipmentTypes.GET_ONE_SUCCESS,
	payload: shipment,
})

export const getOneShipmentFail = (errMessage) => ({
	type: shipmentTypes.GET_ONE_FAIL,
	payload: errMessage,
})



export const postShipment = () => ({
	type: shipmentTypes.POST_START,
})

export const postShipmentSuccess = (shipment) => ({
	type: shipmentTypes.POST_SUCCESS,
	payload: shipment,
})

export const postShipmentFail = (errMessage) => ({
	type: shipmentTypes.POST_FAIL,
	payload: errMessage,
})



export const addEvent = () => ({
	type: shipmentTypes.ADD_EVENT_START,
})

export const addEventSuccess = (shipment) => ({
	type: shipmentTypes.ADD_EVENT_SUCCESS,
	payload: shipment,
})

export const addEventFail = (errMessage) => ({
	type: shipmentTypes.ADD_EVENT_FAIL,
	payload: errMessage,
})


export const getShipment = () => {
	return async (dispatch) => {
		try {
			const res = await axios.get(
				"https://rhinojonapi.herokuapp.com/api/shipping/all"
			)
			getAllShipment()
			dispatch(getAllShipmentSuccess(res.data.data))
		} catch (error) {
			dispatch(getAllShipmentFail(error.message))
		}
	}
}