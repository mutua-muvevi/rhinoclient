import React from 'react';

import { Box, Container, List, ListItem, ListItemIcon, ListItemText, Typography } from "@mui/material";
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

const BlogBody = ({ body }) => {
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
			</Container>
		</Box>
	)
}

export default BlogBody