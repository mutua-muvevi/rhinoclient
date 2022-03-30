import { styled } from "@mui/system";
import { Box,  Typography } from "@mui/material"
import React from 'react';
import Image from "../../../../assets/images/truck 2.jpg";


const SquareWrapper = styled(Box)(({theme}) => ({
	borderRadius: theme.shape.default,
	minWidth: "38.4vw",
	padding: "10px",
	minHeight: "48vh",
	margin: "10px",
	color: theme.palette.common.white,
	// background: `linear-gradient(to bottom, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.7)), url(${Image})`,
	backgroundColor: theme.palette.primary.main
}))

const Sizesquare6 = () => {
	return (
		<SquareWrapper>
			<Box>
				<Typography variant="h5">
					Top Section
				</Typography>
			</Box>
			<Box>
				<Typography variant="h5">
					Middle Section
				</Typography>
			</Box>
			<Box>
				<Typography variant="h5">
					Bottom Section
				</Typography>
			</Box>
		</SquareWrapper>
	)
}

export default Sizesquare6