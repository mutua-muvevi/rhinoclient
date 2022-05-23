import axios from "axios";
import storageQuotationTypes from "./quotationtypes";

export const gettingQuotation = () => ({
	type: storageQuotationTypes.GET_ALL_QUOTATION_START,
})

export const getAllQuotationSuccess = (storage) => ({
	type: storageQuotationTypes.GET_ALL_QUOTATION_SUCCESS,
	payload: storage,
})

export const getAllQuotationFail = (errMessage) => ({
	type: storageQuotationTypes.GET_ALL_QUOTATION_FAIL,
	payload: errMessage,
})



export const postingQuotation = () => ({
	type: storageQuotationTypes.POST_QUOTATION_START,
})

export const postQuotationSuccess = (values) => ({
	type: storageQuotationTypes.POST_QUOTATION_SUCCESS,
	payload: values,
})

export const postQuotationFail = (errMessage) => ({
	type: storageQuotationTypes.POST_QUOTATION_FAIL,
	payload: errMessage,
})



export const getQuotation = (token) => {
	return async (dispatch) => {
		try {
			const res = await axios.get(
				"http://localhost:7000/api/quotation/all",
				{
					headers: {
						"Content-Type": "application/json",
						Authorization:`Bearer ${token}`
					},
				}
			)
			gettingQuotation()
			dispatch(getAllQuotationSuccess(res.data.data))
		} catch (error) {
			dispatch(getAllQuotationFail(error.message))
		}
	}
}


export const postQuotation = (values) => {
	return async (dispatch) => {
		try {
			const res = await axios.post(
				`http://localhost:7000/api/quotation/post`,
				values
				)
			
			postingQuotation()
			dispatch(postQuotationSuccess(res.data.data))
		} catch (error) {
			dispatch(postQuotationFail(error.response.data.error))
		}
	}
}