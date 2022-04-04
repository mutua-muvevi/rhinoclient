import { Box, Modal, Typography } from "@mui/material";
import { styled } from "@mui/system";
import React from 'react';
import AddStorageForm from "./addstorageform";

const StyledModal = styled(Modal)(({theme}) => ({
	width: "85vw",
	margin: "10vh auto",
	overflow: "scroll",
	border: 'none',
	// boxShadow: 24,
	// padding: 4,
	// borderRadius: 4
}))

const formContainer = {
	backgroundColor: "white",
	border: 'none',
	boxShadow: 24,
	padding: 4,
	borderRadius: 4
}

const Addstoragemodal = ({open, setOpen}) => {
	return (
		<StyledModal
			open={open}
			onClose={() => setOpen(false)}
			aria-labelledby="modal-modal-title"
			aria-describedby="modal-modal-description"
			
		>
			<Box sx={formContainer}>
				<Typography 
					id="add-storagel-title" 
					gutterBottom variant="h3" 
					component="h2"
					sx={{marginBottom: "30px"}}
				>
					Add Storage Form
				</Typography>
				<AddStorageForm/>
			</Box>
		</StyledModal>
	)
}

export default Addstoragemodal