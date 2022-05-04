import React from 'react';
import { styled } from "@mui/system";
import { Box, Button, ButtonGroup, Divider, Grid, Modal, Typography} from "@mui/material";
import DoneAllIcon from '@mui/icons-material/DoneAll';
import ClearIcon from '@mui/icons-material/Clear';


const StyledModal = styled(Modal)(({theme}) => ({
	width: "75vw",
	margin: "9vh auto",
	border: 'none',
	backgroundColor: "transparent",
	borderRadius: 4,
	
}))

const StyledModalItems = styled(Grid)(({theme}) => ({
	padding: 0,
	borderRadius: 4,
	backgroundColor: "white",
	border: 'none',
	position: "relative",
	margin: 0,
	height: "100% !important"
}))

const StyledEntry = styled(Box)(({theme}) => ({
	color: "white",
	padding: "5px 10px",
	backgroundColor: "grey",
	borderRadius: 4
}))

const StyledTextAreaEntry = styled(Box)(({theme}) => ({
	backgroundColor: "grey",
	color: "white",
	padding: "5px 10px",
	borderRadius: 4,
	height: "10vh",
	overflowY: "scroll",
	marginBottom: "30px"
}))

const StyledHeader = styled(Typography)(({theme}) => ({paddingTop: "10px", paddingBottom: "10px", width: "95%", margin: "auto"}))

const StyledContentContainer = styled(Box)(({theme}) => ({paddingTop: "10px", paddingBottom: "10px", width: "95%", margin: "auto"}))

const StyledGridContainer = styled(Grid)(({theme}) => ({
	height: "60vh",
	overflowY: "scroll",
	marginTop: "10px",
}))

const Confirmation = ({modal, onClose, values}) => {
	const valuesArray = [
		{
			name: "Firstname",
			value: values.firstname,
			lg:6,
		},
		{
			name: "Lastname",
			value: values.lastname,
			lg:6,
		},
		{
			name: "Email",
			value: values.email,
			lg:6,
		},
		{
			name: "Telephone",
			value: values.telephone,
			lg:6,
		},
		{
			name: "Company",
			value: values.company,
			lg:6,
		},
		{
			name: "City",
			value: values.city,
			lg:6,
		},
		{
			name: "Country",
			value: values.country,
			lg:6,
		},
		{
			name: "Product",
			value: values.product,
			lg:6,
		}
	]

	return (
		<StyledModal
			open={modal}
			aria-labelledby="modal-modal-title"
			aria-describedby="modal-modal-description"
			id="confirmation-modal"
		>
			<StyledModalItems>
				<Box>
					<StyledHeader variant="h3">
						Please confirm
					</StyledHeader>

					<Divider color="#fff"/>

					<StyledContentContainer>
						<StyledGridContainer container spacing={2}>

							{
								valuesArray.map(item => (
									<Grid item key={item.name} lg={item.lg} xs={12} >
										<Typography variant="h4">
											{item.name}
										</Typography>
										<StyledEntry>
											<Typography variant="h5">
												{item.value}
											</Typography>
										</StyledEntry>
									</Grid>
								))
							}

							<Grid item lg={12} xs={12} >
								<Typography variant="h4">
									Quotation Message
								</Typography>
								<StyledTextAreaEntry>
									<Typography variant="h5">
										{values.message}
									</Typography>
								</StyledTextAreaEntry>
							</Grid>

						</StyledGridContainer>

						<Divider sx={{color: "#fff"}}/>

						<ButtonGroup variant="contained" sx={{margin: "30px 0px"}}>
							<Button endIcon={<DoneAllIcon/>} color="success">
								Accept Confirmation
							</Button>

							<Button onClick={onClose} endIcon={<ClearIcon/>} color="error">
								Cancel Confirmation
							</Button>
						</ButtonGroup>
					</StyledContentContainer>
				</Box>
			</StyledModalItems>
		</StyledModal>
	)
}

export default Confirmation