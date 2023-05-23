import React from 'react';

import { Box, Breadcrumbs, Link, Typography } from "@mui/material"
import { styled } from "@mui/system";

import HomeIcon from '@mui/icons-material/Home';
import WarehouseIcon from '@mui/icons-material/Warehouse';

import Storagecards3 from "./3storagecards/storagecards3";
import StorageTable from "./storageTable/storagetable";
import { connect } from 'react-redux';

const StyledBreadCrumbs = styled(Breadcrumbs)(({theme}) => ({
	marginBottom: "20px"
}))

const headerFont = {
	color: "#dea95f",
	fontFamily: "'Rubik', sans-serif",
}

const filterByAddress = (objects) => {
    if (!Array.isArray(objects)) {
        return [];
    }
    return objects.filter(obj => {
        return /nairobi|kenya|.+?(?=\s*\d)/i.test(obj.storageaddress);
    });
}

const filterOutByAddress = (objects) => {
    if (!Array.isArray(objects)) {
        return [];
    }
    return objects.filter(obj => {
        return !/nairobi|kenya|.+?(?=\s*\d)/i.test(obj.storageaddress);
    });
}

const Dashstorage = ({storage, }) => {

	const storageLocal = storage ? filterByAddress(storage): ""
	const internationalStorage = storage ? filterOutByAddress(storage): ""

	return (
		<Box>
			<StyledBreadCrumbs>
				<Link
					underline="hover"
					style={headerFont}
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
			<Storagecards3
				storage={storage}
				storageLocal={storageLocal}
				internationalStorage={internationalStorage}
			/>
			<StorageTable/>
		</Box>
	)
}

const mapStateToProps = ({storage}) => ({
	storage : storage.allStorage,
})

export default connect(mapStateToProps)(Dashstorage)