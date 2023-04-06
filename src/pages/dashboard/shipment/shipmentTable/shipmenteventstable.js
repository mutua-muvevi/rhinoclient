import React from 'react';

import { Box, Button, Card, CardHeader } from "@mui/material";
import { styled } from "@mui/system";

import { DataGrid} from '@mui/x-data-grid';

import { Delete, Edit, Visibility } from "@mui/icons-material"
import { useState } from 'react';
import EditEventModal from './events/edit/modal';
import EventViewModal from './events/view/view';
import { deleteEvent } from '../../../../redux/shipment/shipmentactions';
import DeleteEventModal from './events/delete/delete';

const StyledDataGridContainer = styled(Card)(({theme}) => ({
	backgroundColor: "inherit",
	borderRadius: theme.shape.default,
	marginTop: "30px",
	marginBottom: "30px",
	filter: "drop-shadow(5px 7px 5px rgba(0,0,0, 0.4))",
}))

const StyledDataGridHeader = styled(CardHeader)(({theme}) => ({
	backgroundColor: "#131313",
	color: theme.palette.secondary.main
}))

const StyledDataGrid = styled(DataGrid)(({theme}) =>({
	border: "none",
	backgroundColor: theme.palette.background.default,
	width: "100%",
	borderRadius: theme.shape.default,
	"& .MuiDataGrid-columnHeaders": {
		backgroundColor: "#333333",
		color: theme.palette.secondary.main,
		fontSize: 18,
		paddingTop: 2,
		paddingBottom: 2,
	},
	"& .MuiDataGrid-virtualScrollerRenderZone": {
		"& .MuiDataGrid-row": {
			"&:nth-of-type(2n)": { backgroundColor: theme.palette.background.paper }
		}
	}
}))




const ShipmentEventsTable = ({ events, trackno }) => {

	const [singleEvent, setSingleEvent] = useState({})

	const [openEventModal, setOpenEventModal] = useState(false);
	const [openEditEventModal, setOpenEditEventModal] = useState(false);
	const [openDeleteEventModal, setOpenDeleteEventModal] = useState(false);

	const handleViewClick = (e, values) => {
		setSingleEvent(values.row)
		setOpenEventModal(true)
	}

	const handleEditClick = (e, values) => {
		setSingleEvent(values.row)
		setOpenEditEventModal(true)
	}

	const handleDeleteClick = (e, values) => {
		setSingleEvent(values.row)
		setOpenDeleteEventModal(true)
	}

	const columns = [
		{
			field: "id",
			hide: true
		},
		{
			field: "number",
			align: "left",
			headerAlign: "left",
			headerName: "Number",
			width: 100
		},
		{
			field: "timeevents",
			align: "left",
			headerAlign: "left",
			headerName: "Time",
			width: 200
		},
		{
			field: "dateevents",
			align: "left",
			headerAlign: "left",
			headerName: "Date",
			width: 200
		},
		{
			field: "currentlocation",
			align: "left",
			headerAlign: "left",
			headerName: "Location",
			width: 200
		},
		{
			field: "shippingstatus",
			align: "left",
			headerAlign: "left",
			headerName: "Status",
			width: 200
		},
		{
			field: "notes",
			align: "left",
			headerAlign: "left",
			headerName: "Statements",
			minWidth: 390
		},
		{
			field: "view",
			headerName: "View event",
			sortable: false,
			width: 200,
			disableClickEventBubbling: true,
			renderCell: (cellValues) => (
				<Button 
					style={{width: "150px", color:"black"}}
					variant="contained"
					color="secondary"
					onClick={
						e => {
							handleViewClick(e, cellValues)
						}
					}
					endIcon={<Visibility/>}
				>
					View
				</Button>
			)
		},
		{
			field: "edit",
			headerName: "Edit event",
			sortable: false,
			width: 200,
			disableClickEventBubbling: true,
			renderCell: (cellValues) => (
				<Button 
					style={{width: "150px", color:"black"}}
					variant="contained"
					color="warning"
					onClick={
						e => {
							handleEditClick(e, cellValues)
						}
					}
					endIcon={<Edit/>}
				>
					Edit
				</Button>
			)
		},
		{
			field: "delete",
			headerName: "Delete event",
			sortable: false,
			width: 200,
			disableClickEventBubbling: true,
			renderCell: (cellValues) => (
				<Button 
					style={{width: "150px"}}
					variant="contained"
					color="error"
					onClick={
						e => {
							handleDeleteClick(e, cellValues)
						}
					}
					endIcon={<Delete/>}
				>
					Delete
				</Button>
			)
		},
	]

	return (
		<>
			<StyledDataGridContainer>
				<StyledDataGridHeader title="Events Records" />
				<StyledDataGrid
					rows={events}
					columns={columns}
					autoPageSize
					autoHeight
					getRowId={event => event._id}
					pageSize={50}
				/>
			</StyledDataGridContainer>

			<EventViewModal
				open={openEventModal}
				setOpen={setOpenEventModal}
				event={singleEvent}
			/>

			<EditEventModal
				open={openEditEventModal}
				setOpen={setOpenEditEventModal}
				event={singleEvent}
				trackno={trackno}
				/>

			<DeleteEventModal
				open={openDeleteEventModal}
				setOpen={setOpenDeleteEventModal}
				event={singleEvent}
			/>
		</>
	)
}

export default ShipmentEventsTable