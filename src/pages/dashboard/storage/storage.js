import React from 'react';

import { Box, Breadcrumbs, Link, Typography } from "@mui/material"
import { styled } from "@mui/system";

import HomeIcon from '@mui/icons-material/Home';
import WarehouseIcon from '@mui/icons-material/Warehouse';

import Storagecards3 from "./3storagecards/storagecards3";
import StorageTable from "./storageTable/storagetable";

const StyledBreadCrumbs = styled(Breadcrumbs)(({theme}) => ({
	marginBottom: "20px"
}))


const Dashstorage = () => {
	

	return (
		<Box>
			<StyledBreadCrumbs>
				<Link
					underline="hover"
					sx={{ display: 'flex', alignItems: 'center' }}
					color="inherit"
					href="/dashboard"
				>
					 <HomeIcon sx={{ mr: 0.5 }} fontSize="inherit" />
					 Dashboard
				</Link>
				<Typography
					sx={{ display: 'flex', alignItems: 'center' }}
					color="text.primary"
				>
					<WarehouseIcon sx={{ mr: 0.5 }} fontSize="inherit" />
					Storage
				</Typography>
			</StyledBreadCrumbs>
			<Storagecards3/>
			<StorageTable/>
		</Box>
	)
}

export default Dashstorage