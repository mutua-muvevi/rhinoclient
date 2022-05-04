import React from 'react';
import { useNavigate, Navigate } from 'react-router-dom';

import { Alert, AlertTitle, Box, Button, Grow } from "@mui/material";
import { styled } from "@mui/system";
import SendIcon from '@mui/icons-material/Send';

import { Formik, Form } from "formik";
import * as Yup from "yup";

import TextField from "../../../components/formsUI/textfield/textfield";

import { connect } from "react-redux";
import { postAuthUser } from "../../../redux/auth/authactions";

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
		type: "email",
		label: "Email",
		name: "email",
		required: true
	},
	{
		type: "password",
		label: "Password",
		name:"password",
		required: true
	},
]

const INITIAL_FORM_STATE = {
	email: "",
	password: ""
}

const FORM_VALIDATION = Yup.object().shape({
	email: Yup.string().email("Please add a valid email").required("Please add an email"),
	password: Yup.string().min(8, 'Password is too short - should be 8 chars minimum.').required("Please add a password")
})

const StyledAuthInputs = styled(Box)(({ theme }) => ({
	margin: "30px 0px",
}))

const LoginForm = ({ postAuthUser, isAuthenticated, errMessage }) => {

	const navRoute = useNavigate()

	const submitLogin = (values) => {
		postAuthUser(values)

		if (!isAuthenticated){
			return navRoute("/auth/login")
		}

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

			{
				isAuthenticated === true ? (
					<>
						<Grow  style={{ transformOrigin: '10 20 50' }} in timeout={1000}>
							<Alert severity="success" variant="filled">
								<AlertTitle>Login Success!</AlertTitle>
								Your login was successfull, Redirecting...
							</Alert>
						</Grow>
						<Navigate to="/dashboard"/>
					</>
				) : null
			}
			<Formik
				initialValues={{
					...INITIAL_FORM_STATE
				}}
				validationSchema={ FORM_VALIDATION }
				onSubmit = { submitLogin }
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
				<Button type="submit" variant="contained" color="secondary" endIcon={<SendIcon/>}>
					Login
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
	postAuthUser: (values) => dispatch(postAuthUser(values))
})

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm)