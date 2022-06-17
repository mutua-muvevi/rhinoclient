import React, { useState } from 'react';

import { Button, Card, CardActions, CardContent, CardMedia, Typography } from "@mui/material";
import { styled } from "@mui/system";

import AddCircleRoundedIcon from '@mui/icons-material/AddCircleRounded';
import ServicesModal from "../../../../pages/landing/services/servicesmodal";

const ImageContentCard = styled(Card)(({theme}) => ({
	maxWidth: "500px",
	borderRadius: theme.shape.default,
	backgroundColor: theme.palette.background.paper,

}))

const CardContentInfo = styled(CardContent)(({theme}) => ({
	marginBottom: "10px",
	borderBottom: `1px solid grey`,
	minHeight: "30vh"
}))

const titleFont = {
	fontFamily: "'Rubik', sans-serif",
	fontWeight: 500,
	color: "#dea95f"
}

const CardActionsInfo = styled(CardActions)(({theme}) => ({
	display: "flex",
	justifyContent: "space-between",
}))

const buttonFont = {
	fontFamily: "'Rubik', sans-serif",
	fontWeight: 500,
	color: "#fff"
}


const SizeimgcontentfooterCard4 = ({ title, alt, image, paragraph,  modalData }) => {

	const [singleModalContent, setSingleModalContent] = useState(null)

	const [modal, setModal] = useState(false);

	const handleModal = () => {
		setModal(!modal)
		setSingleModalContent(modalData)
	}

	const handleClose = () => {
		setModal(false)
		setSingleModalContent(null)
	}

	return (
		<ImageContentCard>
			<CardMedia 
				component="img"
				height="300"
				image={image}
				alt={alt}
			/>
			<CardContentInfo>
				<Typography variant="h4" style={titleFont} gutterBottom>
					{title}
				</Typography>
				{
					paragraph.map((p, i) => (
						<Typography key={i} variant="body">
							{p}
						</Typography>
					))
				}
			</CardContentInfo>
			
			<CardActionsInfo>
				<Button onClick={handleModal} variant="contained" color="secondary">
					<Typography variant="body2" style={buttonFont}>
						Explore
					</Typography>
					<AddCircleRoundedIcon sx={{ marginLeft: "10px" }}/>
				</Button>
			</CardActionsInfo>
			{
				singleModalContent ? (
					<ServicesModal
						open={modal}
						modal={singleModalContent}
						handleClose={handleClose}
					/>
				) : null
			}
		</ImageContentCard>
	)
}

export default SizeimgcontentfooterCard4