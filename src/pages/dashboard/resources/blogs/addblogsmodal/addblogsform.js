import React, { useState, useEffect } from 'react';

import { Alert, AlertTitle, Box, Button, ButtonGroup, Chip, Container, Divider, Grid, Grow, List, ListItem, ListItemIcon, ListItemText,  Stack, Typography } from "@mui/material"
import { styled } from "@mui/system";

import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

import { Formik, Form, useFormikContext } from "formik";
import * as Yup from "yup";

import TextField from "../../../../../components/formsUI/textfield/textfield";

import { 
	blogFormTitle, 

	blogFormTags,
	blogFormCategory, 

	blogFormContent,
	blogFormImages,
} from "./addblogsinfo";

import SendIcon from '@mui/icons-material/Send';
import ClearIcon from '@mui/icons-material/Clear';

import { connect } from "react-redux";
import { writeNewBlog, writeNewParagraph } from "../../../../../redux/blog/blogactions";

import AddBlogTitleModal from "./addblogtitlemodal";
import AddBlogContentModal from "./addblogcontentmodal";

const StyledBlogsFormWrapper = styled(Box)(({ theme }) => ({
	margin: "20px auto"
}))


const INITIAL_FORM_STATE = {
	title: "",
	subtitle: "",
	coverImage: "",
	thumbnail: "",
	author: "",
	category: "",

	tags: [],

	content: [
		{
			header: "",
			subheader: "",
			paragraph: "",
			list: [
				{
					listTitle: "",
					listItems: []
				}
			]
		},
	]
}

const FORM_VALIDATION = Yup.object().shape({
	title: Yup.string().required("Please add the Blog's title"),
	subtitle: Yup.string().required("Please add the Blog's subtitle"),
	coverImage: Yup.string().required("Please add the Blog's subtitle"),
	thumbnail: Yup.string().required("Please add the Blog's subtitle"),
	author: Yup.string().required("Please add the Blog's author"),
	category: Yup.string().required("Please add the Blog's category"),

	tags: Yup.array().min(1).max(5).required("Please add atleast one tag"),

	content: Yup.array().of(
		Yup.object().shape({
			header: Yup.string().required("Please add a header"),
			subheader: Yup.string(),
			paragraph: Yup.array().required("Please add a paragraph"),
			list: Yup.array().of(
				Yup.object().shape({
					listtitle: Yup.string(),
					listitems: Yup.array(),
				})
			)
		})
	)
})

const StyledFormBlogView = styled(Box)(({ theme }) => ({

}))


const StyledBlogImageSection = styled(Box)(({ theme }) => ({
	minHeight: "20vh",
	backgroundColor: "primary",
	display: "flex",
	justifyContent: "flex-start",
	alignItems: "flex-end"
}))

const StyledBlogImageSectionContent = styled(Box)(({ theme }) => ({
	padding: "10px",
}))


const headerFont = {
	color: "#dea95f",
	fontWeight: 500,
	fontFamily: "'Rubik', sans-serif",
}


const bodyTitleFont = {
	color: "#dea95f",
	fontFamily: "'Rubik', sans-serif",
	marginTop: "20px",
	textTransform: "capitalize"
}

const dividerStyle = {
	margin: "40px auto",
	backgroundColor: "#f48d3a"
}


const StyledViewContentBody = styled(Box)(({ theme }) => ({

}))

const StyledViewContentText = styled(Box)(({ theme }) => ({

}))

const StyledListContainer = styled(List)(({ theme }) => ({
	margin: "20px auto"
}))

const StyledTagsArea = styled(Box)(({ theme }) => ({
	display: "flex",
	justifyContent: "left",
	alignItems: "center",
	textAlign: "left",
	margin: "20px auto"
}))

const StyledCategoryArea = styled(Box)(({ theme }) => ({
	display: "flex",
	justifyContent: "left",
	alignItems: "center",
	textAlign: "left",
	margin: "20px auto"
}))


const StyledAuthorArea = styled(Box)(({ theme }) => ({
	display: "flex",
	justifyContent: "left",
	alignItems: "center",
	textAlign: "left",
	margin: "20px auto"
}))



const StyledFormArea = styled(Box)(({ theme }) => ({

}))



const FormObserver = ({ blog, writeNewBlog }) => {
	const { values } = useFormikContext();

	useEffect(() => {
		console.log("FormObserver::values", values);
		// console.log("BLOG::values", blog);
		writeNewBlog(values)

	}, [values]);
  
	return null;
};


