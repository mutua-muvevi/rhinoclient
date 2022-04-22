import React from 'react';
import { Outlet } from 'react-router-dom';
import { Box, Container, CssBaseline, Typography } from "@mui/material";
import { styled } from "@mui/system";

const backgroundVideoUrl = "https://res.cloudinary.com/dqweh6zte/video/upload/v1650608272/Rhino%20John%20Background%20Video/cargotruck_nvuflu.mp4"

const StyledAuthWrapper = styled(Box)(({theme}) => ({
	
	width: "100%",
	height: "100%",
	padding: 0
}))

const styledVideo = {
	position: "fixed",
	top: 0,
	left: 0,
	height: "100vh",
	objectFit: "cover",
	width: "100vw",
}


const StyledOutletWrapper = styled(Box)(({theme}) => ({
	position: "relative",
	top: 0,
	left: 0,
	minHeight: "99.99vh",
	background: "linear-gradient(to bottom, rgba(0, 0, 0, 0.36), rgba(0, 0, 0, 0.46)), url(https://res.cloudinary.com/dqweh6zte/image/upload/v1650445891/Rhino%20John%20Background%20Video/Rhinojon%20Product%20images/dot_opkspq.png) repeat",
}))

const AuthLayout = () => {
	return (
		<StyledAuthWrapper>
			<CssBaseline/>
			<video style={styledVideo} autoPlay loop controls="" muted>
				<source  src={backgroundVideoUrl} type="video/mp4"/>
				<Typography variant="h4">
					Your browser does not support HTML video.
				</Typography>
			</video>

			<StyledOutletWrapper>
				<Outlet/>
			</StyledOutletWrapper>

		</StyledAuthWrapper>
	)
}

export default AuthLayout