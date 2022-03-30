import React from 'react'
import { Card,  CardContent, CardMedia, Typography } from "@mui/material";
import { styled } from "@mui/system";
import Image from "../../../../assets/images/truck 2.jpg";


const ImageContentCard = styled(Card)(({theme}) => ({
	width: "26vw",
	margin: "10px !important",
	borderRadius: theme.shape.default
}))



const Sizeheadercontent4 = () => {
	return (
		<ImageContentCard>
			<CardMedia
				component="img"
				height="300"
				image={Image}
				alt="alt information one"
			/>
			<CardContent>
				<Typography variant="h4" gutterBottom>
					Header
				</Typography>
				<Typography variant="body">
					Anim reprehenderit laborum duis aliqua qui ad velit id nulla duis ullamco. 
					Labore proident id consequat labore veniam cillum deserunt fugiat nisi occaecat esse elit. 
					Velit sunt est et fugiat cillum adipisicing enim tempor et tempor.
				</Typography>
			</CardContent>
		</ImageContentCard>
	)
}

export default Sizeheadercontent4