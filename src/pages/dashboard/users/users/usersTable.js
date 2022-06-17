import React from 'react';

import { styled } from "@mui/system";
import { Card, CardHeader} from "@mui/material";

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
	color: theme.palette.secondary.main,
	fontWeight: "700"
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

const UsersTable = ({ users }) => {

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
			width: 200
		},
		{
			field: "lastname",
			align: "left",
			headerAlign: "left",
			headerName: "Lastname",
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
			field: "telephone",
			align: "left",
			headerAlign: "left",
			headerName: "Telephone",
			width: 200
		},
		{
			field: "city",
			align: "left",
			headerAlign: "left",
			headerName: "City",
			width: 200
		},
		{
			field: "country",
			align: "left",
			headerAlign: "left",
			headerName: "Country",
			width: 200
		},
		{
			field: "createdAt",
			align: "left",
			headerAlign: "left",
			headerName: "Date Joined",
			width: 200
		},
	]

	return (
		<StyledDataGridContainer>
			<StyledDataGridHeader title="List of Registered Clients" />

			<StyledDataGrid
				rows={users ? users : null}
				columns={columns}
				autoPageSize
				autoHeight
				getRowId={users => users._id}
				pageSize={20}
			/>
		</StyledDataGridContainer>
	)
}

const mapStateToProps = ({ user }) => ({
	users: user.users
})

export default connect(mapStateToProps)(UsersTable);