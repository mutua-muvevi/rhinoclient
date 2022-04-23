import React from 'react';
import { Box, Button } from "@mui/material";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import TextField from "../../../components/formsUI/textfield/textfield";
import { styled } from "@mui/system";
import LockResetIcon from '@mui/icons-material/LockReset';


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

const ResetPasswordForm = () => {
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
				<Button type="submit" variant="contained" color="secondary" endIcon={<LockResetIcon/>}>
					Reset Password
				</Button>
				</Form>
			</Formik>
		</Box>
	)
}

export default ResetPasswordForm