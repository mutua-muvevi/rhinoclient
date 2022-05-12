import React from 'react';

import { Box, Container, Divider, Grid, Modal, Typography } from "@mui/material";
import { styled } from "@mui/system";

const StyledModal = styled(Modal)(({ theme }) => ({
	width: "85vw",
	margin: "10vh auto",
	overflowY: "scroll",
	border: 'none',
	borderRadius: theme.shape.default,
	height: "80vh"
}))

const styledModalBox = {
	backgroundColor: "white",
	border: 'none',
	boxShadow: 24,
	paddingTop: 2,
	paddingBottom: 2,
	borderRadius: "10px",
}

const ShipmentViewModal = ({ values, open, setOpen }) => {


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

	const truckAndDescription = [
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

	const shipviewEvents = {
		name: "Shipping Events",
		value: values.events,
	}

	return (
		<StyledModal
			open={open}
			onClose={() => setOpen(false)}
			aria-labelledby="modal-modal-title"
			aria-describedby="modal-modal-description"
		>
			<Box sx={styledModalBox}>
				<Typography variant="h4">Shipment Details</Typography>
				<Container maxWidth="xl">
					<Grid container spacing={2}>

						<Divider/>
						<Grid item xs={12}>
							<Typography variant="h5" color="blue" gutterBottom>
								Shipper's Information
							</Typography>
						</Grid>
						{
							shipperInformation && shipperInformation.map(el => (
								<Grid item key={el.name} xl={el.xl} lg={el.lg} md={el.md} sm={el.sm} xs={el.xs}>
									<Typography variant="h5">{el.name}</Typography>
									<Box>
										<Typography variant="body">{el.value}</Typography>
									</Box>
								</Grid>
							))
						}


						<Divider/>
						<Grid item xs={12}>
							<Typography variant="h5" color="blue" gutterBottom>
								Consignee's Information
							</Typography>
						</Grid>
						{
							cosigneeInformation && cosigneeInformation.map(el => (
								<Grid item key={el.name} xl={el.xl} lg={el.lg} md={el.md} sm={el.sm} xs={el.xs}>
									<Typography variant="h5">{el.name}</Typography>
									<Box>
										<Typography variant="body">{el.value}</Typography>
									</Box>
								</Grid>
							))
						}


						<Divider/>
						<Grid item xs={12}>
							<Typography variant="h5" color="blue" gutterBottom>
								Collector's Information
							</Typography>
						</Grid>
						{
							collectorsInformation && collectorsInformation.map(el => (
								<Grid item key={el.name} xl={el.xl} lg={el.lg} md={el.md} sm={el.sm} xs={el.xs}>
									<Typography variant="h5">{el.name}</Typography>
									<Box>
										<Typography variant="body">{el.value}</Typography>
									</Box>
								</Grid>
							))
						}


						<Divider/>
						<Grid item xs={12}>
							<Typography variant="h5" color="blue" gutterBottom>
								Track Information
							</Typography>
						</Grid>
						{
							truckAndDescription && truckAndDescription.map(el => (
								<Grid item key={el.name} xl={el.xl} lg={el.lg} md={el.md} sm={el.sm} xs={el.xs}>
									<Typography variant="h5">{el.name}</Typography>
									<Box>
										<Typography variant="body">{el.value}</Typography>
									</Box>
								</Grid>
							))
						}


						<Divider/>
						<Grid item xs={12}>
							<Typography variant="h5" color="blue" gutterBottom>
								Item Information
							</Typography>
						</Grid>
						{
							itemInformation && itemInformation.map(el => (
								<Grid item key={el.name} xl={el.xl} lg={el.lg} md={el.md} sm={el.sm} xs={el.xs}>
									<Typography variant="h5">{el.name}</Typography>
									<Box>
										<Typography variant="body">{el.value}</Typography>
									</Box>
								</Grid>
							))
						}


						<Divider/>
						<Grid item xs={12}>
							<Typography variant="h5" color="blue" gutterBottom>
								Origin Service Area Information
							</Typography>
						</Grid>
						{
							originServiceAreaInfo && originServiceAreaInfo.map(el => (
								<Grid item key={el.name} xl={el.xl} lg={el.lg} md={el.md} sm={el.sm} xs={el.xs}>
									<Typography variant="h5">{el.name}</Typography>
									<Box>
										<Typography variant="body">{el.value}</Typography>
									</Box>
								</Grid>
							))
						}


						<Divider/>
						<Grid item xs={12}>
							<Typography variant="h5" color="blue" gutterBottom>
								Destination Information
							</Typography>
						</Grid>
						{
							destinationInfo && destinationInfo.map(el => (
								<Grid item key={el.name} xl={el.xl} lg={el.lg} md={el.md} sm={el.sm} xs={el.xs}>
									<Typography variant="h5">{el.name}</Typography>
									<Box>
										<Typography variant="body">{el.value}</Typography>
									</Box>
								</Grid>
							))
						}


					</Grid>
				</Container>
			</Box>
		</StyledModal>
	)
}

export default ShipmentViewModal