import { Box, Breadcrumbs, Link, Typography } from "@mui/material"
import HomeIcon from '@mui/icons-material/Home';
import WarehouseIcon from '@mui/icons-material/Warehouse';
import React, {useState, useEffect} from 'react';
import { styled } from "@mui/system";
import axios from "axios";
import Storagecards3 from "./3storagecards/storagecards3";
import StorageTable from "./storageTable/storagetable";

const StyledBreadCrumbs = styled(Breadcrumbs)(({theme}) => ({
	marginBottom: "20px"
}))


const Dashstorage = () => {
	
	
	const [storage, setStorage] = useState([])
	const [storageError, setStorageError] = useState(null)

	useEffect(() => {
		axios.get("http://localhost:7000/api/storage/all")
			.then((res) => {
				// console.log("The storage is", res)
				setStorage(res.data)
			})
			.catch(error => {
				console.log(error.response)
				setStorageError(error.response)
			})
	}, [])

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
			<StorageTable storage={storage.data} error ={storageError}/>
		</Box>
	)
}

export default Dashstorage