import { Box, Button, Container, Grid, List, ListItem, TextField, Typography } from "@mui/material"
import React from 'react';
import { footerLeft, footerMiddle } from "./footercontent";
import SendIcon from '@mui/icons-material/Send';
import { styled } from "@mui/system";
import FooterImage from "../../../assets/images/miningtools.jpg"

const FooterWrapper = styled(Box)(({theme}) => ({
	background: `linear-gradient(to bottom, rgba(0, 0, 0, 0.58), rgba(0, 0, 0, 0.78)), url(${FooterImage})`,
	backgroundAttachment: "fixed",
	backgroundPosition: "center",
	backgroundSize: "cover",
	color: "white",
	minHeight: "70vh",
	display: "flex",
	flexDirection: "column",
	alignItems: "center"
}))

const StyledContainer = styled(Container)(({theme}) => ({
	display: "flex",
	alignItems: "center",
	minHeight: "60vh"
}))

const FooterMiddle = styled(Box)(({theme}) => ({
	display: "flex",
	alignItems: "center",
	justifyContent: "left",
	marginTop: "20px",
	marginBottom: "20px"
}))

const FooterTitle = styled(Typography)(({theme}) => ({
	marginBottom : "20px"
}))

const footerInputSX = {
	padding: "5px 10px",
	minWidth: "180px"
}

const WhiteBorderTextField = styled(TextField)`
	& .MuiOutlinedInput-root {
		&.Mui-focused fieldset {
			border-color: white;
			color: white
		}
	}
`;

const SocialIconsStyle = styled(Box)(({theme}) => ({
	maxWidth: "300px",
	marginTop: "20px",
	display: "flex",
	justifyContent: "space-between",
	alignItems: "center"
}))

const StyledCopyright = styled(Box)(({theme}) => ({
	backgroundColor: "black",
	color: "white",
	display: "flex",
	alignItems: "center",
	justifyContent: "center",
	textAlign: "center",
	width: "100%",
	paddingTop: "10px !important",
	paddingBottom: "10px !important"
}))

const Footer = () => {
	return (
		<>
			<FooterWrapper id="footer" component="footer">
				<StyledContainer maxWidth="xl">
					<Grid container spacing ={3} sx={{marginTop: 5, marginBottom: 5}}>

						<Grid item lg={4} xs={12}>
							<FooterTitle variant="h4" gutterBottom>
								{footerLeft.title}
							</FooterTitle>
							{
								footerLeft.paragraph.map((el, i) => (
									<Typography key={i} variant="body">
										{el}
									</Typography>
								))
							}
						</Grid>

						<Grid item lg={4} xs={12}>
							<FooterTitle variant="h4" gutterBottom>
								{footerMiddle.title}
							</FooterTitle>

							<Box>
								{
									footerMiddle.body.map((el, i) => (
										<FooterMiddle key={i}>
											{el.icon}
											<Typography sx={{marginLeft: "20px"}}>
												{el.text}
											</Typography>
										</FooterMiddle>
									))
								}
								<SocialIconsStyle>
									{
										footerMiddle.footer.map((el, i) => (
											<Box key={i}>
												{el.icon}
											</Box>
										))
									}
								</SocialIconsStyle>
							</Box>

						</Grid>

						<Grid item lg={4} xs={12}>
							<FooterTitle variant="h4" gutterBottom>
								Subscribe
							</FooterTitle>

							<Typography variant="subtitle1" gutterBottom>
								Sign Up To Our Newsletter And Get The Latest Offers.
							</Typography>

							<WhiteBorderTextField 
								type="email"
								style={{padding: "5px"}} 
								placeholder="Enter your email "
								sx={{minWidth: "300px"}}
								inputProps={{
									style: {
										paddingTop : 7,
										paddingBottom : 7,
										paddingLeft : 10,
										color: "white !important",
										borderColor: "white"
									}
								}}
								/>
							<Button type="submit" variant="contained" sx={footerInputSX} endIcon={<SendIcon/>}>
								Submit
							</Button>
						</Grid>
					</Grid>
				</StyledContainer>
			</FooterWrapper>
			<StyledCopyright>
				Copyright Rhinojon Prime Metals 2022
			</StyledCopyright>
		</>
	)
}

export default Footer