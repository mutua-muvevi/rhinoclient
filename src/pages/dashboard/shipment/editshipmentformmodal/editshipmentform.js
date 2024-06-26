import React, { useState } from 'react';

import { Alert, AlertTitle, Box, Button, ButtonGroup, Grid, Grow, Typography } from "@mui/material"
import { styled } from "@mui/system";

import { Formik, Form } from "formik";
import * as Yup from "yup";

import TextField from "../../../../components/formsUI/textfield/textfield"
import DateField from "../../../../components/formsUI/datepicker/datepicker";
import TimeField from "../../../../components/formsUI/timepicker/timepicker"
import { collectorInformation, cosignInformation, departureInformation, destinationInformation, itemInformation, shippersInformation } from "./editshipmentformcontent"

import SendIcon from '@mui/icons-material/Send';
import ClearIcon from '@mui/icons-material/Clear';


import { connect } from "react-redux";
import { editAShipment } from "../../../../redux/shipment/shipmentactions";

const StyledWrapper = styled(Box)(({theme}) => ({
	padding: 10,
	marginBottom: "30px"
}))



const EditShipmentForm = ({ token, editAShipment, errMessage, data, shipment, open, setOpen}) => {
	
	const [ trackNo, setTrackNo ] = useState("")
	const [ showSuccess, setShowSuccess ] = useState(false);

	const INITIAL_FORM_STATE = {
		shippersfullname:  shipment?.shippersfullname,
		shippersemail: shipment?.shippersemail,
		shipperscompany: shipment?.shipperscompany,
		shipperstelephone: shipment?.shipperstelephone,
		shippersaddress: shipment?.shippersaddress,
	
		consignfullname: shipment?.consignfullname,
		consignemail: shipment?.consignemail,
		consigncompany: shipment?.consigncompany,
		consigntelephone: shipment?.consigntelephone,
		consignaddress: shipment?.consignaddress,
	
		collectorfullname: shipment?.collectorfullname,
		collectoremail: shipment?.collectoremail,
		collectortel: shipment?.collectortel,
		collectoraddress: shipment?.collectoraddress,
	
		trackno: shipment?.trackno,
		itemsname: shipment?.itemsname,
		itemsweight: shipment?.itemsweight,
		itemsweightunit: shipment?.itemsweightunit,
		itemspieces: shipment?.itemspieces,
		
		departureaddress: shipment?.departureaddress,
		departureairportcode: shipment?.departureairportcode,
		departuredate: shipment?.departuredate,
		departuretime: shipment?.departuretime,
		
		arrivaladdress:  shipment?.arrivaladdress,
		arrivalairportcode: shipment?.arrivalairportcode,
		arrivaldate: shipment?.arrivaldate,
		arrivaltime: shipment?.arrivaltime,
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
	

	const submitHandler = async ( values, {resetForm} ) => {
		const response = await editAShipment(values, token)

		if(response?.data?.success){
			setTimeout(() => {
				window.location.reload()
			}, 1500);
		}

		if (!errMessage || errMessage === undefined){
			setShowSuccess(true)
			setTrackNo(data.trackno)
			resetForm();
		}
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
							<Typography variant="h5" color="secondary" gutterBottom>
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
							<Typography variant="h5" color="secondary" gutterBottom>
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
							<Typography variant="h5" color="secondary" gutterBottom>
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
							<Typography variant="h5" color="secondary" gutterBottom>
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
							<Typography variant="h5" color="secondary" gutterBottom>
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
							<Typography variant="h5" color="secondary" gutterBottom>
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
						<Button type="submit" color="secondary"  endIcon={<SendIcon/>} sx={{color:"#000000"}}>
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
	data: shipment.data
})

const mapDispatchToProps = (dispatch) => ({
	editAShipment: (values, token) => dispatch(editAShipment(values, token))
})

export default connect(mapStateToProps, mapDispatchToProps)(EditShipmentForm)