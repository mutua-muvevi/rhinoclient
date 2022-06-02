import React, { useState } from 'react';

import { Button, Card, CardHeader} from "@mui/material";
import { styled } from "@mui/system";
import { DataGrid} from '@mui/x-data-grid';

import PageviewIcon from '@mui/icons-material/Pageview';
import EditIcon from '@mui/icons-material/Edit';

import { connect } from "react-redux";
import BlogViewModal from "./blogviewmodal";


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



const DashBlogTable = ({ data }) => {

	
	const [modal, setModal] = useState(false);
	const [editModal, setEditModal] = useState(false);
	const [singleBlog, setSingleBlog] = useState({});

	const handleClick = (e, values) => {
		setSingleBlog(values.row)
		setModal(true)
	}

	const handleEditClick = (e, values) => {
		setSingleBlog(values.row)
		console.log("VALUES PARENT", singleBlog)
		setEditModal(true)
	}


	const columns = [
		{
			field: "id",
			hide: true
		},
		{
			field: "author",
			align: "left",
			headerAlign: "left",
			headerName: "Author",
			width: 150
		},
		{
			field: "title",
			align: "left",
			headerAlign: "left",
			headerName: "Title",
			width: 150
		},
		{
			field: "subtitle",
			align: "left",
			headerAlign: "left",
			headerName: "Subtitle",
			width: 200
		},
		{
			field: "category",
			align: "left",
			headerAlign: "left",
			headerName: "Category",
			width: 150
		},
		{
			field: "tags",
			align: "left",
			headerAlign: "left",
			headerName: "Tags",
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
					sx={{minWidth: "120px"}}
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
				<StyledDataGridHeader title="Blogs Records"/>
				<StyledDataGrid
					rows={data}
					columns={columns}
					autoPageSize
					autoHeight
					getRowId={blog => blog._id}
					pageSize={50}
				/>
			</StyledDataGridContainer>
			<BlogViewModal values={singleBlog} open={modal} setOpen={setModal}/>
			
		</>
	)
}


const mapStateToProps = ({ blogs }) => ({
	data: blogs.data,
	errMessage: blogs.errMessage
});

export default connect(mapStateToProps)(DashBlogTable)