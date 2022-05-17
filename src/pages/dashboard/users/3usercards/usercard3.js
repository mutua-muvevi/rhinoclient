import { Button,  Grid, Typography } from "@mui/material";
import { styled } from "@mui/system";
import React, { useState } from 'react';
import Sizeheaderlandscape4 from "../../../../components/widgets/cards/4sizeheaderlandscape/sizeheaderlandscape4";
import AddUsermodal from "../addusermodal/addusermodal";
import { userCards3Content } from "./contentusercard3";

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

const Usercards3 = () => {
	
	const [open, setOpen] = useState(false)

	const handleShipmentModal = () => {
		setOpen(true)
	}

	const closeShipmentModal = () => {
		setOpen(false)
	}

	return (
		<Grid container spacing={0.5} >
			{
				userCards3Content.map((item, i) => (
					<Grid key={i} item lg={4} sm={12} xs={12}>
						<Sizeheaderlandscape4 item={item} />
					</Grid>
				))
			}

			<Grid item  lg={4} sm={12} xs={12}>
				<BoxWrapper onClick={handleShipmentModal} elevation={3}>
					<Typography variant="h3">
						Add Users
					</Typography>
				</BoxWrapper>
			</Grid>
			
			<AddUsermodal open={open} setOpen={setOpen} onClose={closeShipmentModal} />
		</Grid>
	)
}

export default Usercards3