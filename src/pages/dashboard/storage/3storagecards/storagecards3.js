import { Button,  Grid, Typography } from "@mui/material";
import { styled } from "@mui/system";
import React, { useState } from 'react';
import Sizeheaderlandscape4 from "../../../../components/widgets/cards/4sizeheaderlandscape/sizeheaderlandscape4";
import Addstoragemodal from "../addstoragemodal/addstoragemodal";
import { storageCards3Content } from "./contentstoragecards3";

const BoxWrapper = styled(Button)(({theme}) => ({
	minWidth: "25vw",
	minHeight: "20vh",
	margin: "10px",
	borderRadius: theme.shape.default,
	backgroundColor: theme.palette.common.white,
	textTransform: "capitalize",
	color: "#131313",
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

				<BoxWrapper onClick={handleStorageModal} elevation={3}>
					<Typography variant="h3">
						Add Storage
					</Typography>
				</BoxWrapper>

				<Addstoragemodal open={open} setOpen={setOpen}/>
			
		</Grid>
	)
}

export default Storagecards3