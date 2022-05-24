import React from 'react';

import { Box, Breadcrumbs, Link, Typography } from "@mui/material"
import { styled } from "@mui/system";

import HomeIcon from '@mui/icons-material/Home';
import ArticleIcon from '@mui/icons-material/Article';

import QuotationTable from "./quotationTable/quotationTable";

const StyledBreadCrumbs = styled(Breadcrumbs)(({theme}) => ({
	marginBottom: "20px"
}))



const headerFont = {
	color: "#dea95f",
	fontFamily: "'Rubik', sans-serif",
}

const DashQuotation = () => {


	return (
		<Box component="section" id="dash-quotation">
			<StyledBreadCrumbs>
				<Link
					underline="hover"
					style={headerFont}
					href="/dashboard"
				>
					 <HomeIcon sx={{ mr: 0.5 }} fontSize="inherit" />
					 Dashboard
				</Link>
				<Typography
					sx={{ display: 'flex', alignItems: 'center' }}
					color="text.primary"
				>
					<ArticleIcon sx={{ mr: 0.5 }} fontSize="inherit" />
					Quotation
				</Typography>
			</StyledBreadCrumbs>
			<QuotationTable/>
		</Box>
	)
}

export default DashQuotation