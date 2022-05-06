import React from 'react';
import { useNavigate, Navigate } from 'react-router-dom';

import {Alert, AlertTitle, Box, Button, Grow } from "@mui/material";
import { styled } from "@mui/system";
import SendIcon from '@mui/icons-material/Send';

import { Formik, Form } from "formik";
import * as Yup from "yup";

import TextField from "../../../components/formsUI/textfield/textfield";

import { connect } from "react-redux"
import { forgotPassword } from "../../../redux/auth/authactions";

const styledAuthTextField = {
	'& label': {
		color: "white"
	},
	'& label.Mui-focused': {
		color: 'grey',
	},
	'& .MuiInput-underline:after': {
		borderBottomColor: 'white',
	},
	'& .MuiOutlinedInput-root': {
		color: "white",
		'& fieldset': {
			borderColor: 'grey !important',
		},
		'&:hover fieldset': {
			borderColor: 'white',
		},
		'&.Mui-focused fieldset': {
			borderColor: 'white',
		},
	},
	color: "white !important"
}

const forgotPasswordFormContent = [
	{
		type: "email",
		label: "Email",
		name: "email",
		required: true
	}
]

const INITIAL_FORM_STATE = {
	email: ""
}

const FORM_VALIDATION = Yup.object().shape({
	email: Yup.string().email("Please add a valid email").required("Please add an email")
})

const StyledAuthInputs = styled(Box)(({ theme }) => ({
	margin: "30px 0px",
	width: "40vw"
}))

const ForgotPasswordForm = ({ forgotPassword, isAuthenticated, errMessage }) => {

	// const navRoute = useNavigate()

	const submitForgotPassword = values => {
		forgotPassword(values)
		// navRoute("/auth/login")
	}

	return (
		<Box>
			{
				errMessage ? (
					<Grow  style={{ transformOrigin: '10 20 50' }} in timeout={1000}>
						<Alert severity="error" variant="filled">
							<AlertTitle>Login Error!</AlertTitle>
							{ errMessage }
						</Alert>
					</Grow>
				) : null
			}

			<Formik
				initialValues={{
					...INITIAL_FORM_STATE
				}}
				validationSchema={ FORM_VALIDATION }
				onSubmit = { submitForgotPassword }
			>
				<Form>
					{
						forgotPasswordFormContent.map((el, i) => (
							<StyledAuthInputs key={i}>
								<TextField sx={styledAuthTextField} 
									type={el.type} 
									name={el.name} 
									label={el.label}
									required
								/>
							</StyledAuthInputs>
						))
					}
					
				{console.log("ERR MESSAGE FROM COMPONENT", errMessage)}
				<Button type="submit" variant="contained" color="secondary" endIcon={<SendIcon/>}>
					Reset Password
				</Button>
				</Form>
			</Formik>
		</Box>
	)
}


const mapStateToProps = ({ auth }) => ({
	isAuthenticated: auth.isAuthenticated,
	errMessage: auth.errMessage
})

const mapDispatchToProps = (dispatch) => ({
	forgotPassword: (values) => dispatch(forgotPassword(values))
})


export default connect(mapStateToProps, mapDispatchToProps)(ForgotPasswordForm)