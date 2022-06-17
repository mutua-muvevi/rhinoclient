import React, { useState } from 'react';

import { Button, Card, CardHeader} from "@mui/material";
import { styled } from "@mui/system";
import { DataGrid} from '@mui/x-data-grid';

import PageviewIcon from '@mui/icons-material/Pageview';
import EditIcon from '@mui/icons-material/Edit';

import ShipmentViewModal from "./shipmentviewmodal";
import EditShipmentModal from "../editshipmentformmodal/editshipmentmodal";

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


const ShipmentTable = ({ data }) => {

	const [modal, setModal] = useState(false);
	const [editModal, setEditModal] = useState(false);
	const [singleShipment, setSingleShipment] = useState({});

	const handleClick = (e, values) => {
		setSingleShipment(values.row)
		setModal(true)
	}

	const handleEditClick = (e, values) => {
		setSingleShipment(values.row)
		setEditModal(true)
	}

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
						sx={{minWidth: "120px", color: "black"}}
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
		{
			field: "Edit",
			align: "left",
			headerAlign: "left",
			headerName: "Edit Shipment",
			width: 150,
			renderCell: (cellValues) => {
				return (
					<Button
					variant="contained"
					color="secondary"
					sx={{minWidth: "120px", color: "black" }}
					onClick= {
						e => {
							handleEditClick(e, cellValues)
						}
					}
					endIcon={<EditIcon/>}
						>
							Edit
						</Button>
				)
			}
		},
	]


	return (
		<>
			<StyledDataGridContainer>
				<StyledDataGridHeader title="Shipping Records" />
				<StyledDataGrid
					rows={data}
					columns={columns}
					autoPageSize
					autoHeight
					getRowId={shipment => shipment._id}
					pageSize={50}
				/>
			</StyledDataGridContainer>
			<ShipmentViewModal values={singleShipment} open={modal} setOpen={setModal}/>
			<EditShipmentModal item={singleShipment} open={editModal} setOpen={setEditModal}/>
		</>
	)
}

const mapStateToProps = ({ shipment }) => ({
	data: shipment.data,
	errMessage: shipment.errMessage
});

export default connect(mapStateToProps)(ShipmentTable)