import HomeIcon from '@mui/icons-material/Home';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import WarehouseIcon from '@mui/icons-material/Warehouse';
import ArticleIcon from '@mui/icons-material/Article';
import GroupIcon from '@mui/icons-material/Group';
import MapIcon from '@mui/icons-material/Map';
import CreateNewFolderIcon from '@mui/icons-material/CreateNewFolder';

import SettingsIcon from '@mui/icons-material/Settings';

const sx= {
	minWidth: 0,
	// mr: open ? 3 : 'auto',
	justifyContent: 'center',
}

export const listItemsTop = [
	{
		label: "Home",
		path: "/dashboard",
		icon: <HomeIcon sx={sx}/>,
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
		label: "Quotation",
		path: "/dashboard/quotation",
		icon:  <ArticleIcon sx={sx}/>,
		nested: [
			{}
		],
	},
	{
		label: "Resources",
		path: "/dashboard/resources",
		icon:  <CreateNewFolderIcon sx={sx}/>,
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
	{
		label: "Map",
		path: "/dashboard/map",
		icon:  <MapIcon sx={sx}/>,
		nested: [
			{}
		],
	},
]

export const listItemsBottom = [
	{
		label: "Settings",
		path: "#",
		icon:  <SettingsIcon sx={sx}/>,
		nested: [
			{}
		],
	},
]