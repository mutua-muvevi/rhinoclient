import { Button, Card, CardActions, CardContent, CardMedia, Typography } from "@mui/material";
import { styled } from "@mui/system";
import AddCircleRoundedIcon from '@mui/icons-material/AddCircleRounded';
import React from 'react';
import Image from "../../../../assets/images/truck 2.jpg";

const ImageContentCard = styled(Card)(({theme}) => ({
	width: "26vw",
	margin: "10px !important",
	borderRadius: theme.shape.default
}))

const CardContentInfo = styled(CardContent)(({theme}) => ({
	marginBottom: "10px",
	borderBottom: `1px solid grey`
}))

const CardActionsInfo = styled(CardActions)(({theme}) => ({
	display: "flex",
	justifyContent: "space-between"
}))

const SizeimgcontentfooterCard4 = () => {
	return (
		<ImageContentCard>
			<CardMedia 
				component="img"
				height="300"
				image={Image}
				alt="alt information one"
			/>
			<CardContentInfo>
				<Typography variant="h4" gutterBottom>
					Header
				</Typography>
				<Typography variant="body">
					Anim reprehenderit laborum duis aliqua qui ad velit id nulla duis ullamco. 
					Labore proident id consequat labore veniam cillum deserunt fugiat nisi occaecat esse elit. 
					Velit sunt est et fugiat cillum adipisicing enim tempor et tempor.
				</Typography>
			</CardContentInfo>
			<CardActionsInfo>
				<Button color="primary">
					<Typography variant="body2" style={{marginRight: "20px"}}>
						Explore
					</Typography>
					<AddCircleRoundedIcon/>
				</Button>
			</CardActionsInfo>
		</ImageContentCard>
	)
}

export default SizeimgcontentfooterCard4