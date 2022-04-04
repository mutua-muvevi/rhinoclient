import { Box, Modal, Typography } from "@mui/material";
import React from 'react';
import { styled } from "@mui/system";
import AddUserForm from "./adduserform";


const StyledModal = styled(Modal)(({theme}) => ({
	width: "85vw",
	margin: "10vh auto",
	overflow: "scroll",
	border: 'none',
}))

const formContainer = {
	backgroundColor: "white",
	border: 'none',
	boxShadow: 24,
	padding: 4,
	borderRadius: 4
}

const AddUsermodal = ({open, setOpen}) => {
	return (
		<StyledModal
			open={open}
			onClose={() => setOpen(false)}
			aria-labelledby="modal-modal-title"
			aria-describedby="modal-modal-description"
		>
			<Box sx={formContainer}>
				<Typography id="modal-modal-title" variant="h4" gutterBottom component="h2">
					Add Shipment Form
				</Typography>
				<AddUserForm/>
			</Box>
		</StyledModal>
	)
}

export default AddUsermodal