import React from 'react';

import { Box, Breadcrumbs, Link, Typography } from "@mui/material"
import { styled } from "@mui/system";

import HomeIcon from '@mui/icons-material/Home';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';

import Shipmentcards3 from "./3shipmentcards/shipmentcards3";
import ShipmentTable from "./shipmentTable/shipmenttable"

const StyledBreadCrumbs = styled(Breadcrumbs)(({theme}) => ({
	marginBottom: "20px"
}))


const Dashshipment = () => {


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
					<LocalShippingIcon sx={{ mr: 0.5 }} fontSize="inherit" />
					Shipment
				</Typography>
			</StyledBreadCrumbs>
			
			<Shipmentcards3/>
			<ShipmentTable />
		</Box>
	)
}

export default Dashshipment