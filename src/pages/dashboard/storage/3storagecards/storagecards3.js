import { Button,  Grid, Typography } from "@mui/material";
import { styled } from "@mui/system";
import React, { useState } from 'react';
import Sizeheaderlandscape4 from "../../../../components/widgets/cards/4sizeheaderlandscape/sizeheaderlandscape4";
import Addstoragemodal from "../addstoragemodal/addstoragemodal";
import { storageCards3Content } from "./contentstoragecards3";

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

const Storagecards3 = () => {

	const [open, setOpen] = useState(false)

	const handleStorageModal = () => {
		setOpen(true)
	}

	return (
		<Grid container spacing={0.5} >
			{
				storageCards3Content.map((item, i) => (
					<Grid key={i} item lg={4} sm={12} xs={12}>
						<Sizeheaderlandscape4 item={item} />
					</Grid>
				))
			}

			<Grid item  lg={4} sm={12} xs={12}>
				<BoxWrapper onClick={handleStorageModal} elevation={3}>
					<Typography variant="h3">
						Add Storage
					</Typography>
				</BoxWrapper>
			</Grid>

			<Addstoragemodal open={open} setOpen={setOpen}/>
			
		</Grid>
	)
}

export default Storagecards3