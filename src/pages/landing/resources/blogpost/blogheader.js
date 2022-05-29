import React from 'react';
import { Link } from "react-router-dom";

import { Avatar, Box, Breadcrumbs, Container, Divider, Typography } from "@mui/material";
import { styled } from "@mui/system";

import HomeIcon from '@mui/icons-material/Home';
import FolderIcon from '@mui/icons-material/Folder';
import AssignmentIcon from '@mui/icons-material/Assignment';

const StyledBlogHeader = styled(Box)(({ theme }) => ({
	marginBottom: "30px"
}))

const StyledBreadCrumbsArea = styled(Container)(({ theme }) => ({
	display: "flex",
	justifyContent: "space-between",
	alignItems: "center"
}))

const StyledBreadCrumbs = styled(Breadcrumbs)(({theme}) => ({
	marginTop: "20px",
	marginBottom: "20px",
	color: theme.palette.secondary.main
}))

const dividerStyle = {
	backgroundColor: "#f48d3a"
}

const StyledAuthorSection = styled(Container)(({ theme }) => ({
	display: "flex",
	justifyContent: "flex-start",
	alignItems: "center",
	margin: "20px auto"
}))

const StyledAuthorSectionText = styled(Box)(({ theme }) => ({
	display: "flex",
	flexDirection: "column",
	justifyContent: "center",
	alignItems: "flex-start",
	marginLeft: "30px",
	textAlign: "left"
}))

const BlogHeader = ({ title, subtitle, author, date }) => {
	return (
		<StyledBlogHeader>
			<StyledBreadCrumbsArea maxWidth="xl">
				<StyledBreadCrumbs>
					<Link
						underline="hover"
						style={{color: "inherit", textDecoration: "none"}}
						
						to="/"
					>
						<HomeIcon color="#fff" sx={{ mr: 0.5 }} fontSize="inherit" />
						Home
					</Link>
					<Link
						underline="hover"
						sx={{ display: 'flex', alignItems: 'center' }}
						style={{color: "inherit", textDecoration: "none"}}
						to="/landing/resources"
					>
						<FolderIcon sx={{ mr: 0.5 }} fontSize="inherit" />
						Resources
					</Link>
					<Typography
						sx={{ display: 'flex', alignItems: 'center' }}
						color="#fff"
					>
						<AssignmentIcon sx={{ mr: 0.5 }} fontSize="inherit" />
						Track Shipment
					</Typography>
				</StyledBreadCrumbs>

				<Typography variant="body1">
					{ date }
				</Typography>
			</StyledBreadCrumbsArea>

			<Divider sx={dividerStyle}/>

			<StyledAuthorSection>
				<Avatar variant="rounded" sizes="small"/>
				<StyledAuthorSectionText>
					<Typography variant="body1" color="secondary"> Author </Typography>
					<Typography variant="body1"> {author} </Typography>
				</StyledAuthorSectionText>
			</StyledAuthorSection>
		</StyledBlogHeader>
	)
}

export default BlogHeader