import React, { useState } from 'react';

import { Alert, AlertTitle, Box, Button, ButtonGroup, Grid, Grow } from "@mui/material"
import { styled } from "@mui/system";

import SendIcon from '@mui/icons-material/Send';
import ClearIcon from '@mui/icons-material/Clear';

import { Formik, Form } from "formik";
import * as Yup from "yup";

import { quotationFormInputs, messageTextArea } from "./quotationformdata";
import TextField from "../../../components/formsUI/textfield/textfield";

import { connect } from "react-redux";
import { postQuotation } from "../../../redux/quotation/quotationactions";


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
	email: "",
	company: "",
	telephone: "",
	city: "",
	country: "",
	product: "",
	message: ""
}

const FORM_VALIDATION = Yup.object().shape({
	firstname: Yup.string().min(3).max(100).required("Please add your first name"),
	lastname: Yup.string().min(3).max(100).required("Please add your lastname"),
	email: Yup.string().email("Please add a valid email").min(5).max(100).required("Please add your email"),
	telephone: Yup.string().min(3).max(100).required("Please add a telephone"),
	company: Yup.string().min(3).max(100),
	city: Yup.string().min(3).max(100).required("Please add your city"),
	country: Yup.string().min(3).max(100).required("Please add your country"),
	product: Yup.string().min(3).max(100).required("Please add product/ service name/details"),
	message: Yup.string().min(20).max(1000).required("Quotation message in required"),
})

const QuotationForm = ({ setOpen, postQuotation, errMessage }) => {

	const [ showSuccess, setShowSuccess ] = useState(false);

	const submitHandler = (values, {resetForm}) => {
		postQuotation(values)
		
		
		if (!errMessage || errMessage === undefined){
			setShowSuccess(true)
			resetForm()
		}

		setTimeout(() => {
			setOpen(false)
		}, 5000);
	}

	return (
		<StyledWrapper>
			
			{
				errMessage ? (
					<Grow  style={{ transformOrigin: '10 20 50' }} in timeout={1000}>
						<Alert severity="error" variant="filled">
							<AlertTitle>Post Quotation Error!</AlertTitle>
							{ errMessage }
						</Alert>
					</Grow>
				) : null
			}
			
			{
				showSuccess ? (
					<Grow  style={{ transformOrigin: '10 20 50' }} in timeout={1000}>
						<Alert severity="success" variant="filled">
							<AlertTitle>Post Quotation Success!</AlertTitle>
							Your Quotation message has been send successfully
						</Alert>
					</Grow>
				) : null
			} 
			<Formik
				initialValues={{
					...INITIAL_FORM_STATE
				}}
				validationSchema={ FORM_VALIDATION }
				onSubmit = { submitHandler }
			>
				<Form>
					<Grid sx={styledGridFormWrapper} container spacing={2}>
						{
							quotationFormInputs.map((el, i) => (
								<Grid item key={i} lg={el.lg} sm={el.sm} xs={el.xs}>
									<TextField size="small"  type={el.type} name={el.name} label={el.label}/>
								</Grid>
							))
						}

						<Grid item sm={messageTextArea.sm} xs={messageTextArea.xs} lg={messageTextArea.lg}>
							<TextField 
								size="small"
								multiline 
								rows={messageTextArea.row} 
								type={messageTextArea.type} 
								name={messageTextArea.name} 
								label={messageTextArea.label}
								/>
						</Grid>
					</Grid>

					<ButtonGroup variant="contained" type="submit" sx={{marginTop: "30px"}}>
						<Button type="submit" color="secondary"  endIcon={<SendIcon/>}>
							Submit Quotation
						</Button>
						<Button onClick={() => setOpen(false)} type="submit" color="error" endIcon={<ClearIcon/>}>
							Cancel Quotation
						</Button>
					</ButtonGroup>
				</Form>
			</Formik>
		</StyledWrapper>
	)
}

const mapStateToProps = ({ quotation }) => ({
	errMessage: quotation.errMessage,
	data: quotation.storageQuotation
})

const mapDispatchToProps = (dispatch) => ({
	postQuotation: (values) => dispatch(postQuotation(values))
})

export default connect(mapStateToProps, mapDispatchToProps)(QuotationForm)