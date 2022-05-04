import { Box, Breadcrumbs, Link, Typography } from "@mui/material"
import HomeIcon from '@mui/icons-material/Home';
import GroupIcon from '@mui/icons-material/Warehouse';
import { styled } from "@mui/system";
import AdminTable from "./adminTable/adminTable";
import UsersTable from "./users/usersTable";
import Usercards3 from "./3usercards/usercard3";

const StyledBreadCrumbs = styled(Breadcrumbs)(({theme}) => ({
	marginBottom: "20px"
}))

const Dashusers = () => {


	return (
		<Box>
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
			
			<Usercards3/>
			<AdminTable />
			<UsersTable />
		</Box>
	)
}

export default Dashusers