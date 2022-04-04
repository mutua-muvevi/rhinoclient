import { Box, Button, Grid, Typography } from "@mui/material"
import { styled } from "@mui/system";
import { Formik, Form } from "formik";
import React from 'react';
import * as Yup from "yup";
import TextField from "../../../../components/formsUI/textfield/textfield"
import DateField from "../../../../components/formsUI/datepicker/datepicker";
import TimeField from "../../../../components/formsUI/timepicker/timepicker"
import { collectorInformation, cosignInformation, itemInformation, shippersInformation } from "./addshipmentformcontent"


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
	shippersfullname: "",
	shippersemail:"",
	shippersidno:"",
	shipperstelephone:"",
	shipperscompany:"",
	shippersaddress:"",

	consignfullnames:"",
	consignemail:"",
	consigntelephone:"",
	consigncompany:"",

	collectorfullname:"",
	collectorEmail:"",
	collectortel:"",
	collectoraddress:"",

	trackno:"",
	itemsname:"",
	itemsweight:"",
	itemsweightunit:"",
	itemspieces:"",
	itemsquality:"",
	quantifiableunit:"",
	itemsproducttype:"",
	
	departurecity:"",
	departurecountry:"",
	departuredate:"",
	departuretime:"",
	
	arrivalcity:"",
	arrivalcountry:"",
	arrivaldate:"",
	arrivaltime:"",

	logisticstype:""

}

const FORM_VALIDATION = Yup.object().shape({
	shippersfullname: Yup.string().required(),
	shippersemail: Yup.string().email().required(),
	shippersidno: Yup.string().required(),
	shipperstelephone: Yup.string().required(),
	shipperscompany: Yup.string().required(),
	shippersaddress: Yup.string().required(),
	
	
	consignfullnames: Yup.string().required(),
	consignemail: Yup.string().email().required(),
	consigntelephone: Yup.string().required(),
	consigncompany: Yup.string().required(),
	
	collectorfullname: Yup.string().required(),
	collectoremail: Yup.string().email().required(),
	collectoraddress: Yup.string().required(),
	collectortel: Yup.string().required(),
	
	trackno: Yup.string().required(),
	itemsname: Yup.string().required(),
	itemsweight: Yup.number().required(),
	itemsweightunit: Yup.string().required(),
	itemspieces: Yup.number().required(),
	itemsquality: Yup.string().required(),
	quantifiableunit: Yup.string().required(),
	itemsproducttype: Yup.string().required(),
	
	arrivalcity: Yup.string().required(),
	arrivalcountry: Yup.string().required(),
	arrivaltime: Yup.string().required(),
	arrivaldate: Yup.string().required(),
	
	departurecity: Yup.string().required(),
	departurecountry: Yup.string().required(),
	departuredate: Yup.string().required(),
	departuretime: Yup.string().required(),
	
	logisticstype: Yup.string().required(),
})

const AddShipmentForm = () => {
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
								Shippers Information
							</Typography>
						</Grid>
						
						{
							shippersInformation.map((el, i) => (
								<Grid item sm={el.sm} xs={el.xs}>
									<TextField type={el.type} name={el.name} label={el.label}/>
								</Grid>
							))
						}
						
						<Grid item xs={12}>
							<Typography variant="h5" color="blue" gutterBottom>
								Cosign Information
							</Typography>
						</Grid>

						{
							cosignInformation.map((el, i) => (
								<Grid item sm={el.sm} xs={el.xs}>
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
								<Grid item sm={el.sm} xs={el.xs}>
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
								<Grid item sm={el.sm} xs={el.xs}>
									<TextField type={el.type} name={el.name} label={el.label}/>
								</Grid>
							))
						}

						<Grid item xs={12}>
							<Typography variant="h5" color="blue" gutterBottom>
								Origin Area
							</Typography>
						</Grid>

						<Grid item xs={12}>
							<Typography variant="h5" color="blue" gutterBottom>
								Destination
							</Typography>
						</Grid>
					</Grid>
				</Form>

			</Formik>
			
			<StyledAddButton variant="contained">
				Submit
			</StyledAddButton>
		</StyledWrapper>
	)
}

export default AddShipmentForm