import { Box, Divider, List, ListItem, ListItemButton, ListItemText } from "@mui/material";
import { styled } from "@mui/system";
import React from 'react';
import Logo from "../../../assets/images/logos/Rhino card logo - PNG.png";
import { navPages, navItemBottom } from "./navcontent";
import { NavLink } from "react-router-dom";

const SwipeableDrawerList = ({mobileNav, setMobileNav}) => {


	const StyledLogoListItem = styled(List)(({theme}) => ({
		backgroundColor: theme.palette.primary.dark
	}))

	const LogoParent = styled(ListItem)(({theme}) => ({
		height: "18vh",
	}))

	const LogoItem = styled("img")(({theme}) => ({
		width: "60vw",
		height: "100%",
		marginLeft: "auto",
		marginRight: "auto",
		marginBottom: "20px",
		margin: "20px auto"
	}))

	const activeNavlink={
		textDecoration: "none",
		color: "#1976d2",
		borderTopLeftRadius: "20px",
		borderBottomLeftRadius: "20px",
		background: "white !important"
	}
	
	const navlinkStyle = {
		textDecoration: "none",
		color: "white"
	}

	return (
		<Box
			role="presentation"
			onClick={() => setMobileNav(false)}
			onKeyDown={() => setMobileNav(false)}
		>
			<StyledLogoListItem component="nav" aria-label="rhino jon navigation">
				<LogoParent>
					<LogoItem src={Logo} alt="Rhino John Prime Metal Logo"/>
				</LogoParent>

				
				{
					navPages.map((el, index) => (
						<NavLink 
							style={({isActive}) => 
								isActive ? activeNavlink : navlinkStyle
							}
							to={el.path} 
							key={index}>
							<ListItemButton
								sx={{
									minHeight: 48,
									justifyContent: mobileNav ? 'initial' : 'center',
									px: 2.5,
								}}
							>
								{el.icon}
								<ListItemText primary={el.label} sx={{ opacity: mobileNav ? 1 : 0 , marginLeft: "15px"}} />

							</ListItemButton>
						</NavLink>
					))
				}

				<Divider color="grey"/>

				
				{
					navItemBottom.map((el, index) => (
						<NavLink 
							style={({isActive}) => 
								isActive ? activeNavlink : navlinkStyle
							}
							to={el.path} 
							key={index}>
							<ListItemButton
								sx={{
									minHeight: 48,
									justifyContent: mobileNav ? 'initial' : 'center',
									px: 2.5,
								}}
							>
								{el.icon}
								<ListItemText primary={el.label} sx={{ opacity: mobileNav ? 1 : 0 , marginLeft: "15px"}} />

							</ListItemButton>
						</NavLink>
					))
				}

			</StyledLogoListItem>
		</Box>
	)
}

export default SwipeableDrawerList