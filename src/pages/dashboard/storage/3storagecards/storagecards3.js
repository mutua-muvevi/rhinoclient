import { Button, Grid, Typography } from "@mui/material";
import { styled } from "@mui/system";
import React, { useState } from "react";
import Sizeheaderlandscape4 from "../../../../components/widgets/cards/4sizeheaderlandscape/sizeheaderlandscape4";
import Addstoragemodal from "../addstoragemodal/addstoragemodal";
import PublicSharpIcon from "@mui/icons-material/PublicSharp";
import WarehouseIcon from "@mui/icons-material/Warehouse";
import LocalStorageModal from "./localstorage";
import InternationalStorageModal from "./internationalstorage";

const ButtonWrapper = styled(Button)(({ theme }) => ({
	minHeight: "20vh",
	width: "98%",
	margin: "10px",
	borderRadius: theme.shape.default,
	backgroundColor: theme.palette.background.paper,
	textTransform: "capitalize",
	color: "whitesmoke",
	textAlign: "left",
}));

const headerFont = {
	color: "#dea95f",
	fontWeight: 500,
	fontFamily: "'Rubik', sans-serif",
};

const Storagecards3 = ({ storage, storageLocal, internationalStorage }) => {
	const [open, setOpen] = useState(false);

	const handleStorageModal = () => {
		setOpen(true);
	};

	return (
		<>
			<Grid container spacing={0.5}>
				
				<Grid item>
					<Button
						onClick={handleStorageModal}
						elevation={3}
						variant="contained"
					>
						<Typography sx={{ color: "#000000" }} fontWeight={600}>
							Add Storage
						</Typography>
					</Button>
				</Grid>

				<Addstoragemodal open={open} setOpen={setOpen} />
			</Grid>
		</>
	);
};

export default Storagecards3;
