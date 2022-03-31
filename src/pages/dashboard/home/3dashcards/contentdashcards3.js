import FlightTakeoffIcon from '@mui/icons-material/FlightTakeoff';
import DirectionsBoatFilledIcon from '@mui/icons-material/DirectionsBoatFilled';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import { Button } from "@mui/material";

export const transportCardsContent = [
	{
		title : {
			left: "Land Transport",
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
			left: "Sea Transport",
			right: <Button>View</Button>
		},
		body: {
			left: <DirectionsBoatFilledIcon  sx={{ fontSize : 30}} />,
			right: 635
		},
		footer: "Increase from last year"
	},
	{
		title : {
			left: "Air Transport",
			right: <Button>View</Button>
		},
		body: {
			left: <FlightTakeoffIcon  sx={{ fontSize : 30}} />,
			right: 245
		},
		footer: "Increase from last year"
	},
]