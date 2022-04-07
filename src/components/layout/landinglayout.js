import { Box, CssBaseline } from "@mui/material";
import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from "./navbar/navbar";

const Landinglayout = () => {
	return (
		<Box>
			<CssBaseline/>
			<Navbar/>
			<Outlet/>
		</Box>
	)
}

export default Landinglayout