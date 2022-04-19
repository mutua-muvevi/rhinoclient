import React, { useState } from 'react';
import { styled } from "@mui/system";
import { Box, Container, Grid, Modal} from "@mui/material";
import Banner from "../../../components/layout/banner/banner";
import { serviceBannerInfo, serviceItemInformation } from "./serviceinfo";
import SizeimgcontentfooterCard4 from "../../../components/widgets/cards/4sizeimgcontentfooter/sizeimgcontentfooterCard4";
import ServicesModal from "./servicesmodal";


const containerWrapper = {
	margin: "auto"
}

const gridStyle = {
	width: "100%",
}


const Services = () => {

	const [modal, setModal] = useState(false)

	const handleModal = () => {
		setModal(!modal)
	}

	return (
		<Box>
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
						serviceItemInformation &&
						serviceItemInformation.map((el, i) => (
							<>
								<Grid sx={gridStyle} key={i} item lg={4} sm={12} >
									<SizeimgcontentfooterCard4
										title={el.title}
										image={el.image.src}
										alt={el.image.alt}
										paragraph={el.paragraph}
										id={el.id}
										modalData={el.modal}
										handleModal={handleModal}
										modal={modal}
										/>
									<ServicesModal open={modal} setOpen={setModal} modal={el.modal}/>
								</Grid>
							</>
						))
					}
				</Grid>
			</Container>
		</Box>
	)
}

export default Services