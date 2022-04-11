import { Box, CssBaseline, Grid, Typography} from "@mui/material";
import { styled } from "@mui/system";
import React from 'react';
import Homenav from "../../../components/layout/homenav/homenav";
import { ElevationScroll } from "../../../components/layout/homenav/elevationScroll"

const videoLink = "https://res.cloudinary.com/dqweh6zte/video/upload/g_center/v1649662343/Rhino%20John%20Background%20Video/Rhinojon_background_Laptop_compressed_idtp8r.mp4"

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
	zIndex: 4,
	top: 0,
	left: 0,
	height: "100vh",
	objectFit: "cover",
	opacity: 0.8,
	width: "100vw",
}

const StyledNavGrid = styled(Grid)(({ theme }) => ({
	// backgroundColor: "red"
}))


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
						
					</StyledNavGrid>
				</Grid>
			</StyledBoxWrapper>
		</>
	)
}

export default Home