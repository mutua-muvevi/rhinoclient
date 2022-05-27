import React from 'react';

import { Box, Typography } from "@mui/material";
import { styled } from "@mui/system";

import PersonIcon from '@mui/icons-material/Person';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';

const styledTitle = {
	fontWeight: "bold",
	fontFamily: "'Rubik', sans-serif",
}

const StyledLowerSection = styled(Box)(({ theme }) => ({
	display: "flex",
	flexDirection: "column",
	justifyContent: "space-around",
	alignItems: "left",
	textAlign: "left",
	marginTop: "20px"
}))

const StyledLowerSectionItems = styled(Box)(({ theme }) => ({
	display: "flex",
	justifyContent: "left",
	alignItems: "center",
	textAlign: "left"
}))

const BlogCard = ({thumbnail, cover, title, subtitle, content, author, date}) => {
	
	const StyledBlogCard = styled(Box)(({ theme }) => ({
		background: `linear-gradient(to bottom, rgba(0, 0, 0, 0.68), rgba(0, 0, 0, 0.88), rgba(0, 0, 0, 0.94)), url(${cover})`,
		backgroundPosition: "center",
		backgroundRepeat: "no-repeat",
		backgroundSize: "cover",
		height: "60vh",
		maxWidth: "400px",
		borderRadius: theme.shape.default,
		filter: "drop-shadow(5px 7px 5px black)",
		alignSelf: "center",
		padding: "10px",
		display: "flex",
		flexDirection: "column",
		justifyContent: "flex-end",
		alignItems: "flex-start",
		textAlign: "left"
	}))

	return (
		<StyledBlogCard>
			<Typography variant="h5" sx={styledTitle} color="secondary" gutterBottom>
				{title}
			</Typography>
			<Typography variant="body1" color="whitesmoke">
				{subtitle}
			</Typography>
			<StyledLowerSection>
				<StyledLowerSectionItems>
					<PersonIcon/>
					<Typography variant="body2" sx={{marginLeft: "10px"}} >{author}</Typography>
				</StyledLowerSectionItems>
				<StyledLowerSectionItems>
					<CalendarMonthIcon/>
					<Typography variant="body2" sx={{marginLeft: "10px"}} >{date}</Typography>
				</StyledLowerSectionItems>
			</StyledLowerSection>
		</StyledBlogCard>
	)
}

export default BlogCard