import shipmentTypes from "./shipmenttypes";
import axios from "axios";

export const getAllShipment = () => ({
	type: shipmentTypes.GET_ALL_SHIPMENT_START,
});

export const getAllShipmentSuccess = (shipment) => ({
	type: shipmentTypes.GET_ALL_SHIPMENT_SUCCESS,
	payload: shipment,
});

export const getAllShipmentFail = (errMessage) => ({
	type: shipmentTypes.GET_ALL_SHIPMENT_FAIL,
	payload: errMessage,
});

export const getOneShipment = () => ({
	type: shipmentTypes.GET_ONE_SHIPMENT_START,
});

export const getOneShipmentSuccess = (shipment) => ({
	type: shipmentTypes.GET_ONE_SHIPMENT_SUCCESS,
	payload: shipment,
});

export const getOneShipmentFail = (errMessage) => ({
	type: shipmentTypes.GET_ONE_SHIPMENT_FAIL,
	payload: errMessage,
});

export const getShipmentByTrack = () => ({
	type: shipmentTypes.GET_SHIPMENT_BY_TRACKNO_START,
});

export const getShipmentByTrackSuccess = (shipment) => ({
	type: shipmentTypes.GET_SHIPMENT_BY_TRACKNO_SUCCESS,
	payload: shipment,
});

export const getShipmentByTrackFail = (errMessage) => ({
	type: shipmentTypes.GET_SHIPMENT_BY_TRACKNO_FAIL,
	payload: errMessage,
});

export const postShipment = () => ({
	type: shipmentTypes.POST_SHIPMENT_START,
});

export const postShipmentSuccess = (shipment) => ({
	type: shipmentTypes.POST_SHIPMENT_SUCCESS,
	payload: shipment,
});

export const postShipmentFail = (errMessage) => ({
	type: shipmentTypes.POST_SHIPMENT_FAIL,
	payload: errMessage,
});

export const editShipment = () => ({
	type: shipmentTypes.EDIT_SHIPMENT_START,
});

export const editShipmentSuccess = (shipment) => ({
	type: shipmentTypes.EDIT_SHIPMENT_SUCCESS,
	payload: shipment,
});

export const editShipmentFail = (errMessage) => ({
	type: shipmentTypes.EDIT_SHIPMENT_FAIL,
	payload: errMessage,
});

export const deleteShipmentStart = () => ({
	type: shipmentTypes.DELETE_SHIPMENT_START,
});

export const deleteShipmentSuccess = (shipment) => ({
	type: shipmentTypes.DELETE_SHIPMENT_SUCCESS,
	payload: shipment,
});

export const deleteShipmentFail = (errMessage) => ({
	type: shipmentTypes.DELETE_SHIPMENT_FAIL,
	payload: errMessage,
});

export const addEvent = () => ({
	type: shipmentTypes.ADD_SHIPMENT_EVENT_START,
});

export const addEventSuccess = (shipment) => ({
	type: shipmentTypes.ADD_SHIPMENT_EVENT_SUCCESS,
	payload: shipment,
});

export const addEventFail = (errMessage) => ({
	type: shipmentTypes.ADD_SHIPMENT_EVENT_FAIL,
	payload: errMessage,
});

export const setEventStart = () => ({
	type: shipmentTypes.SET_EVENT_START,
});

export const setEventSuccess = (event) => ({
	type: shipmentTypes.SET_EVENT_SUCCESS,
	payload: event,
});

export const setEventFail = (errMessage) => ({
	type: shipmentTypes.SET_EVENT_FAIL,
	payload: errMessage,
});

export const editEvent = () => ({
	type: shipmentTypes.EDIT_SHIPMENT_EVENT_START,
});

export const editEventSuccess = (shipment) => ({
	type: shipmentTypes.EDIT_SHIPMENT_EVENT_SUCCESS,
	payload: shipment,
});

export const editEventFail = (errMessage) => ({
	type: shipmentTypes.EDIT_SHIPMENT_EVENT_FAIL,
	payload: errMessage,
});

export const deleteEventStart = () => ({
	type: shipmentTypes.DELETE_SHIPMENT_EVENT_START,
});

export const deleteEventSuccess = (shipment) => ({
	type: shipmentTypes.DELETE_SHIPMENT_EVENT_SUCCESS,
	payload: shipment,
});

export const deleteEventFail = (errMessage) => ({
	type: shipmentTypes.DELETE_SHIPMENT_EVENT_FAIL,
	payload: errMessage,
});

export const getShipment = (token) => {
	return async (dispatch) => {
		try {
			const res = await axios.get(
				// "http://localhost:8500/api/shipping/all",
				"https://drab-jade-bison-cuff.cyclic.app/api/shipping/all",
				{
					headers: {
						"Content-Type": "application/json",
						Authorization: `Bearer ${token}`,
					},
				}
			);
			getAllShipment();
			dispatch(getAllShipmentSuccess(res.data.data));
		} catch (error) {
			dispatch(getAllShipmentFail(error.response.data.error));
		}
	};
};

