import React from 'react';

import { Box, Typography } from "@mui/material";
// import { styled } from "@mui/system";

import { blogpost } from "../resourcesinfo";
import BlogpostBanner from "./blogpostbanner";
import BlogHeader from "./blogheader";
import BlogBody from "./blogbody";
import LatestBlogs from "./latestblogs";
import NewsLetters from "./newsletters";

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
			<BlogBody
				body = {blogpost.content}
				tags = {blogpost.tags}
			/>
			<LatestBlogs/>
			<NewsLetters/>
		</Box>
	)
}

export default Blogpost