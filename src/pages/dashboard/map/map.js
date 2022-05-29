import React, { useState, useEffect } from 'react';

import { Box, Breadcrumbs, Link, Typography } from "@mui/material"
import { styled } from "@mui/system";

import HomeIcon from '@mui/icons-material/Home';
import MapIcon from '@mui/icons-material/Map';

import MapInput from "./mapinput";
import GoogleMaps from "./googlemaps";

const StyledBreadCrumbs = styled(Breadcrumbs)(({theme}) => ({
	marginBottom: "20px"
}))


const headerFont = {
	color: "#dea95f",
	fontFamily: "'Rubik', sans-serif",
}

const Dashmap = () => {

	const [places, setPlaces] = useState([]);
	const [childClicked, setChildClicked] = useState(null)

	const [coords, setCoords] = useState({});
	const [bounds, setBounds] = useState({});

	const [isLoading, setIsLoading] = useState(false)

	useEffect(() => {
		navigator.geolocation.getCurrentPosition(
			({coords: {latitude, longitude}}) => {
				setCoords({
					lat: latitude,
					lng: longitude
				})
			}
		)
	}, [])

	console.log("The coordinates are", coords)

	// useEffect(() => {
	// 	setIsLoading(true)

	// 	fetchPlaces(bounds.sw, bounds.ne)
	// 		.then((data) => {
	// 			console.log("The places are", data)
	// 			setPlaces(data)
	// 			setIsLoading(false)
	// 		})
	// }, [bounds, coords])

	return (
		<Box>
			<StyledBreadCrumbs>
				<Link
					underline="hover"
					style={headerFont}
					href="/dashboard"
				>
					 <HomeIcon sx={{ mr: 0.5 }} fontSize="inherit" />
					 Dashboard
				</Link>
				<Typography
					sx={{ display: 'flex', alignItems: 'center' }}
					color="text.primary"
				>
					<MapIcon sx={{ mr: 0.5 }} fontSize="inherit" />
					Map
				</Typography>


			</StyledBreadCrumbs>

			<Box>
				<MapInput/>
				<GoogleMaps coords={coords}/>
			</Box>
		</Box>
	)
}

export default Dashmap