import React from 'react';
import { DataGrid} from '@mui/x-data-grid';
import { styled } from "@mui/system";
import { Card, CardHeader} from "@mui/material";

const ProductQuotation = ({quotation, error}) => {

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

	const columns = [
		{
			field: "id",
			hide: true
		},
		{
			field: "fullnames",
			align: "left",
			headerAlign: "left",
			headerName: "Fullname",
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
			field: "city",
			align: "left",
			headerAlign: "left",
			headerName: "Country",
			width: 150
		},
		{
			field: "product",
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
			<StyledDataGridHeader title="Product Quotation" />
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

export default ProductQuotation