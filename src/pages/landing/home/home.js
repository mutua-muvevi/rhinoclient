import React from 'react';
import { Link } from "react-router-dom";

import { Box, Button, Container, CssBaseline, Grid, Grow, Typography } from "@mui/material";
import { styled } from "@mui/system";

import InfoIcon from '@mui/icons-material/Info';

import Homenav from "../../../components/layout/homenav/homenav";
import { ElevationScroll } from "../../../components/layout/homenav/elevationScroll";
import { homeInfo, socialIcons } from "./homeinfo";

const videoLink = "https://res.cloudinary.com/dqweh6zte/video/upload/v1656411634/Rhino%20John%20Background%20Video/gold_rain_cedbec.mp4"

const StyledBoxWrapper = styled(Box)(({theme}) => ({
	position: "absolute",
	zIndex: -1,
	right: 0,
	width: "100vw !important",
	height: "100vh !important",
	display: "flex",
	justifyContent: "space-between",
	alignItems: "center",
	transition:" 0.5s",
	backgroundColor: theme.palette.primary.dark,
}))

const styledVideo = {
	position: "absolute",
	zIndex: 2,
	top: 0,
	left: 0,
	height: "100vh",
	objectFit: "cover",
	
	width: "100vw",
}

const StyledNavGrid = styled(Grid)(({ theme }) => ({
	// backgroundColor: "red"
}))

const StyledOverlay = styled(Box)(({ theme }) => ({
	background: "linear-gradient(to bottom, rgba(0, 0, 0, 0.19), rgba(0, 0, 0, 0.46), rgba(0, 0, 0, 0.76))",
	position: "relative",
	zIndex: 3,
	width: "100%",
	height: "100vh",
	display: "flex",
	justifyContent: "center",
	alignItems: "center"

}))

const StyledContentContainer = styled(Container)(({ theme }) => ({
	position: "relative",
	zIndex: 3
}))

const styledHeader = {
	typography: { 
		lg: "h1",
		md: "h3",
		sm: 'h5',
		xs: 'h5'
	},
	fontWeight: 700
}

const styledParagraph = { 
	typography: 
	{
		lg: "30px",
		md: "subtitle1",
		sm: 'body1',
		xs: 'body2'
	},
	color: "white"
}

const StyledButton = styled(Button)(({ theme }) => ({
	color: "black",
	minWidth: "200px"
}))

const StyledSocial = styled(Box)(({ theme }) => ({
	marginTop: "20px",
	marginBottom: "30px",
}))

const styledSocialHeader = {
	marginTop: "4vh",
	typography: 
	{
		lg: "h6",
		md: "h6",
		sm: 'subtitle1',
		xs: 'subtitle1'
	},
	color: "white"
}

const StyledSocialIcons = styled(Box)(({ theme }) => ({
	display: "flex",
	justifyContent: "space-between",
	alignItems: "center",
	maxWidth: "20vw"
}))

const socialLink = {
	color: "inherit",
	textDecoration: "none",
	cursor: "ponter"
}

const Home = (props) => {



	return (
		<>
			<StyledBoxWrapper id="home" component="section" className="homepage">
				<Grid container spacing={0}>
					<CssBaseline/>
					<StyledNavGrid item xs={12} sm={12} lg={12} xl={12}>
						<Homenav/>

						<video style={styledVideo} autoPlay loop controls="" muted>
							<source  src={videoLink} type="video/mp4"/>
							<Typography variant="h4">
								Your browser does not support HTML video.
							</Typography>
						</video>

						<StyledOverlay>
							<Grow style={{ transformOrigin: '10 20 50' }} in timeout={2000}>

								<StyledContentContainer maxWidth="xl">
									<Typography variant="h3" sx={styledHeader} gutterBottom>
										{ homeInfo.title }
									</Typography>
									{
										homeInfo.paragraph.map(p => (
											<Typography variant="body1" key={p} sx={styledParagraph} gutterBottom>
												{p}
											</Typography>
										) )
									}
									<Link to="/landing/about" style={{textDecoration: "none"}}>
										<StyledButton variant="contained" color="secondary" type="button" endIcon={<InfoIcon/>}>
											Explore more
										</StyledButton>
									</Link>
								</StyledContentContainer>
							</Grow>
						</StyledOverlay>

					</StyledNavGrid>
				</Grid>
			</StyledBoxWrapper>
		</>
	)
}

export default Home