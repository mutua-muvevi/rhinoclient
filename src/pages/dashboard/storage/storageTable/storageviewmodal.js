import React from "react";

import {
	Box,
	Button,
	ButtonGroup,
	Container,
	Divider,
	Grid,
	Modal,
	Typography,
} from "@mui/material";
import { styled } from "@mui/system";

import EventRepeatIcon from "@mui/icons-material/EventRepeat";
import DeleteIcon from "@mui/icons-material/Delete";
import { useState } from "react";
import DeleteStorage from "../delete/delete";
import { connect } from "react-redux";

const StyledModal = styled(Modal)(({ theme }) => ({
	width: "85vw",
	margin: "15vh auto",
	overflowY: "scroll",
	border: "none",
	height: "70vh",
	borderRadius: theme.shape.default,
}));

const StyledModalContainerBox = styled(Box)(({ theme }) => ({
	backgroundColor: theme.palette.background.paper,
	border: "none",
	boxShadow: 24,
	paddingTop: 2,
	paddingBottom: 2,
	minHeight: "70vh",
}));

const styledModalBox = {};

const StyledButtonGroup = styled(ButtonGroup)(({ theme }) => ({
	marginTop: "20px",
	marginBottom: "20px",
}));

const headerFont = {
	color: "#dea95f",
	fontWeight: 500,
	fontFamily: "'Rubik', sans-serif",
};

const titleFont = {
	fontWeight: 500,
	fontFamily: "'Rubik', sans-serif",
};

const StorageViewModal = ({ values, open, setOpen, storage }) => {
	const [deleteStorage, setDeleteStorage] = useState(false);


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
							
							<Grid sx={{ marginTop: "20px" }} item xs={12}>
								<Typography
									variant="h5"
									style={headerFont}
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
											style={titleFont}
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
											style={titleFont}
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
											style={titleFont}
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
											style={titleFont}
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
											style={titleFont}
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
							</Grid>
							
						</Grid>

						<StyledButtonGroup>
							<Button
								endIcon={<EventRepeatIcon />}
								type="button"
								variant="contained"
								color="secondary"
								style={{ width: "150px", color: "black" }}
								onClick={() => window.print()}
							>
								Print
							</Button>

							<Button
								endIcon={<DeleteIcon />}
								type="button"
								variant="contained"
								color="error"
								onClick={() => setDeleteStorage(true)}
							>
								Delete
							</Button>
						</StyledButtonGroup>
					</Container>
				</StyledModalContainerBox>
			</StyledModal>

			{storage ? (
				<DeleteStorage
					storage={values}
					open={deleteStorage}
					setOpen={setDeleteStorage}
				/>
			) : (
				""
			)}
		</>
	);
};

const mapStateToProps = ({ storage }) => ({
	storage: storage.storage,
	allStorage: storage.allStorage
});

export default connect(mapStateToProps)(StorageViewModal);
