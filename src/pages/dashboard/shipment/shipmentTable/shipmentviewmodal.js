import React, { useState } from 'react';

import { Box, Button, ButtonGroup, Container, Divider, Grid, Modal, Typography } from "@mui/material";
import { styled } from "@mui/system";

import EventRepeatIcon from '@mui/icons-material/EventRepeat';

import ClearIcon from '@mui/icons-material/Clear';
import DeleteIcon from '@mui/icons-material/Delete';

import EventModal from "./events/new/modal";
import ShipmentEventsTable from "./shipmenteventstable";
import DeleteShipment from '../delete/delete';

const StyledModal = styled(Modal)(({ theme }) => ({
	width: "85vw",
	margin: "10vh auto",
	overflowY: "scroll",
	border: 'none',
	height: "80vh",
	borderRadius: theme.shape.default
}))

const StyledModalContainerBox = styled(Box)(({theme}) => ({
	backgroundColor: theme.palette.background.paper,
	border: 'none',
	boxShadow: 24,
	paddingTop: 2,
	paddingBottom: 2,
}))

const styledModalBox = {
}

const StyledButtonGroup = styled(ButtonGroup)(({ theme }) => ({
	marginTop: "20px",
	marginBottom: "20px",
}))


const headerFont = {
	color: "#dea95f",
	fontWeight: 500,
	fontFamily: "'Rubik', sans-serif",
}

const titleFont = {
	fontWeight: 500,
	fontFamily: "'Rubik', sans-serif",
}

const successfulShipment = (objects) => {
	return objects.filter(obj => {
	  return obj.status === "completed"
	});
}

const ongoingShipment = (objects) => {
	return objects.filter(obj => {
	  return !obj.status === "completed";
	});
}

