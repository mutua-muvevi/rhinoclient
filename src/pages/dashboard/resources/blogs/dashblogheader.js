import React, { useState } from 'react';

import { Box, Button ,Typography } from "@mui/material";
import { styled } from "@mui/system";

import AddBlogModal from "./addblogsmodal/addblogsmodal";

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

	const [open, setOpen] = useState(false)

	const handleBlogModal = () => {
		setOpen(true)
	}

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
			<Button variant="contained" onClick={handleBlogModal} color="secondary">
				Create Blog
			</Button>
			{ console.log("The modal status is", open) }
			<AddBlogModal  open={open} setOpen={setOpen}/>
		</StyledDashBlogHeader>
	)
}

export default DashBlogHeader