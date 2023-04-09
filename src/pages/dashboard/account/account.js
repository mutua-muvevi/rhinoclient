import React from 'react';
import { Navigate } from 'react-router-dom';

import { Box, Breadcrumbs, Link, Stack} from "@mui/material"
import { styled } from "@mui/system";

import { FaUserEdit } from "react-icons/fa";

import { connect } from "react-redux";
import AccountView from './view/view';

const StyledWrapper = styled(Box)(({theme}) => ({
	
}))


const StyledBreadCrumbs = styled(Breadcrumbs)(({theme}) => ({
	marginBottom: "20px"
}))


const headerFont = {
	color: "#dea95f",
	fontFamily: "'Rubik', sans-serif",
}

const DashAccount = () => {
	return (
		<StyledWrapper component="section" id="dash-home">
			<Stack direction="column" spacing={3}>
				<StyledBreadCrumbs>
					<Link
						underline="hover"
						style={headerFont}
						color="inherit"
						href="/dashboard"
					>
						<Stack direction="row" spacing={3}>
							<FaUserEdit fontSize="inherit" />
							Edit
						</Stack>
					</Link>
				</StyledBreadCrumbs>

				<AccountView/>
			</Stack>
		</StyledWrapper>
	)
}

export default connect()(DashAccount)