import React, { useState } from 'react';

import { Alert, AlertTitle, Box, Button, ButtonGroup, Grid, Grow, Typography } from "@mui/material"
import { styled } from "@mui/system";

import { Formik, Form } from "formik";
import * as Yup from "yup";

import CheckBoxField from "../../../../components/formsUI/checkbox/checkbox";
import TextField from "../../../../components/formsUI/textfield/textfield"
import { userFormContent } from "./info";

import SendIcon from '@mui/icons-material/Send';
import ClearIcon from '@mui/icons-material/Clear';


import { connect } from "react-redux";
import { editUser } from '../../../../redux/user/useraction';

const StyledWrapper = styled(Box)(({theme}) => ({
	padding: 10,
	marginBottom: "30px"
}))



const EditEventForm = ({ token, editUser, errMessage, user, setOpen}) => {
	
	const [ showSuccess, setShowSuccess ] = useState(false);

	const INITIAL_FORM_STATE = {
		firstname: user.firstname,
		lastname: user.lastname,
		email: user.email,
		telephone: user.telephone,
		city: user.city,
		country: user.country,
		authorization: user.authorization,
	}
	
	const FORM_VALIDATION = Yup.object().shape({
		firstname: Yup.string().min(2).required("Please add your firstname"),
		lastname: Yup.string().required("Please add your lastname"),
		email: Yup.string().email("Please add a valid email").required("Please add an email"),
		telephone: Yup.string().required("Please add your telephone number"),
		city: Yup.string().required("Please add your city"),
		country: Yup.string().required("Please add your country"),
		authorization: Yup.string().required("Please add your authentication status")
	})
	

	const submitHandler = ( values, {resetForm} ) => {
		const id = user._id
		editUser({id, token, values})
		console.log("Values are",values)

		if (!errMessage || errMessage === undefined){
			setShowSuccess(true)
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
							<AlertTitle>Edit Event Error!</AlertTitle>
							{ errMessage }
						</Alert>
					</Grow>
				) : null
			}

			{
				showSuccess ? (
					<Grow  style={{ transformOrigin: '10 20 50' }} in timeout={1000}>
						<Alert severity="success" variant="filled">
							<AlertTitle>Edit User Success!</AlertTitle>
							The account of {user.firstname} has been edited successfully
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
								Edit User
							</Typography>
						</Grid>
						
						{
							userFormContent.map((el, i) => (
								<Grid key={i} item sm={el.sm} xs={el.xs}>
									<TextField type={el.type} name={el.name} label={el.label}/>
								</Grid>
							))
						}

						<Grid item>
							<CheckBoxField name="authorization" label="authorization" legend="Authorization"/>
						</Grid>

					</Grid>

				
					<ButtonGroup variant="contained" type="submit" sx={{marginTop: "30px"}}>
						<Button type="submit" color="secondary" sx={{ color: "black" }} endIcon={<SendIcon/>}>
							Edit User
						</Button>
						<Button onClick={() => setOpen(false)} type="submit" color="error" endIcon={<ClearIcon/>}>
							Cancel 
						</Button>
					</ButtonGroup>
				</Form>
			</Formik>

		</StyledWrapper>
	)
}

const mapStateToProps = ({ auth }) => ({
	token: auth.token,
})

const mapDispatchToProps = (dispatch) => ({
	editUser: (values, token) => dispatch(editUser(values, token))
})

export default connect(mapStateToProps, mapDispatchToProps)(EditEventForm)