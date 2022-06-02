import React from 'react';

import { Box, Breadcrumbs, Link, Typography } from "@mui/material"
import { styled } from "@mui/system";

import HomeIcon from '@mui/icons-material/Home';
import CreateNewFolderIcon from '@mui/icons-material/CreateNewFolder';
import DashBlogs from "./blogs/dashblogs";
import DashNews from "./news/dashnews";

const StyledBreadCrumbs = styled(Breadcrumbs)(({theme}) => ({
	marginBottom: "20px"
}))



const headerFont = {
	color: "#dea95f",
	fontFamily: "'Rubik', sans-serif",
}

const DashResources = () => {
	return (
		<Box component="section" id="dash-quotation">
			<StyledBreadCrumbs>
				<Link
					underline="hover"
					style={headerFont}
					href="/dashboard"
				>
					 <HomeIcon sx={{ mr: 0.5 }} fontSize="inherit" />
					 Dashboard
				</Link>
				<Typography
					sx={{ display: 'flex', alignItems: 'center' }}
					color="text.primary"
				>
					<CreateNewFolderIcon sx={{ mr: 0.5 }} fontSize="inherit" />
					Resources
				</Typography>
			</StyledBreadCrumbs>

			<DashBlogs/>
			<DashNews/>
		</Box>
	)
}

export default DashResources