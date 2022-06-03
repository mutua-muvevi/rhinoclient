import React from 'react';

import { Box } from "@mui/material";

import DashBlogHeader from "./dashblogheader";
import DashBlogTable from "./dashblogtable";

const DashBlogs = () => {

	return (
		<Box>
			<DashBlogHeader/>
			<DashBlogTable/>
		</Box>
	)
}

export default DashBlogs