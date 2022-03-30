import { Box, Grid, Paper, Typography } from "@mui/material"
import React from 'react'
import { styled } from '@mui/system';
import Mining from "../../../../assets/images/miningtools.jpg";

const Card12 = styled(Box)(({theme}) => ({
	width: "70vw",
	backgroundColor: theme.palette.primary.light,
	margin: "5px",
	padding: "10px",
	fontFamily: theme.typography.fontFamily,
	borderRadius: theme.shape.rounded,
	// display: "flex",
	// justifyContent: "space-around"
}))

const imageStyles = {
	backgroundImage: `url(${Mining})`,
	backgroundSize: "cover"
}

const RoundImage = styled(Box)(({theme}) => ({
	width: "100px",
	height: "100px",
	borderRadius: "50%",
}))

const Sizelandscape12 = () => {
	return (
		<Card12>
			<Grid container>
				<Grid item>
					<RoundImage style={imageStyles}/>
				</Grid>
				<Grid item>
					Body
				</Grid>
			</Grid>
		</Card12>
	)
}

export default Sizelandscape12