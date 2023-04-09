import React, { useState } from 'react';

import { Alert, AlertTitle, Box, Button, ButtonGroup, Grid, Grow, Typography } from "@mui/material"
import { styled } from "@mui/system";

import { Formik, Form } from "formik";
import * as Yup from "yup";

import TextField from "../../../../components/formsUI/textfield/textfield";
import DateField from "../../../../components/formsUI/datepicker/datepicker";
import TimeField from "../../../../components/formsUI/timepicker/timepicker"

import SendIcon from '@mui/icons-material/Send';
import ClearIcon from '@mui/icons-material/Clear';

import { connect } from "react-redux";
import { editAStorage } from "../../../../redux/storage/storageaction";


const StyledWrapper = styled(Box)(({theme}) => ({
	padding: 10
}))


const EditStorage = ({token, editStorage, errMessage, store}) => {
	const [ trackNo, setTrackNo ] = useState("")
	const [ showSuccess, setShowSuccess ] = useState(false);

	
	const INITIAL_FORM_STATE = {
		_id: store._id,
		fullname: store.fullname,
		email: store.email,
		telephone: store.telephone,
		company: store.company,

		trackno: store.trackno,
		product: store.product,
		weight: store.weight,
		description: store.description,

		storageaddress: store.storageaddress,

		datein: store.datein,
		dateout: store.dateout,
		timein: store.timein,
		timeout: store.timeout,
		
		notes: store.notes,
	}

	const FORM_VALIDATION = Yup.object().shape({
		fullname: Yup.string(),
		email: Yup.string().email(),
		telephone: Yup.string(),
		company: Yup.string(),
		
		trackno: Yup.string(),
		product: Yup.string(),
		weight: Yup.string(),
		description: Yup.string(),
		
		storageaddress: Yup.string(),
		
		datein: Yup.string(),
		dateout: Yup.string(),
		timein: Yup.string(),
		timeout: Yup.string(),
		notes: Yup.string(),
	})

	const submitHandler = ( values, {resetForm} ) => {
		editStorage(values, token)

		if (!errMessage || errMessage === undefined){
			setShowSuccess(true)
			setTrackNo(values.trackno)
			resetForm()
		}

	}


	const contactInformation = [
		{
			type: "text",
			label: "Fullname",
			required: true,
			name:"fullname",
			xs:12,
			sm:6
		},
		{
			type: "email",
			label: "Email",
			required: true,
			name:"email",
			xs:12,
			sm:6
		},
		{
			type: "tel",
			label: "Telephone",
			required: true,
			name:"telephone",
			xs:12,
			sm:12
		},
		{
			type: "text",
			label: "Company",
			required: true,
			name:"company",
			xs:12,
			sm:12
		},
	]
	
	const productInformation = [
		{
			name: "trackno",
			label: "Track Number",
			required: true,
			type: "text",
			xs: 12,
			sm: 6
		},
		{
			name: "product",
			label: "Product Name",
			required: true,
			type: "text",
			xs: 12,
			sm: 6
		},
		{
			name: "weight",
			label: "Weight",
			required: true,
			type: "text",
			xs: 12,
			sm: 6
		},
		{
			name: "description",
			label: "Product Context",
			required: true,
			type: "text",
			xs: 12,
			sm: 6
		}
	]
	
	const StorageArea = [
		{
			name: "storageaddress",
			label: "Storage Address",
			type: "text",
			xs: 12,
			sm: 6
		},
	]
	
	const storageEvents = {	
		dates: [
			{
				name: "datein",
				label: "Date In",
				type: "date",
				xs: 12,
				sm: 6
			},
			{
				name: "dateout",
				label: "Date Out",
				type: "date",
				xs: 12,
				sm: 6
			},
		],
		time : [
			{
				name: "timein",
				label: "Time In",
				type: "time",
				xs: 12,
				sm: 6
			},
		
			{
				name: "timeout",
				label: "Time Out",
				type: "time",
				xs: 12,
				sm: 6
			},
	
		]
	}
	
	const textareas = [
		{
			name: "notes",
			label: "Notes",
			type: "text",
			xs: 12,
			required: true,
			multiline : true,
			row: 4
		},
	]
	
	return (
		<StyledWrapper container spacing={2}>

			{
				errMessage ? (
					<Grow  style={{ transformOrigin: '10 20 50' }} in timeout={1000}>
						<Alert severity="error" variant="filled">
							<AlertTitle>Edit Storage Error!</AlertTitle>
							{ errMessage }
						</Alert>
					</Grow>
				) : null
			}

			{
				showSuccess ? (
					<Grow  style={{ transformOrigin: '10 20 50' }} in timeout={1000}>
						<Alert severity="success" variant="filled">
							<AlertTitle>Edit Storage Success!</AlertTitle>
							Storage of track number <strong> {trackNo} </strong> has been posted successfully
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
								Client Information
							</Typography>
						</Grid>
						
						{
							contactInformation.map((el, i) => (
								<Grid key={i} item sm={el.sm} xs={el.xs}>
									<TextField type={el.type} name={el.name} label={el.label}/>
								</Grid>
							))
						}

						<Grid item xs={12}>
							<Typography variant="h5" color="secondary" gutterBottom>
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
							<Typography variant="h5" color="secondary" gutterBottom>
								Storage Geographical Area
							</Typography>
						</Grid>

						{
							StorageArea.map((el, i) => (
								<Grid key={i} item sm={el.sm} xs={el.xs}>
									<TextField type={el.type} name={el.name} label={el.label}/>
								</Grid>
							))
						}


						<Grid item xs={12}>
							<Typography variant="h5" color="secondary" gutterBottom>
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
							<Typography variant="h5" color="secondary" gutterBottom>
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

					
					<ButtonGroup variant="contained" type="submit" sx={{marginTop: "30px"}}>
						<Button type="submit" color="secondary"  endIcon={<SendIcon/>} sx={{color: "#000000"}}>
							Submit
						</Button>
						<Button  type="button" color="error" endIcon={<ClearIcon/>}>
							Cancel 
						</Button>
					</ButtonGroup>
				</Form>

			</Formik>
		</StyledWrapper>
	)
}
const mapStateToProps = ({ auth, storage }) => ({
	token: auth.token,

	errMessage: storage.errMessage,
	data: storage.data
})

const mapDispatchToProps = (dispatch) => ({
	editStorage: (values, token) => dispatch(editAStorage(values, token))
})

export default connect(mapStateToProps, mapDispatchToProps)(EditStorage)