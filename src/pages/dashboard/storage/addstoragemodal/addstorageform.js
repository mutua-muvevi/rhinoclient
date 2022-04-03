import { Box, Button, Grid, Typography } from "@mui/material"
import { styled } from "@mui/system";
import { Formik, Form } from "formik";
import React from 'react';
import * as Yup from "yup";
import TextField from "../../../../components/formsUI/textfield/textfield"
import { contactInformation } from "./addStorageformcontent";
// import { addStorageFormContent } from "./addStorageformcontent"


const StyledWrapper = styled(Box)(({theme}) => ({
	padding: 10
}))


const StyledAddButton = styled(Button)(({theme}) => ({
	borderRadius: 3,
	textAlign: "left",
	padding: "8px 25px"
}))

const INITIAL_FORM_STATE = {
	firstname: "",
	lastname: "",
	email: "",
	telephone: "",
	company: ""
}

const FORM_VALIDATION = Yup.object().shape({
	firstname: Yup.string().required(),
	lastname: Yup.string().required(),
	email: Yup.string().email().required(),
	telephone: Yup.string().required(),
	company: Yup.string().required(),
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
								<Grid item sm={6} xs={el.xs}>
									<TextField name={el.name} label={el.label}/>
								</Grid>
							))
						}

						<Grid item xs={12}>
							<Typography variant="h5" color="blue" gutterBottom>
								Product Information
							</Typography>
						</Grid>

						<Grid item xs={12}>
							<Typography variant="h5" color="blue" gutterBottom>
								Storage Information
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

export default AddStorageForm