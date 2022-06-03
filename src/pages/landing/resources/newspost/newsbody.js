import React from 'react';

import { Box, Chip, Container, List, ListItem, ListItemIcon, ListItemText, Stack, Typography } from "@mui/material";
import { styled } from "@mui/system";

import DoubleArrowIcon from '@mui/icons-material/DoubleArrow';

const StyledBlogBodyContent = styled(Box)(({ theme }) => ({
	marginBottom: "30px"
}))

const styledTitle = {
	fontWeight: "bold",
	fontFamily: "'Rubik', sans-serif",
}

const StyledListContainer = styled(List)(({ theme }) => ({

}))

const StyledTagsArea = styled(List)(({ theme }) => ({
	display: "flex",
	justifyContent: "left",
	alignItems: "center",
	textAlign: "center"
}))


const NewsBody = ({ body, tags }) => {
	return (
		<Box>
			<Container>
				{
					body &&
					body.map((el, i) => (
						<StyledBlogBodyContent key={i}>
							<Typography variant="h5" sx={styledTitle} color="secondary" gutterBottom>
								{ el.header }
							</Typography>
							<Typography variant="h6" color="secondary" gutterBottom>
								{ el.subHeader }
							</Typography>
							{
								el.paragraph &&
								el.paragraph.map(p => (
									<Typography key={p} variant="body1" gutterBottom>
										{p}
									</Typography>
								))
							}
							{
								el.list &&
								el.list.map((li, i) => (
									<StyledListContainer key={i}>
										<Typography variant="h6" color="secondary" gutterBottom>
											{ li.title }
										</Typography>
										<List>
											{
												li.items &&
												li.items.map((el, i) => (
													<ListItem key={i}>
														<ListItemIcon>
															<DoubleArrowIcon  color="secondary"/>
														</ListItemIcon>
														<ListItemText primary={el}/>
													</ListItem>
												))
											}
										</List>
									</StyledListContainer>
								))
							}
						</StyledBlogBodyContent>
					))
				}
				<StyledTagsArea>
					<Typography variant="body1">Tags :</Typography>
					<Stack direction="row" sx={{marginLeft: "20px"}} spacing={2}>
						{
							tags.map((tg, i) => (
								<Chip color="secondary" key={i} label={tg}/>
							))
						}
					</Stack>
				</StyledTagsArea>
			</Container>
		</Box>
	)
}

export default NewsBody