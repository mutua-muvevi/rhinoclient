import React from 'react';

import { Box, Container, Modal, Typography } from "@mui/material";
import { styled } from "@mui/system";

import EditAcount from "./form";


const StyledModal = styled(Modal)(({theme}) => ({
	width: "70vw",
	margin: "auto auto",
	border: 'none',
	borderRadius: theme.shape.default,
	position: "absolute",
	top: "25%"
}))

const StyledFormContainerWrapper = styled(Box)(({ theme }) => ({
	backgroundColor: theme.palette.background.paper,
	border: 'none',
	boxShadow: 24,
	paddingTop: 10,
	paddingBottom: 10,
}))



const EditAccount = ({ user, open, setOpen}) => {
	return (
		<StyledModal
			open={open}
			onClose={() => setOpen(false)}
			aria-labelledby="modal-modal-title"
			aria-describedby="modal-modal-description"
		>
			<StyledFormContainerWrapper >
				<Container maxWidth="xl">
					<Typography style={{marginTop: "20px"}}  id="modal-modal-title" variant="h4" gutterBottom component="h2">
						Edit User Form
					</Typography>
					<EditAcount user={user} open={open} setOpen={setOpen} />
				</Container>
			</StyledFormContainerWrapper>
		</StyledModal>
	)
}

export default EditAccount