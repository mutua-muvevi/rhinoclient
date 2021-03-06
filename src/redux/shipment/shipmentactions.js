import shipmentTypes from "./shipmenttypes";
import axios from "axios";

export const getAllShipment = () => ({
	type: shipmentTypes.GET_ALL_SHIPMENT_START,
})

export const getAllShipmentSuccess = (shipment) => ({
	type: shipmentTypes.GET_ALL_SHIPMENT_SUCCESS,
	payload: shipment,
})

export const getAllShipmentFail = (errMessage) => ({
	type: shipmentTypes.GET_ALL_SHIPMENT_FAIL,
	payload: errMessage,
})


export const getOneShipment = () => ({
	type: shipmentTypes.GET_ONE_SHIPMENT_START,
})

export const getOneShipmentSuccess = (shipment) => ({
	type: shipmentTypes.GET_ONE_SHIPMENT_SUCCESS,
	payload: shipment,
})

export const getOneShipmentFail = (errMessage) => ({
	type: shipmentTypes.GET_ONE_SHIPMENT_FAIL,
	payload: errMessage,
})


export const getShipmentByTrack = () => ({
	type: shipmentTypes.GET_SHIPMENT_BY_TRACKNO_START,
})

export const getShipmentByTrackSuccess = (shipment) => ({
	type: shipmentTypes.GET_SHIPMENT_BY_TRACKNO_SUCCESS,
	payload: shipment,
})

export const getShipmentByTrackFail = (errMessage) => ({
	type: shipmentTypes.GET_SHIPMENT_BY_TRACKNO_FAIL,
	payload: errMessage,
})



export const postShipment = () => ({
	type: shipmentTypes.POST_SHIPMENT_START,
})

export const postShipmentSuccess = (shipment) => ({
	type: shipmentTypes.POST_SHIPMENT_SUCCESS,
	payload: shipment,
})

export const postShipmentFail = (errMessage) => ({
	type: shipmentTypes.POST_SHIPMENT_FAIL,
	payload: errMessage,
})


export const editShipment = () => ({
	type: shipmentTypes.POST_SHIPMENT_START,
})

export const editShipmentSuccess = (shipment) => ({
	type: shipmentTypes.POST_SHIPMENT_SUCCESS,
	payload: shipment,
})

export const editShipmentFail = (errMessage) => ({
	type: shipmentTypes.POST_SHIPMENT_FAIL,
	payload: errMessage,
})



export const addEvent = () => ({
	type: shipmentTypes.ADD_SHIPMENT_EVENT_START,
})

export const addEventSuccess = (shipment) => ({
	type: shipmentTypes.ADD_SHIPMENT_EVENT_SUCCESS,
	payload: shipment,
})

export const addEventFail = (errMessage) => ({
	type: shipmentTypes.ADD_SHIPMENT_EVENT_FAIL,
	payload: errMessage,
})


export const getShipment = (token) => {
	return async (dispatch) => {
		try {
			const res = await axios.get(
				"https://rhinojonapi.herokuapp.com/api/shipping/all",
				{
					headers: {
						"Content-Type": "application/json",
						Authorization:`Bearer ${token}`
					},
				}
			)
			getAllShipment()
			dispatch(getAllShipmentSuccess(res.data.data))
		} catch (error) {
			dispatch(getAllShipmentFail(error.response.data.error))
		}
	}
}

export const getSingleShipment = (id) => {
	return async (dispatch) => {
		try {
			const res = await axios.get(
				`https://rhinojonapi.herokuapp.com/api/shipping/item/${id}`
			)
			getOneShipment()
			dispatch(getOneShipmentSuccess(res.data.data))
		} catch (error) {
			dispatch(getOneShipmentFail(error.response.data.error))
		}
	}
}

export const getShipmentByTrackNo = (trackno) => {
	return async (dispatch) => {
		try {
			const res = await axios.post(
				`https://rhinojonapi.herokuapp.com/api/shipping/item/track`,
				trackno
				)
			getShipmentByTrack()
			dispatch(getShipmentByTrackSuccess(res.data.data))
		} catch (error) {
			dispatch(getShipmentByTrackFail(error.response.data.error))
		}
	}
}

export const postAShipment = (values, token) => {
	return async (dispatch) => {
		try {
			const res = await axios.post(
				`https://rhinojonapi.herokuapp.com/api/shipping/post`,
				values,
				{
					headers: {
						"Content-Type": "application/json",
						Authorization:`Bearer ${token}`
					},
				}
				)
			
			postShipment()
			dispatch(postShipmentSuccess(res.data.data))
		} catch (error) {
			dispatch(postShipmentFail(error.response.data.error))
		}
	}
}

export const editAShipment = (values, token) => {
	return async (dispatch) => {
		try {
			const res = await axios.put(
				`https://rhinojonapi.herokuapp.com/api/shipping/item/update`,
				values,
				{
					headers: {
						"Content-Type": "application/json",
						Authorization:`Bearer ${token}`
					},
				}
				)
			
				editShipment()
			dispatch(editShipmentSuccess(res.data.data))
		} catch (error) {
			dispatch(editShipmentFail(error.response.data.error))
		}
	}
}

export const postEvent = (values, token) => {
	return async (dispatch) => {
		try {
			const res = await axios.put(
				`https://rhinojonapi.herokuapp.com/api/shipping/event/update`,
				values,
				{
					headers: {
						"Content-Type": "application/json",
						Authorization:`Bearer ${token}`
					},
				}
			)
			addEvent()
			dispatch(addEventSuccess(res.data.data))
		} catch (error) {
			dispatch(addEventFail(error.response.data.error))
		}
	}
}