import FlightTakeoffIcon from '@mui/icons-material/FlightTakeoff';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import { Button } from "@mui/material";

export const shipmentCards3Content = [
	{
		title : {
			left: "Domestic Transportation",
			right: <Button>View</Button>
		},
		body: {
			left: <LocalShippingIcon  sx={{ fontSize : 30}} />,
			right: 34535
		},
		footer: "Increase from last year"
	},
	{
		title : {
			left: "International Transportation",
			right: <Button>View</Button>
		},
		body: {
			left: <FlightTakeoffIcon  sx={{ fontSize : 30}} />,
			right: 635
		},
		footer: "Increase from last year"
	},
]