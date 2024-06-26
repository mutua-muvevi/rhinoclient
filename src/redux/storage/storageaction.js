import axios from "axios";
import storageTypes from "./storagetypes";

export const getAllStorage = () => ({
	type: storageTypes.GET_ALL_STORAGE_START,
})

export const getAllStorageSuccess = (storage) => ({
	type: storageTypes.GET_ALL_STORAGE_SUCCESS,
	payload: storage,
})

export const getAllStorageFail = (errMessage) => ({
	type: storageTypes.GET_ALL_STORAGE_FAIL,
	payload: errMessage,
})


export const getOneStorage = () => ({
	type: storageTypes.GET_ONE_STORAGE_START,
})

export const getOneStorageSuccess = (storage) => ({
	type: storageTypes.GET_ONE_STORAGE_SUCCESS,
	payload: storage,
})

export const getOneStorageFail = (errMessage) => ({
	type: storageTypes.GET_ONE_STORAGE_FAIL,
	payload: errMessage,
})


export const getStorageByTrack = () => ({
	type: storageTypes.GET_STORAGE_BY_TRACKNO_START,
})

export const getStorageByTrackSuccess = (storage) => ({
	type: storageTypes.GET_STORAGE_BY_TRACKNO_SUCCESS,
	payload: storage,
})

export const getStorageByTrackFail = (errMessage) => ({
	type: storageTypes.GET_STORAGE_BY_TRACKNO_FAIL,
	payload: errMessage,
})


export const postStorage = () => ({
	type: storageTypes.POST_STORAGE_START,
})

export const postStorageSuccess = (storage) => ({
	type: storageTypes.POST_STORAGE_SUCCESS,
	payload: storage,
})

export const postStorageFail = (errMessage) => ({
	type: storageTypes.POST_STORAGE_FAIL,
	payload: errMessage,
})


export const editStorage = () => ({
	type: storageTypes.EDIT_STORAGE_START,
})

export const editStorageSuccess = (storage) => ({
	type: storageTypes.EDIT_STORAGE_SUCCESS,
	payload: storage,
})

export const editStorageFail = (errMessage) => ({
	type: storageTypes.EDIT_STORAGE_FAIL,
	payload: errMessage,
})


export const deleteStorageStart = () => ({
	type: storageTypes.DELETE_STORAGE_START,
})

export const deleteStorageSuccess = (storage) => ({
	type: storageTypes.DELETE_STORAGE_SUCCESS,
	payload: storage,
})

export const deleteStorageFail = (errMessage) => ({
	type: storageTypes.DELETE_STORAGE_FAIL,
	payload: errMessage,
})


export const getStorage = (token) => {
	return async (dispatch) => {
		try {
			const res = await axios.get(
				// `http://localhost:8500/api/storage/all`,
				`https://drab-jade-bison-cuff.cyclic.app/api/storage/all`,
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
				// `http://localhost:8500/api/storage/item/${id}`
				`https://drab-jade-bison-cuff.cyclic.app/api/storage/item/${id}`
			)
			getOneStorage()
			dispatch(getOneStorageSuccess(res.data.data))
		} catch (error) {
			dispatch(getOneStorageFail(error.response.data.error))
		}
	}
}

export const getStorageByTrackNo = (trackno) => {
	return async (dispatch) => {
		try {
			const res = await axios.post(
				// `http://localhost:8500/api/storage/item/track`,
				`https://drab-jade-bison-cuff.cyclic.app/api/storage/item/track`,
				trackno
				)
			getStorageByTrack()
			dispatch(getStorageByTrackSuccess(res.data.data))
			return res
		} catch (error) {
			dispatch(getStorageByTrackFail(error.response.data.error))
			throw error
		}
	}
}

export const setStorage = (storage) => {
	return (dispatch) => {
		try {
			dispatch(getOneStorageSuccess(storage))
		} catch (error) {
			dispatch(getOneStorageFail(error))
		}
	}
}

export const postAStorage = (values, token) => {
	return async (dispatch) => {
		try {
			const res = await axios.post(
				// `http://localhost:8500/api/storage/post`,
				`https://drab-jade-bison-cuff.cyclic.app/api/storage/post`,
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
			return res;
		} catch (error) {
			dispatch(postStorageFail(error.response.data.error))
			throw error?.response?.data?.error
		}
	}
}

export const editAStorage = (values, token) => {
	return async (dispatch) => {
		try {
			const res = await axios.put(
				// `http://localhost:8500/api/storage/update/${values._id}`,
				`https://drab-jade-bison-cuff.cyclic.app/api/storage/update/${values._id}`,
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
				return res;
			} catch (error) {
			dispatch(editStorageFail(error.response))
		}
	}
}

//delete storge
export const deleteStorage = (token, id) => {
	return async (dispatch) => {
		try {
			const res = await axios.delete(
				// `http://localhost:8500/api/storage/delete/${id}`,
				`https://drab-jade-bison-cuff.cyclic.app/api/storage/delete/${id}/`,
				{
					headers: {
						"Content-Type": "application/json",
						Authorization: `Bearer ${token}`,
					},
				}
			);
			dispatch(deleteStorageStart())
			dispatch(deleteStorageSuccess(res.data.data))
			return res;
		} catch (error) {
			dispatch(deleteStorageFail(error.response))
		}
	}
}