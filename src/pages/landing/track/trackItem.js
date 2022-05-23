import React from 'react';
import { Box, Container, Divider, Grid, Modal, Grow, Table, TableBody, TableContainer, TableHead, TableRow, Typography } from "@mui/material";
import { styled } from "@mui/system";

import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';

const StyledTrackItem = styled(Modal)(({ theme }) => ({
	width: "85vw",
	margin: "10vh auto",
	border: 'none',
	backgroundColor: "rgba(255, 255, 255, 0.87)",
	color: "black",
	borderRadius: 4
}));

const StyledHeaderTitle = styled(Box)(({theme}) => ({
	padding: "10px",
	backgroundColor: "rgba(255, 255, 255, 0.8)",
	color: "black",
	borderTopLeftRadius: 4,
	borderTopRightRadius: 4,
	display: "flex",
	justifyContent: "left",
	alignItems: "center"
}))

const StyledHeaderDetail = styled(Box)(({ theme }) => ({
	backgroundColor: "rgba(18, 18, 18, 0.78)",
	color: "white",
	paddingLeft: "20px",
	paddingRight: "10px",
	minWidth: "40vw"
}))

const StyledItemContainer = styled(Container)(({ theme }) => ({
	overflowY: "scroll",
	overFlow: "hidden",
	height: "66.19vh",
	position: "relative"
}))

const StyledTrackHeaderDetails = styled(Box)(({ theme }) => ({
	padding: "10px",
	backgroundColor: "rgba(18, 18, 18, 0.78)",
	color: theme.palette.common.white,
	borderRadius: 4,
	marginTop: "20px"
}))

const StyledHeaderItemTextContainer = styled(Box)(({ theme }) => ({
	margin: "20px auto"
}))

const StyledTrackBodyDetails = styled(Box)(({ theme }) => ({
	color: theme.palette.common.white,
	borderRadius: 4,
	marginTop: "20px"
}))

const StyledTableContainer = styled(TableContainer)(({ theme }) => ({
	borderRadius: 4,
	margin: "30px auto"
}))

const StyledTableCell = styled(TableCell)(({ theme }) => ({
	[`&.${tableCellClasses.head}`]: {
		backgroundColor: "rgba(18, 18, 18, 0.78)",
	  	color: theme.palette.common.white,
	},
	[`&.${tableCellClasses.body}`]: {
	 	fontSize: 14,
		backgroundColor: "rgba(255, 255, 255, 0.78)",
	},
  }));

const TrackItem = ({ item, modal, onClose}) => {


	const shipperHeaderItems = [
		[
			{
				name: "Shipper",
				value: item.shippersfullname,
				meta:""
			},
			{
				name: "Address",
				value: item.shippersaddress,
				meta:""
			}
		],
		[
			{
				name: "",
				value: item.date,
				meta:""
			},
			{
				name: "Origin Service Area",
				value: item.shippersfullname,
				meta:""
			},
			{
				name: "Destination Service Area",
				value: item.shippersfullname,
				meta:""
			},
			{
				name: "Product Details",
				value: item.shippersfullname,
				meta:""
			},
		],
		[
			{
				name: "Estimated Delivery",
				value: item.date,
				meta:"By End of Day"
			},
			{
				name: "Cosignee",
				value: item.collectorfullname,
				meta:""
			},
			{
				name: "Cosignee Address",
				value: item.collectoraddress,
				meta:""
			},
			{
				name: "Signed By",
				value: item.collectorfullname,
				meta:""
			},
		],
	]


	return (
		
		<StyledTrackItem 
				open={modal}
				onClose={onClose}
				aria-labelledby="modal-modal-title"
				aria-describedby="modal-modal-description"
				id="track-item"
			>
				{
					item ? (
					<>
						<Grow style={{ transformOrigin: '10 20 50' }} in timeout={2000}>
							<Box>
								<StyledHeaderTitle>
									<Typography variant="h3" sx={{marginTop: "20px"}} gutterBottom>
										Shipment Details For :
									</Typography>
									<StyledHeaderDetail>
										<Typography variant="h3" sx={{marginTop: "20px"}} gutterBottom>
											{item.trackno}
										</Typography>
									</StyledHeaderDetail>
								</StyledHeaderTitle>

								<Divider/>

								<StyledItemContainer maxWidth="xl">

									<StyledTrackHeaderDetails id="treack-title">
										<Grid container spacing={2}>
											{
												shipperHeaderItems &&
												shipperHeaderItems.map((box, i) => (
													<Grid key={box.value} item lg={4} sm={12} xs={12}>
														{
															box &&
															box.map((el, i) => (
																<StyledHeaderItemTextContainer key={i}>
																	<Typography variant="h5">
																		{el.name}
																	</Typography>
																	<Box sx={{display: "flex", alignItems: "center", justifyContent: "left"}}>
																		<KeyboardDoubleArrowRightIcon/>
																		<Typography variant="body1" sx={{marginLeft: "10px"}}>
																			{el.value}
																		</Typography>
																	</Box>
																</StyledHeaderItemTextContainer>
															))
														}
													</Grid>
												))
											}
										</Grid>
									</StyledTrackHeaderDetails>

									<StyledTrackBodyDetails id="track-body">
										{
											item.events &&
											item.events.sort((a, b) => {
												return b.number - a.number
											})
											.map((el, i) => (
												<StyledTableContainer key={i} >
													<Table aria-label="shipment event table">
														<TableHead>
															<TableRow>
																{
																	[
																		"No", 
																		"Time",
																		"Date",
																		"Location",
																		"Status",
																		"Observation"
																	].map((cell, i) => (
																		<StyledTableCell align="left">{cell}</StyledTableCell>
																	))
																}
															</TableRow>
														</TableHead>

														<TableBody>
															<TableRow>
																{
																	[
																		el.number, 
																		el.timeevents, 
																		el.dateevents, 
																		el.currentlocation, 
																		el.shippingstatus, 
																		el.notes
																	].map((cell, i) => (
																		<StyledTableCell key={i}>
																			{ cell }
																		</StyledTableCell>
																	))
																}
																{console.log("EL.NUMBER IS", el.number)}
															</TableRow>
														</TableBody>
													</Table>
												</StyledTableContainer>
											))
										}
									</StyledTrackBodyDetails>

								</StyledItemContainer>
								


							</Box>
						</Grow>
					</>
				) : null
			}
		</StyledTrackItem>
	)
}

export default TrackItem