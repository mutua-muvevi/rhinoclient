import {  useRef, useState } from "react";
import { Link as RouterLink, useNavigate } from "react-router-dom";
// @mui
import { alpha } from "@mui/material/styles";
import {
	Box,
	Divider,
	Typography,
	Stack,
	MenuItem,
	Avatar,
	Link,
	Button,
} from "@mui/material";
import { styled } from "@mui/system";
// components
// mocks_
// import account from "../../_mock/account";

import { connect } from "react-redux";
import MenuPopover from "../popover";

const StyledAvatar = styled(Avatar)(({ theme }) => ({
	backgroundColor: theme.palette.secondary.main,
	color: "black"
}));

const StyledDivider = styled(Divider)(({ theme }) => ({
	backgroundColor: theme.palette.secondary.main,

}))

const MENU_OPTIONS = [
	{
		label: "Homepage",
		icon: "eva:home-fill",
		linkTo: "/",
	},
	{
		label: "Account",
		icon: "eva:home-fill",
		linkTo: "/dashboard/account",
	},
];

// ----------------------------------------------------------------------

const UserMenu = ({ me }) => {
	const anchorRef = useRef(null);
	const navigate = useNavigate();

	const [open, setOpen] = useState(null);

	const handleOpen = (event) => {
		setOpen(event.currentTarget);
	};

	const handleClose = () => {
		setOpen(null);
	};

	const handleActionEdit = () => {
		console.log("It is working, ")
	}

	const logout = () => {
		window.localStorage.clear()
	}

	const linkStyles = {
		color: "inherit",
		textDecoration: "none"
	}

	return (
		<>
			<Stack direction="row" spacing={3}>
				<Box
					ref={anchorRef}
					onClick={handleOpen}
					sx={{
						p: 0,
						...(open && {
							"&:before": {
								zIndex: 1,
								content: "''",
								width: "100%",
								height: "100%",
								borderRadius: "50%",
								position: "absolute",
								bgcolor: (theme) =>
									alpha(theme.palette.grey[900], 0.8),
							},
						}),
					}}>
						{
							me && me.firstname ?
							<Button variant="contained" color="secondary" sx={{width: "25px", height: "25px", color: "black"}}>
								{me.firstname}
							</Button> :""
						}
				</Box>

			</Stack>

			<MenuPopover
				open={Boolean(open)}
				anchorEl={open}
				onClose={handleClose}
				sx={{
					p: 0,
					mt: 1.5,
					ml: 0.75,
					"& .MuiMenuItem-root": {
						typography: "body2",
						borderRadius: 0.75,
					},
				}}>
				<Box sx={{ my: 1.5, px: 2.5 }}>
					<Typography variant="subtitle2" noWrap>
						{me && me.firstname ? me.firstname : ""}
					</Typography>
					<Typography
						variant="body2"
						sx={{ color: "text.secondary" }}
						noWrap>
						{me && me.email ? me.email : ""}
					</Typography>
				</Box>

				<StyledDivider />

				<Stack sx={{ p: 1 }}>
					{MENU_OPTIONS.map((option) => {
						return  (
							<MenuItem
								key={option.label}
								to={option.linkTo}
								component={RouterLink}
								onClick={handleClose}
							>
								{option.label}
							</MenuItem>
						)
					})}
				</Stack>

				<StyledDivider/>

				<Link href="/auth/login" style={linkStyles}>
					<MenuItem onClick={logout} sx={{ m: 1 }}>
						Logout
					</MenuItem>
				</Link>
			</MenuPopover>
		</>
	);
}


const mapStateToProps = ({user}) => ({
	me: user.user
})

const mapDispatchToProps = (dispatch) => ({

})

export default connect(mapStateToProps, mapDispatchToProps)(UserMenu)