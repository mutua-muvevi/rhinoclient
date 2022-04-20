import React from 'react';
import { styled } from "@mui/system";
import { Box, Modal, Typography} from "@mui/material";
import QuotationForm from "../quotationform/quotationForm";


const StyledModal = styled(Modal)(({theme}) => ({
	width: "85vw",
	margin: "10vh auto",
	overflowY: "scroll",
	border: 'none',
	
}))

const detailsContainer = {
	borderRadius: 4,
	backgroundColor: "white",
	border: 'none',
	padding: 2,
	// position: "relative",
	margin: 0,
}

const ServiceQuotationModal = ({title, open, setOpen}) => {
	return (
		<StyledModal
			open={open}
			onClose={() => setOpen(false)}
			aria-labelledby="modal-modal-title"
			aria-describedby="modal-modal-description"
		>
			<Box container sx={detailsContainer}>
				<Typography variant="h3">
					{title}
				</Typography>
				<Box>
					<QuotationForm/>
				</Box>
			</Box>
		</StyledModal>
	)
}

export default ServiceQuotationModal