import React from 'react';

import { Box, Container, Modal } from "@mui/material";
import { styled } from "@mui/system";
import EventForm from "./eventform";

const StyledModal = styled(Modal)(({ theme }) => ({
	width: "70vw",
	margin: "15vh auto",
	overflowY: "scroll",
	border: 'none',
	height: "70vh"
}))

const styledModalBox = {
	backgroundColor: "white",
	border: 'none',
	boxShadow: 24,
	paddingTop: 2,
	paddingBottom: 2,
	borderRadius: "5px",
}

const EventModal = ({ open, setOpen }) => {
	return (
		<StyledModal
			open={open}
			onClose={() => setOpen(false)}
			aria-labelledby="modal-modal-title"
			aria-describedby="modal-modal-description"
		>
			<Box sx={styledModalBox}>
				<Container maxWidth="xl">
					<EventForm/>
				</Container>
			</Box>
		</StyledModal>
	)
}

export default EventModal