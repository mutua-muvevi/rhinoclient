import React from 'react';
import { Box, Grow } from "@mui/material";
import Aboutcarousel from "./aboutcarousel";
import Aboutcontentimage from "../../../components/units/aboutcontentimage/aboutcontentimage";
import Values from "../../../components/units/values/values";
import Counter from "../../../components/units/counter/counter";
import { aboutIntroContent } from "./aboutInfo"

const About = () => {


	return (
		<Grow style={{ transformOrigin: '10 20 50' }} in timeout={2000}>
			<Box>
				<Aboutcarousel/>
				<Aboutcontentimage
					title={aboutIntroContent.title}
					paragraph={aboutIntroContent.paragraph}
					link={aboutIntroContent.link}
				/>
				<Counter/>
				<Values/>
			</Box>
		</Grow>
	)
}

export default About