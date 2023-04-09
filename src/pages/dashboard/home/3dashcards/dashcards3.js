import { Link } from "react-router-dom";
import { Grid, Button } from "@mui/material";

import Sizeheaderlandscape4 from "../../../../components/widgets/cards/4sizeheaderlandscape/sizeheaderlandscape4";

import { FaWarehouse, FaQuoteLeft, FaPlane } from "react-icons/fa";
import { connect } from "react-redux";


const Dashcards3 = ({ shipment, storage, quotation }) => {
	
	const transportCardsContent = [
		{
			title : {
				left: "All Shipments",
				right: 	<Link to="/dashboard/shipment">
							<Button color="primary">View</Button>
						</Link>
			},
			body: {
				left: <FaPlane  sx={{ fontSize : 30}} />,
				right: shipment ? shipment.length : ""
			},
			footer: "A huge increase from last year"
		},
		{
			title : {
				left: "All Storage",
				right: 	<Link to="/dashboard/storage">
							<Button color="primary">View</Button>
						</Link>
			},
			body: {
				left: <FaWarehouse  sx={{ fontSize : 30}} />,
				right: 6
			},
			footer: "A huge increase from last year"
		},
		{
			title : {
				left: "Quotations",
				right:	<Link to="/dashboard/quotation">
							<Button color="primary">View</Button>
						</Link>
			},
			body: {
				left: <FaQuoteLeft  sx={{ fontSize : 30}} />,
				right: quotation.length
			},
			footer: "A huge increase from last year"
		},
	]

	return (
		<Grid container spacing={0.5} >
			{
				transportCardsContent.map((item, i) => (
					<Grid key={i} item lg={4} sm={12} xs={12}>
						<Sizeheaderlandscape4 item={item} />
					</Grid>
				))
			}
		</Grid>
	)
}

const mapStateToProps = ({shipment, storage, quotation}) => ({
	shipment: shipment.data,
	storage: storage.data,
	quotation: quotation.data,
});

export default connect(mapStateToProps)(Dashcards3)