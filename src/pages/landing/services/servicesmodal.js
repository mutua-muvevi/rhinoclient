import React, { useState } from 'react';
import { styled } from "@mui/system";
import { Box, Button, Grid, Modal, Typography} from "@mui/material";
import TextsmsIcon from '@mui/icons-material/Textsms';
import ServiceQuotationModal from "./servicequotationmodal";
import Dot from "../../../assets/images/dot.png"

const StyledModal = styled(Modal)(({theme}) => ({
	width: "85vw",
	margin: "10vh auto",
	border: 'none',
	backgroundColor: "transparent",
	
}))

const detailsContainer = {
	borderRadius: 4,
	backgroundColor: "white",
	border: 'none',
	padding: 0,
	position: "relative",
	margin: 0,
	height: "100% !important"
}

const StyledModalItems = styled(Grid)(({theme}) => ({
	padding: 0
}))

const BoxOverlay = styled(Box)(({theme}) => ({
	backgroundImage: "url(http://s14.directupload.net/images/111129/44ga9qid.png)",
	// backgroundColor: "red",
	width: "100%",
	height: "100%",
	padding: 0,
	display: "flex", 
	justifyContent: "center", 
	alignItems: "center",
	borderTopLeftRadius: 10,
	borderBottomLeftRadius: 10
}))

const ServicesModal = ({open, setOpen, modal}) => {

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
		borderBottomLeftRadius: 10
	}))

	const StyledModalContentArea = styled(Grid)(({theme}) => ({
		overflowY: "scroll",
		padding: "30px 10px",
		height: "80vh !important"
	}))

	return (
		<StyledModal
			open={open}
			onClose={() => setOpen(false)}
			aria-labelledby="modal-modal-title"
			aria-describedby="modal-modal-description"
			id={modal.id}
		>
				<StyledModalItems container sx={detailsContainer}>
					<StyledModalImageArea item lg={5} sm={12}>
						<BoxOverlay sx={{}} >
							{modal.icon}
						</BoxOverlay>
					</StyledModalImageArea>

					<StyledModalContentArea sx={{overFlowY: "scroll !important"}} item lg={7} sm={12}>
						<Typography id="modal-modal-title" sx={{marginBottom: "30px"}} variant="h3" gutterBottom component="h2">
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
									<Typography variant="h4" gutterBottom>
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
											<Box key={i} sx={{marginBottom: "10px", marginTop : "10px", display: "flex", alignItems: "center", justifyContent: "left"}}>
												{
													el &&  modal.listIcon 
												}
												<Typography sx = {{ marginLeft: "10px" }}  variant="body1">
													{el}
												</Typography>
											</Box>
										))
									}
								</Box>
							))
						}

						<Button onClick={handleModal} sx={{marginTop: "20px"}} endIcon={<TextsmsIcon/>} variant="contained">
							Request Quotation
						</Button>

						<ServiceQuotationModal title="Request Service Quotation" open={openItemFormModal} setOpen={setOpenItemFormModal}/>

					</StyledModalContentArea>
				</StyledModalItems>
		</StyledModal>
	)
}

export default ServicesModal