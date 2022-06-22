import React from 'react';

import { Box, Card, CardHeader } from "@mui/material";
import { styled } from "@mui/system";
import { DataGrid} from '@mui/x-data-grid';

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




const ShipmentEventsTable = ({ events }) => {

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
	]

	return (
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
	)
}

export default ShipmentEventsTable