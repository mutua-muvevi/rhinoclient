import { Box, Button, Grid, Typography } from "@mui/material"
import { styled } from "@mui/system";
import { Formik, Form } from "formik";
import React from 'react';
import * as Yup from "yup";
import TextField from "../../../../components/formsUI/textfield/textfield"
import { userFormContent } from "./adduserformcontent"


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
	city: "",
	country: "",
	password: "",
	isadmin: "",
}

const FORM_VALIDATION = Yup.object().shape({
	firstname: Yup.string().required(),
	lastname: Yup.string().required(),
	shippersemail: Yup.string().email().required(),
	telephone: Yup.string().required(),
	city: Yup.string().required(),
	country: Yup.string().required(),
	password: Yup.string().required(),
	isadmin: Yup.string().required(),
    
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
								User Information
							</Typography>
						</Grid>
						
						{
							userFormContent.map((el, i) => (
								<Grid item sm={el.sm} xs={el.xs}>
									<TextField type={el.type} name={el.name} label={el.label}/>
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

export default AddShipmentForm