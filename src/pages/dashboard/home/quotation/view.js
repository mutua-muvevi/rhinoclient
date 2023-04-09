import React from 'react';

import { Box, Button, ButtonGroup, Container, Divider, Grid, Modal, Typography } from "@mui/material";
import { styled } from "@mui/system";

import DeleteIcon from '@mui/icons-material/Delete';
import { BsPrinterFill } from "react-icons/bs";

import { useTheme } from '@emotion/react';

const StyledModal = styled(Modal)(({ theme }) => ({
	width: "85vw",
	margin: "15vh auto",
	overflowY: "scroll",
	border: 'none',
	height: "70vh",
	borderRadius: theme.shape.default
}))

const StyledModalContainerBox = styled(Box)(({theme}) => ({
	backgroundColor: theme.palette.background.paper,
	border: 'none',
	boxShadow: 24,
	paddingTop: 2,
	paddingBottom: 2,
	minHeight: "70vh",
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


const QuotationViewModal = ({ values, open, setOpen }) => {
	const theme = useTheme();

	const quotationItem = [
		{
			name: "Firstname",
			value: values.firstname,
			xl: 4,
			lg: 4,
			md: 4,
			sm: 12,
			xs: 12
		},
		{
			name: "lastname",
			value: values.lastname,
			xl: 4,
			lg: 4,
			md: 4,
			sm: 12,
			xs: 12
		},
		{
			name: "Email",
			value: values.email,
			xl: 4,
			lg: 4,
			md: 4,
			sm: 12,
			xs: 12
		},
		{
			name: "Telephone",
			value: values.telephone,
			xl: 4,
			lg: 4,
			md: 4,
			sm: 12,
			xs: 12
		},
		{
			name: "Company",
			value: values.company,
			xl: 4,
			lg: 4,
			md: 4,
			sm: 12,
			xs: 12
		},
		{
			name: "Product",
			value: values.product,
			xl: 4,
			lg: 4,
			md: 4,
			sm: 12,
			xs: 12
		},
		{
			name: "City",
			value: values.city,
			xl: 4,
			lg: 4,
			md: 4,
			sm: 12,
			xs: 12
		},
		{
			name: "Country",
			value: values.country,
			xl: 4,
			lg: 4,
			md: 4,
			sm: 12,
			xs: 12
		},
		{
			name: "Message",
			value: values.message,
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

							<Grid sx={{marginTop: "20px"}} item xs={12}>
								<Typography variant="h5" style={headerFont} gutterBottom>
									Quotation
								</Typography>
							<Divider sx={{backgroundColor: theme.palette.primary.main}}/>
							</Grid>

							{
								quotationItem && quotationItem.map(el => (
									<Grid item key={el.name} xl={el.xl} lg={el.lg} md={el.md} sm={el.sm} xs={el.xs}>
										<Typography style={titleFont} variant="body1">{el.name}</Typography>
										<Box>
											<Typography variant="body1">{el.value}</Typography>
										</Box>
									</Grid>
								))
							}

							
							
						</Grid>

						<StyledButtonGroup>
							<Button 
								endIcon={<BsPrinterFill/>} 
								type="button" variant="contained" 
								color="secondary"
								onClick={() =>  window.print()}
								sx={{color: "#000000"}}
								>
									Print
							</Button>

							<Button 
								endIcon={<DeleteIcon/>} 
								type="button" 
								variant="contained" 
								color="error"
								>
									Delete
							</Button>
						</StyledButtonGroup>
					</Container>
				</StyledModalContainerBox>
			</StyledModal>
		</>
	)
}

export default QuotationViewModal