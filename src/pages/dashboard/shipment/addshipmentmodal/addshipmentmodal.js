import { Box, Modal, Typography } from "@mui/material";
import React from 'react';

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
	borderRadius: 5
};

const Addshipmentmodal = ({open, setOpen}) => {
	return (
		<Modal
			open={open}
			onClose={() => setOpen(false)}
			aria-labelledby="modal-modal-title"
			aria-describedby="modal-modal-description"
		>
			<Box sx={modalStyle}>
				<Typography id="modal-modal-title" variant="h4" component="h2">
					Add Shipment Form
				</Typography>
			</Box>
		</Modal>
	)
}

export default Addshipmentmodal