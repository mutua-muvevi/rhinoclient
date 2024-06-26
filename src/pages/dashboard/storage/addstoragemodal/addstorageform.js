import React, { useState } from 'react';

import { Alert, AlertTitle, Box, Button, ButtonGroup, Grid, Grow, Stack, Typography } from "@mui/material"
import { styled } from "@mui/system";

import { Formik, Form, FieldArray } from "formik";
import * as Yup from "yup";

import TextField from "../../../../components/formsUI/textfield/textfield"
import { depositorInformation, acceptanceInformation, goodsOwnerInformation, productDetailsInformation, trackNumber, otherDetails, INITIAL_FORM_STATE, FORM_VALIDATION, depositPeriod } from "./addStorageformcontent";
import DateField from "../../../../components/formsUI/datepicker/datepicker";

import SendIcon from '@mui/icons-material/Send';
import ClearIcon from '@mui/icons-material/Clear';

import { connect } from "react-redux";
import { postAStorage } from "../../../../redux/storage/storageaction";
import TimePicker from '../../../../components/formsUI/timepicker/timepicker';


const StyledWrapper = styled(Box)(({theme}) => ({
	padding: 10
}))

const AddStorageForm = ({ token, postAStorage, errMessage, setOpen}) => {
	
	const [ trackNo, setTrackNo ] = useState("");
	const [ showSuccess, setShowSuccess ] = useState(false);

	const submitHandler = async ( values, {resetForm} ) => {
		const response = await postAStorage(values, token)
		resetForm()

		if (!errMessage || errMessage === undefined){
			setShowSuccess(true)
			setTrackNo(values.trackno)
			resetForm()
		}

		if(response){
			setTimeout(() => {
				setOpen(false)
				window.location.reload()
			}, 1500);
		}

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
				{
					({ values }) => (
						<Form>
							<Grid container spacing={2}>
								<Grid item xs={12}>
									<Typography variant="h5" color="secondary" gutterBottom>
										Depositor's Information
									</Typography>
								</Grid>
								
								{
									depositorInformation.map((el, i) => (
										<Grid key={i} item sm={el.sm} xs={el.xs}>
											<TextField type={el.type} name={el.name} label={el.label}/>
										</Grid>
									))
								}


								<Grid item xs={12}>
									<Typography variant="h5" color="secondary" gutterBottom>
										Goods Acceptance Period
									</Typography>
								</Grid>

								{
									acceptanceInformation.map((el, i) => (
										<Grid key={i} item sm={el.sm} xs={el.xs}>
											{
												el.formType === "datefield" ? <DateField type={el.type} name={el.name} label={el.label}/> : <TimePicker type={el.type} name={el.name} label={el.label}/>
											}
										</Grid>
									))
								}


								<Grid item xs={12}>
									<Typography variant="h5" color="secondary" gutterBottom>
										The Goods Owner's information
									</Typography>
								</Grid>

								{
									goodsOwnerInformation.map((el, i) => (
										<Grid key={i} item sm={el.sm} xs={el.xs}>
											<TextField type={el.type} name={el.name} label={el.label}/>
										</Grid>
									))
								}


								<Grid item xs={12}>
									<Typography variant="h5" color="secondary" gutterBottom>
										Track/Reference Number
									</Typography>
								</Grid>

								{
									trackNumber.map((el, i) => (
										<Grid key={i} item sm={el.sm} xs={el.xs}>
											<TextField type={el.type} name={el.name} label={el.label}/>
										</Grid>
									))
								}


								<Grid item xs={12}>
									<Typography variant="h5" color="secondary" gutterBottom>
										Other Details
									</Typography>
								</Grid>

								{
									otherDetails.map((el, i) => (
										<Grid key={i} item sm={el.sm} xs={el.xs}>
											<TextField type={el.type} name={el.name} label={el.label}/>
										</Grid>
									))
								}


								<Grid item xs={12}>
									<Typography variant="h5" color="secondary" gutterBottom>
										Deposit Period
									</Typography>
								</Grid>

								{
									depositPeriod.map((el, i) => (
										<Grid key={i} item sm={el.sm} xs={el.xs}>
											{
												el.formType === "datefield" ? <DateField type={el.type} name={el.name} label={el.label}/> : <TimePicker type={el.type} name={el.name} label={el.label}/>
											}
										</Grid>
									))
								}


								<Grid item xs={12}>
									<Typography variant="h5" color="secondary" gutterBottom>
										Product Information
									</Typography>
								</Grid>

								<Grid item xs={12}>
									<FieldArray name="productDetailArray">
										{(arrayHelpers) => {
											const productDetails = values.productDetailArray
											
											return (
												<>
													{productDetails && productDetails.length > 0
														? productDetails.map((item, index) => (
																<Box
																	key={index}
																	sx={{
																		marginBottom: "50px",
																	}}
																>
																	<Stack direction="column" spacing={3}>
																		{productDetailsInformation.map(
																			(info, indx) => (
																				<Box key={indx}>
																					<Stack direction="column" spacing={3}>
																						<TextField 
																							type={ info.type }
																							name={ `productDetailArray.${index}.${info.name}` }
																							label={ info.label }
																							fullWidth
																						/>

																					</Stack>
																				</Box>
																			)
																		)}
																		
																		<Button
																			variant="contained"
																			color="error"
																			type="button"
																			onClick={() =>
																				arrayHelpers.remove(index)
																			}
																		>
																			Remove Product
																		</Button>
																	</Stack>
																</Box>
														))
														: null}
													<Button
														type="button"
														variant="outlined"
														color="secondary"
														onClick={() => arrayHelpers.push({
															HSCode: "",
															packagesNo: "",
															netQuantity: "",
															marketRate: "",
															totalMarketValue: "",
															description: ""
														})}
													>
														Add another product
													</Button>
												</>
											);
										}}
									</FieldArray>
								</Grid>
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

					)
				}

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