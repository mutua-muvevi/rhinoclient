import React from 'react';
import { Link } from "react-router-dom";

import { Box, Divider, Grid, Typography } from "@mui/material";
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

const dividerStyle = {
	margin: "40px auto",
	backgroundColor: "#f48d3a"
}

const Blogs = () => {
	return (
		<StyledBlogsWrapper>
			<StyledBlogTitle>
				<Typography variant="h4" color="secondary" >
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
							<Link to="/landing/blogpost" style={{textDecoration: "none", color: "inherit"}}>
								<BlogCard 
									content={blog.content}
									thumbnail={blog.thumbnail.src}
									cover={blog.coverImage.src}
									title={blog.title}
									subtitle={blog.subtitle}
									author={blog.author}
									date={blog.date}
								/>
							</Link>
						</Grid>
					))
				}
			</Grid>
			<Divider sx={dividerStyle}/>
		</StyledBlogsWrapper>
	)
}

export default Blogs