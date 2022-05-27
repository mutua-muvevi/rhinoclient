import React from 'react';

import { Box, Container } from "@mui/material";
import { styled } from "@mui/system";

import Blogs from "./blogs";
import Faq from "./faq";
import News from "./news";

import { resourcesBanner } from "./resourcesinfo";
import Banner from "../../../components/layout/banner/banner";

const StyledResourcesWrapper = styled(Box)(({ theme }) => ({
}))

const StyledContainerWrapper = styled(Container)(({ theme }) => ({
	margin: "20px auto"
}))

const Resources = () => {
	return (
		<StyledResourcesWrapper id="resources">
			<Banner
					title={resourcesBanner.title} 
					subtitle={resourcesBanner.subTitle}
					image={resourcesBanner.image.src}
					imageAlt={resourcesBanner.image.alt}
					paragraph={resourcesBanner.paragraph}
			/>
			<StyledContainerWrapper maxWidth="xl">
				<Blogs/>
				<News/>
				<Faq/>
			</StyledContainerWrapper>
		</StyledResourcesWrapper>
	)
}

export default Resources