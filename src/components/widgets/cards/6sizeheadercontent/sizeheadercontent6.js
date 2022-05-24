import { Box, Card, Typography } from "@mui/material";
import { styled } from "@mui/system";
import React from 'react'

const CardStyles = styled(Card)(({theme}) => ({
	borderRadius: theme.shape.default,
	backgroundColor: theme.palette.background.paper,
	minHeight: "50vh",
	margin: "10px"
}))

const HeaderSection = styled(Box)(({theme}) => ({
	padding: "10px",
	borderBottom: `1px solid grey`
}))

const BodySection = styled(Box)(({theme}) => ({
	padding: "10px",
}))

const Sizeheadercontent6 = ({item}) => {
	return (
		<CardStyles>
			<HeaderSection>
				<Typography style={{fontFamily: "'Rubik', sans-serif"}} color="secondary" variant="h6">
					{item.title}
				</Typography>
			</HeaderSection>
			<BodySection>
				Body
			</BodySection>
		</CardStyles>
	)
}

export default Sizeheadercontent6