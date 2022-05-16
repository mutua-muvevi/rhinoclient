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


export const editShipment = () => ({
	type: shipmentTypes.POST_START,
})

export const editShipmentSuccess = (shipment) => ({
	type: shipmentTypes.POST_SUCCESS,
	payload: shipment,
})

export const editShipmentFail = (errMessage) => ({
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
				"http://localhost:7000/api/shipping/all"
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
				`http://localhost:7000/api/shipping/item/${id}`
			)
			getOneShipment()
			dispatch(getOneShipmentSuccess(res.data.data))
		} catch (error) {
			dispatch(getOneShipmentFail(error.response.data.error))
		}
	}
}

export const postAShipment = (values, token) => {
	return async (dispatch) => {
		try {
			const res = await axios.post(
				`http://localhost:7000/api/shipping/post`,
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
				`http://localhost:7000/api/shipping/item/update`,
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
				`http://localhost:7000/api/shipping/event/update`,
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