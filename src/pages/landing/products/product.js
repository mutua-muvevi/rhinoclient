import React, {useState} from 'react';
import { Box, Container, Grid } from "@mui/material";
import Banner from "../../../components/layout/banner/banner";
import { productBannerInfo, productItemInformation } from "./productsInfo";
import SizeimgcontentfooterCard4 from "../../../components/widgets/cards/4sizeimgcontentfooter/sizeimgcontentfooterCard4";

const containerWrapper = {
	margin: "auto"
}

const gridStyle = {
	width: "100%",
}



const Products = () => {

	const [modal, setModal] = useState(false)

	return (
		<Box id="products">
			<Banner
				title={productBannerInfo.title} 
				subtitle={productBannerInfo.subTitle}
				image={productBannerInfo.image.src}
				imageAlt={productBannerInfo.image.alt}
				paragraph={productBannerInfo.paragraph}
				/>
			<Container sx={containerWrapper} maxWidth="xl">
				<Grid container spacing={2}>
					{
						productItemInformation.map((item, i) => (
							<Grid sx={gridStyle} key={i} item lg={4} sm={12} >
								<SizeimgcontentfooterCard4
									setModal = {setModal}
									modal = {modal}

									title={item.title}
									image={item.image.src}
									alt={item.image.alt}
									paragraph={item.paragraph}

									modalData={item.modal}
								/>
							</Grid>
						))
					}
				</Grid>
			</Container>
		</Box>
	)
}

export default Products