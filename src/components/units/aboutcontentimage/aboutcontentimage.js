import React from 'react';
import { Box, Button, Container, Grid, Typography } from "@mui/material";
import Image from "../../../assets/images/miningtools.jpg"
import AddCircleIcon from '@mui/icons-material/AddCircle';
import { Link } from "react-router-dom";

const wrapper = {
	paddingTop: "5vh",
	paddingBottom: "5vh",
	minHeight: "75vh"
}

const Aboutcontentimage = ({title, paragraph, link}) => {
	
	const leftRightContainer = {
		
	}

	const gridItemContainer = {
		minHeight: "75vh",
		display: "flex",
		flexDirection: "column",
		justifyContent: "center",
		alignItems: "flex-start"
	}
	
	
	const imageBackground = {
		backgroundImage: `url(${Image})`,
		backgroundPosition: "center",
		backgroundSize: "cover"
	}

	return (
		<Box sx={wrapper}>
			<Grid container sx={leftRightContainer}>
				<Grid item lg={6} sm={12}>
					<Container sx={gridItemContainer} maxWidth="lg">
						<Typography variant="h4" gutterBottom>
							{title}
						</Typography>
						{
							paragraph.map((el, i) => (
								<Box key={i} sx={{marginBottom: 2}}>
									<Typography variant="body">
										{el}
									</Typography>
								</Box>
							))
						}
						<Link style={{textDecoration: "none"}} to={link}>
							<Button endIcon={<AddCircleIcon/>} variant="contained">
								Explore
							</Button>
						</Link>
					</Container>
				</Grid>
				<Grid item lg={6} sm={12} sx={imageBackground}>

				</Grid>
			</Grid>
		</Box>
	)
}

export default Aboutcontentimage