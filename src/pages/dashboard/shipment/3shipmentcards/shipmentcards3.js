import { Button,  Grid, Typography } from "@mui/material";
import { styled } from "@mui/system";
import React, { useState } from 'react';
import Sizeheaderlandscape4 from "../../../../components/widgets/cards/4sizeheaderlandscape/sizeheaderlandscape4";
import Addshipmentmodal from "../addshipmentmodal/addshipmentmodal";
import { shipmentCards3Content } from "./contentshipmentcards3";

const BoxWrapper = styled(Button)(({theme}) => ({
	minHeight: "20vh",
	width: "98%",
	margin: "10px",
	borderRadius: theme.shape.default,
	backgroundColor: theme.palette.background.paper,
	textTransform: "capitalize",
	color: "whitesmoke",
	textAlign: "left",

}))

const headerFont = {
	color: "#dea95f",
	fontWeight: 500,
	fontFamily: "'Rubik', sans-serif",
}

const Shipmentcards3 = () => {
	
	const [open, setOpen] = useState(false)

	const handleShipmentModal = () => {
		setOpen(true)
	}

	return (
		<Grid container spacing={0.5} >
			{
				shipmentCards3Content.map((item, i) => (
					<Grid key={i} item lg={4} sm={12} xs={12}>
						<Sizeheaderlandscape4 item={item} />
					</Grid>
				))
			}

				<Grid item  lg={4} sm={12} xs={12}>
					<BoxWrapper onClick={handleShipmentModal} elevation={3}>
						<Typography style={headerFont} variant="h3">
							Add Shipment
						</Typography>
					</BoxWrapper>
				</Grid>
			
			<Addshipmentmodal open={open} setOpen={setOpen}/>
		</Grid>
	)
}

export default Shipmentcards3