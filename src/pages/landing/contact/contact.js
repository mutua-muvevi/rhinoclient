import { Box, Container, Grid } from "@mui/material";
import React from 'react';
import Banner from "../../../components/layout/banner/banner";
import ContactForm from "./contactform";
import { contactInfo } from "./contactInfo";
import ContactMap from "./contactmap";
import { styled } from "@mui/system"

const StyledFormMapContainer = styled(Container)(({ theme }) => ({
	paddingTop: "5vh",
	paddingBottom: "5vh",
}))

const Contact = () => {
	return (
		<Box>
			<Banner 
				title={contactInfo.title} 
				subtitle={contactInfo.subTitle}
				image={contactInfo.image.src}
				imageAlt={contactInfo.image.alt}
				paragraph={contactInfo.paragraph}
			/>
			<StyledFormMapContainer maxWidth="xl">
				<Grid container spacing={4}>
					<Grid item lg={5} sm={12}>
						<ContactMap/>
					</Grid>
					<Grid item lg={7} sm={12}>
						<ContactForm/>
					</Grid>
				</Grid>
			</StyledFormMapContainer>
		</Box>
	)
}

export default Contact