import { useState } from 'react';

import { Button, Card, CardHeader} from "@mui/material";
import { styled } from "@mui/system";

import { DataGrid} from '@mui/x-data-grid';

import PageviewIcon from '@mui/icons-material/Pageview';
import { Delete } from '@mui/icons-material';

import { connect } from "react-redux"
import QuotationViewModal from './view';
import DeleteQuotationModal from "./delete"


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
}));

const QuotationDatagrid = ({ quotation }) => {

	const [modal, setModal] = useState(false);
	const [deleteModal, setDeleteModal] = useState(false);
	const [singleQuotation, setSingleQuotation] = useState({});

	const handleClick = (e, values) => {
		setSingleQuotation(values.row)
		setModal(true)
	}

	const handleDeleteClick = (e, values) => {
		setSingleQuotation(values.row)
		setDeleteModal(true)
	}

	const columns = [
		{
			field: "id",
			hide: true
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
			headerName: "View Quotation",
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
			field: "Delete",
			align: "left",
			headerAlign: "left",
			headerName: "Delete Quotation",
			width: 150,
			renderCell: (cellValues) => {
				return (
					<Button
						variant="contained"
						color="error"
						sx={{minWidth: "120px"}}
						onClick= {
							e => {
								handleDeleteClick(e, cellValues)
							}
						}
						endIcon={<Delete/>}
						>
							Delete
					</Button>
				)
			}
		},
	]

	return (
		<>
			<StyledDataGridContainer>
				<StyledDataGridHeader style={{fontWeight: 500}} title="All Quotation" />
				{
					quotation && (
						<StyledDataGrid
							rows={quotation}
							columns={columns}
							autoPageSize
							autoHeight
							getRowId={quotation => quotation?._id}
							pageSize={100}
						/>
					)
				}
			</StyledDataGridContainer>

			<QuotationViewModal
				values={singleQuotation}
				setOpen={setModal}
				open={modal}
			/>

			<DeleteQuotationModal
				open={deleteModal}
				setOpen={setDeleteModal}
				quotation={singleQuotation}
			/>
		</>
	)
}

const mapStateToProps = ({ quotation }) => ({
	quotation: quotation.quotation
})

export default connect(mapStateToProps)(QuotationDatagrid)