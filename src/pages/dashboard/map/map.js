import { Box, Breadcrumbs, Link, Typography } from "@mui/material"
import HomeIcon from '@mui/icons-material/Home';
import MapIcon from '@mui/icons-material/Map';
import React from 'react';
import { styled } from "@mui/system";

const StyledBreadCrumbs = styled(Breadcrumbs)(({theme}) => ({
	marginBottom: "20px"
}))


const Dashmap = () => {
	return (
		<Box>
			<StyledBreadCrumbs>
				<Link
					underline="hover"
					sx={{ display: 'flex', alignItems: 'center' }}
					color="inherit"
					href="/dashboard"
				>
					 <HomeIcon sx={{ mr: 0.5 }} fontSize="inherit" />
					 Dashboard
				</Link>
				<Typography
					sx={{ display: 'flex', alignItems: 'center' }}
					color="text.primary"
				>
					<MapIcon sx={{ mr: 0.5 }} fontSize="inherit" />
					Map
				</Typography>
			</StyledBreadCrumbs>
		</Box>
	)
}

export default Dashmap