import React, { useState } from "react";

import { Button, Card, CardHeader } from "@mui/material";
import { styled } from "@mui/system";

import { DataGrid } from "@mui/x-data-grid";

import PageviewIcon from "@mui/icons-material/Pageview";
import EditIcon from "@mui/icons-material/Edit";

import StorageViewModal from "./storageviewmodal";

import { connect } from "react-redux";
import EditStorageModal from "../editstorageformmodal/editstoragemodal";
import { setStorage } from "../../../../redux/storage/storageaction";

const StyledDataGridContainer = styled(Card)(({ theme }) => ({
	backgroundColor: "inherit",
	borderRadius: theme.shape.default,
	marginTop: "30px",
	marginBottom: "30px",
}));

const StyledDataGridHeader = styled(CardHeader)(({ theme }) => ({
	backgroundColor: "#131313",
	color: theme.palette.secondary.main,
}));

const StyledDataGrid = styled(DataGrid)(({ theme }) => ({
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
			"&:nth-of-type(2n)": {
				backgroundColor: theme.palette.background.paper,
			},
		},
	},
}));

const StorageTable = ({ allStorage, setStorage }) => {
	const [modal, setModal] = useState(false);
	const [editModal, setEditModal] = useState(false);
	const [singleStorage, setSingleStorage] = useState({});

	const handleClick = (e, values) => {
		setSingleStorage(values.row);
		setStorage(values.row);
		setModal(true);
	};

	const handleEditClick = (e, values) => {
		setSingleStorage(values.row);
		setStorage(values.row);
		setEditModal(true);
	};

	const columns = [
		{
			field: "id",
			hide: true,
		  },
		  {
			field: "depositorFullName",
			align: "left",
			headerAlign: "left",
			headerName: "Depositor Fullname",
			width: 200,
			valueGetter: (params) => { console.log("Params is", params.row); return params.row.depositor.fullname},
		  },
		  {
			field: "depositorEmail",
			align: "left",
			headerAlign: "left",
			headerName: "Depositor Email",
			width: 200,
			valueGetter: (params) => params.row.depositor.email,
		  },
		  {
			field: "cosigneeFullName",
			align: "left",
			headerAlign: "left",
			headerName: "Cosignee Fullname",
			width: 200,
			valueGetter: (params) => params.row.cosignee.fullname,
		  },
		  {
			field: "cosigneeEmail",
			align: "left",
			headerAlign: "left",
			headerName: "Cosignee Email",
			width: 200,
			valueGetter: (params) => params.row.cosignee.email,
		  },
		  {
			field: "ownerFullName",
			align: "left",
			headerAlign: "left",
			headerName: "Owner Fullname",
			width: 200,
			valueGetter: (params) => params.row.owner.fullname,
		  },
		  {
			field: "ownerEmail",
			align: "left",
			headerAlign: "left",
			headerName: "Owner Email",
			width: 200,
			valueGetter: (params) => params.row.owner.email,
		  },
		  {
			field: "receiverFullName",
			align: "left",
			headerAlign: "left",
			headerName: "Receiver Fullname",
			width: 200,
			valueGetter: (params) => params.row.receiver.fullname,
		  },
		  {
			field: "receiverEmail",
			align: "left",
			headerAlign: "left",
			headerName: "Receiver Email",
			width: 200,
			valueGetter: (params) => params.row.receiver.email,
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
						sx={{ minWidth: "120px", color: "black" }}
						onClick={(e) => {
							console.log("cell values.....", cellValues)
							handleClick(e, cellValues);
						}}
						endIcon={<PageviewIcon />}
					>
						View
					</Button>
				);
			},
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
						sx={{ minWidth: "120px", color: "black" }}
						onClick={(e) => {
							handleEditClick(e, cellValues);
						}}
						endIcon={<EditIcon />}
					>
						Edit
					</Button>
				);
			},
		},
	];

	return (
		<>
			<StyledDataGridContainer>
				<StyledDataGridHeader title="Storage Records" />
					<StyledDataGrid
						rows={allStorage}
						columns={columns}
						autoPageSize
						autoHeight
						getRowId={(storage) => storage._id}
						pageSize={100}
					/>
			</StyledDataGridContainer>
			<StorageViewModal
				values={singleStorage}
				open={modal}
				setOpen={setModal}
			/>
			<EditStorageModal
				item={singleStorage}
				open={editModal}
				setOpen={setEditModal}
			/>
		</>
	);
};

const mapStateToProps = ({ storage }) => ({
	allStorage: storage.allStorage,
	errMessage: storage.errMessage,
});

const mapDispatchToProps = (dispatch) => ({
	setStorage: (storage) => dispatch(setStorage(storage)),
});

export default connect(mapStateToProps, mapDispatchToProps)(StorageTable);
