import React from 'react';

import { Box, Modal, Typography } from "@mui/material";
import { styled } from "@mui/system";

import EditShipmentForm from "./editshipmentform";


const StyledModal = styled(Modal)(({theme}) => ({
	width: "85vw",
	margin: "10vh auto",
	overflowY: "scroll",
	border: 'none',
}))

const formContainer = {
	backgroundColor: "white",
	border: 'none',
	boxShadow: 24,
	padding: 4,
	borderRadius: "10px"
}


const EditShipmentModal = ({open, setOpen}) => {
	return (
		<StyledModal
			open={open}
			onClose={() => setOpen(false)}
			aria-labelledby="modal-modal-title"
			aria-describedby="modal-modal-description"
		>
			<Box sx={formContainer}>
				<Typography id="modal-modal-title" variant="h4" gutterBottom component="h2">
					Edit Shipment Form
				</Typography>
				<EditShipmentForm/>
			</Box>
		</StyledModal>
	)
}

export default EditShipmentModal