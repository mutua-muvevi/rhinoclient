import { Button,  Grid, Typography } from "@mui/material";
import { styled } from "@mui/system";
import React from 'react';
import Sizeheaderlandscape4 from "../../../../components/widgets/cards/4sizeheaderlandscape/sizeheaderlandscape4";
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
	return (
		<Grid container spacing={0.5} >
			{
				storageCards3Content.map((item, i) => (
					<Grid key={i} item lg={4} sm={12} xs={12}>
						<Sizeheaderlandscape4 item={item} />
					</Grid>
				))
			}

			<Grid item lg={4} sm={12} xs={12}>
				<BoxWrapper elevation={3}>
					<Typography variant="h3">
						Add Storage
					</Typography>
				</BoxWrapper>
			</Grid>
			
		</Grid>
	)
}

export default Storagecards3