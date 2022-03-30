import { Alert, AlertTitle } from "@mui/material"
import { styled } from "@mui/system"
import React from 'react'

const AlertWrapper = styled(Alert)(({theme}) => ({
	width: "70vw",
	position: "relative",
	zIndex: 2
}))

const AlertComponent = () => {
	return (
		<AlertWrapper severity="info">
			<AlertTitle>Dynamic data</AlertTitle>
			This is dynamic alert — <strong>check it out!</strong>
		</AlertWrapper>
	)
}

export default AlertComponent