import React from 'react';
import { Link } from "react-router-dom";

import { Box, Button, Typography, Card, Grow } from "@mui/material";
import { styled } from "@mui/system";

import { FaHome } from "react-icons/fa"

const StyledNotFound = styled(Box)(({ theme }) => ({
	minHeight: "100vh",
	backgroundColor: theme.palette.background.default,
	display: "flex",
	flexDirection: "column",
	justifyContent: "center",
	alignItems: "center"
}))

const StyledNotfoundContent = styled(Card)(({theme}) => ({
	display: "flex",
	flexDirection: "column",
	justifyContent: "center",
	alignItems: "center",
	position: "absolute",
	top: "10vh",
	bottom: "10vh",
	left: "10vw",
	right: "10vw",
}))

const styledHeader = {
	fontSize: "20vw",
	lineHeight: "80%"
}

const styledSubheader = {
	fontSize: "1.2vw"
}

const styledLink = {
	color: "white",
	textDecoration: "none",
	display: "flex",
	justifyContent: "space-around",
	alignItems: "center",
	textAlign: "left",
	fontSize: "1.2vw"
}

const StyledButton = styled(Button)(({theme}) => ({
	marginTop: "5vh",
	color: "black"
}))

const styledFont = {
	marginLeft: "10px", 
	fontSize: "1.2vw"
}

const Notfound = () => {
	return (
		<StyledNotFound>
			<Grow style={{ transformOrigin: '10 20 50' }} in timeout={2000}>
				<StyledNotfoundContent>
					<Typography variant="h5" color="secondary" sx={styledHeader}>404</Typography>
					<Typography variant="subtitle"  sx={styledSubheader}>
						The webpage you are looking for does not exist
					</Typography>
					<Link to="/" style={styledLink}>
						<StyledButton 
							variant="contained"
							color="secondary"
							endIcon={<FaHome style={styledFont}/>}
						>
							<Typography variant="subtitle">
								Return home
							</Typography>
							
						</StyledButton>
					</Link>
				</StyledNotfoundContent>
			</Grow>
			</StyledNotFound>
	)
}

export default Notfound