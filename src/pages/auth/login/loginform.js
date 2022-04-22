import React from 'react';
import { Box, Button } from "@mui/material";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import TextField from "../../../components/formsUI/textfield/textfield";
import { styled } from "@mui/system";
import SendIcon from '@mui/icons-material/Send';


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
	width: "40vw"
}))

const LoginForm = () => {
	return (
		<Box>
			<Formik
				initialValues={{
					...INITIAL_FORM_STATE
				}}
				validationSchema={ FORM_VALIDATION }
				onSubmit = {values => {
					console.log(values)
				}}
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

export default LoginForm