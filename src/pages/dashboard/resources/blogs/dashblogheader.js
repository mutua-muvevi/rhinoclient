import React from 'react';

import { Box, Button ,Typography } from "@mui/material";
import { styled } from "@mui/system";

const StyledDashBlogHeader = styled(Box)(({ theme }) => {

})

const styledBlogHeader = {
	display: { 
		xs: 'block',
		md: 'flex'
	},
	justifyContent: "space-between",
	alignItems: "flex-end"
}

const StyledHeaderLeft = styled(Box)(({ theme }) => {

})

const DashBlogHeader = () => {
	return (
		<StyledDashBlogHeader sx={styledBlogHeader}>
			<StyledHeaderLeft >
				<Typography variant="h4" color="secondary" gutterBottom>
					Blogs
				</Typography>
				<Typography variant="h5" gutterBottom>
					Create or Edit Blogs
				</Typography>
				
			</StyledHeaderLeft>
			<Button variant="contained" color="secondary">
				Create Blog
			</Button>
		</StyledDashBlogHeader>
	)
}

export default DashBlogHeader