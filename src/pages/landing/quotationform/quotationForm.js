import { Box, Button, Grid, Typography } from "@mui/material"
import { styled } from "@mui/system";
import { Formik, Form } from "formik";
import React from 'react';
import * as Yup from "yup";
import TextField from "../../../components/formsUI/textfield/textfield";
import { quotationFormInputs, messageTextArea } from "./quotationformdata";
import SendIcon from '@mui/icons-material/Send';


const StyledWrapper = styled(Box)(({theme}) => ({
	padding: 10
}))

const styledGridFormWrapper = {
	minHeight: "40vh",
	marginTop: "30px"
}

const INITIAL_FORM_STATE = {
	firstname: "",
	lastname: "",
	company: "",
	email: "",
	telephone: "",
	city: "",
	country: "",
	product: "",
	message: ""
}

const FORM_VALIDATION = Yup.object().shape({
	firstname: Yup.string().min(3).max(100).required(),
	lastname: Yup.string().min(3).max(100).required(),
	company: Yup.string().min(3).max(100).required(),
	email: Yup.string().email().min(3).max(100).required(),
	telephone: Yup.string().min(3).max(100).required(),
	city: Yup.string().min(3).max(100).required(),
	country: Yup.string().min(3).max(100).required(),
	product: Yup.string().min(3).max(100).required(),
	message: Yup.string().min(20).max(1000).required(),
})

const QuotationForm = () => {
	return (
		<StyledWrapper>
			
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
					<Grid sx={styledGridFormWrapper} container spacing={2}>
						{
							quotationFormInputs.map((el, i) => (
								<Grid item key={i} lg={el.lg} sm={el.sm} xs={el.xs}>
									<TextField  type={el.type} name={el.name} label={el.label}/>
								</Grid>
							))
						}

						<Grid item sm={messageTextArea.sm} xs={messageTextArea.xs} lg={messageTextArea.lg}>
							<TextField multiline rows={messageTextArea.row} type={messageTextArea.type} name={messageTextArea.name} label={messageTextArea.label}/>
						</Grid>

					</Grid>

					<Button variant="contained" type="submit" sx={{marginTop: "30px"}} endIcon={<SendIcon/>}>
						Submit Quotation
					</Button>
				</Form>
			</Formik>
		</StyledWrapper>
	)
}

export default QuotationForm