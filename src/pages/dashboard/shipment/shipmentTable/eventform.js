import React, { useState } from 'react';

import { Alert, AlertTitle, Box,  Button, ButtonGroup, Grid, Grow, Typography } from "@mui/material";
import { styled } from "@mui/system";

import SendIcon from '@mui/icons-material/Send';
import ClearIcon from '@mui/icons-material/Clear';

import { Formik, Form } from "formik";
import * as Yup from "yup";

import TextfieldWrapper from "../../../../components/formsUI/textfield/textfield";
import TimeField from "../../../../components/formsUI/timepicker/timepicker";
import DateField from "../../../../components/formsUI/datepicker/datepicker";
import { eventModalFormContent, eventTime, eventDate } from "./eventmodalcontent";

import { connect } from "react-redux";
import { postEvent } from "../../../../redux/shipment/shipmentactions";

const EventForm = ({token, postEvent, errMessage}) => {

	const [success, setSuccessAlert] = useState(false);
	const [fail, setFailAlert] = useState(false);
	const [trackNo, setTrackNo] = useState(null)
	
	const INITIAL_FORM_STATE = {
		trackno: "",
		timeevents : "",
		dateevents : "",
		currentlocation : "",
		shippingstatus : "",
		notes : "",
		number : "",
	}
	
	const FORM_VALIDATION = Yup.object().shape({
		trackno: Yup.string().required(),
		timeevents: Yup.string().required(),
		dateevents: Yup.string().required(),
		currentlocation: Yup.string().required(),
		shippingstatus: Yup.string().required(),
		notes: Yup.string().required(),
		number: Yup.number().required(),
	})


	const submitHandler = ( values, { resetForm } ) => {
		console.log(values)
		postEvent(values, token)
		setTrackNo(values.trackno)
		
		if (!errMessage || errMessage === undefined){
			setSuccessAlert(true)
			resetForm()
		}

		if (errMessage){
			setFailAlert(true)
		}
	}

	return (
		<Box>
			
			{
				errMessage ? (
					<Grow  style={{ transformOrigin: '10 20 50' }} in timeout={1000}>
						<Alert severity="error" variant="filled">
							<AlertTitle>Post Shipment Error!</AlertTitle>
							{ errMessage }
						</Alert>
					</Grow>
				) : null
			}

			{
				success ? (
					<Grow  style={{ transformOrigin: '10 20 50' }} in timeout={1000}>
						<Alert severity="success" variant="filled">
							<AlertTitle>Post Shipment Success!</AlertTitle>
							Shipment of track number <strong> {trackNo} </strong> has been posted successfully
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
					<Grid container spacing={2}>
						<Grid item xs={12}>
							<Typography variant="h5" color="blue" gutterBottom>
								Add Events
							</Typography>
						</Grid>
												
						<Grid item md={4} sm={12} xs={12}>
							<TimeField type={eventTime.type} name={eventTime.name} label={eventTime.label}/>
						</Grid>
						
						<Grid item md={4} sm={12} xs={12}>
							<DateField type={eventDate.type} name={eventDate.name} label={eventDate.label}/>
						</Grid>
												
						{
							eventModalFormContent.map((el, i) => (
								<Grid key={i} item md={el.md} sm={el.sm} xs={el.xs}>
									<TextfieldWrapper type={el.type} name={el.name} label={el.label} multiline={el.multiline} rows={el.rows}/>
								</Grid>
							))
						}


					</Grid>
					
					<ButtonGroup variant="contained" type="submit" sx={{marginTop: "30px"}}>
						<Button type="submit" color="primary"  endIcon={<SendIcon/>}>
							Add events
						</Button>
						<Button  type="button" color="error" endIcon={<ClearIcon/>}>
							Cancel
						</Button>
					</ButtonGroup>
				</Form>
			</Formik>
		</Box>
	)
}

const mapStateToProps = ({ auth, shipment }) => ({
	token: auth.token,
	errMessage: shipment.errMessage
})

const mapDispatchToProps = (dispatch) => ({
	postEvent : (values, token) => dispatch(postEvent(values, token))
})

export default connect(mapStateToProps, mapDispatchToProps)(EventForm)