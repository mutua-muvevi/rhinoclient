import React from 'react';

import { Box, Container, Divider, Grid, Modal, Grow, Table, TableBody, TableContainer, TableHead, TableRow, Typography } from "@mui/material";
import { styled } from "@mui/system";

import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';

const StyledTrackItem = styled(Modal)(({ theme }) => ({
	width: "85vw",
	margin: "10vh auto",
	border: 'none',
	backgroundColor: "#333333",
	borderRadius: 4,
	color: "rgba(220, 220, 220, 0.8)"
}));

const StyledHeaderTitle = styled(Container)(({theme}) => ({
	paddingTop: "20px",
	paddingBottom: "10px",
	backgroundColor: theme.palette.background.default,
	borderTopLeftRadius: 4,
	borderTopRightRadius: 4,
	display: "flex",
	flexDirection: "column",
	justifyContent: "center",
	alignItems: "flex-start",
	fontFamily: "'Rubik', sans-serif",
}))

const StyledHeaderTitleList = styled(Grid)(({theme}) => ({
	display: "flex",
	width: "100%"
}))

const styledHeaderTitles = {
	fontFamily: "'Rubik', sans-serif",
	fontWeight: 500,
	color: "rgba(220, 220, 220, 0.8)",
}

const styledHeaderText = {
	fontFamily: "'Rubik', sans-serif",
	fontWeight: 500,
	color: "#dea95f"
}

const StyledHeaderDetail = styled(Box)(({ theme }) => ({
	backgroundColor: "rgba(18, 18, 18, 0.78)",
	color: "rgba(220, 220, 220, 0.8)",
	paddingLeft: "20px",
	marginLeft: "10px",
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

const typographyColorHeader = {
	color: "#dea95f",
	fontFamily: "'Rubik', sans-serif",
	fontSize: "18px",
	fontWeight: 500,
}

const typographyColor = {
	color: "rgba(220, 220, 220, 0.8)",
	
}

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
		border: "none",
		color: theme.palette.secondary.main,
		width: "200px"
	},
	[`&.${tableCellClasses.body}`]: {
		fontSize: 14,
		backgroundColor: theme.palette.background.paper,
		color: "rgba(220, 220, 220, 0.8)",
		border: "none",
	},
}));

const TrackItem = ({ item, modal, onClose}) => {

	const shipperHeaderItems = [
		[
			{
				name: "Shipper Information",
				value: [
					item?.shippersfullname,
					item?.shippersemail,
					item?.shipperstelephone,
					item?.shippersaddress,
				],
				meta:""
			},
			{
				name: "Cosignee",
				value: [
					item?.consignfullname,
					item?.consignemail,
					item?.consigntelephone,
					item?.collectoraddress
				],
				meta:""
			},
		],
		[
			{
				name: "",
				value: [
					item?.date
				],
				meta:""
			},
			{
				name: "Origin Service Area",
				value: [
					item?.departureaddress,
					`Airport Code: ${item?.departureairportcode}`,
					`Departed on ${item?.departuredate} at ${item?.departuretime}`
				],
				meta:""
			},
			{
				name: "Destination Service Area",
				value: [
					item?.shippersfullname
				],
				meta:""
			},
			{
				name: "Product Details",
				value: [
					item?.shippersfullname
				],
				meta:""
			},
		],
		[
			{
				name: "Estimated Delivery",
				value: [
					item?.date
				],
				meta:"By End of Day"
			},
			{
				name: "Notify Party",
				value: [
					item?.collectorfullname,
					item?.collectoremail,
					item?.collectortel,
					item?.collectoraddress
				],
				meta:""
			},
		],
	]

	const sortedList = item.events.sort((a, b) => {
		return b.number - a.number
	})
	const lastItem = sortedList[0]

	const headerTitleList = [
		{
			name: "Track no",
			value: item.trackno
		},
		{
			name: "Current Status",
			value: lastItem?.notes ? lastItem?.notes : "EMPTY"
		},

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
								<StyledHeaderTitle maxWidth="xl">

									{
										headerTitleList.map((e, i) => (
											<StyledHeaderTitleList container maxWidth="xl" spacing={2} rowSpacing={0} key={i}>
												<Grid item xl={2} lg={2} md={2} sm={12}>
													<Typography variant="h5" style={styledHeaderTitles} gutterBottom>
														{ e.name }
													</Typography>
													
												</Grid>
												<Grid item xl={10} lg={10} md={10} sm={12}>
													<StyledHeaderDetail>
														<Typography variant="h5" style={styledHeaderText} gutterBottom>
															{ e.value ? e.value : null }
														</Typography>
													</StyledHeaderDetail>
												</Grid>
											</StyledHeaderTitleList>

										))
									}
								</StyledHeaderTitle>

								<Divider/>

								<StyledItemContainer maxWidth="xl">

									<StyledTrackHeaderDetails id="treack-title">
										<Grid container spacing={2}>
											{
												shipperHeaderItems &&
												shipperHeaderItems.map((box, i) => (
													<Grid key={box.value} item lg={4} md={4} sm={12} xs={12}>
														{
															box &&
															box.map((el, i) => (
																<StyledHeaderItemTextContainer key={i}>
																	<Typography style={typographyColorHeader} variant="body1">
																		{el.name}
																	</Typography>
																		{
																			el.value &&
																			el.value.map((val, i) => (
																				<Box key={i} sx={{display: "flex", alignItems: "center", justifyContent: "left"}}>
																					<KeyboardDoubleArrowRightIcon style={typographyColor}/>
																					<Typography variant="body1" style={typographyColor} sx={{marginLeft: "10px"}}>
																						{val}
																					</Typography>
																				</Box>
																			))
																		}
																		
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
																		<StyledTableCell key={i} align="left">{cell}</StyledTableCell>
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