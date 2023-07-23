import React, { useState, useEffect } from "react";

import { Box, Button, Container, Grid, Modal, Stack, Typography } from "@mui/material";
import { styled } from "@mui/system";

import CloseIcon from "@mui/icons-material/Close";

import { FieldArray } from "formik";

import TextField from "../../../../components/formsUI/textfield/textfield";
import { productDetailsInformation } from "./addStorageformcontent";

const StyledModal = styled(Modal)(({ theme }) => ({
	width: "70vw",
	margin: "20vh auto",
	overflowY: "scroll",
	border: "none",
	borderRadius: theme.shape.default,
}));

const StyledContainerWrapper = styled(Box)(({ theme }) => ({
	backgroundColor: theme.palette.background.paper,
	minHeight: "80vh",
	border: "none",
	boxShadow: 24,
	padding: "10px",
	display: "flex",
	justifyContent: "center !important",
	alignItems: "center",
}));

const StyledFormContainer = styled(Container)(({ theme }) => ({
	paddingTop: 2,
	paddingBottom: 2,
}));

const styledTitleFont = {
	fontFamily: "'Rubik', sans-serif",
	fontWeight: "500",
	marginBottom: "20px",
};

const AddStorageProductModal = ({ open, setOpen, values }) => {
	return (
		<StyledModal
			open={open}
			onClose={() => setOpen(false)}
			aria-labelledby="modal-modal-title"
			aria-describedby="modal-modal-description"
		>
			<StyledContainerWrapper maxWidth="xl">
				<StyledFormContainer>
					<Typography
						sx={styledTitleFont}
						variant="h5"
						color="secondary"
						gutterBottom
					>
						Add a Product
					</Typography>

					
				</StyledFormContainer>
			</StyledContainerWrapper>
		</StyledModal>
	);
};

export default AddStorageProductModal;
