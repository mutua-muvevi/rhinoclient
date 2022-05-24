import { Box, Breadcrumbs, Grid, Typography, Grow } from "@mui/material"
import { styled } from "@mui/system";
import React from 'react';
import HomeIcon from '@mui/icons-material/Home';
import TravelExploreIcon from '@mui/icons-material/TravelExplore';
import { trackCardInfo } from "./trackinfo";
import TrackCard from "../../../components/widgets/cards/track/track";
import { Link } from "react-router-dom"


const StyledBreadCrumbs = styled(Breadcrumbs)(({theme}) => ({
	marginTop: "20px",
	marginBottom: "20px",
	color: theme.palette.secondary.main
}))

const Track = () => {
	return (
		<Box id="track">
			<StyledBreadCrumbs>
				<Link
					underline="hover"
					sx={{ display: 'flex', alignItems: 'center' }}
					style={{color: "inherit", textDecoration: "none"}}
					to="/"
				>
					 <HomeIcon color="#fff" sx={{ mr: 0.5 }} fontSize="inherit" />
					 Home
				</Link>
				<Typography
					sx={{ display: 'flex', alignItems: 'center' }}
					color="rgba(250, 250, 250, 0.8)"
				>
					<TravelExploreIcon sx={{ mr: 0.5 }} fontSize="inherit" />
					Track
				</Typography>
			</StyledBreadCrumbs>

			<Grow style={{ transformOrigin: '10 20 50' }} in timeout={2000}>
				<Box>
					<Typography variant="h1" color="white" gutterBottom>
						Tracking
					</Typography>
					<Grid container spacing={2}>
						{
							trackCardInfo.map((el, i) => (
								<Grid item key={el.title} lg={6} sm={12} xs={12}>
									<Link to={el.link} style={{textDecoration: "none"}}>
										<TrackCard
											image={el.image.src}
											alt={el.image.alt}
											title={el.title}
											subtitle={el.subtitle}
										/>
									</Link>
								</Grid>
							))
						}
					</Grid>
				</Box>
			</Grow>
		</Box>
	)
}

export default Track