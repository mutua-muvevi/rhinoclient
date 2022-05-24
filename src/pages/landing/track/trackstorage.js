import React, { useState } from 'react';
import { Link } from "react-router-dom";

import { Box, Breadcrumbs, Button, FormGroup, Grow, InputBase, Typography } from "@mui/material"
import { styled } from "@mui/system";

import HomeIcon from '@mui/icons-material/Home';
import TravelExploreIcon from '@mui/icons-material/TravelExplore';
import WarehouseIcon from '@mui/icons-material/Warehouse';
import SearchIcon from '@mui/icons-material/Search';

import TrackStorageItem from "./trackstorageitem";

import { connect } from "react-redux";

const StyledBreadCrumbs = styled(Breadcrumbs)(({theme}) => ({
	marginTop: "20px",
	marginBottom: "20px",
	color: theme.palette.common.white
}))

const trackTitle = {
	marginTop: "20vh"
}

const StyledInputBase = styled(InputBase)(({theme}) => ({
	color: "white",
	border: "#fff solid 1px",
	borderColor: theme.palette.common.white,
	minWidth: "50vw",
	padding: "10px"
}))

const StyledTrackButton = styled(Button)(({theme}) => ({
	padding: "10px",
	minWidth: "20vw"
}))

const formgroupStyle = {
	display: {
		md: "flex",
		xs: "block"
	}
}

const TrackStorage = ({ storage }) => {

	const [searchValue, setSearchValue] = useState("");
	const [trackItem, setTrackItem] = useState(null);
	
	const [trackItemModal, setTrackItemModal] = useState(false)
	
	const closeModal = () => {
		setTrackItemModal(false)
	}
	
	const submitHandler = e => {
		e.preventDefault()
		
		const searchItem = storage.find(track => track.trackno === searchValue )
		
		if(searchItem){
			setTrackItem(searchItem)
			setTrackItemModal(true)
		} else {
			setTrackItem(null)
		}
	}


	return (
		<Grow style={{ transformOrigin: '10 20 50' }} in timeout={2000}>
			<Box id="track-storage">
				<StyledBreadCrumbs>
					<Link
						underline="hover"
						sx={{ display: 'flex', alignItems: 'center' }}
						
						to="/"
					>
						<HomeIcon color="#fff" sx={{ mr: 0.5 }} fontSize="inherit" />
						Home
					</Link>
					<Link
						underline="hover"
						sx={{ display: 'flex', alignItems: 'center' }}
						
						to="/track/main"
					>
						<TravelExploreIcon sx={{ mr: 0.5 }} fontSize="inherit" />
						Track
					</Link>
					<Typography
						sx={{ display: 'flex', alignItems: 'center' }}
						color="#fff"
					>
						<WarehouseIcon sx={{ mr: 0.5 }} fontSize="inherit" />
						Track Storage
					</Typography>
				</StyledBreadCrumbs>

				<Box>
					<Typography variant="h1" color="white" sx={trackTitle} gutterBottom>
						Track Your Storage
					</Typography>

					<form onSubmit={submitHandler}>

					</form>


						
					<form onSubmit={submitHandler}>
						<FormGroup row>
							<StyledInputBase
								color="white"
								placeholder="Enter Storage Track Number..."
								variant="standard"
								onChange = {(e) => setSearchValue(e.target.value)}
								value={searchValue}
							/>
							<StyledTrackButton type="submit" endIcon={<SearchIcon/>} variant="contained" color="secondary">
								Search
							</StyledTrackButton>
						</FormGroup>
					</form>
				</Box>
				{
					trackItem ? (
						<TrackStorageItem
							item = {trackItem}
							modal={trackItemModal}
							onClose={closeModal}
						/>
						) : null
				}
			</Box>
		</Grow>
	)
}

const mapStateToProps = ({ storage }) => ({
	storage: storage.data
})

export default connect(mapStateToProps)(TrackStorage)