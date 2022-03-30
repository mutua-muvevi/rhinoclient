import { Box, Card, CardContent, Paper, Typography } from "@mui/material"
import { styled } from "@mui/system"
import React from 'react'

const BoxWrapper = styled(Card)(({theme}) => ({
	minWidth: "25vw",
	minHeight: "20vh",
	margin: "10px"

}))

const HeaderSection = styled(Box)(({theme}) => ({
	display: "flex",
	justifyContent: "space-between",
	padding: "10px",
	borderBottom: `1px solid grey`,
}))

const Sizeheaderlandscape4 = () => {
	return (
		<BoxWrapper elevation={3}>
			<HeaderSection>
				<Typography variant="h6">left</Typography>
				<Typography variant="h6">right</Typography>
			</HeaderSection>
			<CardContent>
				Body
			</CardContent>
		</BoxWrapper>
	)
}

export default Sizeheaderlandscape4