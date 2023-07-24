import { useState } from "react";

import { Box, Button, Card, CardHeader } from "@mui/material";
import { styled } from "@mui/system";

import { DataGrid } from "@mui/x-data-grid";

import { Delete, Edit, Visibility } from "@mui/icons-material";
import { connect } from "react-redux";
import StorageGoodsViewModal from "./goodsModal";

const StyledDataGridContainer = styled(Card)(({ theme }) => ({
	backgroundColor: "inherit",
	borderRadius: theme.shape.default,
	marginTop: "30px",
	marginBottom: "30px",
	filter: "drop-shadow(5px 7px 5px rgba(0,0,0, 0.4))",
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

const StorageGoodsTable = ({ storage }) => {
	const [ openGoodsModal, setOpenGoodsModal ] = useState(false);
	const [ singleGoodsDetails, setSingleGoodsDetails ] = useState({})

	const handleViewClick = (e, values) => {
		setSingleGoodsDetails(values.row)
		console.log("Values from some action", values)
		setOpenGoodsModal(true);
	};

	const columns = [
		// Product Details: HSCode
		{
			field: "HSCode",
			align: "left",
			headerAlign: "left",
			headerName: "HSCode",
			width: 200,
		},

		// Product Details: Packages No
		{
			field: "packagesNo",
			align: "left",
			headerAlign: "left",
			headerName: "Packages No",
			width: 150,
		},

		// Product Details: Net Quantity
		{
			field: "netQuantity",
			align: "left",
			headerAlign: "left",
			headerName: "Net Quantity",
			width: 150,
		},

		// Product Details: Market Rate
		{
			field: "marketRate",
			align: "left",
			headerAlign: "left",
			headerName: "Market Rate",
			width: 150,
		},

		// Product Details: Total Market Value
		{
			field: "totalMarketValue",
			align: "left",
			headerAlign: "left",
			headerName: "Total Market Value",
			width: 180,
		},

		// Product Details: Description
		{
			field: "description",
			align: "left",
			headerAlign: "left",
			headerName: "Description",
			width: 300,
		},
		{
			field: "view",
			headerName: "View event",
			sortable: false,
			width: 200,
			disableClickEventBubbling: true,
			renderCell: (cellValues) => (
				<Button
					style={{ width: "150px", color: "black" }}
					variant="contained"
					color="secondary"
					onClick={(e) => {
						handleViewClick(e, cellValues);
					}}
					endIcon={<Visibility />}
				>
					View
				</Button>
			),
		},
	];

	// Extracting the productDetails array from storage and creating a new rows array
	const rows = storage?.productDetails || [];

	return (
		<>
			<StyledDataGridContainer>
				<StyledDataGridHeader title="Storage Goods Records" />
				{rows.length > 0 ? (
					<StyledDataGrid
						rows={rows}
						columns={columns}
						autoPageSize
						autoHeight
						getRowId={(row) => row._id}
						pageSize={100}
					/>
				) : (
					<p>No product details available</p>
				)}
			</StyledDataGridContainer>

			<StorageGoodsViewModal open={openGoodsModal} setOpen={setOpenGoodsModal} productDetails={singleGoodsDetails} />
		</>
	);
};

const mapStateToProps = ({ storage }) => ({
	storage: storage.storage, 
});

export default connect(mapStateToProps)(StorageGoodsTable);
