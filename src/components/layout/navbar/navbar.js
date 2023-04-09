import React, {useState} from 'react';
import { NavLink } from "react-router-dom";

import { AppBar, Button, Container, IconButton, Toolbar } from "@mui/material"
import { Box, styled } from "@mui/system";

import LockIcon from '@mui/icons-material/Lock';
import MenuIcon from '@mui/icons-material/Menu';
import { FaUser } from "react-icons/fa"

import SwipeableSideDrawer from "./swipeabledrawer";
import Logo from "../../../assets/images/logos/Rhino card logo - PNG.png";
import { navPages, navItemBottom } from "./navcontent";
import { connect } from 'react-redux';

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

const styledAuthNav = {
	display: { 
		xs: 'none',
		md: 'flex',
	},
	color: "#000000"
}

const Navbar = ({user}) => {

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
			<Toolbar >
				<StyledContainer maxWidth="xl">
					<StyledLogoContainer>
						<StyledLogo src={Logo} alt="Rhino John Prime Metal's Logo"/>
					</StyledLogoContainer>
					<StyledNavItems>
						{
							navPages.map((el, i) => (
								<NavLink key={i} style={{textDecoration: "none", color: "#dea95f"}} to={el.path}>
									<Button sx={navItemsSX} key={i} variant="h6">
										{el.label}
									</Button>
								</NavLink>
							))
						}
					</StyledNavItems>
							<NavLink style={{textDecoration: "none", color: "white"}} to={navItemBottom.path}>
								{
									user ? (
										<Button sx={styledAuthNav} endIcon={<FaUser/>} color="secondary" variant="contained">
											{user.firstname}
										</Button>
									) : (
										<Button sx={styledAuthNav} endIcon={<LockIcon/>} color="secondary" variant="contained">
											Login
										</Button>
									)
								}
							</NavLink>
					
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

const mapStateToProps = ({user}) => ({
	user: user.user
})

export default connect(mapStateToProps)(Navbar)