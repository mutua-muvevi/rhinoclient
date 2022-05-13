import { Alert, AlertTitle, Box, Button, ButtonGroup, Grid, Grow, Typography } from "@mui/material";
import { styled } from "@mui/system";
import { Formik, Form } from "formik";
import React, { useState } from 'react';
import * as Yup from "yup";
import CheckBoxField from "../../../../components/formsUI/checkbox/checkbox";
import TextField from "../../../../components/formsUI/textfield/textfield"
import { userFormContent } from "./adduserformcontent";
import SendIcon from '@mui/icons-material/Send';
import ClearIcon from '@mui/icons-material/Clear';

import { connect } from "react-redux"
import { registerUser } from "../../../../redux/auth/authactions";


const StyledWrapper = styled(Box)(({theme}) => ({
	padding: 10
}))



const INITIAL_FORM_STATE = {
	firstname: "",
	lastname: "",
	email: "",
	telephone: "",
	city: "",
	country: "",
	password: "",
	authorization: "",
}

const FORM_VALIDATION = Yup.object().shape({
	firstname: Yup.string().min(2).required("Please add your firstname"),
	lastname: Yup.string().required("Please add your lastname"),
	email: Yup.string().email("Please add a valid email").required("Please add an email"),
	telephone: Yup.string().required("Please add your telephone number"),
	city: Yup.string().required("Please add your city"),
	country: Yup.string().required("Please add your country"),
	password: Yup.string().min(8).required("Please add your password"),
	authorization: Yup.string().required("Please add your authentication level")
    
})

const AddUserForm = ({ onClose,  registerUser, isAuthenticated, errMessage }) => {

	const [ user, setUser ] = useState({});

	const [ showSuccess, setShowSuccess ] = useState(null);
	const [ alertSuccess, setAlertSuccess ] = useState(true);
	const [ alertSuccessDisplay, setAlertSuccessDisplay ] = useState("");

	const submitHandler = (values, { resetForm }) => {
		console.log("SUBMITED USER", values)

		setUser(values)
		registerUser(values)
		resetForm()
		setShowSuccess(true)
		
		setTimeout(() => {
			setAlertSuccess(false)
			setAlertSuccessDisplay("none")
		}, [2000])
	}

	return (
		<StyledWrapper container spacing={2}>
			{ 
				showSuccess === true && !errMessage ? (
					<Grow  style={{ transformOrigin: '10 20 50' }} sx={{marginBottom: "10px"}} in={alertSuccess} >
						<Alert style={{display: `${alertSuccessDisplay}`}} severity="success" variant="filled">
							<AlertTitle>Registration Success!!</AlertTitle>
							User of username <strong>{user.firstname}</strong> has been created successfuly!
						</Alert>
					</Grow>
				) : null
			}
			{
				errMessage || showSuccess === false  || isAuthenticated === false || errMessage !== undefined ? (
					<Grow  style={{ transformOrigin: '10 20 50' }} sx={{marginBottom: "10px"}} in timeout={1000}>
						<Alert severity="error" variant="filled">
							<AlertTitle>Registration Error!</AlertTitle>
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
				onSubmit = { submitHandler }
			>
				<Form>
					<Grid container spacing={2}>
						<Grid item xs={12}>
							<Typography variant="h5" color="blue" gutterBottom>
								User Information
							</Typography>
						</Grid>
						
						{
							userFormContent.map((el, i) => (
								<Grid key={i} item sm={el.sm} xs={el.xs}>
									<TextField type={el.type} name={el.name} label={el.label}/>
								</Grid>
							))
						}

						<Grid item>
							<CheckBoxField name="authorization" label="authorization" legend="Authorization"/>
						</Grid>

					</Grid>

				
					<ButtonGroup variant="contained" type="submit" sx={{marginTop: "30px"}}>
						<Button type="submit" color="primary"  endIcon={<SendIcon/>}>
							Register User
						</Button>
						<Button onClick={onClose} type="submit" color="error" endIcon={<ClearIcon/>}>
							Cancel Registration
						</Button>
					</ButtonGroup>
				</Form>
			</Formik>
		</StyledWrapper>
	)
}

const mapStateToProps = ({ auth }) => ({
	isAuthenticated: auth.isAuthenticated,
	errMessage: auth.errMessage
})

const mapDispatchToProps = (dispatch) => ({
	registerUser: (values) => dispatch(registerUser(values))
})

export default connect(mapStateToProps, mapDispatchToProps)(AddUserForm)