import { AppBar, Button, Container, MenuItem, Toolbar, Typography } from "@mui/material"
import { Box, styled } from "@mui/system";
import React from 'react';
import { navPages } from "./navcontent";
import Logo from "../../../assets/images/logos/Rhino card logo - PNG.png"

const StyledContainer = styled(Container)(({theme}) => ({
	display: "flex",
	alignItems: "center",
	justifyContent: "space-between",
}))

const navbarSX = {
	backgroundColor: "#131212",
	color: "white",
}

const StyledLogoContainer = styled(Box)(({theme}) => ({
	minWidth: "30%",
}))

const StyledLogo = styled("img")(({theme}) => ({
	maxWidth: "100px"
}))

const StyledNavItems = styled(Box)(({theme}) =>({
	display: "flex",
	justifyContent: "space-around",
	alignItems: "center",
	minWidth: "60%",
}))

const navItemsSX = { 
	flexGrow: 1,
	display: { 
		xs: 'none',
		md: 'flex'
	},
	alignItems: "center",
	textAlign: "center !important"
}

const Navbar = () => {
	return (
		<AppBar 
			position="static" 
			component="nav"
			sx={navbarSX}
		>
			<Toolbar disableGutters>
				<StyledContainer maxWidth="xl" >
					<StyledLogoContainer>
						<StyledLogo src={Logo} alt="Rhino John Prime Metal's Logo"/>
					</StyledLogoContainer>

					<StyledNavItems>
						{
							navPages.map((el, i) => (
								<Button  sx={navItemsSX} key={i} variant="h6" disableGutters>
									{el.label}
								</Button>
							))
						}
					</StyledNavItems>
				</StyledContainer>
			</Toolbar>
		</AppBar>
	)
}

export default Navbar