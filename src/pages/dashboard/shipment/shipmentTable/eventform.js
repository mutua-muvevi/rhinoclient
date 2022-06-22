import React, { useState } from 'react';

import { Alert, AlertTitle, Box,  Button, ButtonGroup, Grid, Grow, Typography } from "@mui/material";
import { styled } from "@mui/system";

import SendIcon from '@mui/icons-material/Send';
import ClearIcon from '@mui/icons-material/Clear';

import { Formik, Form } from "formik";
import * as Yup from "yup";

import SelectWrapper from "../../../../components/formsUI/select/select";
import TextfieldWrapper from "../../../../components/formsUI/textfield/textfield";
import TimeField from "../../../../components/formsUI/timepicker/timepicker";
import DateField from "../../../../components/formsUI/datepicker/datepicker";
import { eventModalFormContent, eventTime, eventDate, eventStatus } from "./eventmodalcontent";

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
		trackno: Yup
			.string()
			.min(3, "Minimum characters allowed is 3")
			.max(50, "Maximum characters allowed is 50")
			.required("Please add track number, Ensure it is the same as the parent"),
		timeevents: Yup
			.string()
			.required("Please add the time this event happen"),
		dateevents: Yup
			.string()
			.required("Please add the date this event happened"),
		currentlocation: Yup
			.string()
			.required("Please add the current location of that shipment item"),
		shippingstatus: Yup
			.string()
			.required("Please add shipping status"),
		notes: Yup
			.string()
			.min(20, "Minimum characters allowed is 20")
			.max(1000, "Maximum characters allowed is 1000")
			.required("Please add notes, this could include that status, acivity summary, etc"),
		number: Yup
			.number()
			.min(1, "Minimum integer required is One")
			.required(),
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
							<Typography variant="h5" color="secondary" gutterBottom>
								Events Transaction
							</Typography>
						</Grid>
												
						<Grid item md={4} sm={12} xs={12}>
							<TimeField type={eventTime.type} name={eventTime.name} label={eventTime.label}/>
						</Grid>
						
						<Grid item md={4} sm={12} xs={12}>
							<DateField type={eventDate.type} name={eventDate.name} label={eventDate.label}/>
						</Grid>
						<Grid item md={4} sm={12} xs={12}>
							<SelectWrapper
								name={eventStatus.name} label={eventStatus.label} options={eventStatus.options}
							/>
						</Grid>
												
						{
							eventModalFormContent.map((el, i) => (
								<Grid key={i} item md={el.md} sm={el.sm} xs={el.xs}>
									<TextfieldWrapper type={el.type} name={el.name} label={el.label} multiline={el.multiline} rows={el.rows}/>
								</Grid>
							))
						}


					</Grid>
					
					<ButtonGroup variant="contained" type="submit" sx={{margin: "30px auto"}}>
						<Button type="submit" color="secondary"  endIcon={<SendIcon/>} style={{color : "black"}}>
							Submit
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