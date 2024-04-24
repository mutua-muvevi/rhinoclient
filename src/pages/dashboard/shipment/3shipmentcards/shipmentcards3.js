import React, { useState } from "react";

import { Button, Grid, Typography } from "@mui/material";
import { styled } from "@mui/system";

import Addshipmentmodal from "../addshipmentmodal/modal";
import { connect } from "react-redux";

const Shipmentcards3 = ({ shipment }) => {
	const [open, setOpen] = useState(false);

	const handleShipmentModal = () => {
		setOpen(true);
	};

	return (
		<Grid container spacing={0.5}>
			<Grid item lg={4} sm={12} xs={12}>
				<Button
					onClick={handleShipmentModal}
					elevation={3}
					variant="contained"
				>
					<Typography sx={{color: "#000000"}} fontWeight={600}>
						Add Shipment
					</Typography>
				</Button>
			</Grid>

			<Addshipmentmodal open={open} setOpen={setOpen} />
		</Grid>
	);
};

const mapStateToProps = ({ shipment }) => ({
	shipment: shipment.allShipment,
});

export default connect(mapStateToProps)(Shipmentcards3);
