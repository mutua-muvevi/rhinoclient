import React, { useState } from 'react';

import { Alert, AlertTitle, Box, Button, ButtonGroup, Grid, Grow, Typography } from "@mui/material"
import { styled } from "@mui/system";

import { Formik, Form } from "formik";
import * as Yup from "yup";

import TextField from "../../../../components/formsUI/textfield/textfield"
import { contactInformation, productInformation, StorageArea, storageEvents, textareas } from "./addStorageformcontent";
import DateField from "../../../../components/formsUI/datepicker/datepicker";
import TimeField from "../../../../components/formsUI/timepicker/timepicker"

import SendIcon from '@mui/icons-material/Send';
import ClearIcon from '@mui/icons-material/Clear';

import { connect } from "react-redux";
import { postAStorage } from "../../../../redux/storage/storageaction";


const StyledWrapper = styled(Box)(({theme}) => ({
	padding: 10
}))

const INITIAL_FORM_STATE = {
	fullname: "",
	email: "",
	telephone: "",
	company: "",

	trackno: "",
	product: "",
	weight: "",
	description: "",

	storageaddress: "",

	datein: "",
	dateout: "",
	timein: "",
	timeout: "",
	
	notes: "",
}

const FORM_VALIDATION = Yup.object().shape({
	fullname: Yup.string().min(3, "Minimum characters required for fullname is 3").required("Please add the client's Fullname"),
	email: Yup.string().min(3, "Minimum characters required for email is 3").email().required("Please add the client's Email"),
	telephone: Yup.string().min(3, "Minimum characters required for telephone is 3").required("Please add the client's Telephone number"),
	company: Yup.string().min(3, "Minimum characters required for company is 3").required("Please add the name of the client's company, If not add NULL"),
	
	trackno: Yup.string().min(3, "Minimum characters required for trackno is 3").required("Please add the client's item tracking number"),
	product: Yup.string().min(3, "Minimum characters required for product is 3").required("Please add the client's product"),
	weight: Yup.number().min(3, "Minimum amount required for weight is 0").required("Please add the client's product mass"),
	description: Yup.string().min(3, "Minimum characters required for description is 3").required("Please add the client's little description ,eg One bag of maize 10 killograms "),
	
	storageaddress: Yup.string().min(3, "Minimum characters required for storage address is 3").required("Please add the product's storage area"),
	
	datein: Yup.string().min(3, "Minimum characters required for date in is 3").required("Please add the date the goods were brought in for storage"),
	dateout: Yup.string(),
	timein: Yup.string().min(3, "Minimum characters required for time in is 3").required("Please add the time the goods were brought in for storage"),
	timeout: Yup.string(),
	notes: Yup.string().min(20, "Minimum characters required for notes is 20").max(1000).required("Please add the description of the goods"),
})

const AddStorageForm = ({ token, postAStorage, errMessage, setOpen}) => {
	
	const [ trackNo, setTrackNo ] = useState("")
	const [ showSuccess, setShowSuccess ] = useState(false);

	const submitHandler = ( values, {resetForm} ) => {
		postAStorage(values, token)

		if (!errMessage || errMessage === undefined){
			setShowSuccess(true)
			setTrackNo(values.trackno)
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
							<AlertTitle>Post Storage Error!</AlertTitle>
							{ errMessage }
						</Alert>
					</Grow>
				) : null
			}

			{
				showSuccess ? (
					<Grow  style={{ transformOrigin: '10 20 50' }} in timeout={1000}>
						<Alert severity="success" variant="filled">
							<AlertTitle>Post Storage Success!</AlertTitle>
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
						<Button type="submit" color="secondary"  endIcon={<SendIcon/>} style={{color: "black"}}>
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
	postAStorage: (values, token) => dispatch(postAStorage(values, token))
})

export default connect(mapStateToProps, mapDispatchToProps)(AddStorageForm)