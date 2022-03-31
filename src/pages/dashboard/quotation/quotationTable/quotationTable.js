import React from 'react';
import { DataGrid} from '@mui/x-data-grid';
import { styled } from "@mui/system";
import { Card, CardHeader} from "@mui/material";

const QuotationTable = ({quotation, error}) => {

	
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
			headerName: "Emails",
			width: 150
		},
		{
			field: "telephone",
			align: "left",
			headerAlign: "left",
			headerName: "Telephone",
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
			headerName: "City",
			width: 150
		},
		{
			field: "country",
			align: "left",
			headerAlign: "left",
			headerName: "Country",
			width: 150
		},
		{
			field: "message",
			align: "left",
			headerAlign: "left",
			headerName: "Message",
			width: 300
		}
	]

	return (
		<StyledDataGridContainer>
			<StyledDataGridHeader title="General Enquiries" />
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

export default QuotationTable