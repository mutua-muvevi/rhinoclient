import React, { useState } from 'react';
import { Box, Breadcrumbs, Button, FormGroup, InputBase, Link, Typography } from "@mui/material"
import { styled } from "@mui/system";
import HomeIcon from '@mui/icons-material/Home';
import TravelExploreIcon from '@mui/icons-material/TravelExplore';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import ManageSearchIcon from '@mui/icons-material/ManageSearch';

// disposable import
import { shipping } from "./disposabledummy"
import TrackItem from "./trackItem";


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


const TrackShipment = () => {
	
	const [searchValue, setSearchValue] = useState("");
	const [trackItem, setTrackItem] = useState(null);
	
	const [trackItemModal, setTrackItemModal] = useState(false)
	
	const closeModal = () => {
		setTrackItemModal(false)
	}
	
	const submitHandler = e => {
		e.preventDefault()
		
		const searchItem = shipping.find(track => track.trackno === searchValue )
		
		if(searchItem){
			setTrackItem(searchItem)
			setTrackItemModal(true)
		} else {
			setTrackItem(null)
		}
	}


	return (
		<Box id="track-shipment">
			<StyledBreadCrumbs>
				<Link
					underline="hover"
					sx={{ display: 'flex', alignItems: 'center' }}
					
					href="/"
				>
					 <HomeIcon color="#fff" sx={{ mr: 0.5 }} fontSize="inherit" />
					 Home
				</Link>
				<Link
					underline="hover"
					sx={{ display: 'flex', alignItems: 'center' }}
					
					href="/track/main"
				>
					<TravelExploreIcon sx={{ mr: 0.5 }} fontSize="inherit" />
					Track
				</Link>
				<Typography
					sx={{ display: 'flex', alignItems: 'center' }}
					color="#fff"
				>
					<LocalShippingIcon sx={{ mr: 0.5 }} fontSize="inherit" />
					Track Shipment
				</Typography>
			</StyledBreadCrumbs>
			
			<Box>
				<Typography variant="h1" color="white" sx={trackTitle} gutterBottom>
					Track Your Shipment
				</Typography>

				
				<form onSubmit={submitHandler}>

					<FormGroup row>
						<StyledInputBase
							color="white"
							placeholder="Enter Shipping Track Number..."
							variant="standard"
							onChange = {(e) => setSearchValue(e.target.value)}
							value={searchValue}
						/>
						<StyledTrackButton type="submit" endIcon={<ManageSearchIcon/>} variant="contained" color="primary">
							Search
						</StyledTrackButton>
					</FormGroup>
				</form>

			</Box>
			{
				trackItem ? (
					<TrackItem
						item = {trackItem}
						modal={trackItemModal}
						onClose={closeModal}
					/>
				) : null
			}
		</Box>
	)
}

export default TrackShipment