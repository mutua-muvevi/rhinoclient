import { Box, CssBaseline} from "@mui/material";
import { useTheme } from '@mui/material/styles';
import { styled } from "@mui/system";
import React, { useState } from 'react'
import { Outlet } from 'react-router-dom';
import DrawerComponent from "./drawer/drawer";
import PrimarySearchAppBar from "./topbar/topbar";

const Main = styled(Box)(({theme}) => ({
	backgroundColor: theme.palette.background.default
}))


const DrawerHeader = styled('div')(({ theme }) => ({
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'flex-end',
	padding: theme.spacing(0, 1),
	// necessary for content to be below app bar
	...theme.mixins.toolbar,
	marginBottom: "20px"
}));


const Layout = () => {
	
	const theme = useTheme();
	const [open, setOpen] = useState(true);
  
	const handleDrawerOpen = () => {
	  setOpen(true);
	};
  
	const handleDrawerClose = () => {
	  setOpen(false);
	};

	return (
		<Box sx={{ display: 'flex' }}>
			<CssBaseline />
			{/* side drawer */}
			<DrawerComponent handleDrawerOpen={handleDrawerOpen} open={open} theme={theme} handleDrawerClose={handleDrawerClose}/>

			{/* top bar */}
			<PrimarySearchAppBar handleDrawerOpen={handleDrawerOpen} open={open}/>

			{/* main section */}
			<Main component="main" sx={{ flexGrow: 1, p: 3 , width: "100%"}}>
				<DrawerHeader/>
				<Outlet/>
			</Main>
		</Box>
	)
}

export default Layout