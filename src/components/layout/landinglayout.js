import { Box, CssBaseline } from "@mui/material";
import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from "./footer/footer";
import Navbar from "./navbar/navbar";

const Landinglayout = () => {
	return (
		<Box>
			<CssBaseline/>
			<Navbar/>
			<Outlet/>
			<Footer/>
		</Box>
	)
}

export default Landinglayout