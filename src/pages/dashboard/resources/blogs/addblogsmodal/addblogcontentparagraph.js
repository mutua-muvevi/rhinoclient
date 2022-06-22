import React from 'react';

import { Box, Container, Grid, Modal, Typography } from "@mui/material";
import { styled } from "@mui/system";

import TextField from "../../../../../components/formsUI/textfield/textfield";

const StyledModal = styled(Modal)(({theme}) => ({
	width: "60vw",
	margin: "30vh auto",
	overflowY: "scroll",
	border: 'none',
	borderRadius: theme.shape.default
}))

const StyledFormContainerWrapper = styled(Box)(({ theme }) => ({
	backgroundColor: theme.palette.background.paper,
	minHeight: "40vh",
	border: 'none',
	boxShadow: 24,
	paddingTop: 2,
	paddingBottom: 2,
	display: "flex",
	justifyContent: "center",
	alignItems: "center"
}))

const StyledFormContainer = styled(Container)(({ theme }) => ({
	paddingTop: 2,
	paddingBottom: 2,
}))


const styledTitleFont = {
	fontFamily: "'Rubik', sans-serif",
	fontWeight: "500",
	marginBottom: "20px"

}

const AddBlogContentParagraph = ({ open, setOpen }) => {
    return (
		<StyledModal
			open={open}
			onClose={() => setOpen(false)}
			aria-labelledby="modal-modal-title"
			aria-describedby="modal-modal-description"
		>
			<StyledFormContainerWrapper>
				<StyledFormContainer>
					<Typography sx={styledTitleFont} variant="h5" color="secondary" gutterBottom>
						Add Paragraph Block
					</Typography>
					
						<TextField
							name="paragraph"
							label="Paragraph"
							type="text"
							multiline
							rows={4}
						/>
				</StyledFormContainer>
			</StyledFormContainerWrapper>
		</StyledModal>
    )
}

export default AddBlogContentParagraph