const AddBlogsForm = ({writeNewBlog, blog, blogContent, writeNewParagraph}) => {

	const [ titleModal, setTitleModal ] = useState(false);
	const { coverImage, setCoverImage } = useState("");
	const { thumbnail, setThumbnail } = useState("");
	const { author, setAuthor } = useState("");
	const { category, setCategory } = useState("");

	const { tags, setTags } = useState([]);

	const [ contentModal, setContentModal ] = useState(false);


	const submitHandler = (values) => {
		console.log("Blog values", values)
	}


	return (
		<StyledBlogsFormWrapper>
			<StyledFormBlogView>
				{
					blog &&
					blog.title &&
					blog.subtitle ? (
						<StyledBlogImageSection>
							<StyledBlogImageSectionContent>
								<Typography variant="h4" gutterBottom sx={headerFont}>
									{ blog && blog.title && blog.title }
								</Typography>
								<Typography variant="h5" gutterBottom>
									{ blog && blog.subtitle && blog.subtitle }
								</Typography>
							</StyledBlogImageSectionContent>
						</StyledBlogImageSection>
					) : (
						<Button onClick={() => setTitleModal(true)} type="button" variant="outlined" color="secondary">
							Add Title and subtitle
						</Button>
					)
				}

				<Divider sx={dividerStyle} />

				<StyledViewContentBody>

					{
						blog &&
						blog.content &&
						blog.content[0].header.length < 1 ? (
							<Button onClick={() => setContentModal(true)} type="button" variant="outlined" color="secondary">
								Add Blog Content
							</Button>
						) : (
							<>
								{
									blog &&
									blog.content &&
									blog.content.map((el, i) => (
										<StyledViewContentText key={i}>
											<Typography variant="h5" sx={bodyTitleFont} gutterBottom>
												{ el.header }
											</Typography>
											{
												el.paragraph &&
												el.paragraph.map(p => (
													<Typography variant="body1" key={p} gutterBottom>
														{ p }
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
																			<ArrowForwardIosIcon  color="secondary"/>
																		</ListItemIcon>
																		<ListItemText primary={el}/>
																	</ListItem>
																))
															}
														</List>
													</StyledListContainer>
												))
											}
										</StyledViewContentText>
									))
								}
							</>

						)
					}


					<StyledTagsArea>
						<Typography variant="body1">Tags :</Typography>
						<Stack direction="row" sx={{marginLeft: "20px"}} spacing={2}>
							{
								blog.tags &&
								blog.tags.map((tg, i) => (
									<Chip color="secondary" variant="outlined" key={i} label={tg}/>
								))
							}
						</Stack>
					</StyledTagsArea>

					<StyledCategoryArea>
						<Typography variant="body1">Category :</Typography>
						<Chip color="secondary" variant="outlined" label={blog.category} sx={{marginLeft: "20px"}} />
					</StyledCategoryArea>

					<StyledAuthorArea>
						<Typography variant="body1">Author :</Typography>
						<Chip color="secondary" variant="outlined" label={blog.author} sx={{marginLeft: "20px"}} />
					</StyledAuthorArea>
				</StyledViewContentBody>
			</StyledFormBlogView>

			<Divider sx={dividerStyle}/>

			<StyledFormArea>
				<Formik
					initialValues={{
						...INITIAL_FORM_STATE
					}}
					validationSchema={ FORM_VALIDATION }
					onSubmit = {submitHandler}
				>
					<Form>
						
						<FormObserver writeNewBlog={writeNewBlog} blog={writeNewBlog} />

							<AddBlogTitleModal open={titleModal} setOpen={setTitleModal}/>

							<AddBlogContentModal open={contentModal} setOpen={setContentModal}/>

						<ButtonGroup variant="contained" type="submit" sx={{marginTop: "30px"}}>
							<Button type="submit" color="secondary"  endIcon={<SendIcon/>}>
								Submit
							</Button>
							<Button  type="button" color="error" endIcon={<ClearIcon/>}>
								Cancel
							</Button>
						</ButtonGroup>
					</Form>
				</Formik>
			</StyledFormArea>

		</StyledBlogsFormWrapper>
	)
}


const mapStateToProps = ({ blogs }) => ({
	blog: blogs.newBlog,
})

const mapDispatchToProps = (dispatch) => ({
	writeNewBlog: (values) => dispatch(writeNewBlog(values)),
	writeNewParagraph: (paragraph) => dispatch(writeNewParagraph(paragraph))
	
})


export default connect(mapStateToProps, mapDispatchToProps)(AddBlogsForm)