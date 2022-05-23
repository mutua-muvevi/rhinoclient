import React, { useState } from 'react';

import { Formik, Form } from "formik";
import * as Yup from "yup";

import { Alert, AlertTitle, Button, Grid, Grow, Typography } from "@mui/material";
import { styled } from "@mui/system";
import SendIcon from '@mui/icons-material/Send';

import { contactFormInputs, contactFormTextArea } from "./contactInfo";
import TextField from "../../../components/formsUI/textfield/textfield";

import { connect } from "react-redux";
import { sendContacts } from "../../../redux/contact/contactactions";

const StyledAddButton = styled(Button)(({theme}) => ({
	borderRadius: 3,
	textAlign: "left",
	padding: "8px 25px",
	marginTop: "5vh"
}))

const INITIAL_FORM_STATE = {
	fullname: "",
	email: "",
	company: "",
	telephone: "",
	message: ""
}

const FORM_VALIDATION = Yup.object().shape({
	fullname: Yup.string().required("Please add your fullname").min(3).max(100),
	email: Yup.string().required("Please add your email").min(3).max(100).email("Please add a valid email"),
	company: Yup.string().min(3).max(100),
	telephone: Yup.string().required("Please add your telephone number").min(3).max(100),
	message: Yup.string().required("Plase add the message").min(20).max(1500),
})

const ContactForm = ({ sendContacts, errMessage }) => {

	const [showSuccess, setShowSuccess] = useState(false)

	const submitHandler =  ( values, { resetForm }) => {
		sendContacts(values)
		console.log("The values WE GET INCLUDE...",values)
				
		if (!errMessage || errMessage === undefined){
			setShowSuccess(true)
			resetForm()
		}
	}

	return (
		<>
			{
				errMessage ? (
					<Grow  style={{ transformOrigin: '10 20 50' }} in timeout={1000}>
						<Alert severity="error" variant="filled">
							<AlertTitle>Post Error!</AlertTitle>
							{ errMessage }
						</Alert>
					</Grow>
				) : null
			}
			
			{
				showSuccess ? (
					<Grow  style={{ transformOrigin: '10 20 50' }} in timeout={1000}>
						<Alert severity="success" variant="filled">
							<AlertTitle>Post Success!</AlertTitle>
							Your message has been send successfully
						</Alert>
					</Grow>
				) : null
			} 
			<Formik
				initialValues={{
					...INITIAL_FORM_STATE
				}}
				validationSchema={ FORM_VALIDATION }
				onSubmit = {submitHandler}
			>
				<Form>
					<Grid container spacing={1}>
						<Grid item xs={12}>
							<Typography variant="h4" gutterBottom>
								Send Us Your Message
							</Typography>
						</Grid>

						{
							contactFormInputs.map((el, i) => (
								<Grid key={i} item sm={el.sm} xs={el.xs}>
									<TextField type={el.type} name={el.name} label={el.label}/>
								</Grid>
							))
						}
						{
							contactFormTextArea.map((el, i) => (
								<Grid key={i} item sm={el.sm} xs={el.xs}>
									<TextField multiline type={el.type} name={el.name} label={el.label} rows={el.row}/>
								</Grid>
							))
						}
					</Grid>
					<StyledAddButton type="submit" color="secondary" endIcon={<SendIcon/>} variant="contained">
						Submit
					</StyledAddButton>
				</Form>

			</Formik>
			
		</>
	)
}

const mapStateToProps = ({ contact }) => ({
	errMessage: contact.errMessage,
	data: contact.contact
})

const mapDispatchToProps = (dispatch) => ({
	sendContacts: (values) => dispatch(sendContacts(values))
})

export default connect(mapStateToProps, mapDispatchToProps)(ContactForm)