const ShipmentViewModal = ({ values, open, setOpen }) => {

	const [ eventModal, setEventModal ] = useState(false);
	const [ deleteModal, setDeleteModal ] = useState(false);

	const shipperInformation = [
		{
			name: "Shipper's Fullname",
			value: values.shippersfullname,
			xl: 4,
			lg: 4,
			md: 4,
			sm: 12,
			xs: 12
		},
		{
			name: "Shipper's Email",
			value: values.shippersemail,
			xl: 4,
			lg: 4,
			md: 4,
			sm: 12,
			xs: 12
		},
		{
			name: "Shipper's Company",
			value: values.shipperscompany,
			xl: 4,
			lg: 4,
			md: 4,
			sm: 12,
			xs: 12
		},
		{
			name: "Shipper's Telephone",
			value: values.shipperstelephone,
			xl: 4,
			lg: 4,
			md: 4,
			sm: 12,
			xs: 12
		},
		{
			name: "Shipper's Address",
			value: values.shippersaddress,
			xl: 4,
			lg: 4,
			md: 4,
			sm: 12,
			xs: 12
		},
	]

	const cosigneeInformation = [
		{
			name: "Cosignee's Fullname",
			value: values.consignfullname,
			xl: 4,
			lg: 4,
			md: 4,
			sm: 12,
			xs: 12
		},
		{
			name: "Cosignee's Email",
			value: values.consignemail,
			xl: 4,
			lg: 4,
			md: 4,
			sm: 12,
			xs: 12
		},
		{
			name: "Cosignee's Company",
			value: values.consigncompany,
			xl: 4,
			lg: 4,
			md: 4,
			sm: 12,
			xs: 12
		},
		{
			name: "Cosignee's Telephone",
			value: values.consigntelephone,
			xl: 4,
			lg: 4,
			md: 4,
			sm: 12,
			xs: 12
		},
		{
			name: "Cosignee's Address",
			value: values.consignaddress,
			xl: 4,
			lg: 4,
			md: 4,
			sm: 12,
			xs: 12
		},
	]
	
	const collectorsInformation = [
		{
			name: "Collector's Fullname",
			value: values.collectorfullname,
			xl: 4,
			lg: 4,
			md: 4,
			sm: 12,
			xs: 12
		},
		{
			name: "Collector's Email",
			value: values.collectoremail,
			xl: 4,
			lg: 4,
			md: 4,
			sm: 12,
			xs: 12
		},
		{
			name: "Collector's Telephone",
			value: values.collectortel,
			xl: 4,
			lg: 4,
			md: 4,
			sm: 12,
			xs: 12
		},
		{
			name: "Collector's Address",
			value: values.collectoraddress,
			xl: 4,
			lg: 4,
			md: 4,
			sm: 12,
			xs: 12
		},
	]

	const trackAndDescription = [
		{
			name: "Track number",
			value: values.trackno,
			xl: 4,
			lg: 4,
			md: 4,
			sm: 12,
			xs: 12
		},
	]

	const itemInformation = [
		{
			name: "Item's Name",
			value: values.itemsname,
			xl: 4,
			lg: 4,
			md: 4,
			sm: 12,
			xs: 12
		},
		{
			name: "Item's Weight",
			value: values.itemsweight,
			xl: 4,
			lg: 4,
			md: 4,
			sm: 12,
			xs: 12
		},
		{
			name: "Item's Weight Unit",
			value: values.itemsweightunit,
			xl: 4,
			lg: 4,
			md: 4,
			sm: 12,
			xs: 12
		},
		{
			name: "Item's Pieces",
			value: values.itemspieces,
			xl: 4,
			lg: 4,
			md: 4,
			sm: 12,
			xs: 12
		},
	]

	const originServiceAreaInfo = [
		
		{
			name: "Origin Service Area",
			value: values.departureaddress,
			xl: 4,
			lg: 4,
			md: 4,
			sm: 12,
			xs: 12
		},
		{
			name: "Origin Service Area Airpot Code",
			value: values.departureairportcode,
			xl: 4,
			lg: 4,
			md: 4,
			sm: 12,
			xs: 12
		},
		{
			name: "departure Date",
			value: values.departuredate,
			xl: 4,
			lg: 4,
			md: 4,
			sm: 12,
			xs: 12
		},
		{
			name: "Departure Time",
			value: values.departuretime,
			xl: 4,
			lg: 4,
			md: 4,
			sm: 12,
			xs: 12
		},
	]

	const destinationInfo = [
		
		{
			name: "Destination Address",
			value: values.arrivaladdress,
			xl: 4,
			lg: 4,
			md: 4,
			sm: 12,
			xs: 12
		},
		{
			name: "Destination Airpot Code",
			value: values.arrivalairportcode,
			xl: 4,
			lg: 4,
			md: 4,
			sm: 12,
			xs: 12
		},
		{
			name: "Estimated Arrival Date",
			value: values.arrivaldate,
			xl: 4,
			lg: 4,
			md: 4,
			sm: 12,
			xs: 12
		},
		{
			name: "Estimated Arrival Time",
			value: values.arrivaltime,
			xl: 4,
			lg: 4,
			md: 4,
			sm: 12,
			xs: 12
		},
	]

	// const shipviewEvents = {
	// 	name: "Shipping Events",
	// 	value: values.events,
	// }

	return (
		<>
			<StyledModal
				open={open}
				onClose={() => setOpen(false)}
				aria-labelledby="modal-modal-title"
				aria-describedby="modal-modal-description"
			>
				<StyledModalContainerBox sx={styledModalBox}>
					<Container maxWidth="xl">
						<Grid container spacing={2}>

							<Grid sx={{marginTop: "20px"}} item xs={12}>
								<Typography variant="h5" style={headerFont} gutterBottom>
									Shipper's Information
								</Typography>
							<Divider/>
							</Grid>
							{
								shipperInformation && shipperInformation.map(el => (
									<Grid item key={el.name} xl={el.xl} lg={el.lg} md={el.md} sm={el.sm} xs={el.xs}>
										<Typography style={titleFont} variant="body1">{el.name}</Typography>
										<Box>
											<Typography variant="body1">{el.value}</Typography>
										</Box>
									</Grid>
								))
							}


							<Grid item xs={12}>
								<Typography variant="h5" style={headerFont} gutterBottom>
									Consignee's Information
								</Typography>
							<Divider/>
							</Grid>
							{
								cosigneeInformation && cosigneeInformation.map(el => (
									<Grid item key={el.name} xl={el.xl} lg={el.lg} md={el.md} sm={el.sm} xs={el.xs}>
										<Typography style={titleFont} variant="body1">{el.name}</Typography>
										<Box>
											<Typography variant="body1">{el.value}</Typography>
										</Box>
									</Grid>
								))
							}


							<Grid item xs={12}>
								<Typography variant="h5" style={headerFont} gutterBottom>
									Collector's Information
								</Typography>
							<Divider/>
							</Grid>
							{
								collectorsInformation && collectorsInformation.map(el => (
									<Grid item key={el.name} xl={el.xl} lg={el.lg} md={el.md} sm={el.sm} xs={el.xs}>
										<Typography style={titleFont} variant="body1">{el.name}</Typography>
										<Box>
											<Typography variant="body">{el.value}</Typography>
										</Box>
									</Grid>
								))
							}


							<Grid item xs={12}>
								<Typography variant="h5" style={headerFont} gutterBottom>
									Track Information
								</Typography>
							<Divider/>
							</Grid>
							{
								trackAndDescription && trackAndDescription.map(el => (
									<Grid item key={el.name} xl={el.xl} lg={el.lg} md={el.md} sm={el.sm} xs={el.xs}>
										<Typography style={titleFont} variant="body1">{el.name}</Typography>
										<Box>
											<Typography variant="body">{el.value}</Typography>
										</Box>
									</Grid>
								))
							}


							<Grid item xs={12}>
								<Typography variant="h5" style={headerFont} gutterBottom>
									Item Information
								</Typography>
							<Divider/>
							</Grid>
							{
								itemInformation && itemInformation.map(el => (
									<Grid item key={el.name} xl={el.xl} lg={el.lg} md={el.md} sm={el.sm} xs={el.xs}>
										<Typography style={titleFont} variant="body1">{el.name}</Typography>
										<Box>
											<Typography variant="body">{el.value}</Typography>
										</Box>
									</Grid>
								))
							}


							<Grid item xs={12}>
								<Typography variant="h5" style={headerFont} gutterBottom>
									Origin Service Area Information
								</Typography>
							<Divider/>
							</Grid>
							{
								originServiceAreaInfo && originServiceAreaInfo.map(el => (
									<Grid item key={el.name} xl={el.xl} lg={el.lg} md={el.md} sm={el.sm} xs={el.xs}>
										<Typography style={titleFont} variant="body1">{el.name}</Typography>
										<Box>
											<Typography variant="body">{el.value}</Typography>
										</Box>
									</Grid>
								))
							}


							<Grid item xs={12}>
								<Typography variant="h5" style={headerFont} gutterBottom>
									Destination Information
								</Typography>
							<Divider/>
							</Grid>
							{
								destinationInfo && destinationInfo.map(el => (
									<Grid item key={el.name} xl={el.xl} lg={el.lg} md={el.md} sm={el.sm} xs={el.xs}>
										<Typography style={titleFont} variant="body1">{el.name}</Typography>
										<Box>
											<Typography variant="body">{el.value}</Typography>
										</Box>
									</Grid>
								))
							}

							<Grid item xs={12}>
								<ShipmentEventsTable events={ values.events } trackno={values.trackno}/>
							</Grid>


						</Grid>
						<StyledButtonGroup>
							<Button 
								endIcon={<EventRepeatIcon/>} 
								type="button" variant="contained" 
								color="secondary"
								style={{color : "black", minWidth: "150px"}}
								onClick={() => setEventModal(true)}
								>
									Add events
							</Button>

							<Button 
								endIcon={<ClearIcon/>} 
								type="button" 
								variant="contained" 
								color="warning"
								style={{minWidth: "150px"}}
								onClick={() => setOpen(false)}
								>
									Close
							</Button>

							<Button 
								endIcon={<DeleteIcon/>} 
								type="button" 
								variant="contained" 
								color="error"
								style={{minWidth: "150px"}}
								onClick={() => setDeleteModal(true)}
								>
									Delete Shipment
							</Button>
						</StyledButtonGroup>
					</Container>
				</StyledModalContainerBox>
			</StyledModal>

			<EventModal trackInfo={values.trackno} open={eventModal} setOpen={setEventModal}/>
			<DeleteShipment shipment={values} open={deleteModal} setOpen={setDeleteModal}/>
		</>
	)
}

export default ShipmentViewModal