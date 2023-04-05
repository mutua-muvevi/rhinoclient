import { Button,  Grid, Typography } from "@mui/material";
import { styled } from "@mui/system";
import React, { useState } from 'react';
import Sizeheaderlandscape4 from "../../../../components/widgets/cards/4sizeheaderlandscape/sizeheaderlandscape4";
import Addstoragemodal from "../addstoragemodal/addstoragemodal";
import PublicSharpIcon from '@mui/icons-material/PublicSharp';
import WarehouseIcon from '@mui/icons-material/Warehouse';

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

const Storagecards3 = ({storage, storageLocal, internationalStorage}) => {

	const [open, setOpen] = useState(false)

	const storageCards3Content = [
		{
			title : {
				left: "Local Storage",
				right: <Button>View</Button>
			},
			body: {
				left: <WarehouseIcon  sx={{ fontSize : 30}} />,
				right: storageLocal.length
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
				right: internationalStorage.length
			},
			footer: "Increase from last year"
		},
	]

	const handleStorageModal = () => {
		setOpen(true)
	}

	return (
		<div>
			<Grid container spacing={0.5} >
				{
					storageCards3Content.map((item, i) => (
						<Grid key={i} item lg={4} sm={12} xs={12}>
							{console.log("international storage",internationalStorage)}
							<Sizeheaderlandscape4 item={item} />
						</Grid>
					))
				}

				
				<Grid item  lg={4} sm={12} xs={12}>
					<BoxWrapper onClick={handleStorageModal} elevation={3}>
						<Typography style={headerFont} variant="h3">
							Add Storage
						</Typography>
					</BoxWrapper>
				</Grid>

				<Addstoragemodal open={open} setOpen={setOpen}/>
				
			</Grid>
		</div>
	)
}

export default Storagecards3