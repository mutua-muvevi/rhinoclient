import { Box, Container, Modal, Typography } from "@mui/material";
import React from 'react';
import { styled } from "@mui/system";
import AddUserForm from "./adduserform";


const StyledModal = styled(Modal)(({theme}) => ({
	width: "85vw",
	margin: "10vh auto",
	borderRadius: 4,
	overflowY: "scroll",
	border: 'none',
}))

const formContainer = {
	backgroundColor: "white",
	border: 'none',
	boxShadow: 24,
	paddingTop: 4,
	paddingBottom: 4,
	borderRadius: "5px",
}

const AddUsermodal = ({open, setOpen, onClose}) => {
	return (
		<StyledModal
			open={open}
			// onClose={() => setOpen(false)}
			aria-labelledby="modal-modal-title"
			aria-describedby="modal-modal-description"
		>
			<Box sx={formContainer}>
				<Container maxWidth="xl">
					<Typography id="register user" variant="h4" gutterBottom component="h2">
						Register a User
					</Typography>
					<AddUserForm onClose={onClose}/>
				</Container>
			</Box>
		</StyledModal>
	)
}

export default AddUsermodal