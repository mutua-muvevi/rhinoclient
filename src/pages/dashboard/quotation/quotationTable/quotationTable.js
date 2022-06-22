import React, { useState } from 'react';

import { Button, Card, CardHeader} from "@mui/material";
import { styled } from "@mui/system";

import { DataGrid} from '@mui/x-data-grid';

import PageviewIcon from '@mui/icons-material/Pageview';

import QuotationViewModal from "./quotationviewmodal";

import { connect } from "react-redux";

const QuotationTable = ({ quotation }) => {

	const [modal, setModal] = useState(false);
	const [singleQuotation, setSingleQuotation] = useState({});

	
	const handleClick = (e, values) => {
		setSingleQuotation(values.row)
		setModal(true)
	}

	const StyledDataGridContainer = styled(Card)(({theme}) => ({
		backgroundColor: "inherit",
		margin: "10px",
		borderRadius: theme.shape.default
	}))

	const StyledDataGridHeader = styled(CardHeader)(({theme}) => ({
		backgroundColor: "#131313",
		color: theme.palette.secondary.main,
		fontFamily: "'Rubik', sans-serif",
		
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

	const columns = [
		{
			field: "id",
			hide: true
		},
		{
			field: "createdAt",
			align: "left",
			headerAlign: "left",
			headerName: "Date",
			width: 150
		},
		{
			field: "firstname",
			align: "left",
			headerAlign: "left",
			headerName: "Fullname",
			width: 150
		},
		{
			field: "lastname",
			align: "left",
			headerAlign: "left",
			headerName: "Lastname",
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
			field: "product",
			align: "left",
			headerAlign: "left",
			headerName: "Product",
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
		},
		{
			field: "View",
			align: "left",
			headerAlign: "left",
			headerName: "View Shipment",
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
	]

	return (
		<>
			<StyledDataGridContainer>
				<StyledDataGridHeader style={{fontWeight: 500}} title="All Quotation" />
				<StyledDataGrid
					rows={quotation}
					columns={columns}
					autoPageSize
					autoHeight
					getRowId={quotation => quotation._id}
					pageSize={100}
				/>
			</StyledDataGridContainer>
			<QuotationViewModal  values={singleQuotation} open={modal} setOpen={setModal}/>
		</>
	)
}

const mapStateToProps = ({ quotation }) => ({
	quotation: quotation.quotation
})

export default connect(mapStateToProps)(QuotationTable)