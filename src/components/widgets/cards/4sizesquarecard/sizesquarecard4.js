import { Box, Card, CardHeader, Typography } from "@mui/material"
import { styled } from "@mui/system";
import React from 'react';
import Image from "../../../../assets/images/tradingbuysell.jpg"

const SquareCard = styled(Box)(({theme}) => ({
	minWidth: "20vw",
	height: "40vh",
	background: `linear-gradient(to bottom, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.7)), url(${Image})`,
	backgroundRepeat: "no-repeat",
	backgroundSize: "cover",
	borderRadius: theme.shape.default,
	color: theme.palette.common.white,
	padding: "10px"
}))

const Sizesquarecard4 = () => {
	return (
		<SquareCard>
			<Box>
				<Typography variant="h6">
					Title One
				</Typography>
				<Typography variant="h6">
					Title One
				</Typography>
			</Box>
		</SquareCard>
	)
}

export default Sizesquarecard4