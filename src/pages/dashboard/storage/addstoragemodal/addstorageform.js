import { Box, Button, Grid, Typography } from "@mui/material"
import { styled } from "@mui/system";
import { Formik, Form } from "formik";
import React from 'react';
import * as Yup from "yup";
import TextField from "../../../../components/formsUI/textfield/textfield"
import { contactInformation, productInformation, StorageArea, storageEvents, textareas } from "./addStorageformcontent";
import DateField from "../../../../components/formsUI/datepicker/datepicker";
import TimeField from "../../../../components/formsUI/timepicker/timepicker"


const StyledWrapper = styled(Box)(({theme}) => ({
	padding: 10
}))


const StyledAddButton = styled(Button)(({theme}) => ({
	borderRadius: 3,
	textAlign: "left",
	padding: "8px 25px",
	marginTop: "5vh"
}))

const INITIAL_FORM_STATE = {
	firstname: "",
	lastname: "",
	email: "",
	telephone: "",
	company: "",
	trackno: "",
	product: "",
	weight: "",
	weightunit: "",
	producttype: "",
	pieces: "",
	quality: "",
	storagecity: "",
	storagecountry: "",
	datein: "",
	dateout: "",
	intime: "",
	outtime: "",
	observation: "",
	notes: "",
}

const FORM_VALIDATION = Yup.object().shape({
	firstname: Yup.string().required(),
	lastname: Yup.string().required(),
	email: Yup.string().email().required(),
	telephone: Yup.string().required(),
	company: Yup.string().required(),
	trackno: Yup.string().required(),
	product: Yup.string().required(),
	weight: Yup.number().required(),
	weightunit: Yup.string().required(),
	producttype: Yup.string().required(),
	pieces: Yup.string().required(),
	quality: Yup.string().required(),
	storagecity: Yup.string().required(),
	storagecountry: Yup.string().required(),
	datein: Yup.string().required(),
	dateout: Yup.string(),
	intime: Yup.string().required(),
	outtime: Yup.string().required(),
	observation: Yup.string().required(),
	notes: Yup.string().required(),
})

const AddStorageForm = () => {
	return (
		<StyledWrapper container spacing={2}>

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
					<Grid container spacing={2}>
						<Grid item xs={12}>
							<Typography variant="h5" color="blue" gutterBottom>
								Client Information
							</Typography>
						</Grid>
						
						{
							contactInformation.map((el, i) => (
								<Grid item sm={el.sm} xs={el.xs}>
									<TextField type={el.type} name={el.name} label={el.label}/>
								</Grid>
							))
						}

						<Grid item xs={12}>
							<Typography variant="h5" color="blue" gutterBottom>
								Product Information
							</Typography>
						</Grid>

						{
							productInformation.map((el, i) => (
								<Grid key={i} item sm={el.sm} xs={el.xs}>
									<TextField type={el.type} name={el.name} label={el.label}/>
								</Grid>
							))
						}

						<Grid item xs={12}>
							<Typography variant="h5" color="blue" gutterBottom>
								Storage Geographical Area
							</Typography>
						</Grid>

						{
							StorageArea.map((el, i) => (
								<Grid key={i} item sm={el.sm} xs={el.xs}>
									<DateField type={el.type} name={el.name} label={el.label}/>
								</Grid>
							))
						}


						<Grid item xs={12}>
							<Typography variant="h5" color="blue" gutterBottom>
								Storage Events
							</Typography>
						</Grid>

						{
							storageEvents.dates.map((el, i) => (
								<Grid key={i} item sm={el.sm} xs={el.xs}>
									<DateField type={el.type} name={el.name} label={el.label}/>
								</Grid>
							))
						}

						{
							storageEvents.time.map((el, i) => (
								<Grid key={i} item sm={el.sm} xs={el.xs}>
									<TimeField type={el.type} name={el.name} label={el.label}/>
								</Grid>
							))
						}


						<Grid item xs={12}>
							<Typography variant="h5" color="blue" gutterBottom>
								Storage Documentation
							</Typography>
						</Grid>

						{
							textareas.map((el, i) => (
								<Grid key={i} item sm={el.sm} xs={el.xs}>
									<TextField multiline rows={el.row} type={el.type} name={el.name} label={el.label}/>
								</Grid>
							))
						}

					</Grid>
				</Form>

			</Formik>
			
			<StyledAddButton variant="contained">
				Submit
			</StyledAddButton>
		</StyledWrapper>
	)
}

export default AddStorageForm