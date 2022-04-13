import { Box, Breadcrumbs, Grid, Link, Typography } from "@mui/material"
import { styled } from "@mui/system";
import React from 'react';
import HomeIcon from '@mui/icons-material/Home';
import TravelExploreIcon from '@mui/icons-material/TravelExplore';
import { trackCardInfo } from "./trackinfo";
import TrackCard from "../../../components/widgets/cards/track/track";


const StyledBreadCrumbs = styled(Breadcrumbs)(({theme}) => ({
	marginTop: "20px",
	marginBottom: "20px",
	color: theme.palette.common.white
}))

const Track = () => {
	return (
		<Box id="track">
			<StyledBreadCrumbs>
				<Link
					underline="hover"
					sx={{ display: 'flex', alignItems: 'center' }}
					
					href="/"
				>
					 <HomeIcon color="#fff" sx={{ mr: 0.5 }} fontSize="inherit" />
					 Home
				</Link>
				<Typography
					sx={{ display: 'flex', alignItems: 'center' }}
					color="#fff"
				>
					<TravelExploreIcon sx={{ mr: 0.5 }} fontSize="inherit" />
					Track
				</Typography>
			</StyledBreadCrumbs>

			<Box>
				<Typography variant="h1" color="white" gutterBottom>
					Tracking
				</Typography>
				<Grid container spacing={2}>
					{
						trackCardInfo.map((el, i) => (
							<Grid item key={el} lg={6} sm={12} xs={12}>
								<TrackCard
									image={el.image.src}
									alt={el.image.alt}
									title={el.title}
									subtitle={el.subtitle}
									link={el.link}
								/>
							</Grid>
						))
					}
				</Grid>
			</Box>
		</Box>
	)
}

export default Track