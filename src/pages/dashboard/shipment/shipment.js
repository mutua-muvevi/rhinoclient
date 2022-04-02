import { Box, Breadcrumbs, Link, Typography } from "@mui/material"
import HomeIcon from '@mui/icons-material/Home';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import React, {useState, useEffect} from 'react';
import { styled } from "@mui/system";
import Shipmentcards3 from "./3shipmentcards/shipmentcards3";
import ShipmentTable from "./shipmentTable/shipmenttable"
import axios from "axios"

const StyledBreadCrumbs = styled(Breadcrumbs)(({theme}) => ({
	marginBottom: "20px"
}))


const Dashshipment = () => {

	
	const [shipment, setShipment] = useState([])
	const [shipmentError, setShipmentError] = useState(null)

	useEffect(() => {
		axios.get("http://localhost:7000/api/shipping/all")
			.then((res) => {
				// console.log("The shipment is", res)
				setShipment(res.data)
			})
			.catch(error => {
				console.log(error.response)
				setShipmentError(error.response)
			})
	}, [])

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
			<ShipmentTable shipment={shipment.data} error={shipmentError}/>
		</Box>
	)
}

export default Dashshipment