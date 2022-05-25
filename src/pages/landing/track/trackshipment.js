import React, { useState } from 'react';
import { Link } from "react-router-dom";

import { Alert, AlertTitle, Box, Breadcrumbs, Button, Grow, Typography } from "@mui/material"
import { styled } from "@mui/system";

import HomeIcon from '@mui/icons-material/Home';
import TravelExploreIcon from '@mui/icons-material/TravelExplore';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import SearchIcon from '@mui/icons-material/Search';

import { Formik, Form } from "formik";
import * as Yup from "yup";

import TrackItem from "./trackItem";

import TextfieldWrapper from "../../../components/formsUI/textfield/textfield";

import { connect } from "react-redux";
import { getShipmentByTrackNo } from "../../../redux/shipment/shipmentactions";


const StyledBreadCrumbs = styled(Breadcrumbs)(({theme}) => ({
	marginTop: "20px",
	marginBottom: "20px",
	color: theme.palette.secondary.main
}))

const trackTitle = {
	marginTop: "20vh"
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

const StyledTrackButton = styled(Button)(({theme}) => ({
	padding: "10px",
	marginTop: "30px",
	minWidth: "20vw"
}))

const INITIAL_FORM_STATE = {
	trackno: ""
}

const FORM_VALIDATION = Yup.object().shape({
	trackno: Yup.string().min(3).max(100).required("Please add a valid track number"),
})

const TrackShipment = ({ item, getShipmentByTrackNo, errMessage }) => {

	const [trackItemModal, setTrackItemModal] = useState(false)
	
	const closeModal = () => {
		setTrackItemModal(false)
	}
	
	const submitHandler = trackno => {
		getShipmentByTrackNo(trackno)
		setTrackItemModal(true)
	}


	return (
		<Grow style={{ transformOrigin: '10 20 50' }} in timeout={2000}>
			<Box id="track-shipment">
				<StyledBreadCrumbs>
					<Link
						underline="hover"
						style={{color: "inherit", textDecoration: "none"}}
						
						to="/"
					>
						<HomeIcon color="#fff" sx={{ mr: 0.5 }} fontSize="inherit" />
						Home
					</Link>
					<Link
						underline="hover"
						sx={{ display: 'flex', alignItems: 'center' }}
						style={{color: "inherit", textDecoration: "none"}}
						to="/track/main"
					>
						<TravelExploreIcon sx={{ mr: 0.5 }} fontSize="inherit" />
						Track
					</Link>
					<Typography
						sx={{ display: 'flex', alignItems: 'center' }}
						color="#fff"
					>
						<LocalShippingIcon sx={{ mr: 0.5 }} fontSize="inherit" />
						Track Shipment
					</Typography>
				</StyledBreadCrumbs>
				

					<Box>
						<Typography variant="h1" color="white" sx={trackTitle} gutterBottom>
							Track Your Shipment
						</Typography>
						{
							errMessage ? (
								<Grow  style={{ transformOrigin: '10 20 50', marginBottom: "30px" }} in timeout={1000}>
									<Alert severity="error" variant="filled">
										<AlertTitle>Track Shipment Error!</AlertTitle>
										{ errMessage }
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
								<TextfieldWrapper
									type="text"
									name="trackno"
									placeholder="Enter Shipping Track Number..."
									variant="standard"
									color="secondary"
									sx={styledAuthTextField}
								/>

								<StyledTrackButton type="submit" endIcon={<SearchIcon/>} variant="contained" color="secondary">
									Search
								</StyledTrackButton>
							</Form>
						</Formik>

					</Box>
					{
						item ? (
							<TrackItem
								item = {item}
								modal={trackItemModal}
								onClose={closeModal}
							/>
							) : null
					}
			</Box>
		</Grow>
	)
}

const mapStateToProps = ({ shipment }) => ({
	data: shipment.data,
	item: shipment.shipment,
	errMessage: shipment.getOneError
})

const mapDispatchToProps = (dispatch) => ({
	getShipmentByTrackNo: (trackno) => dispatch(getShipmentByTrackNo(trackno))
})

export default connect(mapStateToProps, mapDispatchToProps)(TrackShipment)