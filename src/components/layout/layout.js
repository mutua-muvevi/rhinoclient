import React, { useState } from 'react';
import { Navigate } from "react-router-dom";

import { Box, CssBaseline, Fade} from "@mui/material";
import { useTheme } from '@mui/material/styles';
import { styled } from "@mui/system";
import { Outlet } from 'react-router-dom';

import DrawerComponent from "./drawer/drawer";
import PrimarySearchAppBar from "./topbar/topbar";

import { connect } from "react-redux";

const Main = styled(Box)(({theme}) => ({
	backgroundColor: theme.palette.background.default
}))


const DrawerHeader = styled('div')(({ theme }) => ({
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'flex-end',
	padding: theme.spacing(0, 1),
	...theme.mixins.toolbar,
	marginBottom: "20px"
}));


const Layout = ({ token, user }) => {
	const theme = useTheme();
	const [open, setOpen] = useState(true);
	
	const handleDrawerOpen = () => {
		setOpen(true);
	};
	
	const handleDrawerClose = () => {
		setOpen(false);
	};

	if (!user){
		console.log("The user is")
		return <Navigate to="/auth/login"/>
	};

	return (
		<Fade  in timeout={1000}>
			<Box sx={{ display: 'flex' }}>
				<CssBaseline />
				<DrawerComponent handleDrawerOpen={handleDrawerOpen} open={open} theme={theme} handleDrawerClose={handleDrawerClose}/>

				<PrimarySearchAppBar handleDrawerOpen={handleDrawerOpen} open={open}/>

				<Main component="main" sx={{ flexGrow: 1, p: 3 , width: "100%"}}>
					<DrawerHeader/>
					<Outlet/>
				</Main>
			</Box>
		</Fade>
	)
}

const mapStatetoProps = ({ auth, user }) => ({
	token: auth.token,

	user: user.user
})

export default connect(mapStatetoProps)(Layout)