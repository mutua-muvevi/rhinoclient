import React from 'react'
import { Card,  CardContent, CardMedia, Typography } from "@mui/material";
import { styled } from "@mui/system";


const ImageContentCard = styled(Card)(({theme}) => ({
	width: "26vw",
	margin: "10px !important",
	borderRadius: theme.shape.default
}))



const Sizeheadercontent4 = ({title, text, image, alt}) => {
	return (
		<ImageContentCard>
			<CardMedia
				component="img"
				height="300"
				image={image}
				alt={alt}
			/>
			<CardContent>
				<Typography variant="h4" gutterBottom>
					{title}
				</Typography>
				<Typography variant="body">
					{text}
				</Typography>
			</CardContent>
		</ImageContentCard>
	)
}

export default Sizeheadercontent4