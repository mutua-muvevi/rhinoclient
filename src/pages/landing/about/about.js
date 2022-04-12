import React from 'react';
import { Box } from "@mui/material";
import Aboutcarousel from "./aboutcarousel";
import Aboutcontentimage from "../../../components/units/aboutcontentimage/aboutcontentimage";
import Values from "../../../components/units/values/values";
import Counter from "../../../components/units/counter/counter";
import { aboutIntroContent } from "./aboutInfo"

const About = () => {


	return (
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
	)
}

export default About