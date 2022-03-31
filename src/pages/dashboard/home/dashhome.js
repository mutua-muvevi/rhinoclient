import { Box, Breadcrumbs, Link, Typography } from "@mui/material"
import HomeIcon from '@mui/icons-material/Home';
import React from 'react'
import { styled } from "@mui/system";

const StyledBreadCrumbs = styled(Breadcrumbs)(({theme}) => ({
	marginBottom: "20px"
}))


const HomeStyled = styled(Box)(({theme}) => ({
	backgroundColor: "red"
}))

const Dashhome = () => {
	return (
		<HomeStyled component="section" id="dash-home">
			<StyledBreadCrumbs>
				<Link
					underline="hover"
					sx={{ display: 'flex', alignItems: 'center' }}
					color="inherit"
					href="/dashboard"
				>
					 <HomeIcon sx={{ mr: 0.5 }} fontSize="inherit" />
					 Dashboard
				</Link>
			</StyledBreadCrumbs>

			<Typography variant="h3">3 cards [land][air][ocean]</Typography>
			<Typography variant="h3">2 cards medium [transportatin][storage]</Typography>
			<Typography variant="h3">1 full size general enquiries table</Typography>
		</HomeStyled>
	)
}

export default Dashhome