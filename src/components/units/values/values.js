import React from 'react';
import { aboutCoreValuesContent } from "../../../pages/landing/about/aboutInfo";
import { Box, Button, Container, Grid, Typography } from "@mui/material";

const wrapper = {
	paddingTop: "5vh",
	paddingBottom: "5vh",
	minHeight: "75vh"
}

const gridItemContainer = {
	minHeight: "75vh",
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
		<Box sx={wrapper}>
			<Grid container sx={leftRightContainer}>
				<Grid item lg={6} sm={12}>
					<Container sx={gridItemContainer} maxWidth="lg">
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
					</Container>
				</Grid>
				<Grid item lg={6} sm={12} sx={imageBackground}>

				</Grid>
			</Grid>
		</Box>
	)
}

export default Values