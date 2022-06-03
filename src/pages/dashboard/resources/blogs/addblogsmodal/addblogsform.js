import React, { useState } from 'react';

import { Alert, AlertTitle, Box, Button, ButtonGroup, Divider, Grid, Grow, Typography } from "@mui/material"
import { styled } from "@mui/system";

import { Formik, Form } from "formik";
import * as Yup from "yup";

import TextField from "../../../../../components/formsUI/textfield/textfield";
import { 
	blogFormTitle, 
	blogFormSubtitle, 
	blogFormTags,
	blogFormCategory, 

	blogFormContent,
	blogFormImages,
} from "./addblogsinfo";

import SendIcon from '@mui/icons-material/Send';
import ClearIcon from '@mui/icons-material/Clear';

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


const dividerStyle = {
	margin: "40px auto",
	backgroundColor: "#f48d3a"
}


const StyledFormArea = styled(Box)(({ theme }) => ({

}))

const AddBlogsForm = () => {

	const { title, setTitle } = useState("");
	const { subtitle, setSubtitle } = useState("");
	const { coverImage, setCoverImage } = useState("");
	const { thumbnail, setThumbnail } = useState("");
	const { author, setAuthor } = useState("");
	const { category, setCategory } = useState("");

	const { tags, setTags } = useState([]);

	const { content, setContent } = useState([]);

	const handleChange = (e) => {
		console.log("HANDLE CHANGE", e.target.value)
	}

	const submitHandler = (values) => {
		console.log("Blog values", values)
	}

	return (
		<StyledBlogsFormWrapper>
			<StyledFormBlogView>

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
					<Form onChange={ handleChange }>
						
						<TextField
							label={blogFormTitle.label}
							name={blogFormTitle.name}
							type={blogFormTitle.type}
						/>	
					
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

export default AddBlogsForm