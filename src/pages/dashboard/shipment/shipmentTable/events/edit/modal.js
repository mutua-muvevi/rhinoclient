import React from 'react';

import { Box, Container, Modal, Typography } from "@mui/material";
import { styled } from "@mui/system";

import EditEventForm from "../edit/form";
import { connect } from 'react-redux';


const StyledModal = styled(Modal)(({theme}) => ({
	width: "70vw",
	margin: "auto auto",
	border: 'none',
	borderRadius: theme.shape.default,
	position: "absolute",
	top: "25%"
}))

const StyledFormContainerWrapper = styled(Box)(({ theme }) => ({
	backgroundColor: theme.palette.background.paper,
	border: 'none',
	boxShadow: 24,
	paddingTop: 10,
	paddingBottom: 10,
}))



const EditEventModal = ({ event, open, setOpen, trackno}) => {
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
						Edit Event Form
					</Typography>
					<EditEventForm event={event} open={open} setOpen={setOpen} trackno={trackno} />
				</Container>
			</StyledFormContainerWrapper>
		</StyledModal>
	)
}

const mapStateToProps = ({shipment}) => ({
	event: shipment.event,
	trackno: shipment.shipment.trackno
})

export default connect(mapStateToProps)(EditEventModal)