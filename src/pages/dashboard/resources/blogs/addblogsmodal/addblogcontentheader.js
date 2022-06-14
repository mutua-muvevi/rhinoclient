import React from 'react';

import { Box, Button, Container, Modal, Typography } from "@mui/material";
import { styled } from "@mui/system";



import { FieldArray } from "formik"

import { blogContentTitles } from "./addblogsinfo";
import TextField from "../../../../../components/formsUI/textfield/textfield";

import { connect } from "react-redux"

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
const AddBlogContentHeader = ({ open, setOpen, blog, values }) => {
    return (
		<StyledModal
			open={open}
			onClose={() => setOpen(false)}
			aria-labelledby="modal-modal-title"
			aria-describedby="modal-modal-description"
		>
			<StyledFormContainerWrapper>
				
			</StyledFormContainerWrapper>
		</StyledModal>
    )
}

const mapStateToProps = ({ blogs }) => ({
	blog: blogs.newBlog,
})

export default connect(mapStateToProps)(AddBlogContentHeader)