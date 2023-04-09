import axios from "axios";
import quotationTypes from "./quotationtypes";

export const gettingQuotation = () => ({
	type: quotationTypes.GET_ALL_QUOTATION_START,
})

export const getAllQuotationSuccess = (storage) => ({
	type: quotationTypes.GET_ALL_QUOTATION_SUCCESS,
	payload: storage,
})

export const getAllQuotationFail = (errMessage) => ({
	type: quotationTypes.GET_ALL_QUOTATION_FAIL,
	payload: errMessage,
})



export const postingQuotation = () => ({
	type: quotationTypes.POST_QUOTATION_START,
})

export const postQuotationSuccess = (values) => ({
	type: quotationTypes.POST_QUOTATION_SUCCESS,
	payload: values,
})

export const postQuotationFail = (errMessage) => ({
	type: quotationTypes.POST_QUOTATION_FAIL,
	payload: errMessage,
})



export const getQuotation = (token) => {
	return async (dispatch) => {
		try {
			const res = await axios.get(
				// "http://localhost:8500/api/quotation/all",
				"https://drab-jade-bison-cuff.cyclic.app/api/quotation/all",
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
			dispatch(getAllQuotationFail(error.response.data.error))
		}
	}
}


export const postQuotation = (values) => {
	return async (dispatch) => {
		try {
			const res = await axios.post(
				// `http://localhost:8500/api/quotation/post`,
				`https://drab-jade-bison-cuff.cyclic.app/api/quotation/post`,
				values
				)
			
			postingQuotation()
			dispatch(postQuotationSuccess(res.data.data))
		} catch (error) {
			dispatch(postQuotationFail(error.response.data.error))
		}
	}
}

//delete quotation