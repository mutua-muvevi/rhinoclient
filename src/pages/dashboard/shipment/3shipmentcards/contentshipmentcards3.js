import FlightTakeoffIcon from '@mui/icons-material/FlightTakeoff';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import { Button } from "@mui/material";

export const shipmentCards3Content = [
	{
		title : {
			left: "Successful shipment",
			right: <Button>View</Button>
		},
		body: {
			left: <LocalShippingIcon  sx={{ fontSize : 30}} />,
			right: 34
		},
		footer: "Increase from last year"
	},
	{
		title : {
			left: "Ongoing Shipment",
			right: <Button>View</Button>
		},
		body: {
			left: <FlightTakeoffIcon  sx={{ fontSize : 30}} />,
			right: 6
		},
		footer: "Increase from last year"
	},
]