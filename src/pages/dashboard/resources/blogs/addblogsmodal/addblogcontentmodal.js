
import React from 'react';

import { Box, Container, Grid, Modal, Typography } from "@mui/material";
import { styled } from "@mui/system";

import { blogFormContent } from "./addblogsinfo";
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

const StyledFormTitleGrid = styled(Grid)(({ theme }) => ({

}))

const StyledFormGridItem = styled(Grid)(({ theme }) =>({

}))

const AddBlogContentModal = ({ open, setOpen }) => {
    return (
		<StyledModal
			open={open}
			onClose={() => setOpen(false)}
			aria-labelledby="modal-modal-title"
			aria-describedby="modal-modal-description"
		>
			<StyledFormContainerWrapper>
				<StyledFormContainer>
					<StyledFormTitleGrid container spacing={2}>
								

						{
							blogFormContent &&
							blogFormContent.map((el, i) => (
								<StyledFormGridItem item key={i} xs={el.xs} sm={el.sm} md={el.md} lg={el.lg} xl={el.xl}>
									<TextField 
										name={el.name}
										label={el.label}
										type={el.type}
									/>
								</StyledFormGridItem>
							))
						}

					</StyledFormTitleGrid>
				</StyledFormContainer>
			</StyledFormContainerWrapper>
		</StyledModal>
    )
}

export default AddBlogContentModal