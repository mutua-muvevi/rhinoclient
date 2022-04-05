import productQuotationTypes from "./productquotationtypes";
import axios from "axios";

export const fetchCollectionsStart = () => ({
	type: productQuotationTypes.START,
})

export const fetchCollectionsSuccess = (productQuotation) => ({
	type: productQuotationTypes.SUCCESS,
	payload: productQuotation,
})

export const fetchCollectionsFail = (errMessage) => ({
	type: productQuotationTypes.FAIL,
	payload: errMessage,
})

export const getProductQuotations = () => {
	return async (dispatch) => {
		try {
			const res = await axios.get(
				"https://rhinojonapi.herokuapp.com/api/productquotation/all"
			)
			fetchCollectionsStart()
			dispatch(fetchCollectionsSuccess(res.data.data))
		} catch (error) {
			dispatch(fetchCollectionsFail(error.message))
		}
	}
}