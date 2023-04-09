import {
	Box,
	Divider,
	List,
	ListItem,
	ListItemButton,
	ListItemText,
} from "@mui/material";
import { styled } from "@mui/system";
import React, { useState } from "react";
import Logo from "../../../assets/images/logos/Rhino card logo - PNG.png";
import { navPages, navItemBottom } from "./navcontent";
import { NavLink } from "react-router-dom";
import { useTheme } from "@emotion/react";

const StyledLogoListItem = styled(List)(({ theme }) => ({
	backgroundColor: "#131212",
}));

const LogoParent = styled(ListItem)(({ theme }) => ({
	height: "18vh",
}));

const LogoItem = styled("img")(({ theme }) => ({
	width: "60vw",
	height: "100%",
	marginLeft: "auto",
	marginRight: "auto",
	marginBottom: "20px",
	margin: "20px auto",
}));


const navlinkStyle = {
	textDecoration: "none",
	color: "#fff",
};

const SwipeableDrawerList = ({ mobileNav, setMobileNav }) => {
	const theme = useTheme();
	
	const activeNavlink = {
		textDecoration: "none",
		color: theme.palette.primary.main,
		borderTopLeftRadius: "20px",
		borderBottomLeftRadius: "20px",
	};

	return (
		<Box
			role="presentation"
			onClick={() => setMobileNav(false)}
			onKeyDown={() => setMobileNav(false)}
		>
			<StyledLogoListItem
				component="nav"
				aria-label="rhino jon navigation"
			>
				<LogoParent>
					<LogoItem src={Logo} alt="Rhino John Prime Metal Logo" />
				</LogoParent>

				{navPages.map((el, index) => (
					<NavLink
						style={({ isActive }) =>
							isActive ? activeNavlink : navlinkStyle
						}
						to={el.path}
						key={index}
					>
						<ListItemButton
							sx={{
								minHeight: 48,
								justifyContent: mobileNav
									? "initial"
									: "center",
								px: 2.5,
								backgroundColor: "inherit"
							}}
						>
							{el.icon}
							<ListItemText
								primary={el.label}
								sx={{
									opacity: mobileNav ? 1 : 0,
									marginLeft: "15px",
								}}
							/>
						</ListItemButton>
					</NavLink>
				))}

				<Divider color="grey" />

				<NavLink
					style={({ isActive }) =>
						isActive ? activeNavlink : navlinkStyle
					}
					to={navItemBottom.path}
				>
					<ListItemButton
						sx={{
							minHeight: 48,
							justifyContent: mobileNav ? "initial" : "center",
							px: 2.5,
						}}
					>
						{navItemBottom.icon}
						<ListItemText
							primary={navItemBottom.label}
							sx={{
								opacity: mobileNav ? 1 : 0,
								marginLeft: "15px",
							}}
						/>
					</ListItemButton>
				</NavLink>
			</StyledLogoListItem>
		</Box>
	);
};

export default SwipeableDrawerList;
