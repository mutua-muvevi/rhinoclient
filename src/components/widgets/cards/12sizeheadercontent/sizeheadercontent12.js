import { Box, Card, CardContent, Typography } from "@mui/material"
import { styled } from "@mui/system"
import React from 'react'

const CardStyles = styled(Card)(({theme}) => ({
	minWidth: "70vw",
	borderRadius: theme.shape.default,
	margin: "10px"
}))


const HeaderSection = styled(Box)(({theme}) => ({
	padding: "10px",
	borderBottom: `1px solid grey`,
	display: "flex",
	justifyContent: "space-between"
}))

const ContentSection = styled(CardContent)(({theme}) => ({
	minHeight: "40vh"
}))

const Sizeheadercontent12 = () => {
	return (
		<CardStyles>
			<HeaderSection>
				<Typography variant="h6">
					Item left
				</Typography>
				<Typography variant="h6">
					Item Right
				</Typography>
			</HeaderSection>
			<CardContent>
				content
			</CardContent>
		</CardStyles>
	)
}

export default Sizeheadercontent12
