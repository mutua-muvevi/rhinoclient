import React, { useState, useEffect } from 'react';

import { Alert, AlertTitle, Box, Button, ButtonGroup, Card, CardActionArea, Chip, Container, Divider, Grid, Grow, List, ListItem, ListItemIcon, ListItemText, Paper,  Stack, Typography } from "@mui/material"
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
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';

import { connect } from "react-redux";
import { writeNewBlog } from "../../../../../redux/blog/blogactions";

import AddBlogTitleModal from "./addblogtitlemodal";
import AddBlogContentModal from "./addblogcontentmodal";
import AddBlogImageModal from "./addblogimagemodal";

const StyledBlogsFormWrapper = styled(Box)(({ theme }) => ({
	margin: "20px auto"
}))


const INITIAL_FORM_STATE = {
	title: "",
	subtitle: "",
	coverImage: "",
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
	],


}

const FORM_VALIDATION = Yup.object().shape({
	title: Yup.string().required("Please add the Blog's title"),
	subtitle: Yup.string().required("Please add the Blog's subtitle"),
	coverImage: Yup.string().required("Please add the Blog's cover image"),
	author: Yup.string().required("Please add the Blog's author"),
	category: Yup.string().required("Please add the Blog's category"),

	tags: Yup.array().min(1).max(5).required("Please add atleast one tag"),

	content: Yup.array().of(
			Yup.object().shape({
				header: Yup.string().required("Please add a header"),
				subheader: Yup.string(),
				paragraph: Yup.string().required("Please add atleast one paragraph paragraph"),
				list: Yup.array().of(
					Yup.object().shape({
						listtitle: Yup.string(),
						listitems: Yup.string(),
					})
				)
			})
	)
})

const StyledFormBlogView = styled(Box)(({ theme }) => ({
	display: "flex",
	flexDirection: "column",
	textAlign: "left",
	alignItems: "flex-start",
	justifyContent: "space-around"
}))


const StyledBlogImageSectionContent = styled(Box)(({ theme }) => ({
	padding: "10px",
}))

const StyledBlogTitleSectionContent = styled(Box)(({ theme }) => ({
	padding: "10px",
}))

const StyledImageButton = styled(Card)(({ theme }) => ({
	width: "100%",
}))

const StyledCardActionArea = styled(CardActionArea)(({ theme }) => ({
	width: "100%",
	minHeight: "25vh",
	display: "flex",
	justifyContent: "center",
	alignItems: "center"
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
	margin: "5px auto",
	backgroundColor: "#f48d3a"
}


const StyledViewContentBody = styled(Box)(({ theme }) => ({

}))

const StyledViewContentText = styled(Box)(({ theme }) => ({

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



const FormObserver = ({ writeNewBlog }) => {
	const { values } = useFormikContext();

	useEffect(() => {
		console.log("FORM OBSERVER VALUES :::", values);
		console.log("WRITE NEW BLOG", writeNewBlog);
		writeNewBlog(values)

	}, [values, writeNewBlog]);
  
	return null;
};


const AddBlogsForm = ({writeNewBlog, blog }) => {

	const [ titleModal, setTitleModal ] = useState(false);
	const [ imageModal, setImageModal ] = useState(false);
	const [ contentModal, setContentModal ] = useState(false);

	

	const StyledBlogImageSection = styled(Card)(({ theme }) => ({
		width: "100%",
		minHeight: "25vh",
		background: blog.coverImage ? blog.coverImage : "red",
		display: "flex",
		justifyContent: "flex-start",
		alignItems: "flex-end",
		marginBottom: "10px"
	}))

	const submitHandler = (values) => {
		console.log("Blog values", values)
		alert("Blog values", values)
	}


	return (
		<StyledBlogsFormWrapper>
			<StyledFormBlogView>
			{
				blog &&
				blog.coverImage ? (
					<StyledBlogImageSection elevation={3}>
						<StyledBlogImageSectionContent>
							{
								blog &&
								blog.title &&
								blog.subtitle ? (
										<StyledBlogTitleSectionContent>
											<Typography variant="h4" gutterBottom sx={headerFont}>
												{ blog && blog.title && blog.title }
											</Typography>
											<Typography variant="h5" gutterBottom>
												{ blog && blog.subtitle && blog.subtitle }
											</Typography>
										</StyledBlogTitleSectionContent>
								) : (
									<Button onClick={() => setTitleModal(true)} type="button" variant="outlined" color="secondary">
										Add Title and subtitle
									</Button>
								)
							}
						</StyledBlogImageSectionContent>
					</StyledBlogImageSection>
				) : (
					<StyledImageButton elevation={3}>
						<StyledCardActionArea onClick={() => setImageModal(true)}>
							<AddPhotoAlternateIcon sx={{fontSize: "100px"}} color="secondary"/>
						</StyledCardActionArea>
					</StyledImageButton>
				)
			}
				

				<Divider sx={dividerStyle} />

				<StyledViewContentBody>

					{
						blog &&
						blog.content &&
						blog.content.map((el, i) => (
							<StyledViewContentText key={i}>
								<Typography variant="h5" sx={bodyTitleFont} gutterBottom>
									{ el.header ? el.header : null }
								</Typography>

								<Typography variant="h6" sx={bodyTitleFont} gutterBottom>
									{ el.subheader ? el.subheader : null }
								</Typography>

								<Typography variant="body1" key={i} gutterBottom>
									{ el.paragraph ? el.paragraph : null }
								</Typography>
								{/* {
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
								} */}
							</StyledViewContentText>
						))
					}
					
					<Button onClick={() => setContentModal(true)} type="button" variant="outlined" color="secondary">
						Add Blog Content
					</Button>


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
					{
						({ values }) => (

							<Form>
								
								<FormObserver writeNewBlog={writeNewBlog} />

								<AddBlogImageModal open= {imageModal} setOpen = {setImageModal} />

								<AddBlogTitleModal open={titleModal} setOpen={setTitleModal}/>

								<AddBlogContentModal open={contentModal} setOpen={setContentModal} values = {values}/>

								<ButtonGroup variant="contained" type="submit" sx={{marginTop: "30px"}}>
									<Button type="submit" color="secondary"  endIcon={<SendIcon/>}>
										Submit
									</Button>
									<Button  type="button" color="error" endIcon={<ClearIcon/>}>
										Cancel
									</Button>
								</ButtonGroup>
							</Form>

						)
					}
				</Formik>
			</StyledFormArea>

		</StyledBlogsFormWrapper>
	)
}


const mapStateToProps = ({ blogs }) => ({
	blog: blogs.newBlog,
})

const mapDispatchToProps = (dispatch) => ({
	writeNewBlog: (values) => dispatch(writeNewBlog(values))
})


export default connect(mapStateToProps, mapDispatchToProps)(AddBlogsForm)