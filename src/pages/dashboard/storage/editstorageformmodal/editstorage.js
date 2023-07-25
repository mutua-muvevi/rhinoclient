import React, { useState } from 'react';

import { Alert, AlertTitle, Box, Button, ButtonGroup, Grid, Grow, Stack, Typography } from "@mui/material"
import { styled } from "@mui/system";

import { Formik, Form, FieldArray } from "formik";
import * as Yup from "yup";

import { depositorInformation, acceptanceInformation, goodsOwnerInformation, productDetailsInformation, otherDetails, FORM_VALIDATION, depositPeriod } from "./info";

import TextField from "../../../../components/formsUI/textfield/textfield";
import DateField from "../../../../components/formsUI/datepicker/datepicker";

import SendIcon from '@mui/icons-material/Send';
import ClearIcon from '@mui/icons-material/Clear';

import { connect } from "react-redux";
import { editAStorage } from "../../../../redux/storage/storageaction";
import TimePicker from '../../../../components/formsUI/timepicker/timepicker';


const StyledWrapper = styled(Box)(({theme}) => ({
	padding: 10
}))


const EditStorage = ({token, editStorage, errMessage, storage, setOpen}) => {
	const [ trackNo, setTrackNo ] = useState("")
	const [ showSuccess, setShowSuccess ] = useState(false);

	
	const INITIAL_FORM_STATE = {
		depositorFullname: storage.depositor.fullname,
		depositorEmail: storage.depositor.email,
		depositorTelephone: storage.depositor.telephone,
		depositorCompany: storage.depositor.company,
		depositorAddress: storage.depositor.address,
	
		acceptedFromDate: storage.acceptance.from.date,
		acceptedFromTime: storage.acceptance.from.time,
		acceptedToDate: storage.acceptance.to.date,
		acceptedToTime: storage.acceptance.to.time,
	
		ownerFullname: storage.owner.fullname,
		ownerEmail: storage.owner.email,
		ownerTelephone: storage.owner.telephone,
		ownerCompany: storage.owner.company,
		ownerAddress: storage.owner.address,
		ownerAccountNumber: storage.owner.accountNo,
	
		productDetailArray: storage.productDetails,
	
		privateMarks: storage.privateMarks,
		handlingCharges: storage.handlingCharges,
		assuredFor: storage.assuredFor,
		receiptNumber: storage.receiptNumber,
		receiptValidUpTo: storage.receiptValidUpTo,
		productOrigin: storage.productOrigin,
		wareHouseLocation: storage.wareHouseLocation,
		receivedBy: storage.receivedBy,
		depositDate: storage.depositDate ? storage.depositDate : "",
		depositTime: storage.depositTime ? storage.depositTime : "",
	
		trackno: storage.trackno,
		_id: storage._id
	};

	const submitHandler = ( values, {resetForm} ) => {
		editStorage(values, token)
		resetForm()

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
							<AlertTitle>Edit Storage Error!</AlertTitle>
							{ errMessage }
						</Alert>
					</Grow>
				) : null
			}

			{
				showSuccess ? (
					<Grow  style={{ transformOrigin: '10 20 50' }} in timeout={1000}>
						<Alert severity="success" variant="filled">
							<AlertTitle>Edit Storage Success!</AlertTitle>
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
	data: storage.data,
})

const mapDispatchToProps = (dispatch) => ({
	editStorage: (values, token) => dispatch(editAStorage(values, token))
})

export default connect(mapStateToProps, mapDispatchToProps)(EditStorage)