import { Box, Container, Typography } from "@mui/material"
import { styled } from "@mui/system";
import React from 'react';

const StyledContainer = styled(Container)(({theme}) => ({
	height: "100%",
	display: "flex",
	flexDirection: "column",
	justifyContent: "flex-end",
	alignItems: "flex-start",
	paddingBottom: "30px",
}))

const Banner = ({title, subtitle, image, imageAlt}) => {

	const BannerWrapper = styled(Box)(({theme}) => ({
		backgroundImage: `linear-gradient(to right, rgba(0, 0, 0, 0.955), rgba(0, 0, 0, 0.784)), url(${image})`,
		backgroundPosition: "center",
		backgroundAttachment: "fixed",
		backgroundSize: "cover",
		backgroundRepeat: "no-repeat",
		transition: "0.5s", 
		height: "50vh",
		color: "#fff"
	}))

	return (
		<BannerWrapper>
			<StyledContainer maxWidth="xl">
				<Typography variant="h2" component="h3">
					{title}
				</Typography>
				<Typography variant="h4" component="h4">
					{subtitle}
				</Typography>
			</StyledContainer>
		</BannerWrapper>
	)
}

export default Banner