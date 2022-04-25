import { Box, Button, ButtonGroup, Grid } from "@mui/material"
import { styled } from "@mui/system";
import { Formik, Form } from "formik";
import React, { useState } from 'react';
import * as Yup from "yup";
import TextField from "../../../components/formsUI/textfield/textfield";
import { quotationFormInputs, messageTextArea } from "./quotationformdata";
import SendIcon from '@mui/icons-material/Send';
import ClearIcon from '@mui/icons-material/Clear';
import Confirmation from "../../../components/units/modal/confirmation";


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
	firstname: Yup.string().min(3).max(100).required(),
	lastname: Yup.string().min(3).max(100).required(),
	email: Yup.string().email().min(3).max(100).required(),
	telephone: Yup.string().min(3).max(100).required(),
	company: Yup.string().min(3).max(100).required(),
	city: Yup.string().min(3).max(100).required(),
	country: Yup.string().min(3).max(100).required(),
	product: Yup.string().min(3).max(100).required(),
	message: Yup.string().min(20).max(1000).required(),
})

const QuotationForm = ({onClose}) => {

	const [modal, setModal] = useState(false);
	const [ formValues, setFormValues ] = useState({})

	const openConfirmationModal = () => {
		setModal(true)
	}

	const closeConfirmationModal = () => {
		setModal(false)
	}

	const submitHandler = (values, {resetForm}) => {
		setFormValues(values)
		setModal(true)
		resetForm()

	}

	return (
		<StyledWrapper>
			
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
						<Button type="submit" color="primary"  endIcon={<SendIcon/>}>
							Submit Quotation
						</Button>
						<Button onClick={onClose} type="submit" color="error" endIcon={<ClearIcon/>}>
							Cancel Quotation
						</Button>
					</ButtonGroup>
				</Form>
			</Formik>
			<Confirmation
				modal={modal}
				openConfirmation={openConfirmationModal}
				onClose={closeConfirmationModal}
				values={formValues}
			/>
		</StyledWrapper>
	)
}

export default QuotationForm