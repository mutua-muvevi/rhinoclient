import axios from "axios";
import storageQuotationTypes from "./storagequotationtypes";

export const getingStorageQuotation = () => ({
	type: storageQuotationTypes.GET_ALL_STORAGE_QUOTATION_START,
})

export const getAllStorageQuotationSuccess = (storage) => ({
	type: storageQuotationTypes.GET_ALL_STORAGE_QUOTATION_SUCCESS,
	payload: storage,
})

export const getAllStorageQuotationFail = (errMessage) => ({
	type: storageQuotationTypes.GET_ALL_STORAGE_QUOTATION_FAIL,
	payload: errMessage,
})



export const postingStorageQuotation = () => ({
	type: storageQuotationTypes.POST_STORAGE_QUOTATION_START,
})

export const postStorageQuotationSuccess = (values) => ({
	type: storageQuotationTypes.POST_STORAGE_QUOTATION_SUCCESS,
	payload: values,
})

export const postStorageQuotationFail = (errMessage) => ({
	type: storageQuotationTypes.POST_STORAGE_QUOTATION_FAIL,
	payload: errMessage,
})



export const getStorageQuotation = (token) => {
	return async (dispatch) => {
		try {
			const res = await axios.get(
				"http://localhost:7000/api/storagequotation/all",
				{
					headers: {
						"Content-Type": "application/json",
						Authorization:`Bearer ${token}`
					},
				}
			)
			getingStorageQuotation()
			dispatch(getAllStorageQuotationSuccess(res.data.data))
		} catch (error) {
			dispatch(getAllStorageQuotationFail(error.message))
		}
	}
}


export const postStorageQuotation = (values) => {
	return async (dispatch) => {
		try {
			const res = await axios.post(
				`http://localhost:7000/api/storagequotation/post`,
				values
				)
			
			postingStorageQuotation()
			dispatch(postStorageQuotationSuccess(res.data.data))
		} catch (error) {
			dispatch(postStorageQuotationFail(error.response.data.error))
		}
	}
}