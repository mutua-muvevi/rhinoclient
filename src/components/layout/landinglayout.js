import { Box, CssBaseline } from "@mui/material";
import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from "./footer/footer";
import Navbar from "./navbar/navbar";
import useScrollTrigger from '@mui/material/useScrollTrigger';
import PropTypes from 'prop-types';

function ElevationScroll(props) {
	const { children, window } = props;
	
	
	const trigger = useScrollTrigger({
	  disableHysteresis: true,
	  threshold: 0,
	  target: window ? window() : undefined,
	});
  
	return React.cloneElement(children, {
	  elevation: trigger ? 4 : 0,
	});
  }
  
  ElevationScroll.propTypes = {
	children: PropTypes.element.isRequired,
	window: PropTypes.func,
  };

const Landinglayout = (props) => {
	return (
		<Box>
			<CssBaseline/>
			<ElevationScroll {...props}>
				<Navbar/>
			</ElevationScroll>
			<Outlet/>
			<Footer/>
		</Box>
	)
}

export default Landinglayout