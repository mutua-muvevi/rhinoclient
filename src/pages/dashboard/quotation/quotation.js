import { Box, Breadcrumbs, Link, Typography } from "@mui/material"
import HomeIcon from '@mui/icons-material/Home';
import ArticleIcon from '@mui/icons-material/Article';
import React, {useState, useEffect} from 'react';
import { styled } from "@mui/system";
import axios from "axios";
import QuotationTable from "./quotationTable/quotationTable";
import ProductQuotation from "./productQuotation/ProductQuotation"
import StorageQuotation from "./storageQuotation/storageQuotation";
import ShippingQuotation from "./shippingQuotation/shippingQuotation";

const StyledBreadCrumbs = styled(Breadcrumbs)(({theme}) => ({
	marginBottom: "20px"
}))


const DashQuotation = () => {
	
	const [quotation, setQuotation] = useState([])
	const [quotationError, setQuotationError] = useState(null)

	const [productQuotation, setProductQuotation] = useState([])
	const [productQuotatioError, setProductQuotationError] = useState(null)

	const [storageQuotation, setStorageQuotation] = useState([])
	const [storageQuotationError, setStorageQuotationError] = useState(null)

	const [shippingQuotation, setShippingQuotation] = useState([])
	const [shippingQuotationError, setShippingQuotationError] = useState(null)

	useEffect(() => {
		axios.get("https://rhinojohnbackend.herokuapp.com/api/quotation")
			.then((res) =>{ 
				setQuotation(res.data)
			})
			.catch(error => {
				setQuotationError(error.response)
			})
	}, []);

	useEffect(() => {
		axios.get("https://rhinojohnbackend.herokuapp.com/api/productquotation")
			.then((res) =>{ 
				setProductQuotation(res.data)
			})
			.catch(error => {
				setProductQuotationError(error.response)
			})
	}, []);

	useEffect(() => {
		axios.get("https://rhinojohnbackend.herokuapp.com/api/storagequotation")
			.then((res) =>{ 
				setStorageQuotation(res.data)
			})
			.catch(error => {
				setStorageQuotationError(error.response)
			})
	}, []);

	useEffect(() => {
		axios.get("https://rhinojohnbackend.herokuapp.com/api/logisticsquotation")
			.then((res) =>{ 
				setShippingQuotation(res.data)
			})
			.catch(error => {
				setShippingQuotationError(error.response)
			})
	}, []);

	return (
		<Box>
			<StyledBreadCrumbs>
				<Link
					underline="hover"
					sx={{ display: 'flex', alignItems: 'center' }}
					color="inherit"
					href="/dashboard"
				>
					 <HomeIcon sx={{ mr: 0.5 }} fontSize="inherit" />
					 Dashboard
				</Link>
				<Typography
					sx={{ display: 'flex', alignItems: 'center' }}
					color="text.primary"
				>
					<ArticleIcon sx={{ mr: 0.5 }} fontSize="inherit" />
					Quotation
				</Typography>
			</StyledBreadCrumbs>

			<ShippingQuotation quotation={shippingQuotation} error={shippingQuotationError}/>
			<ProductQuotation quotation={productQuotation} error={productQuotatioError}/>
			<StorageQuotation quotation = {storageQuotation} error = {storageQuotationError}/>
			<QuotationTable quotation={quotation} error={quotationError}/>
		</Box>
	)
}

export default DashQuotation