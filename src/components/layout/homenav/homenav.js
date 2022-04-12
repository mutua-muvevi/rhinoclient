import React, { useState } from 'react';
import { AppBar, Box, Button, Container, IconButton, Toolbar} from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import { NavLink } from "react-router-dom";
import { styled } from "@mui/styles";
import Logo from "../../../assets/images/logos/Rhino card logo - PNG.png"
import { homeNavLink } from "./homenavcontent"
import SwipeableSideDrawer from "../navbar/swipeabledrawer";

const homenavStyle = {
	backgroundColor: "transparent",
	color: "#fff",
	fontSize: "20px",
	position: "absolute",
	zIndex: 10,
	top: 0,
	width: "100%",
	borderBottom: "1px #fff solid"
}


const StyledContainer = styled(Container)(({theme}) => ({
	display: "flex",
	alignItems: "center",
	justifyContent: "space-between",
}))

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

const iconButtonSX = {
	display: { 
		xs: 'flex',
		md: 'none',
	},
}

const Homenav = () => {

	const [mobileNav, setMobileNav] = useState(false);

	
	const handleMobileNav = () => {
		setMobileNav(!mobileNav)
	}


	return (
		<AppBar
			position="static" 
			component="nav"
			sx={homenavStyle}
		>
			<Toolbar >
				<StyledContainer maxWidth="xl">
					<StyledLogoContainer>
						<StyledLogo src={Logo} alt="Rhino John Prime Metal's Logo"/>
					</StyledLogoContainer>
					<StyledNavItems>
						{
							homeNavLink.map((el, i) => (
								<NavLink key={i} style={{textDecoration: "none", color: "white"}} to={el.path}>
									<Button sx={navItemsSX} key={i} variant="h6">
										{el.label}
									</Button>
								</NavLink>
							))
						}
					</StyledNavItems>
					<IconButton
						size="large"
						aria-label="account of current user"
						aria-controls="menu-appbar"
						aria-haspopup="true"
						onClick={handleMobileNav}
						color="inherit"
						sx={iconButtonSX}
					>
						<MenuIcon/>
					</IconButton>
				</StyledContainer>
			</Toolbar>
			<SwipeableSideDrawer mobileNav={mobileNav} setMobileNav={setMobileNav} />
		</AppBar>
	)
}

export default Homenav