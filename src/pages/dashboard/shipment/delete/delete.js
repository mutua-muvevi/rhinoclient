import { useState } from "react";
import { useNavigate } from "react-router-dom";

import {
	Box,
	Button,
	Container,
	Modal,
	Stack,
	TextField,
	Typography,
} from "@mui/material";
import { styled } from "@mui/system";
import { useTheme } from "@emotion/react";
import { deleteShipment } from "../../../../redux/shipment/shipmentactions";
import { connect } from "react-redux";

const StyledModal = styled(Modal)(({ theme }) => ({
	width: "50vw",
	margin: "25vh auto",
	border: "none",
}));

const StyledFormContainerWrapper = styled(Box)(({ theme }) => ({
	backgroundColor: theme.palette.background.paper,
	border: "none",
	boxShadow: 24,
	paddingTop: 2,
	paddingBottom: 30,
	borderRadius: theme.shape.default,
}));

const buttonStyle = {
	minWidth: "150px"
}

const DeleteShipment = ({ open, setOpen, shipment, token, deleteShipment }) => {
	const [inputValue, setInputValue] = useState("");
	const theme = useTheme();

	const handleInputChange = (event) => {
		setInputValue(event.target.value);
	};

	const handleDeleteClick = async () => {
		const response = await deleteShipment(token, shipment._id)
		
		if(response.type === "DELETE_SHIPMENT_SUCCESS"){
			window.location.reload()
		}
	};

	return (
		<StyledModal open={open} onClose={() => setOpen(false)}>
			<StyledFormContainerWrapper>
				<Container maxWidth="xl">
					<Stack direction="column" spacing={3}>
						<Stack direction="column" spacing="1.5">
							<Typography
								style={{ marginTop: "20px" }}
								id="modal-modal-title"
								variant="h4"
								gutterBottom
								component="h2"
							>
								Do you want to delete shipment of track number{" "}
								<span
									style={{
										color: theme.palette.primary.main,
										fontWeight: "700",
									}}
								>
									{shipment.trackno}
								</span>
								?
							</Typography>
							
							<Typography
								id="modal-modal-title"
								variant="h6"
								gutterBottom
								component="h2"
							>
								If so please type the track number of the
								shipment to the input below.
							</Typography>
						</Stack>

						<TextField
							label="Type the track number of the shipment"
							value={inputValue}
							onChange={handleInputChange}
							variant="outlined"
							fullWidth
							color="error"
						/>

						<Stack direction="row" spacing={3}>
							<Button
								variant="contained"
								color="error"
								onClick={handleDeleteClick}
								disabled={inputValue !== shipment.trackno}
								sx={buttonStyle}
							>
								Delete Shipment
							</Button>

							<Button
								variant="contained"
								color="secondary"
								onClick={() => setOpen(false)}
								sx={buttonStyle}
							>
								Close
							</Button>

						</Stack>
					</Stack>
				</Container>
			</StyledFormContainerWrapper>
		</StyledModal>
	);
};

const mapStateToProps = ({auth}) => ({
	token: auth.token
})

const mapDispatchToProps = (dispatch) => ({
	deleteShipment: (token, id) => dispatch(deleteShipment(token, id))
})

export default connect(mapStateToProps, mapDispatchToProps)(DeleteShipment);
