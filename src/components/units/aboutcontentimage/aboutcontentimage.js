import React from 'react';

import { Box, Button, Container, Grid, Typography } from "@mui/material";
import { styled } from "@mui/system";

import Image from "../../../assets/images/miningtools.jpg"
import AddCircleIcon from '@mui/icons-material/AddCircle';
import { Link } from "react-router-dom";

const StyledWrapper = styled(Container)(({theme}) => ({
	paddingTop: "5vh",
	paddingBottom: "5vh",
	minHeight: "60vh"
}));

const StyledGridItemContainer = styled(Container)(({theme}) => ({
	minHeight: "60vh",
	display: "flex",
	flexDirection: "column",
	justifyContent: "center",
	alignItems: "flex-start"
}))


const imageBackground = {
	backgroundImage: `url(${Image})`,
	backgroundPosition: "center",
	backgroundSize: "cover",
}
const Aboutcontentimage = ({title, paragraph, link}) => {

	return (
		<StyledWrapper maxWidth="xl">
			<Grid container spacing={2} >
				<Grid item lg={6} sm={12}>
					<StyledGridItemContainer>
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
							<Button endIcon={<AddCircleIcon/>} color="secondary" sx={{minWidth: "150px"}} variant="contained">
								Explore
							</Button>
						</Link>
					</StyledGridItemContainer>
				</Grid>
				<Grid item lg={6} sm={12} sx={imageBackground}>

				</Grid>
			</Grid>
		</StyledWrapper>
	)
}

export default Aboutcontentimage