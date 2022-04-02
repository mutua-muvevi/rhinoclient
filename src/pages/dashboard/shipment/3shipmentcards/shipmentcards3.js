import { Button,  Grid, Typography } from "@mui/material";
import { styled } from "@mui/system";
import React from 'react';
import Sizeheaderlandscape4 from "../../../../components/widgets/cards/4sizeheaderlandscape/sizeheaderlandscape4";
import { shipmentCards3Content } from "./contentshipmentcards3";

const BoxWrapper = styled(Button)(({theme}) => ({
	minWidth: "25vw",
	minHeight: "20vh",
	margin: "10px",
	borderRadius: theme.shape.default,
	backgroundColor: theme.palette.common.white,
	textTransform: "capitalize",
	color: "#131313",
	textAlign: "left",

}))

const Shipmentcards3 = () => {
	return (
		<Grid container spacing={0.5} >
			{
				shipmentCards3Content.map((item, i) => (
					<Grid key={i} item lg={4} sm={12} xs={12}>
						<Sizeheaderlandscape4 item={item} />
					</Grid>
				))
			}

			<Grid item lg={4} sm={12} xs={12}>
				<BoxWrapper elevation={3}>
					<Typography variant="h3">
						Add Shipment
					</Typography>
				</BoxWrapper>
			</Grid>
			
		</Grid>
	)
}

export default Shipmentcards3