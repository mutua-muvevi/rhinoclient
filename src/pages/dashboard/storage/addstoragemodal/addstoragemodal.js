import { Box, Modal, Typography } from "@mui/material";
import React from 'react';
import AddStorageForm from "./addstorageform";

const modalStyle = {
	position: 'absolute',
	top: '50%',
	left: '50%',
	width: "85vw",
	transform: 'translate(-50%, -50%)',
	bgcolor: 'background.default',
	border: 'none',
	boxShadow: 24,
	p: 4,
	borderRadius: 4
};

const Addstoragemodal = ({open, setOpen}) => {
	return (
		<Modal
			open={open}
			onClose={() => setOpen(false)}
			aria-labelledby="modal-modal-title"
			aria-describedby="modal-modal-description"
		>
			<Box sx={modalStyle}>
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
		</Modal>
	)
}

export default Addstoragemodal