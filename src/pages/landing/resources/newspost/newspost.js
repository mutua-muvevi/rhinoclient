import React from 'react';

import { Box } from "@mui/material";

import { newspost } from "../resourcesinfo";

import NewsBanner from "./newsbanner";
import NewsBody from "./newsbody";
import NewsHeader from "./newsheader";
import NewsLetters from "../blogpost/newsletters";

const NewsPost = () => {
	return (
		<Box>
			<NewsBanner
				image={newspost.coverImage.src}
				title={newspost.title}
				subtitle={newspost.subtitle}
			/>
			<NewsHeader
				title={newspost.title}
				subtitle={newspost.subtitle}
				author={newspost.author}
				date={newspost.date}
			/>
			<NewsBody
				body = {newspost.content}
				tags = {newspost.tags}
			/>
			<NewsLetters/>
		</Box>
	)
}

export default NewsPost