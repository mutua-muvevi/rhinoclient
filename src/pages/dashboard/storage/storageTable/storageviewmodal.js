import React from 'react';

import { Box, Button, ButtonGroup, Container, Divider, Grid, Modal, Typography } from "@mui/material";
import { styled } from "@mui/system";

import EventRepeatIcon from '@mui/icons-material/EventRepeat';
import DeleteIcon from '@mui/icons-material/Delete';

const StyledModal = styled(Modal)(({ theme }) => ({
	width: "85vw",
	margin: "15vh auto",
	overflowY: "scroll",
	border: 'none',
	height: "70vh",
	borderRadius: theme.shape.default
}))

const StyledModalContainerBox = styled(Box)(({theme}) => ({
	backgroundColor: theme.palette.background.paper,
	border: 'none',
	boxShadow: 24,
	paddingTop: 2,
	paddingBottom: 2,
	minHeight: "70vh",
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


const StorageViewModal = ({ values, open, setOpen }) => {
	
	const ownerInformation = [
		{
			name: "Owner's Fullname",
			value: values.fullname,
			xl: 4,
			lg: 4,
			md: 4,
			sm: 12,
			xs: 12
		},
		{
			name: "Owner'sEmail",
			value: values.email,
			xl: 4,
			lg: 4,
			md: 4,
			sm: 12,
			xs: 12
		},
		{
			name: "Owner's Company",
			value: values.company,
			xl: 4,
			lg: 4,
			md: 4,
			sm: 12,
			xs: 12
		},
		{
			name: "Owner'sTelephone",
			value: values.telephone,
			xl: 4,
			lg: 4,
			md: 4,
			sm: 12,
			xs: 12
		},
		{
			name: "Owner'sAddress",
			value: values.shippersaddress,
			xl: 4,
			lg: 4,
			md: 4,
			sm: 12,
			xs: 12
		},
	]

	const goodsInformation = [
		{
			name: "Track Number",
			value: values.trackno,
			xl: 4,
			lg: 4,
			md: 4,
			sm: 12,
			xs: 12
		},
		{
			name: "Product",
			value: values.product,
			xl: 4,
			lg: 4,
			md: 4,
			sm: 12,
			xs: 12
		},
		{
			name: "Date of Storage",
			value: values.datein,
			xl: 4,
			lg: 4,
			md: 4,
			sm: 12,
			xs: 12
		},
		{
			name: "Time of Storage",
			value: values.timein,
			xl: 4,
			lg: 4,
			md: 4,
			sm: 12,
			xs: 12
		},
		{
			name: "Storage Address",
			value: values.storageaddress,
			xl: 4,
			lg: 4,
			md: 4,
			sm: 12,
			xs: 12
		},
		{
			name: "Storage Notes",
			value: values.description,
			xl: 12,
			lg: 12,
			md: 12,
			sm: 12,
			xs: 12
		},
	]

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
									Owner's Information
								</Typography>
							<Divider/>
							</Grid>

							{
								ownerInformation && ownerInformation.map(el => (
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
									Product Information
								</Typography>
							<Divider/>
							</Grid>
							{
								goodsInformation && goodsInformation.map(el => (
									<Grid item key={el.name} xl={el.xl} lg={el.lg} md={el.md} sm={el.sm} xs={el.xs}>
										<Typography style={titleFont} variant="body1">{el.name}</Typography>
										<Box>
											<Typography variant="body1">{el.value}</Typography>
										</Box>
									</Grid>
								))
							}

						</Grid>

						<StyledButtonGroup>
							<Button 
								endIcon={<EventRepeatIcon/>} 
								type="button" variant="contained" 
								color="secondary"
								// onClick={() => setEventModal(true)}
								>
									Print
							</Button>

							<Button 
								endIcon={<DeleteIcon/>} 
								type="button" 
								variant="contained" 
								color="error"
								>
									Delete
							</Button>
						</StyledButtonGroup>
					</Container>
				</StyledModalContainerBox>
			</StyledModal>
		</>
	)
}

export default StorageViewModal