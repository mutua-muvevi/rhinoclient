import { Card, CardActionArea, CardContent, CardMedia, Typography } from "@mui/material"
import { styled } from "@mui/styles"
import React from 'react'

const TrackCard = ({ title, subtitle, link, image, alt }) => {

	const StyledCard = styled(Card)(({theme}) => ({
		position: "relative",
		height: "70vh",
		borderRadius: theme.shape.default,
		opacity: 0.69,
		backgroundColor: "#00000 !important"
	}))
	
	const StyledCardActionArea = styled(CardActionArea)(({theme}) => ({
		position: "relative",
		height: "100%"
	}))

	const styledCardMedia = {
		position: "relative",
		top: 0,
		right: 0,
		height: "100%",
		width: "100%"
	}

	const styledCardContent = {
		position: "relative",
		backgroundColor: "black",
		bottom: "20vh",
		color: "white"
	}

	return (
		<StyledCard>
			<StyledCardActionArea>
				<CardMedia
					component="img"
					height="300"
					image={image}
					alt={alt}
					sx={styledCardMedia}
				/>
				<CardContent sx={styledCardContent}>
					<Typography variant="h3" gutterbottom>
						{title}
					</Typography>
					<Typography variant="h5" gutterbottom>
						{subtitle}
					</Typography>
				</CardContent>
			</StyledCardActionArea>
		</StyledCard>
	)
}

export default TrackCard