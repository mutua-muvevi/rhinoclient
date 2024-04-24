import { Box, Button, ButtonGroup, Container, Divider, Grid, Modal, Typography } from "@mui/material";
import { styled } from "@mui/system";

import ClearIcon from '@mui/icons-material/Clear';
import { BsPrinterFill } from "react-icons/bs";
import { connect } from "react-redux";

const StyledModal = styled(Modal)(({ theme }) => ({
	overflowY: {
		xs: "scroll",
		sm:"scroll",
		md:"scroll",
		lg:"hidden"
	},
	display: "flex",
	flexDirection: "column",
	justifyContent: "center",
	alignItems: "center",
	border: 'none',
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
			value: event?.number ? event?.number : "",
			xl: 4,
			lg: 4,
			md: 4,
			sm: 12,
			xs: 12
		},
		{
			name: "Status",
			value: event?.shippingstatus ? event?.shippingstatus : "",
			xl: 4,
			lg: 4,
			md: 4,
			sm: 12,
			xs: 12
		},
		{
			name: "Time",
			value: event?.timeevents ? event?.timeevents : "",
			xl: 4,
			lg: 4,
			md: 4,
			sm: 12,
			xs: 12
		},
		{
			name: "Date",
			value: event?.dateevents ? event?.dateevents : "",
			xl: 4,
			lg: 4,
			md: 4,
			sm: 12,
			xs: 12
		},
		{
			name: "Current location",
			value: event?.currentlocation ? event?.currentlocation : "",
			xl: 4,
			lg: 4,
			md: 4,
			sm: 12,
			xs: 12
		},
		{
			name: "Notes",
			value: event?.notes ? event?.notes : "",
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
								endIcon={<BsPrinterFill/>} 
								type="button" 
								variant="contained" 
								color="secondary"
								style={{minWidth: "150px", color : "#000000"}}
								onClick={() =>  window.print()}
								>
									Print
							</Button>
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

const mapStateToProps = ({ shipment }) => ({
	event: shipment.event
})

export default connect(mapStateToProps)(EventViewModal)