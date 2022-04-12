import { Box, Container, Typography } from "@mui/material"
import { styled } from "@mui/system";
import React from 'react';

const StyledContainer = styled(Container)(({theme}) => ({
	minHeight: "50vh",
	display: "flex",
	flexDirection: "column",
	justifyContent: "flex-end",
	alignItems: "flex-start",
	paddingBottom: "30px",
	transition: "1s"
}))

const Banner = ({title, subtitle, image, imageAlt, paragraph}) => {

	const BannerWrapper = styled(Box)(({theme}) => ({
		backgroundImage: `linear-gradient(to right, rgba(0, 0, 0, 0.955), rgba(0, 0, 0, 0.784)), url(${image})`,
		backgroundPosition: "center",
		backgroundAttachment: "fixed",
		backgroundSize: "cover",
		backgroundRepeat: "no-repeat",
		transition: "0.5s", 
		minHeight: "50vh",
		color: "#fff",
	}))

	return (
		<BannerWrapper>
			<StyledContainer maxWidth="xl">
				<Typography sx={{marginTop: 10}} variant="h2" component="h3" gutterBottom>
					{title}
				</Typography>
				<Typography variant="h4" component="h4">
					{subtitle}
				</Typography>
				{
					paragraph.map((p, i) => (
						<Box key={i} sx={{marginBottom: "15px"}}>
							<Typography key={i} variant="body">
								{p}
							</Typography>
						</Box>
					))
				}
			</StyledContainer>
		</BannerWrapper>
	)
}

export default Banner