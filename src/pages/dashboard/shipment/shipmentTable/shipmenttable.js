import React from 'react';
import { DataGrid} from '@mui/x-data-grid';
import { styled } from "@mui/system";
import { Card, CardHeader} from "@mui/material";

const ShipmentTable = ({shipment}) => {

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
			width: 150
		},
		{
			field: "shippersfullname",
			align: "left",
			headerAlign: "left",
			headerName: "Fullname",
			width: 150
		},
		{
			field: "shippersemail",
			align: "left",
			headerAlign: "left",
			headerName: "Email",
			width: 150
		},
		{
			field: "shipperscompany",
			align: "left",
			headerAlign: "left",
			headerName: "Company",
			width: 200
		},
		{
			field: "itemsname",
			align: "left",
			headerAlign: "left",
			headerName: "Product",
			width: 200
		},
		{
			field: "itemsweight",
			align: "left",
			headerAlign: "left",
			headerName: "Weight",
			width: 70
		},
		{
			field: "itemspieces",
			align: "left",
			headerAlign: "left",
			headerName: "Amount / Pieces",
			width: 150
		},
		{
			field: "departureairportcode",
			align: "left",
			headerAlign: "left",
			headerName: "City of departure",
			width: 200
		},
		{
			field: "departureaddress",
			align: "left",
			headerAlign: "left",
			headerName: "Origin Service Area",
			width: 200
		},
		{
			field: "departuredate",
			align: "left",
			headerAlign: "left",
			headerName: "Date of departure",
			width:200
		},
		{
			field: "departuretime",
			align: "left",
			headerAlign: "left",
			headerName: "Time of departure",
			width: 200
		},
		{
			field: "arrivalairportcode",
			align: "left",
			headerAlign: "left",
			headerName: "Destination Airport Cde",
			width: 200
		},
		{
			field: "arrivaladdress",
			align: "left",
			headerAlign: "left",
			headerName: "Destination Address",
			width: 200
		},
		{
			field: "arrivaldate",
			align: "left",
			headerAlign: "left",
			headerName: "Estimated Arrival Date",
			width: 200
		},
		{
			field: "arrivaltime",
			align: "left",
			headerAlign: "left",
			headerName: "Estimated Arrival Time",
			width: 200
		},
		{
			field: "itemsname",
			align: "left",
			headerAlign: "left",
			headerName: "Item",
			width: 150
		},
		{
			field: "date",
			align: "left",
			headerAlign: "left",
			headerName: "Date",
			width: 200
		},
	]

	return (
		<StyledDataGridContainer>
			<StyledDataGridHeader title="RhinoJohn Shipping Records" />
			<StyledDataGrid
				rows={shipment}
				columns={columns}
				autoPageSize
				autoHeight
				getRowId={shipment => shipment._id}
				pageSize={50}
			/>
		</StyledDataGridContainer>
	)
}

export default ShipmentTable