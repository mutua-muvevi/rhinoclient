import React, { useMemo } from 'react';

import { Box } from "@mui/material";
import { styled } from "@mui/system";

import GoogleMapReact from "google-map-react";

import { GoogleMap, Marker, useLoadScript } from "@react-google-maps/api";

const StyledBox = styled(Box)(({ theme }) => ({
	width: "100%",
	height: "80vh",
	borderRadius: theme.shape.default,
	overflow: "hidden"
}))


const mapStyle = {
	// width: "100%",
	// height: "100%"
}

const GoogleMaps = ({ coords }) => {

	const center = useMemo(() => ({lat: 23, lng : 73}), [])

	return (
		<StyledBox>
			{/* <iframe 
				src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7977.417992286157!2d36.74860847592716!3d-1.351140079544613!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f058b47391ff7%3A0x34ad2d106c6f6c37!2sAfrex%20Bridge%20Connections%20LLC!5e0!3m2!1sen!2ske!4v1653573875713!5m2!1sen!2ske" 
				title="Tracking items map"
				style={mapStyle} 
				allowfullscreen="" 
				loading="lazy" 
				referrerpolicy="no-referrer-when-downgrade"
			/> */}


		<GoogleMapReact
			bootstrapURLKeys={{key : "AIzaSyBryvhvlcdQ6ub4C3YrUvzv3COd3-dalWI"}}
			defaultCenter={coords}
			center={coords}
			defaultZoom={14}
			margin={[50, 50, 50, 50]}
			options={""}
			// style={mapStyle}
		>

		</GoogleMapReact>

		</StyledBox>
	)
}

export default GoogleMaps