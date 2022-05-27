import React from 'react';

import { Box, Button, Grid } from "@mui/material";
import { styled } from "@mui/styles";

import PinDropIcon from '@mui/icons-material/PinDrop';

import { Formik, Form } from "formik";
import * as Yup from "yup";

import SelectWrapper from "../../../components/formsUI/select/select";
import TextfieldWrapper from "../../../components/formsUI/textfield/textfield";

const options = {
	"shipment": "shipment",
	"storage": "storage"
}


const styledAuthTextField = {
	'& .MuiInput-underline:after': {
		borderBottomColor: '#f48d3a !important',
	},
	'& .MuiOutlinedInput-root': {
		color: "white",
		'& fieldset': {
			borderColor: '#f48d3a !important',
		},
		'&:hover fieldset': {
			borderColor:'#f48d3a !important',
		},
		'&.Mui-focused fieldset': {
			borderColor: '#f48d3a !important',
		},
	},
	color: "#f48d3a !important"
}

const StyledContainer = styled(Box)(({ theme }) => ({
	marginBottom: "30px"
}))

const StyledGrid = styled(Grid)(({ theme }) => ({
	display: "flex"
}))

const StyledIputGrid = styled(Grid)(({ theme }) => ({
	display: "flex"
}))

const StyledButtonGrid = styled(Grid)(({ theme }) => ({

}))

const StyledButton = styled(Button)(({ theme }) => ({
	width: "100%",
	height: "100%"
}))

const INITIAL_FORM_STATE = {
	trackno: "",
	tracktype: ""
}

const FORM_VALIDATION = Yup.object().shape({
	trackno: Yup.string().min(3).required("Please add track number"),
	tracktype: Yup.string().min(3).required("Please add a service"),
    
})

const MapInput = () => {

	const submitHandler = values => {
		console.log(values)
	}

	return (
		<StyledContainer>
			<Formik
				initialValues={{
					...INITIAL_FORM_STATE
				}}
				validationSchema={ FORM_VALIDATION }
				onSubmit = { submitHandler }
			>
				<Form>
					<StyledGrid container spacing={0}>
						<StyledIputGrid item xl={9} lg={9} md={9} sm={12} xs={12} >
							<TextfieldWrapper
								label="Enter the track number"
								name="trackno"
								type="text"
								sx={styledAuthTextField}
							/>
							<SelectWrapper
								name="tracktype"
								label="Service Type"
								options={options}
								sx={styledAuthTextField}
							/>
						</StyledIputGrid>
						<StyledButtonGrid item xl={3} lg={3} md={3} sm={12} xs={12} >
							<StyledButton type="submit" variant="contained" color="secondary" >
								Locate
							</StyledButton>
						</StyledButtonGrid>
					</StyledGrid>
				</Form>
			</Formik>
		</StyledContainer>
	)
}

export default MapInput