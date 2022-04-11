import { AppBar, Button, Container, IconButton, Toolbar } from "@mui/material"
import { Box, styled } from "@mui/system";
import React, {useState} from 'react';
import { navPages } from "./navcontent";
import Logo from "../../../assets/images/logos/Rhino card logo - PNG.png";
import MenuIcon from '@mui/icons-material/Menu';
import SwipeableSideDrawer from "./swipeabledrawer";
import { NavLink } from "react-router-dom";

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

const iconButtonSX = {
	display: { 
		xs: 'flex',
		md: 'none',
	},
}

const Navbar = () => {

	const [mobileNav, setMobileNav] = useState(false)

	const handleMobileNav = () => {
		setMobileNav(!mobileNav)
	}

	return (
		<AppBar 
			position="static" 
			component="nav"
			sx={navbarSX}
		>
			<Toolbar disableGutters>
				<StyledContainer maxWidth="xl">
					<StyledLogoContainer>
						<StyledLogo src={Logo} alt="Rhino John Prime Metal's Logo"/>
					</StyledLogoContainer>
					<StyledNavItems>
						{
							navPages.map((el, i) => (
								<NavLink key={i} style={{textDecoration: "none", color: "white"}} to={el.path}>
									<Button sx={navItemsSX} key={i} variant="h6" disableGutters>
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

export default Navbar