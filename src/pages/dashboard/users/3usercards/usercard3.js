import React, { useState } from 'react';

import { Button,  Grid, Typography } from "@mui/material";
import { styled } from "@mui/system";

import Sizeheaderlandscape4 from "../../../../components/widgets/cards/4sizeheaderlandscape/sizeheaderlandscape4";
import AddUsermodal from "../addusermodal/addusermodal";

import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import PersonIcon from '@mui/icons-material/Person';


const BoxWrapper = styled(Button)(({theme}) => ({
	minHeight: "20vh",
	width: "98%",
	margin: "10px",
	borderRadius: theme.shape.default,
	backgroundColor: theme.palette.background.paper,
	textTransform: "capitalize",
	color: "whitesmoke",
	textAlign: "left",

}))

const headerFont = {
	color: "#dea95f",
	fontWeight: 500,
	fontFamily: "'Rubik', sans-serif",
}

const Usercards3 = () => {
	
	const [open, setOpen] = useState(false)

	const handleShipmentModal = () => {
		setOpen(true)
	}

	const closeShipmentModal = () => {
		setOpen(false)
	}

	const userCard = [
		{
			title : {
				left: "Clients",
				right: <Button>View</Button>
			},
			body: {
				left: <PersonIcon  sx={{ fontSize : 30}} />,
				right: 45
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
				right: 3
			},
			footer: "Increase from last year"
		},
	]

	return (
		<Grid container spacing={0.5} >
			{
				userCard.map((item, i) => (
					<Grid key={i} item lg={4} sm={12} xs={12}>
						<Sizeheaderlandscape4 item={item} />
					</Grid>
				))
			}

			<Grid item  lg={4} sm={12} xs={12}>
				<BoxWrapper onClick={handleShipmentModal} elevation={3}>
					<Typography style={headerFont} variant="h3">
						Add Users
					</Typography>
				</BoxWrapper>
			</Grid>
			
			<AddUsermodal open={open} setOpen={setOpen} onClose={closeShipmentModal} />
		</Grid>
	)
}

export default Usercards3