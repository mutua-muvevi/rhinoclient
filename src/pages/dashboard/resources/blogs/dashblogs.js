import React from 'react';

import { Box } from "@mui/material";

import DashBlogHeader from "./dashblogheader";
import DashBlogBody from "./dashblogbody";

const DashBlogs = () => {
	return (
		<Box>
			<DashBlogHeader/>
			<DashBlogBody/>
		</Box>
	)
}

export default DashBlogs