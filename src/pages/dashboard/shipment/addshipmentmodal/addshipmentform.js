import React, { useState } from 'react';

import { Alert, AlertTitle, Box, Button, ButtonGroup, Grid, Grow, Typography } from "@mui/material"
import { styled } from "@mui/system";

import { Formik, Form } from "formik";
import * as Yup from "yup";

import TextField from "../../../../components/formsUI/textfield/textfield"
import DateField from "../../../../components/formsUI/datepicker/datepicker";
import TimeField from "../../../../components/formsUI/timepicker/timepicker"
import { collectorInformation, cosignInformation, departureInformation, destinationInformation, itemInformation, shippersInformation } from "./addshipmentformcontent"

import SendIcon from '@mui/icons-material/Send';
import ClearIcon from '@mui/icons-material/Clear';

import { connect } from "react-redux";
import { postAShipment } from "../../../../redux/shipment/shipmentactions";

const StyledWrapper = styled(Box)(({theme}) => ({
	padding: 10
}))

const INITIAL_FORM_STATE = {
	shippersfullname: "",
	shippersemail:"",
	shipperscompany:"",
	shipperstelephone:"",
	shippersaddress:"",

	consignfullname:"",
	consignemail:"",
	consigncompany:"",
	consigntelephone:"",
	consignaddress:"",

	collectorfullname:"",
	collectoremail:"",
	collectortel:"",
	collectoraddress:"",

	trackno:"",
	itemsname:"",
	itemsweight:"",
	itemsweightunit:"",
	itemspieces:"",
	
	departureaddress:"",
	departureairportcode:"",
	departuredate:"",
	departuretime:"",
	
	arrivaladdress: "",
	arrivalairportcode:"",
	arrivaldate:"",
	arrivaltime:"",
}

const FORM_VALIDATION = Yup.object().shape({
	shippersfullname: Yup.string().required(),
	shippersemail: Yup.string().email().required(),
	shipperscompany: Yup.string().required(),
	shipperstelephone: Yup.string().required(),
	shippersaddress: Yup.string().required(),
	
	
	consignfullname: Yup.string().required(),
	consignemail: Yup.string().email().required(),
	consigncompany: Yup.string().required(),
	consigntelephone: Yup.string().required(),
	consignaddress: Yup.string().required(),
	
	collectorfullname: Yup.string().required(),
	collectoremail: Yup.string().email().required(),
	collectortel: Yup.string().required(),
	collectoraddress: Yup.string().required(),
	
	itemsname: Yup.string().required(),
	itemsweight: Yup.number().required(),
	itemsweightunit: Yup.string().required(),
	trackno: Yup.string().required(),
	itemspieces: Yup.number().required(),
	
	departureaddress: Yup.string().required(),
	departureairportcode: Yup.string().required(),
	departuredate: Yup.string().required(),
	departuretime: Yup.string().required(),
	
	arrivaladdress: Yup.string().required(),
	arrivalairportcode: Yup.string().required(),
	arrivaltime: Yup.string().required(),
	arrivaldate: Yup.string().required(),

})

const AddShipmentForm = ({ token, postAShipment, errMessage, data}) => {

	const [ trackNo, setTrackNo ] = useState("")
	const [ showSuccess, setShowSuccess ] = useState(false);

	const submitHandler = ( values, {resetForm} ) => {
		postAShipment(values, token)

		console.log("THE EROR MESSAGE REDUX", errMessage)
		console.log("DATA FROM SHIPMENT IS", data)

		if (!errMessage || errMessage === undefined){
			setShowSuccess(true)
			setTrackNo(data.trackno)
			resetForm()
		}

		console.log(values)

	}

	return (
		<StyledWrapper container spacing={2}>

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
			{console.log("The token inside JSX", token)}

			{
				showSuccess ? (
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
								Shippers Information
							</Typography>
						</Grid>
						
						{
							shippersInformation.map((el, i) => (
								<Grid item key={i} sm={el.sm} xs={el.xs}>
									<TextField type={el.type} name={el.name} label={el.label}/>
								</Grid>
							))
						}
						
						<Grid item xs={12}>
							<Typography variant="h5" color="blue" gutterBottom>
								Cosignee Information
							</Typography>
						</Grid>

						{
							cosignInformation.map((el, i) => (
								<Grid key={i} item sm={el.sm} xs={el.xs}>
									<TextField type={el.type} name={el.name} label={el.label}/>
								</Grid>
							))
						}

						<Grid item xs={12}>
							<Typography variant="h5" color="blue" gutterBottom>
								Collector Information
							</Typography>
						</Grid>

						{
							collectorInformation.map((el, i) => (
								<Grid key={i} item sm={el.sm} xs={el.xs}>
									<TextField type={el.type} name={el.name} label={el.label}/>
								</Grid>
							))
						}

						<Grid item xs={12}>
							<Typography variant="h5" color="blue" gutterBottom>
								Item Information
							</Typography>
						</Grid>

						{
							itemInformation.map((el, i) => (
								<Grid key={i} item sm={el.sm} xs={el.xs}>
									<TextField type={el.type} name={el.name} label={el.label}/>
								</Grid>
							))
						}

						<Grid item xs={12}>
							<Typography variant="h5" color="blue" gutterBottom>
								Origin Service Area
							</Typography>
						</Grid>

						{
							departureInformation.location.map((el, i) => (
								<Grid key={i} item sm={el.sm} xs={el.xs}>
									<TextField type={el.type} name={el.name} label={el.label}/>
								</Grid>
							))
						}

						<Grid item sm={departureInformation.date.sm} xs={departureInformation.date.xs}>
							<DateField type={departureInformation.date.type} name={departureInformation.date.name} label={departureInformation.date.label}/>
						</Grid>

						<Grid item sm={departureInformation.time.sm} xs={departureInformation.time.xs}>
							<TimeField type={departureInformation.time.type} name={departureInformation.time.name} label={departureInformation.time.label}/>
						</Grid>

						<Grid item xs={12}>
							<Typography variant="h5" color="blue" gutterBottom>
								Final Destination
							</Typography>
						</Grid>

						{
							destinationInformation.location.map((el, i) => (
								<Grid key={i} item sm={el.sm} xs={el.xs}>
									<TextField type={el.type} name={el.name} label={el.label}/>
								</Grid>
							))
						}

						
						<Grid item sm={destinationInformation.date.sm} xs={destinationInformation.date.xs}>
							<DateField type={destinationInformation.date.type} name={destinationInformation.date.name} label={destinationInformation.date.label}/>
						</Grid>

						<Grid item sm={destinationInformation.time.sm} xs={destinationInformation.time.xs}>
							<TimeField type={destinationInformation.time.type} name={destinationInformation.time.name} label={destinationInformation.time.label}/>
						</Grid>


					</Grid>

					<ButtonGroup variant="contained" type="submit" sx={{marginTop: "30px"}}>
						<Button type="submit" color="primary"  endIcon={<SendIcon/>}>
							Submit Quotation
						</Button>
						<Button  type="button" color="error" endIcon={<ClearIcon/>}>
							Cancel Quotation
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
	data: shipment.data
})

const mapDispatchToProps = (dispatch) => ({
	postAShipment: (values, token) => dispatch(postAShipment(values, token))
})

export default connect(mapStateToProps, mapDispatchToProps)(AddShipmentForm)