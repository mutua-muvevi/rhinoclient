import { useState } from "react";

import {
	Box,
	Button,
	ButtonGroup,
	Container,
	Divider,
	Grid,
	Modal,
	Stack,
	Typography,
} from "@mui/material";
import { styled } from "@mui/system";
import { connect } from "react-redux";

const StyledModal = styled(Modal)(({ theme }) => ({
	width: "75vw",
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

const StorageGoodsViewModal = ({ open, setOpen, storage, productDetails }) => {
	const storageGoodsInformation = [
		{
			name: "HS Code",
			value:  productDetails ? productDetails.HSCode : "",
			xl: 6,
			lg: 6,
			md: 6,
			sm: 12,
			xs: 12,
		},
		{
			name: "Market Rate",
			value:  productDetails ? productDetails.marketRate : "",
			xl: 6,
			lg: 6,
			md: 6,
			sm: 12,
			xs: 12,
		},
		{
			name: "Number of Packages/ Bags",
			value:  productDetails ? productDetails.packagesNo : "",
			xl: 6,
			lg: 6,
			md: 6,
			sm: 12,
			xs: 12,
		},
		{
			name: "Net Quantity",
			value:  productDetails ? productDetails.marketRate : "",
			xl: 6,
			lg: 6,
			md: 6,
			sm: 12,
			xs: 12,
		},
		{
			name: "Product Description",
			value:  productDetails ? productDetails.description : "",
			xl: 12,
			lg: 12,
			md: 12,
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
						<Stack direction="column" spacing={3}  sx={{ marginTop: "20px" }} >
								<Typography
									variant="h5"
									style={headerFont}
									gutterBottom
								>
									Goods Details
								</Typography>

								<Divider />

								{storageGoodsInformation &&
								storageGoodsInformation.map((el) => (
									<Stack direction="column"
										key={el.name}
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
									</Stack>
								))}
						</Stack>
					</Container>
				</StyledModalContainerBox>
			</StyledModal>
		</>
	);
};

const mapStateToProps = ({ storage }) => ({
	storage: storage.storage,
});

export default connect(mapStateToProps)(StorageGoodsViewModal)
