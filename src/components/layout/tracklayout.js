import { Box, Container, Typography } from "@mui/material";
import { styled } from "@mui/system";
import React from 'react';
import { Outlet } from "react-router-dom";

const backgroundVideoUrl = "https://res.cloudinary.com/dqweh6zte/video/upload/v1649848082/Rhino%20John%20Background%20Video/Rotation_of_The_Planet_Earth_anwoz4.mp4"

const StyledTrackWrapper = styled(Box)(({theme}) => ({
	background: "url(https://res.cloudinary.com/dqweh6zte/image/upload/v1650445891/Rhino%20John%20Background%20Video/Rhinojon%20Product%20images/dot_opkspq.png) repeat",
	width: "100%",
	height: "100%",
	padding: 0,
}))


const styledVideo = {
	position: "fixed",
	top: 0,
	left: 0,
	height: "100vh",
	objectFit: "cover",
	width: "100vw",
}


const StyledOutletWrapper = styled(Container)(({theme}) => ({
	position: "relative",
	top: 0,
	left: 0,
	zIndex: 2,
	
}))

const Tracklayout = () => {
	return (
		<StyledTrackWrapper>
			
			<video style={styledVideo} autoPlay loop controls="" muted>
				<source  src={backgroundVideoUrl} type="video/mp4"/>
				<Typography variant="h4">
					Your browser does not support HTML video.
				</Typography>
			</video>

			<StyledOutletWrapper maxWidth="lg">
				<Outlet/>
			</StyledOutletWrapper>

		</StyledTrackWrapper>
	)
}

export default Tracklayout