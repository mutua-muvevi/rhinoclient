import React from 'react'

import { Alert, AlertTitle, Box, Grid, Typography } from "@mui/material";

import { Formik, Form } from "formik";
import * as Yup from "yup";

import TextfieldWrapper from "../../../../components/formsUI/textfield/textfield";
import { eventModalFormContent } from "./eventmodalcontent";

const INITIAL_FORM_STATE = {
	timeevents : "",
	dateevents : "",
	currentlocation : "",
	shippingstatus : "",
	notes : "",
	number : "",
}

const FORM_VALIDATION = Yup.object().shape({
	timeevents: Yup.string().required(),
	dateevents: Yup.string().required(),
	currentlocation: Yup.string().required(),
	shippingstatus: Yup.string().required(),
	notes: Yup.string().required(),
	number: Yup.number().required(),
})

const EventForm = () => {

	const submitHandler = values => {
		console.log(values)
	}

	return (
		<Box>
			<Formik
				initialValues={{
					...INITIAL_FORM_STATE
				}}
				validationSchema={ FORM_VALIDATION }
				onSubmit = {submitHandler}
			>
				<Form>
					<Grid container spacing={2}>
						<Grid item xs={12}>
							<Typography variant="h5" color="blue" gutterBottom>
								Add Events
							</Typography>
						</Grid>
												
						{
							eventModalFormContent.map((el, i) => (
								<Grid key={i} item sm={el.sm} xs={el.xs}>
									<TextfieldWrapper type={el.type} name={el.name} label={el.label} multiline={el.multiline} rows={el.rows}/>
								</Grid>
							))
						}
					</Grid>
				</Form>
			</Formik>
		</Box>
	)
}

export default EventForm