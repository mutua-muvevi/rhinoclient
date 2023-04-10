import React from "react";

import { Box, Breadcrumbs, Link, Typography } from "@mui/material"
import { styled } from "@mui/system";

import HomeIcon from '@mui/icons-material/Home';
import GroupIcon from '@mui/icons-material/Warehouse';

import AdminTable from "./adminTable/adminTable";
import UsersTable from "./users/usersTable";
import Usercards3 from "./3usercards/usercard3";
import { connect } from "react-redux";


const StyledBreadCrumbs = styled(Breadcrumbs)(({theme}) => ({
	marginBottom: "20px"
}))

const headerFont = {
	color: "#dea95f",
	fontFamily: "'Rubik', sans-serif",
}
const Dashusers = ({ admin, clients }) => {

	
	return (
		<Box>
			<StyledBreadCrumbs>
				<Link
					underline="hover"
					style={headerFont}
					href="/dashboard"
				>
						<HomeIcon sx={{ mr: 0.5 }} fontSize="inherit" />
						Dashboard
				</Link>
				<Typography
					sx={{ display: 'flex', alignItems: 'center' }}
					color="text.primary"
				>
					<GroupIcon sx={{ mr: 0.5 }} fontSize="inherit" />
					Users
				</Typography>
			</StyledBreadCrumbs>
			
			<Usercards3
				clients={clients}
				admin={admin}
			/>

			{ admin ? <AdminTable /> : "" }
			{ clients ? <UsersTable /> : "" }
		</Box>
	)
}

const mapStateToProps = ({user}) => ({
	admin: user.admin,
	clients: user.users
})

export default connect(mapStateToProps)(Dashusers)