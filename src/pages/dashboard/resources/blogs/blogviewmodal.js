import React, { useState } from 'react';

import { Box, Button, ButtonGroup, Chip, Container, Divider, Grid, List, ListItem, ListItemIcon, ListItemText,  Modal, Stack, Typography } from "@mui/material";
import { styled } from "@mui/system";

import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const StyledModal = styled(Modal)(({ theme }) => ({
	width: "85vw",
	margin: "10vh auto",
	overflowY: "scroll",
	border: 'none',
	height: "80vh",
	borderRadius: theme.shape.default
}));

const StyledModalContainerBox = styled(Box)(({theme}) => ({
	backgroundColor: theme.palette.background.paper,
	border: 'none',
	boxShadow: 24,
	paddingBottom: "30px"
}));

const styledModalBox = {
};

const StyledBlogImageSection = styled(Box)(({ theme }) => ({
	minHeight: "30vh",
	backgroundColor: "primary",
	display: "flex",
	justifyContent: "flex-start",
	alignItems: "flex-end"
}))

const StyledBlogImageSectionContent = styled(Box)(({ theme }) => ({
	padding: "10px",
}))

const headerFont = {
	color: "#dea95f",
	fontWeight: 500,
	fontFamily: "'Rubik', sans-serif",
}

const bodyTitleFont = {
	color: "#dea95f",
	fontFamily: "'Rubik', sans-serif",
	marginTop: "20px",
	textTransform: "capitalize"
}

const dividerStyle = {
	margin: "5px auto 20px auto",
	backgroundColor: "#f48d3a"
}

const StyledViewContentBody = styled(Container)(({ theme }) => ({

}))

const StyledViewContentText = styled(Box)(({ theme }) => ({

}))

const StyledListContainer = styled(List)(({ theme }) => ({
	margin: "20px auto"
}))

const StyledTagsArea = styled(Box)(({ theme }) => ({
	display: "flex",
	justifyContent: "left",
	alignItems: "center",
	textAlign: "left",
	margin: "20px auto"
}))

const StyledCategoryArea = styled(Box)(({ theme }) => ({
	display: "flex",
	justifyContent: "left",
	alignItems: "center",
	textAlign: "left",
	margin: "20px auto"
}))


const StyledAuthorArea = styled(Box)(({ theme }) => ({
	display: "flex",
	justifyContent: "left",
	alignItems: "center",
	textAlign: "left",
	margin: "20px auto"
}))


const BlogViewModal = ({ values, open, setOpen }) => {
	return (
		<>
			<StyledModal
				open={open}
				onClose={() => setOpen(false)}
				aria-labelledby="modal-modal-title"
				aria-describedby="modal-modal-description"
			>
				<StyledModalContainerBox sx={styledModalBox}>
					<StyledBlogImageSection>
						<StyledBlogImageSectionContent>
							<Typography variant="h4" gutterBottom sx={headerFont}>
								{ values.title }
							</Typography>
							<Typography variant="h5" gutterBottom>
								{ values.subtitle }
							</Typography>
						</StyledBlogImageSectionContent>
					</StyledBlogImageSection>

					<Divider sx={dividerStyle} />

					<StyledViewContentBody maxWidth="xl">

						{
							values.content &&
							values.content.map((el, i) => (
								<StyledViewContentText key={i}>
									<Typography variant="h5" sx={bodyTitleFont} gutterBottom>
										{ el.header }
									</Typography>
									{
										el.paragraph &&
										el.paragraph.map(p => (
											<Typography variant="body1" key={p} gutterBottom>
												{ p }
											</Typography>
										))
									}
									{
										el.list &&
										el.list.map((li, i) => (
											<StyledListContainer key={i}>
												<Typography variant="h6" color="secondary" gutterBottom>
													{ li.title }
												</Typography>
												<List>
													{
														li.items &&
														li.items.map((el, i) => (
															<ListItem key={i}>
																<ListItemIcon>
																	<ArrowForwardIosIcon  color="secondary"/>
																</ListItemIcon>
																<ListItemText primary={el}/>
															</ListItem>
														))
													}
												</List>
											</StyledListContainer>
										))
									}
								</StyledViewContentText>
							))
						}
						

						<StyledTagsArea>
							<Typography variant="body1">Tags :</Typography>
							<Stack direction="row" sx={{marginLeft: "20px"}} spacing={2}>
								{
									values.tags &&
									values.tags.map((tg, i) => (
										<Chip color="secondary" variant="outlined" key={i} label={tg}/>
									))
								}
							</Stack>
						</StyledTagsArea>

						<StyledCategoryArea>
							<Typography variant="body1">Category :</Typography>
							<Chip color="secondary" variant="outlined" label={values.category} sx={{marginLeft: "20px"}} />
						</StyledCategoryArea>

						<StyledAuthorArea>
							<Typography variant="body1">Author :</Typography>
							<Chip color="secondary" variant="outlined" label={values.author} sx={{marginLeft: "20px"}} />
						</StyledAuthorArea>
					</StyledViewContentBody>
								{console.log("BLOG", values)}
				</StyledModalContainerBox>
			</StyledModal>
		</>
	)
}

export default BlogViewModal