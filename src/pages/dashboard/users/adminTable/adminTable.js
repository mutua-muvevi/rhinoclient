import React from 'react';

import { Card, CardHeader} from "@mui/material";
import { styled } from "@mui/system";

import { DataGrid} from '@mui/x-data-grid';

import { connect } from "react-redux";

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
		color: "whitesmoke",
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

const AdminTable = ({ admin }) => {

	const columns = [
		{
			field: "id",
			hide: true
		},
		{
			field: "firstname",
			align: "left",
			headerAlign: "left",
			headerName: "Firstname",
			minWidth: 200,
			flex:1
		},
		{
			field: "lastname",
			align: "left",
			headerAlign: "left",
			headerName: "Lastname",
			minWidth: 200,
			flex:1
		},
		{
			field: "email",
			align: "left",
			headerAlign: "left",
			headerName: "Email",
			minWidth: 200,
			flex:1
		},
		{
			field: "telephone",
			align: "left",
			headerAlign: "left",
			headerName: "Telephone",
			minWidth: 200,
			flex:1
		},
		{
			field: "city",
			align: "left",
			headerAlign: "left",
			headerName: "City",
			minWidth: 200,
			flex:1
		},
		{
			field: "country",
			align: "left",
			headerAlign: "left",
			headerName: "Country",
			minWidth: 200,
			flex:1
		},
		{
			field: "createdAt",
			align: "left",
			headerAlign: "left",
			headerName: "Date Joined",
			minWidth: 200,
			flex:1
		},
	]

	return (
		<StyledDataGridContainer>
			<StyledDataGridHeader title="Admins" />
			<StyledDataGrid
				rows={admin}
				columns={columns}
				autoPageSize
				autoHeight
				getRowId={admin => admin._id}
				pageSize={20}
			/>
		</StyledDataGridContainer>
	)
}

const mapStateToProps = ({ user }) => ({
	admin: user.admin
})

export default connect(mapStateToProps)(AdminTable)