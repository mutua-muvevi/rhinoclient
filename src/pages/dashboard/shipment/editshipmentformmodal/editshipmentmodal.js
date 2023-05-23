import React from 'react';

import { Box, Container, Modal, Typography } from "@mui/material";
import { styled } from "@mui/system";

import EditShipmentForm from "./editshipmentform";
import { connect } from 'react-redux';


const StyledModal = styled(Modal)(({theme}) => ({
	width: "85vw",
	margin: "10vh auto",
	overflowY: "scroll",
	border: 'none',
	borderRadius: theme.shape.default
}))

const StyledFormContainerWrapper = styled(Box)(({ theme }) => ({
	backgroundColor: theme.palette.background.paper,
	border: 'none',
	boxShadow: 24,
	paddingTop: 2,
	paddingBottom: 2,
}))



const EditShipmentModal = ({ shipment, open, setOpen}) => {
	return (
		<StyledModal
			open={open}
			onClose={() => setOpen(false)}
			aria-labelledby="modal-modal-title"
			aria-describedby="modal-modal-description"
		>
			<StyledFormContainerWrapper >
				<Container maxWidth="xl">
					<Typography style={{marginTop: "20px"}}  id="modal-modal-title" variant="h4" gutterBottom component="h2">
						Edit Shipment Form
					</Typography>
					<EditShipmentForm shipment={shipment} open={open} setOpen={setOpen} />
				</Container>
			</StyledFormContainerWrapper>
		</StyledModal>
	)
}

const mapStateToProps = ({shipment}) => ({
	shipment: shipment.shipment
})

export default connect(mapStateToProps)(EditShipmentModal)