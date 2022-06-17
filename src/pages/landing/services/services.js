import React, { useState } from 'react';
import { styled } from "@mui/system";
import { Box, Container, Grid, Grow} from "@mui/material";
import Banner from "../../../components/layout/banner/banner";
import { serviceBannerInfo, serviceItemInformation } from "./serviceinfo";
import SizeimgcontentfooterCard4 from "../../../components/widgets/cards/4sizeimgcontentfooter/sizeimgcontentfooterCard4";

const ServiceWrapper = styled(Box)(({theme}) => ({

}))

const containerWrapper = {
	margin: "20px auto"
}

const gridStyle = {
	width: "100%",
	display: "flex",
	justifyContent: "center",
}


const Services = () => {

	return (
		<Grow style={{ transformOrigin: '10 20 50' }} in timeout={2000}>

			<ServiceWrapper id="services">
				<Banner
					title={serviceBannerInfo.title} 
					subtitle={serviceBannerInfo.subTitle}
					image={serviceBannerInfo.image.src}
					imageAlt={serviceBannerInfo.image.alt}
					paragraph={serviceBannerInfo.paragraph}
					/>
				<Container sx={containerWrapper} maxWidth="xl">
					<Grid container spacing={2}>
						{
							serviceItemInformation.map((item, i) => (
								<Grid spacing={2} sx={gridStyle} key={i} item lg={4} md={6} sm={12} xs={12} >
									<SizeimgcontentfooterCard4

										title={item.title}
										image={item.image.src}
										alt={item.image.alt}
										paragraph={item.paragraph}
										id={item.id}

										modalData={item.modal}
									/>
								</Grid>
							))
						}
					</Grid>
				</Container>
			</ServiceWrapper>
		</Grow>
	)
}

export default Services