import { Box, Container, Modal, Typography } from "@mui/material";
import { styled } from "@mui/system";

import EventForm from "./form";


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


const EventModal = ({ trackInfo, open, setOpen }) => {
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
						Add Events
					</Typography>
					<EventForm trackno={trackInfo} setOpen={setOpen}/>
				</Container>
			</StyledFormContainerWrapper>
		</StyledModal>
	)
}

export default EventModal