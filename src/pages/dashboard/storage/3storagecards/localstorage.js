

import React from 'react';

import { Box, Container, Modal, Typography } from "@mui/material";
import { styled } from "@mui/system";


const StyledModal = styled(Modal)(({theme}) => ({
	width: "85vw",
	margin: "10vh auto",
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

const LocalStorageModal = ({open, setOpen, data}) => {
	return (
		<StyledModal
			open={open}
			onClose={() => setOpen(false)}
			aria-labelledby="local-storage-modal-title"
			aria-describedby="local-storage-description"
			
		>
			<StyledFormContainerWrapper >
			{console.log("MODAL STATE IS", open)}
				<Container maxWidth="xl">
					<Typography style={{marginTop: "20px"}}  id="local-storage-title" variant="h4" gutterBottom component="h2">
						Local storage modal
					</Typography>
				</Container>
			</StyledFormContainerWrapper>
		</StyledModal>
	)
}

export default LocalStorageModal