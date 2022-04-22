import React from 'react';
import { Box, Container, Grid, Typography } from "@mui/material";
import { aboutCounterInfo } from "../../../pages/landing/about/aboutInfo";
import { styled } from "@mui/system"

const StyledCounterWrapper = styled(Box)(({theme}) => ({
	background: "linear-gradient(to bottom,  rgba(0, 0, 0, 0.5),  rgba(0, 0, 0, 0.7)), url(https://res.cloudinary.com/dqweh6zte/image/upload/v1649688672/Rhino%20John%20Background%20Video/Rhinojon%20Product%20images/transitcargo-transformed_xkxslp.jpg)",
	backgroundAttachment: "fixed",
	backgroundRepeat: "no-repeat",
	backgroundSize: "cover",
	backgroundPosition: "center",
	minHeight: "50vh",
}))

const StyledCounterContainer = styled(Container)(({theme}) => ({
	minHeight: "50vh",
	display: "flex",
	justifyConter: "center",
	alignItems: "center",
	color: theme.palette.common.white

}))

const Counter = () => {
	return (
		<StyledCounterWrapper>
			<StyledCounterContainer>
				<Grid container spacing={2}>
					{
						aboutCounterInfo.map((el, i) => (
							<Grid key={i} outline sx={{textAlign: "center"}} item lg={3} sm={12}>
								<Box>
									{el.icon}
								</Box>
								<Typography variant="h4">
									{el.number}
								</Typography>
								<Typography variant="h5">
									{el.text}
								</Typography>
							</Grid>
						))
					}
				</Grid>
			</StyledCounterContainer>
		</StyledCounterWrapper>
	)
}

export default Counter