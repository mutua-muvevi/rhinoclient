import React from 'react';

import { Box, Button, Container, Divider, FormGroup, Paper, Typography } from "@mui/material";
import { styled } from "@mui/system";

import SendIcon from '@mui/icons-material/Send';

import { Formik, Form } from "formik";
import * as Yup from "yup";
import TextfieldWrapper from "../../../../components/formsUI/textfield/textfield";

const StyledNewsLetters = styled(Box)(({ theme }) => ({
	backgroundColor: theme.palette.drawer.default
}))

const dividerStyle = {
	backgroundColor: "#f48d3a"
}

const StyledContainerSection = styled(Container)(({ theme }) => ({
	minHeight: "60vh",
	display: "flex",
	justifyContent: "center",
	alignItems: "center"
}))

const StyledPaper = styled(Paper)(({ theme }) => ({
	width: "100%",
	minHeight: "50vh",
	padding: "20px"
}))

const styledAuthTextField = {
	'& .MuiInput-underline:after': {
		borderBottomColor: '#f48d3a !important',
	},
	'& .MuiOutlinedInput-root': {
		color: "white",
		'& fieldset': {
			borderColor: '#f48d3a !important',
		},
		'&:hover fieldset': {
			borderColor:'#f48d3a !important',
		},
		'&.Mui-focused fieldset': {
			borderColor: '#f48d3a !important',
		},
	},
	color: "#f48d3a !important"
}

const StyledNewsLetterButton = styled(Button)(({ theme }) => ({

}))

const INITIAL_FORM_STATE = {
	email: ""
}

const FORM_VALIDATION = Yup.object().shape({
	email: Yup.string().min(3).max(100).required("Please add a valid email"),
})

const submitHandler = ( values, {resetForm} ) => {
	console.log(values)
	resetForm()
}

const NewsLetters = () => {
	return (
		<StyledNewsLetters>
			<Divider sx={dividerStyle}/>
			<StyledContainerSection>
				<StyledPaper>
					<Typography variant="h4" color="secondary">
						Subscribe 
					</Typography>
					<Typography variant="h5" >
						Sign up to our Newsletter for updates and more
					</Typography>
					<Formik
							initialValues={{
								...INITIAL_FORM_STATE
							}}
							validationSchema={ FORM_VALIDATION }
							onSubmit = { submitHandler }
						>
							<Form>
								<FormGroup row>
									<TextfieldWrapper
										type="text"
										name="trackno"
										placeholder="Enter Shipping Track Number..."
										variant="standard"
										color="secondary"
										sx={styledAuthTextField}
									/>

									<StyledNewsLetterButton type="submit" endIcon={<SendIcon/>} variant="contained" color="secondary">
										Search
									</StyledNewsLetterButton>

								</FormGroup>
							</Form>
						</Formik>
				</StyledPaper>
			</StyledContainerSection>
			<Divider sx={dividerStyle}/>
		</StyledNewsLetters>
	)
}

export default NewsLetters