import { Box, Drawer } from "@mui/material";
import { styled } from "@mui/system";
import React, { useState } from 'react'
import { Outlet } from 'react-router-dom';
import DrawerComponent from "./drawer/drawer";
import PrimarySearchAppBar from "./topbar/topbar";

const Main = styled(Box)(({theme}) => ({
	backgroundColor: theme.palette.background.default
}))



const Layout = () => {
	
	const [isDrawerOpen, setIsDrawerOpen] = useState(false)
	
	const drawerHandler = () => {
		setIsDrawerOpen(!isDrawerOpen)
		
	}

	const closeDrawer = () => {
		setIsDrawerOpen(false)
	}

	return (
		<>
			{/* side drawer */}
			<DrawerComponent isOpen={isDrawerOpen} closeDrawer={closeDrawer}/>

			{/* top bar */}
			<PrimarySearchAppBar drawerHandler = {drawerHandler}/>

			<Main>
				<Outlet/>
			</Main>
		</>
	)
}

export default Layout