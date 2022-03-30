import { Typography } from "@mui/material"
import React from 'react'
// import Landingnav from "../../../components/navbar/landing/landingnav"
import { homeStyles } from "./homeStyles"

const Home = () => {

	const classes = homeStyles()

	return (
		<div className={classes.wrapper}>
			home page
		</div>
	)
}

export default Home