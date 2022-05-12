import React, { useState } from 'react';
import { useParams, useNavigate } from "react-router-dom";

import { connect } from "react-redux";

import { Formik, Form } from "formik";
import * as Yup from "yup";

import {Alert, AlertTitle, Box, Button, Grow } from "@mui/material";
import { styled } from "@mui/system";
import LockResetIcon from '@mui/icons-material/LockReset';

import TextField from "../../../components/formsUI/textfield/textfield";
import { resetPassword } from "../../../redux/auth/authactions";

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

const loginFormContent = [
	{
		type: "password",
		label: "Password",
		name:"password",
		required: true
	},
]

const INITIAL_FORM_STATE = {
	password: ""
}

const FORM_VALIDATION = Yup.object().shape({
	password: Yup
        .string()
        .min(8, 'Password is too short - should be 8 characters minimum.')
        .required("Please add a password")
})

const StyledAuthInputs = styled(Box)(({ theme }) => ({
	margin: "30px 0px",
	width: "40vw"
}))

const ResetPasswordForm = ({ resetPassword, errMessage }) => {

	const [ showSuccess, setShowSuccess ] = useState(false)

	const navRoute = useNavigate()
	const params = useParams()

	const submitResetPassword = values => {
		resetPassword(values, params)

		setShowSuccess(true)

		setTimeout(() => {
			if(errMessage.status === 200){
				navRoute("/auth/login")
			}
		}, 6000)
	}

	return (
		<Box>
			{
				errMessage ? (
					<Grow  style={{ transformOrigin: '10 20 50' }} in timeout={1000}>
						<Alert severity="error" variant="filled">
							<AlertTitle>Success!</AlertTitle>
							{ errMessage }
						</Alert>
					</Grow>
				) : null
			}
			{
				showSuccess ? (
					<Grow  style={{ transformOrigin: '10 20 50' }} in timeout={1000}>
						<Alert severity="success" variant="filled">
							<AlertTitle>Success!</AlertTitle>
							Password Reset successfully
						</Alert>
					</Grow>
				) : null
			}
			<Formik
				initialValues={{
					...INITIAL_FORM_STATE
				}}
				validationSchema={ FORM_VALIDATION }
				onSubmit = { submitResetPassword }
			>
				<Form>
					{
						loginFormContent.map((el, i) => (
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
				<Button type="submit" variant="contained" color="secondary" endIcon={<LockResetIcon/>}>
					Reset Password
				</Button>
				</Form>
			</Formik>
		</Box>
	)
}

const mapStateToProps = ({ auth }) => ({
	errMessage: auth.errMessage
})

const mapDispatchToProps = (dispatch) => ({
	resetPassword: (values, params) => dispatch(resetPassword(values, params))
})

export default connect(mapStateToProps, mapDispatchToProps)(ResetPasswordForm)