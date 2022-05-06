import { Box, Breadcrumbs, Link} from "@mui/material"
import HomeIcon from '@mui/icons-material/Home';
import React, { useEffect, useState } from 'react'
import { styled } from "@mui/system";
import Dashcards3 from "./3dashcards/dashcards3";
import Dashcards2 from "./2dashcards/dashcards2";
import axios from "axios"
import QuotationDatagrid from "./quotationDatagrid/quotationDatagrid";
import { connect } from "react-redux";
import { Navigate } from 'react-router-dom';

const StyledBreadCrumbs = styled(Breadcrumbs)(({theme}) => ({
	marginBottom: "20px"
}))


const HomeStyled = styled(Box)(({theme}) => ({
	
}))

const Dashhome = ({ isAuthenticated }) => {

	const [quotation, setQuotation] = useState([])
	const [quotationError, setQuotationError] = useState(null)


	useEffect(() => {
		axios.get("https://rhinojohnbackend.herokuapp.com/api/quotation")
			.then((res) =>{ 
				setQuotation(res.data)
			})
			.catch(error => {
				setQuotationError(error.response)
			})
	}, []);

	if(!isAuthenticated){
		return <Navigate to={"/auth/login"}/>
	}

	return (
		<HomeStyled component="section" id="dash-home">
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
			</StyledBreadCrumbs>

			<Dashcards3/>
			<Dashcards2 />
			<QuotationDatagrid quotation = {quotation} error = {quotationError}/>
		</HomeStyled>
	)
}

const mapStateTProps = ({ auth }) => ({
	isAuthenticated: auth.isAuthenticated
})

export default connect(mapStateTProps)(Dashhome)