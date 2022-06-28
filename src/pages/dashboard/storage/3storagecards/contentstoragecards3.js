import PublicSharpIcon from '@mui/icons-material/PublicSharp';
import WarehouseIcon from '@mui/icons-material/Warehouse';
import { Button } from "@mui/material";

export const storageCards3Content = [
	{
		title : {
			left: "Local Storage",
			right: <Button>View</Button>
		},
		body: {
			left: <WarehouseIcon  sx={{ fontSize : 30}} />,
			right: 23
		},
		footer: "Increase from last year"
	},
	{
		title : {
			left: "International Storage",
			right: <Button>View</Button>
		},
		body: {
			left: <PublicSharpIcon  sx={{ fontSize : 30}} />,
			right: 32
		},
		footer: "Increase from last year"
	},
]