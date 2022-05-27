import React from 'react';

import { Box, Typography } from "@mui/material";
import { styled } from "@mui/system";

import { faqs } from "./resourcesinfo";
import FaqCard from "../../../components/widgets/cards/faq/faqcard";


const StyledBlogsWrapper = styled(Box)(({ theme }) => ({
	marginBottom: "30px"
}))

const StyledBlogTitle = styled(Box)(({ theme }) => ({
	height: "12vh",
	display: "flex",
	flexDirection: "column",
	justifyContent: "space-around",
	alignItems: "flex-start",
	textAlign: "left",
	marginBottom: "20px"
}))
const Faq = () => {
	return (
		<StyledBlogsWrapper>
			<StyledBlogTitle>
				<Typography variant="h4" color="secondary" gutterBottom>
					Frequent Asked Questions
				</Typography>
				<Typography variant="h5">
					Lorem ipsum text generator for subtitle
				</Typography>
			</StyledBlogTitle>

			<Box>
				{
					faqs &&
					faqs.map((item) => (
						<FaqCard
							key={item.answer}
							question = {item.question}
							answer = {item.answer}
						/>
					))
				}
			</Box>

		</StyledBlogsWrapper>
	)
}

export default Faq