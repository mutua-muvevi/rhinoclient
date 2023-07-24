import React from 'react';

import { Box, Container, Divider, Grid, Modal, Grow, Typography } from "@mui/material";
import { styled } from "@mui/system";

import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import StorageGoodsTable from "../../dashboard/storage/storageTable/goodsTable"


const StyledTrackItem = styled(Modal)(({ theme }) => ({
	width: "85vw",
	margin: "15vh auto",
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
	height: "58vh",
	position: "relative"
}))

const StyledTrackHeaderDetails = styled(Box)(({ theme }) => ({
	padding: "10px",
	backgroundColor: "rgba(18, 18, 18, 0.78)",
	color: theme.palette.common.white,
	borderRadius: 4,
	marginTop: "20px"
}))

const headerFont = {
	color: "#dea95f",
	fontWeight: 500,
	fontFamily: "'Rubik', sans-serif",
};

const titleFont = {
	fontWeight: 500,
	fontFamily: "'Rubik', sans-serif",
	color: "#dea95f",
};

const TrackStorageItem = ({ storage, modal, onClose }) => {

	const depositorInformation = [
		{
			name: "Depositor's Fullname",
			value:  storage.depositor.fullname ? storage.depositor.fullname : "",
			xl: 4,
			lg: 4,
			md: 4,
			sm: 12,
			xs: 12,
		},
		{
			name: "Depositor's Email",
			value: storage.depositor.email ? storage.depositor.email : "",
			xl: 4,
			lg: 4,
			md: 4,
			sm: 12,
			xs: 12,
		},
		{
			name: "Depositor's Telephone",
			value: storage.depositor.telephone ? storage.depositor.telephone : "",
			xl: 4,
			lg: 4,
			md: 4,
			sm: 12,
			xs: 12,
		},
		{
			name: "Depositor's Company",
			value: storage.depositor.company ? storage.depositor.company : "",
			xl: 4,
			lg: 4,
			md: 4,
			sm: 12,
			xs: 12,
		},
		{
			name: "Depositor's Address",
			value: storage.depositor.address ? storage.depositor.address : "",
			xl: 4,
			lg: 4,
			md: 4,
			sm: 12,
			xs: 12,
		},
	]

	const cosigneeInformation = [
		{
			name: "Cosignee Fullname",
			value: storage.cosignee.fullname,
			xl: 4,
			lg: 4,
			md: 4,
			sm: 12,
			xs: 12,
		},
		{
			name: "Cosignee Email",
			value: storage.cosignee.email,
			xl: 4,
			lg: 4,
			md: 4,
			sm: 12,
			xs: 12,
		},
		{
			name: "Cosignee Telephone",
			value: storage.cosignee.telephone,
			xl: 4,
			lg: 4,
			md: 4,
			sm: 12,
			xs: 12,
		},
		{
			name: "Cosignee Company",
			value: storage.cosignee.company,
			xl: 4,
			lg: 4,
			md: 4,
			sm: 12,
			xs: 12,
		},
		{
			name: "Cosignee Address",
			value: storage.cosignee.address,
			xl: 4,
			lg: 4,
			md: 4,
			sm: 12,
			xs: 12,
		},
	]

	const ownerInformation = [
		{
			name: "Owner's Fullname",
			value: storage.owner.fullname,
			xl: 4,
			lg: 4,
			md: 4,
			sm: 12,
			xs: 12,
		},
		{
			name: "Owner's Email",
			value: storage.owner.email,
			xl: 4,
			lg: 4,
			md: 4,
			sm: 12,
			xs: 12,
		},
		{
			name: "Owner's Telephone",
			value: storage.owner.telephone,
			xl: 4,
			lg: 4,
			md: 4,
			sm: 12,
			xs: 12,
		},
		{
			name: "Owner's Company",
			value: storage.owner.company,
			xl: 4,
			lg: 4,
			md: 4,
			sm: 12,
			xs: 12,
		},
		{
			name: "Owner's address",
			value: storage.owner.address,
			xl: 4,
			lg: 4,
			md: 4,
			sm: 12,
			xs: 12,
		},
		{
			name: "Owner's Account Number",
			value: storage.owner.accountNo,
			xl: 4,
			lg: 4,
			md: 4,
			sm: 12,
			xs: 12,
		},
	]

	const receiverInformation = [
		{
			name: "Recipient's Fullname",
			value: storage.receiver.fullname,
			xl: 4,
			lg: 4,
			md: 4,
			sm: 12,
			xs: 12,
		},
		{
			name: "Recipient's Email",
			value: storage.receiver.email,
			xl: 4,
			lg: 4,
			md: 4,
			sm: 12,
			xs: 12,
		},
		{
			name: "Recipient's Telephone",
			value: storage.receiver.telephone,
			xl: 4,
			lg: 4,
			md: 4,
			sm: 12,
			xs: 12,
		},
		{
			name: "Received on",
			value: storage.receiver.date,
			xl: 4,
			lg: 4,
			md: 4,
			sm: 12,
			xs: 12,
		},
		{
			name: "Received at",
			value: storage.receiver.time,
			xl: 4,
			lg: 4,
			md: 4,
			sm: 12,
			xs: 12,
		},
		{
			name: "Receipt Number",
			value: storage.receiver.receiptNo,
			xl: 4,
			lg: 4,
			md: 4,
			sm: 12,
			xs: 12,
		},
	]

	const otherDetails = [
		{
			name: "Private marks, if any",
			value: storage.privateMarks,
			xl: 4,
			lg: 4,
			md: 4,
			sm: 12,
			xs: 12,
		},
		{
			name: "Assured for",
			value: storage.assuredFor,
			xl: 4,
			lg: 4,
			md: 4,
			sm: 12,
			xs: 12,
		},
		{
			name: "Storage Rate / Handling Charges",
			value: storage.handlingCharges,
			xl: 4,
			lg: 4,
			md: 4,
			sm: 12,
			xs: 12,
		},
		{
			name: "Product Origin",
			value: storage.productOrigin,
			xl: 4,
			lg: 4,
			md: 4,
			sm: 12,
			xs: 12,
		},
		{
			name: "Receipt Number",
			value: storage.receiptNumber,
			xl: 4,
			lg: 4,
			md: 4,
			sm: 12,
			xs: 12,
		},
		{
			name: "Receipt Valid Up To",
			value: storage.receiptValidUpTo,
			xl: 4,
			lg: 4,
			md: 4,
			sm: 12,
			xs: 12,
		},
	]
	

	const headerTitleList = [
		{
			name: "Track no",
			value: storage.trackno
		},
		{
			name: "Description",
			value:  storage.productDetails.slice(-1)[0]?.description || ""
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
				storage ? (
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
										<Grid sx={{ marginTop: "20px" }} item xs={12}>
								<Typography
									variant="h5"
									sx={headerFont}
									gutterBottom
								>
									Depositor's Information
								</Typography>
								<Divider />
							</Grid>

							{depositorInformation &&
								depositorInformation.map((el) => (
									<Grid
										item
										key={el.name}
										xl={el.xl}
										lg={el.lg}
										md={el.md}
										sm={el.sm}
										xs={el.xs}
									>
										<Typography
											style={headerFont}
											variant="body1"
										>
											{el.name}
										</Typography>
										<Box>
											<Typography variant="body1">
												{el.value}
											</Typography>
										</Box>
									</Grid>
								))}


							
							<Grid sx={{ marginTop: "20px" }} item xs={12}>
								<Typography
									variant="h5"
									style={headerFont}
									gutterBottom
								>
									Consignee's Information
								</Typography>
								<Divider />
							</Grid>

							{cosigneeInformation &&
								cosigneeInformation.map((el) => (
									<Grid
										item
										key={el.name}
										xl={el.xl}
										lg={el.lg}
										md={el.md}
										sm={el.sm}
										xs={el.xs}
									>
										<Typography
											sx={{color: "#ffffff"}}
											variant="body1"
										>
											{el.name}
										</Typography>
										<Box>
											<Typography variant="body1">
												{el.value}
											</Typography>
										</Box>
									</Grid>
								))}


							
							<Grid sx={{ marginTop: "20px" }} item xs={12}>
								<Typography
									variant="h5"
									style={headerFont}
									gutterBottom
								>
									Owner's Information
								</Typography>
								<Divider />
							</Grid>

							{ownerInformation &&
								ownerInformation.map((el) => (
									<Grid
										item
										key={el.name}
										xl={el.xl}
										lg={el.lg}
										md={el.md}
										sm={el.sm}
										xs={el.xs}
									>
										<Typography
											sx={{color: "#ffffff"}}
											variant="body1"
										>
											{el.name}
										</Typography>
										<Box>
											<Typography variant="body1">
												{el.value}
											</Typography>
										</Box>
									</Grid>
								))}


							
							<Grid sx={{ marginTop: "20px" }} item xs={12}>
								<Typography
									variant="h5"
									style={headerFont}
									gutterBottom
								>
									Receiver's Information
								</Typography>
								<Divider />
							</Grid>

							{receiverInformation &&
								receiverInformation.map((el) => (
									<Grid
										item
										key={el.name}
										xl={el.xl}
										lg={el.lg}
										md={el.md}
										sm={el.sm}
										xs={el.xs}
									>
										<Typography
											sx={{color: "#ffffff"}}
											variant="body1"
										>
											{el.name}
										</Typography>
										<Box>
											<Typography variant="body1">
												{el.value}
											</Typography>
										</Box>
									</Grid>
								))}


							
							<Grid sx={{ marginTop: "20px" }} item xs={12}>
								<Typography
									variant="h5"
									style={headerFont}
									gutterBottom
								>
									Other Details
								</Typography>
								<Divider />
							</Grid>

							{otherDetails &&
								otherDetails.map((el) => (
									<Grid
										item
										key={el.name}
										xl={el.xl}
										lg={el.lg}
										md={el.md}
										sm={el.sm}
										xs={el.xs}
									>
										<Typography
											sx={{color: "#ffffff"}}
											variant="body1"
										>
											{el.name}
										</Typography>
										<Box>
											<Typography variant="body1">
												{el.value}
											</Typography>
										</Box>
									</Grid>
								))}



							<Grid item xs={12}>
								<Typography
									variant="h5"
									style={headerFont}
									gutterBottom
								>
									Product Information
								</Typography>
								<Divider />
								<StorageGoodsTable/>
							</Grid>
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