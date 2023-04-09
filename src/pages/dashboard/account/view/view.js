import { useState } from "react";
import { useTheme } from "@emotion/react";

import { Box, Button, Divider, Grid, Paper, Stack, Typography } from "@mui/material"
import { styled } from "@mui/system";

import { BsPenFill } from "react-icons/bs";
import EditAccount from "../edit/modal"

import { connect } from "react-redux";

const StyledWrapper = styled(Box)(({ theme }) => ({

}));

const StyledPaper = styled(Paper)(({ theme }) => ({
	padding: "20px"
}));

const headerFont = {
	color: "#dea95f",
	fontWeight: 500,
	fontFamily: "'Rubik', sans-serif",
}

const titleFont = {
	fontWeight: 500,
	fontFamily: "'Rubik', sans-serif",
}

const AccountView = ({user}) => {
	const [open, setOpen] = useState(false)

	const theme = useTheme()
	const userInfo = [
		{
			name: "Firstname",
			value: user ? user.firstname: null,
			xl: 4,
			lg: 4,
			md: 6,
			sm: 12,
			xs: 12
		},
		{
			name: "Lastname",
			value: user ? user.lastname: null,
			xl: 4,
			lg: 4,
			md: 6,
			sm: 12,
			xs: 12
		},
		{
			name: "email",
			value: user ? user.email: null,
			xl: 4,
			lg: 4,
			md: 6,
			sm: 12,
			xs: 12
		},
		{
			name: "Telephone",
			value: user ? user.telephone: null,
			xl: 4,
			lg: 4,
			md: 6,
			sm: 12,
			xs: 12
		},
		{
			name: "City",
			value: user ? user.city: null,
			xl: 4,
			lg: 4,
			md: 6,
			sm: 12,
			xs: 12
		},
		{
			name: "Country",
			value: user ? user.country: null,
			xl: 4,
			lg: 4,
			md: 6,
			sm: 12,
			xs: 12
		},
		{
			name: "Authorization",
			value: user ? user.authorization: null,
			xl: 4,
			lg: 4,
			md: 6,
			sm: 12,
			xs: 12
		},
	]
	return (
		<>
			<StyledWrapper>
				<StyledPaper>
					<Grid container spacing={2}>
						<Grid item xs={12} >
							<Stack direction="row" alignItems="center" justifyContent="space-between">
								<Typography variant="h5" style={headerFont} gutterBottom>
									{user && user.firstname ? `${user.firstname}'s Account` : null}
								</Typography>
								<Button onClick={() => setOpen(true)} startIcon={<BsPenFill/>}>
									<Typography variant="subtitle1" sx={{textTransform: "capitalize", fontWeight: 600}}>
										Edit Account
									</Typography>
								</Button>
							</Stack>
						<Divider style={{backgroundColor: theme.palette.secondary.main}}/>
						</Grid>
						{
							userInfo && userInfo.map(el => (
								<Grid item key={el.name} xl={el.xl} lg={el.lg} md={el.md} sm={el.sm} xs={el.xs}>
									<Typography style={titleFont} variant="body1">{el.name}</Typography>
									<Box>
										<Typography variant="body">{el.value}</Typography>
									</Box>
								</Grid>
							))
						}
					</Grid>
				</StyledPaper>
			</StyledWrapper>
			<EditAccount user={user} open={open} setOpen={setOpen} />
		</>
	)
}

const mapStateToProps = ({user}) => ({
	user : user.user
})

export default connect(mapStateToProps)(AccountView)