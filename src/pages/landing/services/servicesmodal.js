import React, { useState } from 'react';

import { Box, Button, Grid, Modal, Typography} from "@mui/material";
import { styled } from "@mui/system";

import TextsmsIcon from '@mui/icons-material/Textsms';
import QuotationModal from "../../../components/widgets/modal/quotation";

const StyledModal = styled(Modal)(({theme}) => ({
	width: "85vw",
	margin: "10vh auto",
	border: 'none',
	backgroundColor: "transparent",
	
}))

const detailsContainer = {
	borderRadius: 2,
	border: 'none',
	padding: 0,
	position: "relative",
	margin: 0,
	height: "100% !important"
}

const StyledModalItems = styled(Grid)(({theme}) => ({
	padding: 0,
	backgroundColor: theme.palette.background.paper
}))

const BoxOverlay = styled(Box)(({theme}) => ({
	background: "url(https://res.cloudinary.com/dqweh6zte/image/upload/v1650445891/Rhino%20John%20Background%20Video/Rhinojon%20Product%20images/dot_opkspq.png) repeat",
	width: "100%",
	height: "100%",
	padding: 0,
	display: "flex", 
	flexDirection: "column",
	justifyContent: "center", 
	alignItems: "center",
	borderTopLeftRadius: 4,
	borderBottomLeftRadius: 4,
	textAlign: "center"
}))


const StyledModalContentArea = styled(Grid)(({theme}) => ({
	overflowY: "scroll",
	padding: "30px 10px",
	height: "80vh !important",
	display: "flex",
	flexDirection: "column",
	justifyContent: "flex-start"
}))


const headerFont = {
	color: "#dea95f",
	fontWeight: 500,
	fontFamily: "'Rubik', sans-serif",
}

const StyledListItems = styled(Box)(({ theme }) => ({
	marginBottom: "10px", 
	marginTop : "10px", 
	display: "flex", 
	alignItems: "center", 
	justifyContent: "left",
}))

const ServicesModal = ({open, handleClose, modal}) => {

	const [openItemFormModal, setOpenItemFormModal] = useState(false);

	
	const handleModal = () => {
		setOpenItemFormModal(!openItemFormModal)
	}
	
	const StyledModalImageArea = styled(Grid)(({theme}) => ({
		width: "100%",
		height: "100%",
		backgroundColor: "red",
		position: "relative",
		padding: 0,
		backgroundImage: `linear-gradient(to right, rgba(0, 0, 0, 0.555), rgba(0, 0, 0, 0.484)), url(${modal.image.src})`,
		backgroundPosition: "center",
		backgroundAttachment: "local",
		backgroundSize: "cover",
		backgroundRepeat: "no-repeat",
		transition: "0.5s", 
		color: "#fff",
		borderTopLeftRadius: 10,
		borderBottomLeftRadius: 10,
	}))


	return (
		<StyledModal
			open={open}
			onClose={handleClose}
			aria-labelledby="modal-modal-title"
			aria-describedby="modal-modal-description"
			id={modal.id}
		>
				<StyledModalItems container sx={detailsContainer}>
					<StyledModalImageArea item lg={5} sx={{ display: { xs: "none", sm: "none", md: "block" } }}>
						<BoxOverlay>
							{modal.icon}
							<Typography variant="h3" sx={{fontWeight: 800}}>
								{modal.title}
							</Typography>
						</BoxOverlay>
					</StyledModalImageArea>

					<StyledModalContentArea item lg={7} sm={12}>
						<Typography id="modal-modal-title" style={headerFont} sx={{marginBottom: "30px"}} variant="h4" gutterBottom component="h2">
							{ modal.title }
						</Typography>

						{
							modal.paragraph &&
							modal.paragraph.map((el, i) => (
								<Box key={i} sx={{marginBottom: "10px", marginTop : "10px"}}>
									<Typography variant="body1">
										{el}
									</Typography>
								</Box>
							))
						}

						{
							modal.list &&
							modal.list.map((el, i) => (
								<Box key={i} sx={{marginBottom: "10px", marginTop : "10px"}}>
									<Typography variant="h5" style={headerFont} gutterBottom>
										{el.title}
									</Typography>

									
									{
										el.paragraph &&
										el.paragraph.map((el, i) => (
											<Box key={i} sx={{marginBottom: "10px", marginTop : "10px"}}>
												
												<Typography variant="body1">
													{el}
												</Typography>
											</Box>
										))
									}

									
									{
										el.listItems &&
										el.listItems.map((el, i) => (
											<StyledListItems key={i} >
												{
													el &&  modal.listIcon 
												}
												<Typography sx = {{ marginLeft: "10px" }}  variant="body1">
													{el}
												</Typography>
											</StyledListItems>
										))
									}
								</Box>
							))
						}

						<Button 
							onClick={handleModal}
							sx={{marginTop: "20px"}}
							endIcon={<TextsmsIcon/>}
							color="secondary"
							variant="contained"
						>
							Request Quotation
						</Button>
						{console.log("MODAL FROM THE PARENT", openItemFormModal)}
						<QuotationModal 
							title={`Request Quotation For ${modal.title}`}
							open={openItemFormModal} 
							close={() => setOpenItemFormModal(false)}
							setOpen={setOpenItemFormModal}
							handleModal={handleModal}
						/>

					</StyledModalContentArea>
				</StyledModalItems>
		</StyledModal>
	)
}

export default ServicesModal