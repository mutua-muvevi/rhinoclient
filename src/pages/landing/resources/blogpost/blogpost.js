import React from 'react';

import { Box, Typography } from "@mui/material";
// import { styled } from "@mui/system";

import { blogpost } from "../resourcesinfo";
import BlogpostBanner from "./blogpostbanner";
import BlogHeader from "./blogheader";
import BlogBody from "./blogbody";

const Blogpost = () => {
	return (
		<Box>
			<BlogpostBanner 
				image={blogpost.coverImage.src}
				title={blogpost.title}
				subtitle={blogpost.subtitle}
			/>
			<BlogHeader
				title={blogpost.title}
				subtitle={blogpost.subtitle}
				author={blogpost.author}
				date={blogpost.date}
			/>
			<BlogBody/>
			<Typography variant="h3">Tags</Typography>
			<Typography variant="h3">Author</Typography>
			<Typography variant="h3">Latest posts</Typography>
			<Typography variant="h3">Subscribe to news letters</Typography>
		</Box>
	)
}

export default Blogpost