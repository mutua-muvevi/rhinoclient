import React from 'react';
import { Link } from "react-router-dom";

import { Box, Breadcrumbs, Card, Container, Divider, Grid, Grow, Typography } from "@mui/material";
import { styled } from "@mui/system";

import Logo from "../../../assets/images/logos/Rhino card logo - PNG.png"
import ForgotPasswordForm from "./forgotpasswordform";
import { metaAuthContent } from "../metacontent.js";

import HomeIcon from '@mui/icons-material/Home';
import VpnKeyIcon from '@mui/icons-material/VpnKey';

const StyledAuthCardWrapper = styled(Card)(({ theme }) => ({
	position: "absolute",
	top: "10vh",
	bottom: "10vh",
	left: "10vw",
	right: "10vw",
	backgroundColor: "rgba(0, 0, 0, 0.86)",
	color: theme.palette.common.white
}))

const StyledAuthBreadCrumbs = styled(Breadcrumbs)(({ theme }) => ({
	marginTop: "20px",
	color: "white"
}))

const StyledGridWrapper = styled(Grid)(({ theme }) => ({

}))

const StyledFormGrid = styled(Grid)(({ theme }) => ({
	
}))



const StyledImageGrid = styled(Grid)(({ theme }) => ({
	height: "80vh",
	opacity: 0.8
}))

const styledCardMedia = {
	height: "80vh",
	width: "100%",
	opacity: 0.5
}

const StyledLogoTitle = styled(Box)(({ theme }) => ({
	display: "flex",
	justifyContent: "left",
	alignItems: "center",
	marginTop: "60px",
	marginBottom: "30px"
}))

const StyledLoginSection = styled(Box)(({ theme }) => ({
	marginTop: "30px"
}))

const ForgotPassword = () => {
	return (
		<Grow style={{ transformOrigin: '10 20 50' }} in timeout={2000}>

			<StyledAuthCardWrapper id="forgot-password">
				<StyledGridWrapper container>

					<StyledFormGrid item lg={7} xs={12}>
						
						<Container maxWidth="xl">
							<StyledLogoTitle>
								<img
									src={Logo}
									alt="Rhino John Prime Metals Logo"
									style={{width: "120px"}}/>
								<Typography sx={{marginLeft: "30px", marginTop: "20px"}} variant="h2">ForgotPassword</Typography>
							</StyledLogoTitle>

							<Typography variant="h4">
								Enter your email below to reset password
							</Typography>

							<StyledLoginSection>
								<ForgotPasswordForm/>
							</StyledLoginSection>
						</Container>

						<Divider color="grey" sx={{margin: "20px auto"}}/>

						<Container maxWidth="xl">
							<Typography variant="subtitle1" color="#fff">
								{metaAuthContent.forgotPassword.text}
							</Typography>
							<Link style={{textDecoration: "none", color: "blue"}} to={metaAuthContent.forgotPassword.link.path}>
								{metaAuthContent.forgotPassword.link.text}
							</Link>
							<StyledAuthBreadCrumbs>
								<Link
									underline="hover"
									sx={{ display: 'flex', alignItems: 'center', textDecoration: "none" }}
									color="blue"
									to="/"
								>
									<HomeIcon sx={{ mr: 0.5, color:"white" }} fontSize="inherit" />
									Home
								</Link>
								<Typography
									sx={{ display: 'flex', alignItems: 'center' }}
									color="white"
								>
									<VpnKeyIcon sx={{ mr: 0.5, color:"white" }} fontSize="inherit" />
									Forgot Password
								</Typography>
							</StyledAuthBreadCrumbs>
						</Container>

					</StyledFormGrid>

					
					<StyledImageGrid item lg={5} >
						<Box sx={{height: "100%"}} display={{xs: "none", sm : "none", lg : "block"}}>
							<img
								src="https://res.cloudinary.com/dqweh6zte/image/upload/v1649662366/Rhino%20John%20Background%20Video/Rhinojon%20Product%20images/diamond_1_slzqey.jpg"
								alt="Cargo Plane with door opened, Rhinojon prime metals"
								style={styledCardMedia}
								/>
						</Box>
					</StyledImageGrid>

				</StyledGridWrapper>
			</StyledAuthCardWrapper>
		</Grow>
	)
}

export default ForgotPassword