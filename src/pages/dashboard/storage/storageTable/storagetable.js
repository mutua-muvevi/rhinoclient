import React, { useState } from 'react';

import { Button, Card, CardHeader} from "@mui/material";
import { styled } from "@mui/system";

import { DataGrid} from '@mui/x-data-grid';

import PageviewIcon from '@mui/icons-material/Pageview';
import EditIcon from '@mui/icons-material/Edit';

import StorageViewModal from "./storageviewmodal";

import { connect } from "react-redux"
import EditStorageModal from "../editstorageformmodal/editstoragemodal";

const StyledDataGridContainer = styled(Card)(({theme}) => ({
	backgroundColor: "inherit",
	borderRadius: theme.shape.default,
	marginTop: "30px",
	marginBottom: "30px"
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

const StorageTable = ({storage}) => {

	
	const [modal, setModal] = useState(false);
	const [editModal, setEditModal] = useState(false);
	const [singleStorage, setSingleStorage] = useState({});

	const handleClick = (e, values) => {
		setSingleStorage(values.row)
		setModal(true)
	}

	const handleEditClick = (e, values) => {
		setSingleStorage(values.row)
		setEditModal(true)
	}


	const columns = [
		{
			field: "id",
			hide: true
		},
		{
			field: "trackno",
			align: "left",
			headerAlign: "left",
			headerName: "Track number",
			width: 200
		},
		{
			field: "fullname",
			align: "left",
			headerAlign: "left",
			headerName: "Fullname",
			width: 200
		},
		{
			field: "email",
			align: "left",
			headerAlign: "left",
			headerName: "Email",
			width: 200
		},
		{
			field: "company",
			align: "left",
			headerAlign: "left",
			headerName: "Company",
			width: 200
		},
		
		
		{
			field: "storageaddress",
			align: "left",
			headerAlign: "left",
			headerName: "Storage Address",
			width: 200
		},

		{
			field: "datein",
			align: "left",
			headerAlign: "left",
			headerName: "Date In",
			width: 150
		},
		{
			field: "timein",
			align: "left",
			headerAlign: "left",
			headerName: "Time In",
			width: 150
		},
		{
			field: "dateout",
			align: "left",
			headerAlign: "left",
			headerName: "Date Out",
			width: 150
		},
		{
			field: "timeout",
			align: "left",
			headerAlign: "left",
			headerName: "Out Time",
			width: 150
		},

		{
			field: "notes",
			align: "left",
			headerAlign: "left",
			headerName: "Observation",
			minWidth: 200
		},
		{
			field: "View",
			align: "left",
			headerAlign: "left",
			headerName: "View Storage",
			width: 150,
			renderCell: (cellValues) => {
				return (
					<Button
						variant="contained"
						color="secondary"
						sx={{minWidth: "120px"}}
						onClick= {
							e => {
								handleClick(e, cellValues)
							}
						}
						endIcon={<PageviewIcon/>}
						>
							View
					</Button>
				)
			}
		},
		{
			field: "Edit",
			align: "left",
			headerAlign: "left",
			headerName: "Edit Storage",
			width: 150,
			renderCell: (cellValues) => {
				return (
					<Button
						variant="contained"
						color="secondary"
						sx={{minWidth: "120px"}}
						onClick= {
							e => {
								handleEditClick(e, cellValues)
							}
						}
						endIcon={<EditIcon/>}
						>
							Edit
					</Button>
				)
			}
		},
	]

	return (
		<>
			<StyledDataGridContainer>
				<StyledDataGridHeader title="Storage Records" />
				<StyledDataGrid
					rows={storage}
					columns={columns}
					autoPageSize
					autoHeight
					getRowId={storage => storage._id}
					pageSize={100}
				/>
			</StyledDataGridContainer>
			<StorageViewModal  values={singleStorage} open={modal} setOpen={setModal}/>
			<EditStorageModal item={singleStorage} open={editModal} setOpen={setEditModal}/>
		</>
	)
}


const mapStateToProps = ({ storage }) => ({
	storage: storage.data,
	errMessage: storage.errMessage
});

export default connect(mapStateToProps)(StorageTable)