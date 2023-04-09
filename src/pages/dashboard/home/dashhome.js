import React from 'react';
import { Navigate } from 'react-router-dom';

import { Box, Breadcrumbs, Link, Stack} from "@mui/material"
import { styled } from "@mui/system";

import HomeIcon from '@mui/icons-material/Home';
import Dashcards3 from "./3dashcards/dashcards3";
import Dashcards2 from "./2dashcards/dashcards2";
import QuotationDatagrid from "./quotationDatagrid/quotationDatagrid";

import { connect } from "react-redux";

const StyledBreadCrumbs = styled(Breadcrumbs)(({theme}) => ({
	marginBottom: "20px"
}))


const HomeStyled = styled(Box)(({theme}) => ({
	
}))


const headerFont = {
	color: "#dea95f",
	fontFamily: "'Rubik', sans-serif",
}

const Dashhome = ({ isAuthenticated }) => {

	if(!isAuthenticated){
		return <Navigate to={"/auth/login"}/>
	}
	return (
		<HomeStyled component="section" id="dash-home">
				<StyledBreadCrumbs>
					<Link
						underline="hover"
						style={headerFont}
						color="inherit"
						href="/dashboard"
					>
						<HomeIcon sx={{ mr: 0.5 }} fontSize="inherit" />
						Dashboard
					</Link>
				</StyledBreadCrumbs>
				<Dashcards3/>
				<Dashcards2 />
				<QuotationDatagrid />
		</HomeStyled>
	)
}

const mapStateTProps = ({ auth }) => ({
	isAuthenticated: auth.isAuthenticated
})

export default connect(mapStateTProps)(Dashhome)