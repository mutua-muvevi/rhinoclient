import { Box, Button, ButtonGroup, Container, Divider, Grid, Modal, Typography } from "@mui/material";
import { styled } from "@mui/system";

import ClearIcon from '@mui/icons-material/Clear';

const StyledModal = styled(Modal)(({ theme }) => ({
	width: "85vw",
	margin: "10vh auto",
	overflowY: "scroll",
	border: 'none',
	height: "80vh",
	borderRadius: theme.shape.default
}))

const StyledModalContainerBox = styled(Box)(({theme}) => ({
	backgroundColor: theme.palette.background.paper,
	border: 'none',
	boxShadow: 24,
	paddingTop: 10,
	paddingBottom: 10,
}))

const styledModalBox = {
}

const StyledButtonGroup = styled(ButtonGroup)(({ theme }) => ({
	marginTop: "20px",
	marginBottom: "20px",
}))


const headerFont = {
	color: "#dea95f",
	fontWeight: 500,
	fontFamily: "'Rubik', sans-serif",
}

const titleFont = {
	fontWeight: 500,
	fontFamily: "'Rubik', sans-serif",
}

const EventViewModal = ({ event, open, setOpen }) => {

	const eventInfo = [
		{
			name: "Number",
			value: event.number,
			xl: 4,
			lg: 4,
			md: 4,
			sm: 12,
			xs: 12
		},
		{
			name: "Status",
			value: event.shippingstatus,
			xl: 4,
			lg: 4,
			md: 4,
			sm: 12,
			xs: 12
		},
		{
			name: "Time",
			value: event.timeevents,
			xl: 4,
			lg: 4,
			md: 4,
			sm: 12,
			xs: 12
		},
		{
			name: "Date",
			value: event.dateevents,
			xl: 4,
			lg: 4,
			md: 4,
			sm: 12,
			xs: 12
		},
		{
			name: "Current location",
			value: event.currentlocation,
			xl: 4,
			lg: 4,
			md: 4,
			sm: 12,
			xs: 12
		},
		{
			name: "Notes",
			value: event.notes,
			xl: 12,
			lg: 12,
			md: 12,
			sm: 12,
			xs: 12
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
							<Grid item xs={12}>
								<Typography variant="h5" style={headerFont} gutterBottom>
									Event Transaction
								</Typography>
							<Divider/>
							</Grid>
							{
								eventInfo && eventInfo.map(el => (
									<Grid item key={el.name} xl={el.xl} lg={el.lg} md={el.md} sm={el.sm} xs={el.xs}>
										<Typography style={titleFont} variant="body1">{el.name}</Typography>
										<Box>
											<Typography variant="body">{el.value}</Typography>
										</Box>
									</Grid>
								))
							}
						</Grid>

						<StyledButtonGroup>
							<Button 
								endIcon={<ClearIcon/>} 
								type="button" 
								variant="contained" 
								color="error"
								style={{minWidth: "150px"}}
								onClick={() => setOpen(false)}
								>
									Close
							</Button>
						</StyledButtonGroup>
					</Container>
				</StyledModalContainerBox>
			</StyledModal>
		</>
	)
}

export default EventViewModal