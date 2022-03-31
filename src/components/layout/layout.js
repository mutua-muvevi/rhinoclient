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
				{/* <Typography paragraph>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
					tempor incididunt ut labore et dolore magna aliqua. Rhoncus dolor purus non
					enim praesent elementum facilisis leo vel. Risus at ultrices mi tempus
					imperdiet. Semper risus in hendrerit gravida rutrum quisque non tellus.
					Convallis convallis tellus id interdum velit laoreet id donec ultrices.
					Odio morbi quis commodo odio aenean sed adipiscing. Amet nisl suscipit
					adipiscing bibendum est ultricies integer quis. Cursus euismod quis viverra
					nibh cras. Metus vulputate eu scelerisque felis imperdiet proin fermentum
					leo. Mauris commodo quis imperdiet massa tincidunt. Cras tincidunt lobortis
					feugiat vivamus at augue. At augue eget arcu dictum varius duis at
					consectetur lorem. Velit sed ullamcorper morbi tincidunt. Lorem donec massa
					sapien faucibus et molestie ac.
				</Typography> */}
			</Main>
		</Box>
	)
}

export default Layout