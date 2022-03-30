import { Box, Typography } from "@mui/material"
import { styled } from "@mui/system"
import React from 'react'

const TitleSubtitleWrapper = styled(Box)(({theme}) => ({
	maxHeight: "35vh",
	display: "flex",
	flexDirection: "column",
	justifyContent: "center"
}))

const SubtitleSection = styled(Typography)(({theme}) => ({
	textTransform: "uppercase"
}))

const Titlesubtitle = () => {
	return (
		<TitleSubtitleWrapper>
			<Typography variant="h3" gutterBottom color="primary">
				Title One
			</Typography>
			<SubtitleSection variant="h5">
				A little reusable title and subtitle
			</SubtitleSection>
		</TitleSubtitleWrapper>
	)
}

export default Titlesubtitle