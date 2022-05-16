import React from 'react';

import { DataGrid} from '@mui/x-data-grid';
import { styled } from "@mui/system";
import { Card, CardHeader} from "@mui/material";

import { connect } from "react-redux"

const StorageTable = ({storage}) => {

	const StyledDataGridContainer = styled(Card)(({theme}) => ({
		backgroundColor: "inherit",
		borderRadius: theme.shape.default,
		marginTop: "30px",
		marginBottom: "30px"
	}))

	const StyledDataGridHeader = styled(CardHeader)(({theme}) => ({
		backgroundColor: "#131313",
		color: theme.palette.common.white
	}))

	const StyledDataGrid = styled(DataGrid)(({theme}) =>({
		backgroundColor: theme.palette.common.white,
		width: "100%",
		borderRadius: theme.shape.default,
		"& .MuiDataGrid-columnHeaders": {
			backgroundColor: "#333333",
			color: "whitesmoke",
			fontSize: 18,
			paddingTop: 2,
			paddingBottom: 2,
		},
		"& .MuiDataGrid-virtualScrollerRenderZone": {
			"& .MuiDataGrid-row": {
				"&:nth-of-type(2n)": { backgroundColor: "#f1f1f1" }
			}
		}
	}))

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
			minWidth: 500
		}
	]

	return (
		<StyledDataGridContainer>
			<StyledDataGridHeader title="Shipping Records" />
			<StyledDataGrid
				rows={storage}
				columns={columns}
				autoPageSize
				autoHeight
				getRowId={storage => storage._id}
				pageSize={100}
			/>
		</StyledDataGridContainer>
	)
}


const mapStateToProps = ({ storage }) => ({
	storage: storage.data,
	errMessage: storage.errMessage
});

export default connect(mapStateToProps)(StorageTable)