import React from 'react';

import { Box, Container, Typography } from "@mui/material";
import { styled } from "@mui/system";


const styledTitle = {
	fontWeight: "bold",
	fontFamily: "'Rubik', sans-serif",
}

const BlogpostBanner = ({ title, subtitle, image }) => {

	const StyledBlogBanner = styled(Box)(({theme}) => ({
		minHeight: "70vh",
		display: "flex",
		flexDirection: "column",
		justifyContent: "flex-end",
		alignItems: "flex-start",
		background: `linear-gradient(to bottom, rgba(0, 0, 0, 0.68), rgba(0, 0, 0, 0.88), rgba(0, 0, 0, 0.94)), url(${image})`,
		backgroundPosition: "center",
		backgroundRepeat: "no-repeat",
		backgroundSize: "cover",
		paddingBottom: "30px"
	}))

	return (
		<StyledBlogBanner>
			<Container maxWidth= "xl">
				<Typography variant="h4" sx={styledTitle} gutterBottom color="secondary">
					{title}
				</Typography>
				<Typography variant="h5" sx={styledTitle} gutterBottom>
					{subtitle}
				</Typography>
			</Container>
		</StyledBlogBanner>
	)
}

export default BlogpostBanner