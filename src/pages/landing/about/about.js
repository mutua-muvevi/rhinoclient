import React from 'react'
// import Landingnav from "../../../components/navbar/landing/landingnav"
import { aboutStyles } from "./aboutStyles"

const About = () => {

	const classes = aboutStyles()

	return (
		<div className={classes.wrapper}>
			{/* <Landingnav/> */}
			<div className={classes.main}>
				some info here
			</div>
		</div>
	)
}

export default About