import React from 'react';
import Carousel from 'react-material-ui-carousel';
import { aboutBannerCarousel } from "./aboutInfo";
import Banner from "../../../components/layout/banner/banner";

const Aboutcarousel = () => {
	return (
		<Carousel
			autoPlay
			stopAutoPlayOnHover
			indicators={false}
			interval={4000}
			swipe
		>
			{
				aboutBannerCarousel.map((item, i) => (
					<Banner
						key={i}
						title={item.title} 
						subtitle={item.subtitle}
						image={item.image.src}
						imageAlt={item.image.alt}
						paragraph={item.paragraph}
					/>
				))
			}
		</Carousel>
	)
}

export default Aboutcarousel