import React from 'react';

import { Box, Grid, Typography } from "@mui/material";
import { styled } from "@mui/system";

import { news } from "./resourcesinfo";
import NewsCard from "../../../components/widgets/cards/newscard/newscard";


const StyledBlogsWrapper = styled(Box)(({ theme }) => ({
	marginBottom: "30px"
}))

const StyledBlogTitle = styled(Box)(({ theme }) => ({
	height: "12vh",
	display: "flex",
	flexDirection: "column",
	justifyContent: "space-around",
	alignItems: "flex-start",
	textAlign: "left",
	marginBottom: "20px"
}))

const News = () => {
	return (
		<StyledBlogsWrapper>
			<StyledBlogTitle>
				<Typography variant="h4" color="secondary" gutterBottom>
					Our News Articles
				</Typography>
				<Typography variant="h5">
					Lorem ipsum text generator for subtitle
				</Typography>
			</StyledBlogTitle>
			<Grid container spacing={2}>
				{
					news &&
					news.map((blog) => (
						<Grid key={blog.title} item xl={3} lg={3} md={6} sm={12} xs={12}>
							<NewsCard 
								content={blog.content}
								thumbnail={blog.thumbnail.src}
								cover={blog.coverImage.src}
								title={blog.title}
								subtitle={blog.subtitle}
								author={blog.author}
								date={blog.date}
							/>
						</Grid>
					))
				}
			</Grid>
		</StyledBlogsWrapper>
	)
}

export default News