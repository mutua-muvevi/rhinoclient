import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import PersonIcon from '@mui/icons-material/Person';
import { Button } from "@mui/material";

export const userCards3Content = [
	{
		title : {
			left: "Clients",
			right: <Button>View</Button>
		},
		body: {
			left: <PersonIcon  sx={{ fontSize : 30}} />,
			right: 34535
		},
		footer: "Increase from last year"
	},
	{
		title : {
			left: "Admins",
			right: <Button>View</Button>
		},
		body: {
			left: <AdminPanelSettingsIcon  sx={{ fontSize : 30}} />,
			right: 5
		},
		footer: "Increase from last year"
	},
]