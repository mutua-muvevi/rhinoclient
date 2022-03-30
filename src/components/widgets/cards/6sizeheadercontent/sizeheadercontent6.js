import { Box, Card, Typography } from "@mui/material";
import { styled } from "@mui/system";
import React from 'react'

const CardStyles = styled(Card)(({theme}) => ({
	borderRadius: theme.shape.default,
	minWidth: "39vw",
	margin: "10px"
}))

const HeaderSection = styled(Box)(({theme}) => ({
	padding: "10px",
	borderBottom: `1px solid grey`
}))

const BodySection = styled(Box)(({theme}) => ({
	padding: "10px",
}))

const Sizeheadercontent6 = () => {
	return (
		<CardStyles>
			<HeaderSection>
				<Typography variant="h6">
					Header Title
				</Typography>
			</HeaderSection>
			<BodySection>
				Body
			</BodySection>
		</CardStyles>
	)
}

export default Sizeheadercontent6