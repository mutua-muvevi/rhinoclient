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
import { connect } from "react-redux";
import { deleteStorage } from "../../../../redux/storage/storageaction";

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

const DeleteStorage = ({ open, setOpen, storage, deleteStorage, token }) => {
	const [inputValue, setInputValue] = useState("");
	const navigate = useNavigate();
	const theme = useTheme();

	const handleInputChange = (event) => {
		setInputValue(event.target.value);
	};

	const handleDeleteClick = () => {
		deleteStorage(token, storage._id);
		// navigate("/admin/freelancer/services/home")
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
								Do you want to delete storage of track number{" "}
								<span
									style={{
										color: theme.palette.primary.main,
										fontWeight: "700",
									}}
								>
									{storage.trackno}
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
								storage to the input below.
							</Typography>
						</Stack>

						<TextField
							label="Type the track number of the storage"
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
								disabled={inputValue !== storage.trackno}
								sx={buttonStyle}
							>
								Delete Storage
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

const mapStateToProps = ({storage, auth}) => ({
	token: auth.token,
	storage: storage.storage
})

const mapDispatchToProps = (dispatch) => ({
	deleteStorage: (token, id) => dispatch(deleteStorage(token, id))
})

export default connect(mapStateToProps, mapDispatchToProps)(DeleteStorage);
