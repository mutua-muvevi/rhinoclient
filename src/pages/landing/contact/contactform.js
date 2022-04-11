import React from 'react';
import * as Yup from "yup";
import { Formik, Form } from "formik";
import { Button, Grid,  Typography } from "@mui/material";
import { styled } from "@mui/system"
import { contactFormInputs, contactFormTextArea } from "./contactInfo";
import TextField from "../../../components/formsUI/textfield/textfield"

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
	fullname: Yup.string().required().min(3).max(100),
	email: Yup.string().required().min(3).max(100).email(),
	company: Yup.string().required().min(3).max(100),
	telephone: Yup.string().required().min(3).max(100),
	message: Yup.string().required().min(20).max(1500),
})

const ContactForm = () => {
	return (
		<>
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
					<Grid container spacing={1}>
						<Grid item xs={12}>
							<Typography variant="h5" color="blue" gutterBottom>
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
				</Form>

			</Formik>
			
			<StyledAddButton variant="contained">
				Submit
			</StyledAddButton>
		</>
	)
}

export default ContactForm