import axios from "axios";
import productQuotationTypes from "./productquotationtypes";

export const getProductQuotationStart = () => ({
	type: productQuotationTypes.GET_PRODUCT_QUOTATION,
})

export const getProductQuotationSuccess = (productQuotation) => ({
	type: productQuotationTypes.GET_PRODUCT_QUOTATION_SUCCESS,
	payload: productQuotation,
})

export const getProductQuotationFail = (errMessage) => ({
	type: productQuotationTypes.GET_PRODUCT_QUOTATION_FAIL,
	payload: errMessage,
})


export const postProductQuotationStart = () => ({
	type: productQuotationTypes.GET_PRODUCT_QUOTATION,
})

export const postProductQuotationSuccess = (productQuotation) => ({
	type: productQuotationTypes.GET_PRODUCT_QUOTATION_SUCCESS,
	payload: productQuotation,
})

export const postProductQuotationFail = (errMessage) => ({
	type: productQuotationTypes.GET_PRODUCT_QUOTATION_FAIL,
	payload: errMessage,
})


export const getProductQuotations = () => {
	return async (dispatch) => {
		try {
			const res = await axios.get(
				"http://localhost:7000/api/productquotation/all"
			)
			getProductQuotationStart()
			dispatch(getProductQuotationSuccess(res.data.data))
		} catch (error) {
			dispatch(getProductQuotationFail(error.message))
		}
	}
}


export const  postProductQuotation = (values) => {
	return async (dispatch) => {
		try {
			const res = await axios.post(
				`http://localhost:7000/api/shipping/post`,
				values,
				{
					headers: {
						"Content-Type": "application/json",
					},
				}
				)
			
			postProductQuotationStart()
			dispatch(postProductQuotationSuccess(res.data.data))
		} catch (error) {
			dispatch(postProductQuotationFail(error.response.data.error))
		}
	}
}
