import AirplanemodeInactiveIcon from '@mui/icons-material/AirplanemodeInactive';
import DirectionsBoatFilledIcon from '@mui/icons-material/DirectionsBoatFilled';
import FlightLandIcon from '@mui/icons-material/FlightLand';
import { Button } from "@mui/material";

export const transportCardsContent = [
	{
		title : {
			left: "Successful Shipment",
			right: <Button color="success">View</Button>
		},
		body: {
			left: <FlightLandIcon  sx={{ fontSize : 30}} />,
			right: 34
		},
		footer: "Increase from last year"
	},
	{
		title : {
			left: "Ongoing Shipment",
			right: <Button color="danger">View</Button>
		},
		body: {
			left: <DirectionsBoatFilledIcon  sx={{ fontSize : 30}} />,
			right: 6
		},
		footer: "Increase from last year"
	},
	{
		title : {
			left: "Cancelled Shipment",
			right: <Button>View</Button>
		},
		body: {
			left: <AirplanemodeInactiveIcon  sx={{ fontSize : 30}} />,
			right: 2
		},
		footer: "Increase from last year"
	},
]