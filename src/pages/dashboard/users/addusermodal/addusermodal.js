import React from 'react';

import { Box, Container, Modal, Typography } from "@mui/material";
import { styled } from "@mui/system";

import AddUserForm from "./adduserform";

const StyledModal = styled(Modal)(({theme}) => ({
	width: "85vw",
	margin: "10vh auto",
	border: 'none',
}))

const StyledFormContainerWrapper = styled(Box)(({ theme }) => ({
	backgroundColor: theme.palette.background.paper,
	border: 'none',
	boxShadow: 24,
	paddingTop: 2,
	paddingBottom: 2,
	borderRadius: theme.shape.default,
}))



const AddUsermodal = ({open, setOpen}) => {
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
						Add User
					</Typography>
					<AddUserForm setOpen={setOpen}/>
				</Container>
			</StyledFormContainerWrapper>
		</StyledModal>
	)
}

export default AddUsermodal