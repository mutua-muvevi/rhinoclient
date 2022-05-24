import React from 'react';

import { Box, Button, Card, CardContent, Typography } from "@mui/material";
import { styled } from "@mui/system";

const BoxWrapper = styled(Card)(({theme}) => ({
	minWidth: "25vw",
	minHeight: "20vh",
	margin: "10px",
	borderRadius: theme.shape.default,
	backgroundColor: theme.palette.background.paper

}))

const HeaderSection = styled(Box)(({theme}) => ({
	display: "flex",
	justifyContent: "space-between",
	padding: "10px",
}))

const FooterSection = styled(Box)(({theme}) => ({
	fontSize: "15px",
	marginLeft: "10px",
}))

const CardContentStyled = styled(CardContent)(({theme}) => ({
	display: "flex",
	justifyContent: "left",
	alignItems: "center",
	textAlign: "left"
}))

const Sizeheaderlandscape4 = ({item}) => {
	return (
		<BoxWrapper elevation={3}>
			<HeaderSection>
				<Typography style={{fontFamily: "'Rubik', sans-serif"}} color="secondary" variant="h6">
					{item.title.left}
				</Typography>
				<Button color="secondary" variant="text">
					View
				</Button>
			</HeaderSection>
			<CardContentStyled >
				{item.body.left}
				<Typography variant="h4" sx={{ml: "20px"}}>
					{item.body.right}
				</Typography>
			</CardContentStyled>
			<Box>
				<FooterSection variant="body2">
					{item.footer}
				</FooterSection>
			</Box>
		</BoxWrapper>
	)
}

export default Sizeheaderlandscape4