import React from 'react';

import { Box, Grid, Typography } from "@mui/material";
import { styled } from "@mui/system";

import { blogs } from "./resourcesinfo";
import BlogCard from "../../../components/widgets/cards/blogcard/blogcard";


const StyledBlogsWrapper = styled(Box)(({ theme }) => ({
	margin: "20px auto"
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

const Blogs = () => {
	return (
		<StyledBlogsWrapper>
			<StyledBlogTitle>
				<Typography variant="h4">
					Our Blogs
				</Typography>
				<Typography variant="h5">
					Lorem ipsum text generator for subtitle
				</Typography>
			</StyledBlogTitle>
			<Grid container spacing={2}>
				{
					blogs &&
					blogs.map((blog) => (
						<Grid key={blog.title} item xl={3} lg={3} md={6} sm={12} xs={12}>
							<BlogCard 
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

export default Blogs