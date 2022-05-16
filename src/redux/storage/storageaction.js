import storageTypes from "./storagetypes";
import axios from "axios";

export const getAllStorage = () => ({
	type: storageTypes.GET_ALL_START,
})

export const getAllStorageSuccess = (shipment) => ({
	type: storageTypes.GET_ALL_SUCCESS,
	payload: shipment,
})

export const getAllStorageFail = (errMessage) => ({
	type: storageTypes.GET_ALL_FAIL,
	payload: errMessage,
})


export const getOneStorage = () => ({
	type: storageTypes.GET_ONE_START,
})

export const getOneStorageSuccess = (shipment) => ({
	type: storageTypes.GET_ONE_SUCCESS,
	payload: shipment,
})

export const getOneStorageFail = (errMessage) => ({
	type: storageTypes.GET_ONE_FAIL,
	payload: errMessage,
})



export const postStorage = () => ({
	type: storageTypes.POST_START,
})

export const postStorageSuccess = (shipment) => ({
	type: storageTypes.POST_SUCCESS,
	payload: shipment,
})

export const postStorageFail = (errMessage) => ({
	type: storageTypes.POST_FAIL,
	payload: errMessage,
})


export const editStorage = () => ({
	type: storageTypes.POST_START,
})

export const editStorageSuccess = (shipment) => ({
	type: storageTypes.POST_SUCCESS,
	payload: shipment,
})

export const editStorageFail = (errMessage) => ({
	type: storageTypes.POST_FAIL,
	payload: errMessage,
})




export const getStorage = (token) => {
	return async (dispatch) => {
		try {
			const res = await axios.get(
				`http://localhost:7000/api/storage/all`,
				{
					headers: {
						"Content-Type": "application/json",
						Authorization:`Bearer ${token}`
					},
				}
			)
			getAllStorage()
			dispatch(getAllStorageSuccess(res.data.data))
		} catch (error) {
			dispatch(getAllStorageFail(error.response.data.error))
		}
	}
}

export const getSingleStorage = (id) => {
	return async (dispatch) => {
		try {
			const res = await axios.get(
				`http://localhost:7000/api/storage/item/${id}`
			)
			getOneStorage()
			dispatch(getOneStorageSuccess(res.data.data))
		} catch (error) {
			dispatch(getOneStorageFail(error.response.data.error))
		}
	}
}

export const postAStorage = (values, token) => {
	return async (dispatch) => {
		try {
			const res = await axios.post(
				`http://localhost:7000/api/storage/post`,
				values,
				{
					headers: {
						"Content-Type": "application/json",
						Authorization:`Bearer ${token}`
					},
				}
				)
			
			postStorage()
			dispatch(postStorageSuccess(res.data.data))
		} catch (error) {
			dispatch(postStorageFail(error.response.data.error))
		}
	}
}

export const editAStorage = (values, token) => {
	return async (dispatch) => {
		try {
			const res = await axios.put(
				`http://localhost:7000/api/storage/item/update`,
				values,
				{
					headers: {
						"Content-Type": "application/json",
						Authorization:`Bearer ${token}`
					},
				}
				)
			
				editStorage()
			dispatch(editStorageSuccess(res.data.data))
		} catch (error) {
			dispatch(editStorageFail(error.response.data.error))
		}
	}
}
