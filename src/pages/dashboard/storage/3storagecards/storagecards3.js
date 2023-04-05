import { Button,  Grid, Typography } from "@mui/material";
import { styled } from "@mui/system";
import React, { useState } from 'react';
import Sizeheaderlandscape4 from "../../../../components/widgets/cards/4sizeheaderlandscape/sizeheaderlandscape4";
import Addstoragemodal from "../addstoragemodal/addstoragemodal";
import PublicSharpIcon from '@mui/icons-material/PublicSharp';
import WarehouseIcon from '@mui/icons-material/Warehouse';
import LocalStorageModal from "./localstorage";
import InternationalStorageModal from "./internationalstorage";

const ButtonWrapper = styled(Button)(({theme}) => ({
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

	const [open, setOpen] = useState(false);
	const [openLocalStorageModal, setOpenLocalStorageModal] = useState(false);
	const [openInternationalStorageModal, setOpenInternationalStorageModal] = useState(false);
	
	const handleLocalStorageModal = () => {
		setOpenLocalStorageModal(true);
	}

	const handleInternationalStorageModal = () => {
		setOpenInternationalStorageModal(true);
	}

	const storageCards3Content = [
		{
			title : {
				left: "Local Storages",
				action: handleLocalStorageModal
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
				action: handleInternationalStorageModal
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
		<>
			<Grid container spacing={0.5} >
				{
					storageCards3Content.map((item, i) => (
						<Grid key={i} item lg={4} sm={12} xs={12}>
							<Sizeheaderlandscape4 item={item} />
						</Grid>
					))
				}

				
				<Grid item  lg={4} sm={12} xs={12}>
					<ButtonWrapper onClick={handleStorageModal} elevation={3}>
						<Typography style={headerFont} variant="h3">
							Add Storage
						</Typography>
					</ButtonWrapper>
				</Grid>

				<Addstoragemodal open={open} setOpen={setOpen}/>
				
			</Grid>

			<LocalStorageModal
				open={openLocalStorageModal}
				setOpen={setOpenLocalStorageModal}
				data={storageLocal}
			/>

			<InternationalStorageModal
				open={openInternationalStorageModal}
				setOpen={setOpenInternationalStorageModal}
				data={storageLocal}
			/>
		</>
	)
}

export default Storagecards3