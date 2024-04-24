import FormatQuoteIcon from '@mui/icons-material/FormatQuote';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import WarehouseIcon from '@mui/icons-material/Warehouse';
import GroupIcon from '@mui/icons-material/Group';

// import SettingsIcon from '@mui/icons-material/Settings';

const sx= {
	minWidth: 0,
	// mr: open ? 3 : 'auto',
	justifyContent: 'center',
}

export const listItemsTop = [
	{
		label: "Quotations",
		path: "/dashboard",
		icon: <FormatQuoteIcon sx={sx}/>,
		nested: [
			{}
		],
	},
	{
		label: "Shipment",
		path: "/dashboard/shipment",
		icon: <LocalShippingIcon sx={sx}/>,
		nested: [
			{}
		],
	},
	{
		label: "Storage",
		path: "/dashboard/storage",
		icon: <WarehouseIcon sx={sx}/>,
		nested: [
			{}
		],
	},
	{
		label: "Users",
		path: "/dashboard/users",
		icon:  <GroupIcon sx={sx}/>,
		nested: [
			{}
		],
	},
]

export const listItemsBottom = [
	// {
	// 	label: "Settings",
	// 	path: "#",
	// 	icon:  <SettingsIcon sx={sx}/>,
	// 	nested: [
	// 		{}
	// 	],
	// },
]