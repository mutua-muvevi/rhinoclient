import React from 'react';
import { Box,  Breadcrumbs, Card, CardMedia, Container, Divider, Grid, Grow, Typography } from "@mui/material";
import { styled } from "@mui/system";
import Logo from "../../../assets/images/logos/Rhino card logo - PNG.png";
import LoginForm from "./loginform";
import { metaAuthContent } from "../metacontent.js";
import { Link } from "react-router-dom";
import HomeIcon from '@mui/icons-material/Home';
import LockIcon from '@mui/icons-material/Lock';

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

const StyledCardMedia = styled(CardMedia)(({ theme }) => ({
	height: "80vh",
	wifth: "100%",
	opacity: 0.5
}))

const StyledRightGridContainer = styled(Grid)(({ theme }) => ({

}))

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

const Login = () => {
	return (
		<Grow style={{ transformOrigin: '10 20 50' }} in timeout={2000}>

			<StyledAuthCardWrapper id="login">


				<StyledGridWrapper container>

					<StyledImageGrid item lg={5} xs={12}>
						<StyledCardMedia
							component="img"
							height="100%"
							image="https://res.cloudinary.com/dqweh6zte/image/upload/v1649928582/Rhino%20John%20Background%20Video/Rhinojon%20Product%20images/air-transport-loading-transformed_ru22tk.jpg"
							alt="Cargo Plane with door opened, Rhinojon prime metals"
						/>

						<StyledRightGridContainer>
						
						</StyledRightGridContainer>

					</StyledImageGrid>

					<StyledFormGrid item lg={7} xs={12}>
						
						<Container maxWidth="xl">
							<StyledLogoTitle>
								<img
									src={Logo}
									alt="Rhino John Prime Metals Logo"
									style={{width: "120px"}}/>
								<Typography sx={{marginLeft: "30px", marginTop: "20px"}} variant="h2">Login</Typography>
							</StyledLogoTitle>

							<Typography variant="h4">
								Sign in to you account
							</Typography>

							<StyledLoginSection>
								<LoginForm/>
							</StyledLoginSection>
						</Container>

						<Divider color="grey" sx={{margin: "20px auto"}}/>

						<Container maxWidth="xl">
							<Typography variant="subtitle1" color="#fff">
								{metaAuthContent.login.text}
							</Typography>
							<Link style={{textDecoration: "none", color: "blue"}} to={metaAuthContent.login.link.path}>
								{metaAuthContent.login.link.text}
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
									<LockIcon sx={{ mr: 0.5, color:"white" }} fontSize="inherit" />
									Login
								</Typography>
							</StyledAuthBreadCrumbs>
						</Container>

					</StyledFormGrid>

				</StyledGridWrapper>
			</StyledAuthCardWrapper>
		</Grow>
	)
}

export default Login