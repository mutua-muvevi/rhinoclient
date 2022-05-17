import React from 'react';

import { Box, Button, Container, Grid, Typography } from "@mui/material";
import { styled } from "@mui/system"

import { aboutCoreValuesContent } from "../../../pages/landing/about/aboutInfo";

const StyledWrapper = styled(Container)(({theme}) => ({
	paddingTop: "5vh",
	paddingBottom: "5vh",
	minHeight: "60vh"
}));

const gridItemContainer = {
	minHeight: "60vh",
	display: "flex",
	flexDirection: "column",
	justifyContent: "center",
	alignItems: "flex-start"
}


const imageBackground = {
	backgroundImage: `url(https://res.cloudinary.com/dqweh6zte/image/upload/v1649764305/Rhino%20John%20Background%20Video/Rhinojon%20Product%20images/black_staff_yfqt5i.jpg)`,
	backgroundPosition: "center",
	backgroundSize: "cover"
}

const leftRightContainer = {
		
}

const Values = () => {
	return (
		<StyledWrapper maxWidth="xl">
			<Grid container spacing={2} sx={leftRightContainer}>
				<Grid item lg={6} sm={12} sx={imageBackground}>

				</Grid>
				<Grid item lg={6} sm={12}>
					<Box sx={gridItemContainer} maxWidth="lg">
						<Typography variant="h4" gutterBottom>
							{aboutCoreValuesContent.title}
						</Typography>
						<Grid container spacing={2}>
							{
								aboutCoreValuesContent.values.map((el, i) => (
									<Grid key={i} item lg={6} sm={12}>
										<Box>
											{el.icon}
										</Box>
										<Box>
											<Typography sx={{textTransform: "uppercase"}} variant="h5">
												{el.valuesTitle}
											</Typography>
											<Typography variant="body">
												{el.valueText}
											</Typography>
										</Box>
									</Grid>
								))
							}
						</Grid>
					</Box>
				</Grid>
			</Grid>
		</StyledWrapper>
	)
}

export default Values