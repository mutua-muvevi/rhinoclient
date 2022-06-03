import React from 'react';

import { Box, Container, Modal, Typography } from "@mui/material";
import { styled } from "@mui/system";

import AddBlogsForm from "./addblogsform";


const StyledModal = styled(Modal)(({theme}) => ({
	width: "95vw",
	margin: "5vh auto",
	overflowY: "scroll",
	border: 'none',
	borderRadius: theme.shape.default
}))

const StyledFormContainerWrapper = styled(Box)(({ theme }) => ({
	backgroundColor: theme.palette.background.paper,
	border: 'none',
	boxShadow: 24,
	paddingTop: 2,
	paddingBottom: 2,
}))


const AddBlogModal = ({open, setOpen}) => {
	return (
		<StyledModal
			open={open}
			onClose={() => setOpen(false)}
			aria-labelledby="modal-modal-title"
			aria-describedby="modal-modal-description"
		>
			<StyledFormContainerWrapper >
				<Container maxWidth="xl">
					<Typography style={{marginTop: "20px"}} color="secondary"  id="modal-modal-title" variant="h4" gutterBottom component="h2">
						Add a Blog
					</Typography>
					<AddBlogsForm/>
				</Container>
			</StyledFormContainerWrapper>
		</StyledModal>
	)
}

export default AddBlogModal