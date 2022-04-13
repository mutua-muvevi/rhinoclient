import React from 'react';
import { Box, Breadcrumbs, Button, FormGroup, InputBase, Link, Typography } from "@mui/material"
import { styled } from "@mui/system";
import HomeIcon from '@mui/icons-material/Home';
import TravelExploreIcon from '@mui/icons-material/TravelExplore';
import WarehouseIcon from '@mui/icons-material/Warehouse';
import ManageSearchIcon from '@mui/icons-material/ManageSearch';

const StyledBreadCrumbs = styled(Breadcrumbs)(({theme}) => ({
	marginTop: "20px",
	marginBottom: "20px",
	color: theme.palette.common.white
}))

const trackTitle = {
	marginTop: "20vh"
}

const StyledInputBase = styled(InputBase)(({theme}) => ({
	color: "white",
	border: "#fff solid 1px",
	borderColor: theme.palette.common.white,
	minWidth: "40vw",
	padding: "10px"
}))

const StyledTrackButton = styled(Button)(({theme}) => ({
	padding: "10px",
	minWidth: "20vw"
}))

const TrackStorage = () => {
	return (
		<Box id="track-shipment">
			<StyledBreadCrumbs>
				<Link
					underline="hover"
					sx={{ display: 'flex', alignItems: 'center' }}
					
					href="/"
				>
					<HomeIcon color="#fff" sx={{ mr: 0.5 }} fontSize="inherit" />
					Home
				</Link>
				<Link
					underline="hover"
					sx={{ display: 'flex', alignItems: 'center' }}
					
					href="/track/main"
				>
					<TravelExploreIcon sx={{ mr: 0.5 }} fontSize="inherit" />
					Track
				</Link>
				<Typography
					sx={{ display: 'flex', alignItems: 'center' }}
					color="#fff"
				>
					<WarehouseIcon sx={{ mr: 0.5 }} fontSize="inherit" />
					Track Storage
				</Typography>
			</StyledBreadCrumbs>

			<Box>
				<Typography variant="h1" color="white" sx={trackTitle} gutterBottom>
					Track Your Storage
				</Typography>
				<FormGroup row>
					<StyledInputBase
						color="white"
						placeholder="Enter Storage Track Number..."
						variant="standard"
					/>
					<StyledTrackButton endIcon={<ManageSearchIcon/>} variant="contained" color="primary">
						Search
					</StyledTrackButton>
				</FormGroup>
			</Box>
		</Box>
	)
}

export default TrackStorage