export const getSingleShipment = (id) => {
	return async (dispatch) => {
		try {
			const res = await axios.get(
				// `http://localhost:8500/api/shipping/item/${id}`
				`https://drab-jade-bison-cuff.cyclic.app/api/shipping/item/${id}`
			);
			getOneShipment();
			dispatch(getOneShipmentSuccess(res.data.data));
		} catch (error) {
			dispatch(getOneShipmentFail(error.response.data.error));
		}
	};
};

export const getShipmentByTrackNo = (trackno) => {
	return async (dispatch) => {
		try {
			const res = await axios.post(
				// `http://localhost:8500/api/shipping/item/track`,
				`https://drab-jade-bison-cuff.cyclic.app/api/shipping/item/track`,
				trackno
			);
			getShipmentByTrack();
			dispatch(getShipmentByTrackSuccess(res.data.data));
			return res
		} catch (error) {
			dispatch(getShipmentByTrackFail(error.response.data.error));
			throw error
		}
	};
};

export const setShipment = (shipment) => {
	return (dispatch) => {
		try {
			dispatch(getOneShipmentSuccess(shipment))
		} catch (error) {
			dispatch(getOneShipmentFail(error))
		}
	}
}

export const postAShipment = (values, token) => {
	return async (dispatch) => {
		try {
			const res = await axios.post(
				// `http://localhost:8500/api/shipping/post`,
				`https://drab-jade-bison-cuff.cyclic.app/api/shipping/post`,
				values,
				{
					headers: {
						"Content-Type": "application/json",
						Authorization: `Bearer ${token}`,
					},
				}
			);

			postShipment();
			dispatch(postShipmentSuccess(res.data.data));
			return res
		} catch (error) {
			dispatch(postShipmentFail(error.response.data.error));
		}
	};
};

export const editAShipment = (values, token) => {
	return async (dispatch) => {
		try {
			const res = await axios.put(
				// `http://localhost:8500/api/shipping/item/update`,
				`https://drab-jade-bison-cuff.cyclic.app/api/shipping/item/update`,
				values,
				{
					headers: {
						"Content-Type": "application/json",
						Authorization: `Bearer ${token}`,
					},
				}
			);

			editShipment();
			dispatch(editShipmentSuccess(res.data.data));
			return res
		} catch (error) {
			dispatch(editShipmentFail(error.response.data.error));
			throw error?.response?.data?.error
		}
	};
};

//delete shipment
export const deleteShipment = (token, id) => {
	return async (dispatch) => {
		try {
			const res = await axios.delete(
				// `http://localhost:8500/api/shipping/delete/${id}`,
				`https://drab-jade-bison-cuff.cyclic.app/api/shipping/delete/${id}/`,
				{
					headers: {
						"Content-Type": "application/json",
						Authorization: `Bearer ${token}`,
					},
				}
			);

			const results = dispatch(deleteShipmentSuccess(res.data.data));
			console.log(results)
			return results
		} catch (error) {
			dispatch(deleteShipmentFail(error.response.data.error));
			throw error?.response?.data?.error
		}
	};
};

export const setEvent = (event) => {
	return (dispatch) => {
		try {
			dispatch(setEventSuccess(event))
		} catch (error) {
			dispatch(setEventFail(error))
		}
	}
}

export const postEvent = (values, token) => {
	return async (dispatch) => {
		try {
			const res = await axios.put(
				// `http://localhost:8500/api/shipping/event/add`,
				`https://drab-jade-bison-cuff.cyclic.app/api/shipping/event/add`,
				values,
				{
					headers: {
						"Content-Type": "application/json",
						Authorization: `Bearer ${token}`,
					},
				}
			);
			addEvent();
			dispatch(addEventSuccess(res.data.data));
			return res;
		} catch (error) {
			dispatch(addEventFail(error.response.data.error));
		}
	};
};

//edit event
export const editTheEvent = (id, values, token) => {
	return async (dispatch) => {
		try {
			const res = await axios.put(
				// `http://localhost:8500/api/shipping/event/${id}/edit`,
				`https://drab-jade-bison-cuff.cyclic.app/api/shipping/event/${id}/edit`,
				values,
				{
					headers: {
						"Content-Type": "application/json",
						Authorization: `Bearer ${token}`,
					},
				}
			);
			editEvent();
			dispatch(editEventSuccess(res.data.data));
			return res;
		} catch (error) {
			dispatch(editEventFail(error.response.data.error));
		}
	};
};

//delete event
export const deleteEvent = (token, trackno, id) => {
	return async (dispatch) => {
		try {
			const res = await axios.delete(
				// `http://localhost:8500/api/shipping/event/${trackno}/delete/${id}`,
				`https://drab-jade-bison-cuff.cyclic.app/api/shipping/event/${trackno}/delete/${id}`,
				{
					headers: {
						"Content-Type": "application/json",
						Authorization:`Bearer ${token}`
					},
				}
			)
			deleteEventStart()
			dispatch(deleteEventSuccess(res.data.data))
			return res
		} catch (error) {
			dispatch(deleteEventFail(error.response.data.error));
		}
	};
};
