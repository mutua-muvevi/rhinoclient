import { Button, Card, CardActions, CardContent, CardMedia, Typography } from "@mui/material";
import { styled } from "@mui/system";
import AddCircleRoundedIcon from '@mui/icons-material/AddCircleRounded';
import React from 'react';

const ImageContentCard = styled(Card)(({theme}) => ({
	width: "100%",
	margin: "10px !important",
	borderRadius: theme.shape.default,
	backgroundColor: "white",
}))

const CardContentInfo = styled(CardContent)(({theme}) => ({
	marginBottom: "10px",
	borderBottom: `1px solid grey`,
	backgroundColor: "white",
	minHeight: "30vh"
}))

const CardActionsInfo = styled(CardActions)(({theme}) => ({
	display: "flex",
	justifyContent: "space-between",
	backgroundColor: "white"
}))

const SizeimgcontentfooterCard4 = ({title, alt, image, paragraph}) => {
	return (
		<ImageContentCard>
			<CardMedia 
				component="img"
				height="300"
				image={image}
				alt={alt}
			/>
			<CardContentInfo>
				<Typography variant="h4" gutterBottom>
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
				<Button variant="contained" color="primary">
					<Typography variant="body2" style={{marginRight: "20px"}}>
						View Product
					</Typography>
					<AddCircleRoundedIcon/>
				</Button>
			</CardActionsInfo>
		</ImageContentCard>
	)
}

export default SizeimgcontentfooterCard4