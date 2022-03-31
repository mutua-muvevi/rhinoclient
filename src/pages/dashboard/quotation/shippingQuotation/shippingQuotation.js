import React from 'react';
import { DataGrid} from '@mui/x-data-grid';
import { styled } from "@mui/system";
import { Card, CardHeader} from "@mui/material";

const ShippingQuotation = ({quotation, error}) => {

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
			field: "firstname",
			align: "left",
			headerAlign: "left",
			headerName: "Firstname",
			width: 150
		},
		{
			field: "email",
			align: "left",
			headerAlign: "left",
			headerName: "Email",
			width: 150
		},
		{
			field: "company",
			align: "left",
			headerAlign: "left",
			headerName: "Company",
			width: 150
		},
		{
			field: "fromcity",
			align: "left",
			headerAlign: "left",
			headerName: "Origin City",
			width: 150
		},
		{
			field: "fromcountry",
			align: "left",
			headerAlign: "left",
			headerName: "Origin Country",
			width: 150
		},
		{
			field: "tocity",
			align: "left",
			headerAlign: "left",
			headerName: "Destination City",
			width: 150
		},
		{
			field: "tocountry",
			align: "left",
			headerAlign: "left",
			headerName: "Destination Country",
			width: 150
		},
		{
			field: "productname",
			align: "left",
			headerAlign: "left",
			headerName: "Product",
			width: 150
		},
		{
			field: "weight",
			align: "left",
			headerAlign: "left",
			headerName: "Weight",
			width: 70
		},
		{
			field: "unit",
			align: "left",
			headerAlign: "left",
			headerName: "unit",
			width: 70
		},
		{
			field: "producttype",
			align: "left",
			headerAlign: "left",
			headerName: "Product Type",
			width: 150
		},
		{
			field: "logisticstype",
			align: "left",
			headerAlign: "left",
			headerName: "Mode of transport",
			width: 100
		},
		{
			field: "description",
			align: "left",
			headerAlign: "left",
			headerName: "Description",
			width: 250
		},
		{
			field: "date",
			align: "left",
			headerAlign: "left",
			headerName: "Date",
			width: 100
		},
	]

	return (
		<StyledDataGridContainer>
			<StyledDataGridHeader title="Shipping Quotation" />
			<StyledDataGrid
				rows={quotation}
				columns={columns}
				autoPageSize
				autoHeight
				getRowId={quotation => quotation._id}
				pageSize={100}
			/>
		</StyledDataGridContainer>
	)
}

export default ShippingQuotation