
import React, { useState, useEffect} from 'react';

import { Box, Button, Container, Grid, Modal, Typography} from "@mui/material";
import { styled } from "@mui/system";

import CloseIcon from '@mui/icons-material/Close';

import { FieldArray } from "formik"

import TextField from "../../../../../components/formsUI/textfield/textfield";

import { connect } from "react-redux";


const StyledModal = styled(Modal)(({theme}) => ({
	width: "85vw",
	margin: "10vh auto",
	overflowY: "scroll",
	border: 'none',
	borderRadius: theme.shape.default,
}))

const StyledContainerWrapper = styled(Box)(({ theme }) => ({
	backgroundColor: theme.palette.background.paper,
	minHeight: "80vh",
	border: 'none',
	boxShadow: 24,
	padding: "10px",
	display: "flex",
	justifyContent: "center !important",
	alignItems: "center",
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

const AddBlogContentModal = ({ open, setOpen, values, blog }) => {

	useEffect(() => {
		
	}, [])

    return (
		<StyledModal
			open={open}
			onClose={() => setOpen(false)}
			aria-labelledby="modal-modal-title"
			aria-describedby="modal-modal-description"
		>
			<StyledContainerWrapper maxWidth="xl">
				<StyledFormContainer>
					<Typography sx={styledTitleFont} variant="h5" color="secondary" gutterBottom>
						Add Content Block
					</Typography>

					<FieldArray name="content">
						{arrayHelpers => {
								const content = values.content
								return (
									<>
									{ 
										content && 
										content.length > 0 ? 
										content.map(
											(item, index) => (
												<Box key={index} sx={{marginBottom: "50px"}} >
													<Grid container columnSpacing={2}>
														<Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
															<Typography variant="h5" >
																Add a header
															</Typography>
														</Grid>
														<Grid item xl={6} lg={6} md={6} sm={12} xs={12}>
															<TextField 
																name={`content.${index}.header`}
																label="Content block header"
																type="text"
															/>
														</Grid>
														<Grid item xl={6} lg={6} md={6} sm={12} xs={12}>
															<TextField 
																name={`content.${index}.subheader`}
																label="Content block sub header"
																type="text"
															/>
														</Grid>
														
														<Grid item xl={12} lg={12} md={12} sm={12} xs={12} sx={{marginTop: "30px"}}>
															<Typography variant="h5" gutterBottom >
																Add a Paragraph
															</Typography>
															<TextField
																name={`content.${index}.paragraph`}
																label="Paragraph"
																type="text"
																multiline
																rows={4}
															/>
														</Grid>
													</Grid>


													<Button
														type="button"
														onClick={
															() => arrayHelpers.remove(index)
														}
													>
														<CloseIcon color="secondary"/>
													</Button>
												</Box>
											)
										) : null
									}
									<Button
										type="button"
										variant="outlined"
										color="secondary"
										onClick = {
											() => arrayHelpers.push({
												header: "",
												subheader: ""
											})
										}
									>
										Add another block
									</Button>
									</>
								)
							}}
					</FieldArray>

				</StyledFormContainer>
			</StyledContainerWrapper>
		</StyledModal>
    )
}

const mapStateToProps = ({ blogs }) => ({
	blog: blogs.newBlog,
})

export default connect(mapStateToProps)(AddBlogContentModal)