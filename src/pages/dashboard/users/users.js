import { Box, Breadcrumbs, Link, Typography } from "@mui/material"
import HomeIcon from '@mui/icons-material/Home';
import GroupIcon from '@mui/icons-material/Warehouse';
import React, {useState, useEffect} from 'react';
import { styled } from "@mui/system";
import axios from "axios";
import { LineAxisOutlined } from "@mui/icons-material";
import AdminTable from "./adminTable/adminTable";
import UsersTable from "./users/usersTable";

const StyledBreadCrumbs = styled(Breadcrumbs)(({theme}) => ({
	marginBottom: "20px"
}))

const Dashusers = () => {

	const [users, setUsers] = useState([])
	const [usersError, setUsersError] = useState(null)

	const [admin, setAdmin] = useState([])
	const [adminError, setAdminError] = useState(null)

	useEffect(() => {
		axios.get("http://localhost:7000/api/user/users")
			.then((res) => {
				console.log("The users are", res)
				setUsers(res.data)
			})
			.catch(error => {
				console.log(error.response)
				setUsersError(error.response)
			})
	}, [])

	useEffect(() => {
		axios.get("http://localhost:7000/api/user/admin")
			.then((res) => {
				console.log("The admin are", res)
				setAdmin(res.data)
			})
			.catch(error => {
				console.log(error.response)
				setAdminError(error.response)
			})
	}, [])

	return (
		<Box>
			{usersError ? console.log("The user error is", usersError) : console.log("The users fetched, ", users)}
			{adminError ? console.log("The admin error is", adminError) : console.log("The admin fetched, ", admin)}
			<StyledBreadCrumbs>
				<Link
					underline="hover"
					sx={{ display: 'flex', alignItems: 'center' }}
					color="inherit"
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
			
			<AdminTable admin={admin.data} error={adminError}/>
			<UsersTable users={users.data} error={usersError}/>
		</Box>
	)
}

export default Dashusers