import React, { useState } from 'react';
import { styled } from "@mui/system";
import { Box, Container, Grid} from "@mui/material";
import Banner from "../../../components/layout/banner/banner";
import { serviceBannerInfo, serviceItemInformation } from "./serviceinfo";
import SizeimgcontentfooterCard4 from "../../../components/widgets/cards/4sizeimgcontentfooter/sizeimgcontentfooterCard4";

const ServiceWrapper = styled(Box)(({theme}) => ({

}))

const containerWrapper = {
	margin: "auto"
}

const gridStyle = {
	width: "100%",
}


const Services = () => {
	const [modal, setModal] = useState(false);

	return (
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
							<Grid sx={gridStyle} key={i} item lg={4} sm={12} >
								<SizeimgcontentfooterCard4
									modal={modal}
									setModal={setModal}

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
	)
}

export default Services