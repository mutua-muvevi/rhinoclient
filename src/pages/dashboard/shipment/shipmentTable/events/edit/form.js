import React, { useState } from 'react';

import { Alert, AlertTitle, Box, Button, ButtonGroup, Grid, Grow, Typography } from "@mui/material"
import { styled } from "@mui/system";

import { Formik, Form } from "formik";
import * as Yup from "yup";

import SelectWrapper from "../../../../../../components/formsUI/select/select";
import TextfieldWrapper from "../../../../../../components/formsUI/textfield/textfield";
import TimeField from "../../../../../../components/formsUI/timepicker/timepicker";
import DateField from "../../../../../../components/formsUI/datepicker/datepicker";
import { eventModalFormContent, eventTime, eventDate, eventStatus } from "./info";

import SendIcon from '@mui/icons-material/Send';
import ClearIcon from '@mui/icons-material/Clear';


import { connect } from "react-redux";
import { editTheEvent } from "../../../../../../redux/shipment/shipmentactions";

const StyledWrapper = styled(Box)(({theme}) => ({
	padding: 10,
	marginBottom: "30px"
}))



const EditEventForm = ({ token, editEvent, errMessage, event, setOpen, trackno}) => {
	
	const [ showSuccess, setShowSuccess ] = useState(false);

	const INITIAL_FORM_STATE = {
		trackno: trackno,
		timeevents : event.timeevents,
		dateevents : event.dateevents,
		currentlocation : event.currentlocation,
		shippingstatus : event.shippingstatus,
		notes : event.notes,
		number : event.number,
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
	

	const submitHandler = ( values, {resetForm} ) => {
		const id = event._id
		editEvent(id, values, token)
		console.log("TOKEN FROM SUBMIT", token)

		if (!errMessage || errMessage === undefined){
			setShowSuccess(true)
			resetForm()
		}

		setTimeout(() => {
			setOpen(false)
		}, 2000);
	}

	return (
		<StyledWrapper container spacing={2}>

			{
				errMessage ? (
					<Grow  style={{ transformOrigin: '10 20 50' }} in timeout={1000}>
						<Alert severity="error" variant="filled">
							<AlertTitle>Edit Event Error!</AlertTitle>
							{ errMessage }
						</Alert>
					</Grow>
				) : null
			}

			{
				showSuccess ? (
					<Grow  style={{ transformOrigin: '10 20 50' }} in timeout={1000}>
						<Alert severity="success" variant="filled">
							<AlertTitle>Edit Event Success!</AlertTitle>
							Event of shipment track number <strong>{trackno}</strong>
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
									<TextfieldWrapper
										type={el.type}
										name={el.name}
										label={el.label}
										multiline={el.multiline}
										rows={el.rows}
										disabled={el.disabled && el.disabled === true ? true : false}
										/>
								</Grid>
							))
						}


					</Grid>
					
					<ButtonGroup variant="contained" type="submit" sx={{margin: "30px auto"}}>
						<Button type="submit" color="secondary"  endIcon={<SendIcon/>} sx={{color : "#000000"}}>
							Submit
						</Button>
						<Button  type="button" color="error" endIcon={<ClearIcon/>} onClick={() => setOpen(false)}>
							Cancel
						</Button>
					</ButtonGroup>
				</Form>
			</Formik>

		</StyledWrapper>
	)
}

const mapStateToProps = ({ auth, shipment }) => ({
	token: auth.token,

	errMessage: shipment.errMessage,
	data: shipment.data,
})

const mapDispatchToProps = (dispatch) => ({
	editEvent: (id, values, token) => dispatch(editTheEvent(id, values, token))
})

export default connect(mapStateToProps, mapDispatchToProps)(EditEventForm)