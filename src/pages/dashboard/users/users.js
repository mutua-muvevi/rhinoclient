import { Box, Breadcrumbs, Link, Typography } from "@mui/material"
import HomeIcon from '@mui/icons-material/Home';
import GroupIcon from '@mui/icons-material/Warehouse';
import React from 'react';
import { styled } from "@mui/system";

const StyledBreadCrumbs = styled(Breadcrumbs)(({theme}) => ({
	marginBottom: "20px"
}))

const Dashusers = () => {
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
					<GroupIcon sx={{ mr: 0.5 }} fontSize="inherit" />
					Users
				</Typography>
			</StyledBreadCrumbs>
			scsdcsdcsdcsc
		</Box>
	)
}

export default Dashusers