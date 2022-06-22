import React from 'react';

import { Box, Divider, Grow, Modal, ModalManager, Typography} from "@mui/material";
import { styled } from "@mui/system";
import QuotationForm from "../../../pages/landing/quotationform/quotationForm";




const StyledModal = styled(Modal)(({theme}) => ({
	width: "85vw",
	margin: "10vh auto",
	overflowY: "scroll",
	border: 'none',
	borderRadius: 4
	
}))

const StyledDetailedBox = styled(Box)(({theme}) => ({
	backgroundColor: theme.palette.background.paper
}))

const detailsContainer = {
	borderRadius: 4,
	border: 'none',
	margin: 0,
}

const headerFont = {
	color: "#dea95f",
	fontWeight: 500,
	fontFamily: "'Rubik', sans-serif",
}

const QuotationModal = ({title, open, setOpen, close, handleModal}) => {

	return (
		<StyledModal
			open={open}
			onClose={close}
			aria-labelledby="modal-modal-title"
			aria-describedby="modal-modal-description"
		>
			<Grow style={{ transformOrigin: '10 20 50' }} in timeout={1800}>

				<StyledDetailedBox container sx={detailsContainer}>
					<Typography variant="h3" style={headerFont} sx={{ padding: 2}} gutterBottom>
						{title}
					</Typography>
					<Divider/>
					<Box sx={{padding: 2}}>
						<QuotationForm setOpen={setOpen} close={close} open={open} handleModal={handleModal} />
					</Box>
				</StyledDetailedBox>
			</Grow>
		</StyledModal>
	)
}

export default QuotationModal