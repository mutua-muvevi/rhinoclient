import React from 'react';

import { Box, Container, Divider, Grid, Modal, Grow, Table, TableBody, TableContainer, TableHead, TableRow, Typography } from "@mui/material";
import { styled } from "@mui/system";


import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';


const StyledTrackItem = styled(Modal)(({ theme }) => ({
	width: "85vw",
	margin: "20vh auto",
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
	height: "45vh",
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
const TrackStorageItem = ({ item, modal, onClose }) => {
	
	const headerTitleList = [
		{
			name: "Track no",
			value: item.trackno
		},
		{
			name: "Description",
			value: item.notes
		},
	]

	const storageHeaderItems = [
		[
			{
				name: "Customer Details",
				value : [
					item.fullname,
					item.email,
					item.telephone,
				], 
				meta: ""
			}
		],
		[
			{
				name: "Product Details",
				value : [
					item.product,
					item.storageaddress,
				], 
				meta: ""
			}
		],
		[
			{
				name: "Transaction Details",
				value : [
					item.notes,
					item.datein,
					item.timein,
				], 
				meta: ""
			}
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
								<StyledHeaderTitle maxWidth="xl">

									{
										headerTitleList.map(e => (
											<StyledHeaderTitleList container maxWidth="xl" spacing={2} rowSpacing={0}>
												<Grid item xl={2} lg={2} md={2} sm={12}>
													<Typography variant="h5" style={styledHeaderTitles} gutterBottom>
														{ e.name }
													</Typography>
													
												</Grid>
												<Grid item xl={10} lg={10} md={10} sm={12}>
													<StyledHeaderDetail>
														<Typography variant="h5" style={styledHeaderText} gutterBottom>
															{ e.value }
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
												storageHeaderItems &&
												storageHeaderItems.map((box, i) => (
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
								</StyledItemContainer>
							</Box>
						</Grow>
					</>
				) : null
			}
		</StyledTrackItem>
	)
}

export default TrackStorageItem