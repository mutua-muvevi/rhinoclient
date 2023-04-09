import { Box, Button, ButtonGroup, Container, Divider, Grid, Modal, Stack, Typography } from "@mui/material";
import { styled } from "@mui/system";

import ClearIcon from '@mui/icons-material/Clear';
// import { deleteQuotation } from "../../../../redux/shipment/shipmentactions";
import { connect } from "react-redux";

const StyledModal = styled(Modal)(({ theme }) => ({
	width: "100vw",
	margin: "10vh auto",
	border: 'none',
	height: "100vh",
	display: "flex",
	justifyContent: "center",
	alignItems: "center",
	backgroundColor: theme.palette.drawer.defaultHalfOpacity,
}))

const StyledModalContainerBox = styled(Box)(({theme}) => ({
	backgroundColor: theme.palette.background.paper,
	borderRadius: theme.shape.default,
	border: 'none',
	boxShadow: 24,
	paddingTop: 30,
	paddingBottom: 30,
}))

const styledModalBox = {
}

const StyledButtonGroup = styled(ButtonGroup)(({ theme }) => ({
	marginTop: "20px",
	marginBottom: "20px",
}))



const DeleteQuotationModal = ({ token, event, open, setOpen, quotation }) => {

	const handleDelete = () => {
		console.log("Deletting ...")
		// deleteAction()
	}

	return (
		<>
			<StyledModal
				open={open}
				onClose={() => setOpen(false)}
				aria-labelledby="delete-modal-title"
				aria-describedby="delete-modal-description"
			>
				<StyledModalContainerBox sx={styledModalBox}>
					<Container maxWidth="xl">
						<Stack direaction="column" spacing={5}>
							<Typography variant="h5" sx={{colog:"#fff"}}>
								Are you sure You want to delete this quotation by {quotation && quotation.fullname}?
							</Typography>

							<StyledButtonGroup>
								<Button 
									endIcon={<ClearIcon/>} 
									type="button" 
									variant="contained" 
									color="error"
									style={{minWidth: "150px"}}
									onClick={handleDelete}
									>
										Delete Quotation
								</Button>
								<Button 
									endIcon={<ClearIcon/>} 
									type="button" 
									variant="contained" 
									color="secondary"
									style={{minWidth: "150px", color: "#000000"}}
									onClick={() => setOpen(false)}
									>
										Close
								</Button>
							</StyledButtonGroup>
						</Stack>
					</Container>
				</StyledModalContainerBox>
			</StyledModal>
		</>
	)
}

const mapStateToProps = ({}) =>({});

const mapDispatchToProps = (dispatch) => ({
	// deleteAction: () => dispatch(deleteQuotation())
})

export default connect(mapStateToProps, mapDispatchToProps)(DeleteQuotationModal)