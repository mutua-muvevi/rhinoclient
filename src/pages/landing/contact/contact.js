import { Box, Container, Grid, Grow } from "@mui/material";
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
		<Grow style={{ transformOrigin: '10 20 50' }} in timeout={2000}>
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
		</Grow>
	)
}

export default Contact