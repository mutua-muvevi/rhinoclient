import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import DiamondIcon from '@mui/icons-material/Diamond';
import TravelExploreIcon from '@mui/icons-material/TravelExplore';
import ContactSupportIcon from '@mui/icons-material/ContactSupport';
import LockIcon from '@mui/icons-material/Lock';

export const navPages = [
	{
		label: "Home",
		path: "/",
		icon: <HomeIcon/>,
		index: 0
	},
	{
		label: "About",
		path: "/landing/about",
		icon: <InfoIcon/>,
		index: 1
	},
	{
		label: "Service",
		path: "/landing/services",
		icon: <LocalShippingIcon/>,
		index: 2
	},
	{
		label: "Products",
		path: "/landing/products",
		icon: <DiamondIcon/>,
		index: 3
	},
	{
		label: "Track",
		path: "/landing/track",
		icon: <TravelExploreIcon/>,
		index: 4
	},
	{
		label: "Contact",
		path: "/landing/contact",
		icon: <ContactSupportIcon/>,
		index: 5
	},
]

export const navItemBottom = [
	{
		label: "Login",
		path: "/landing/login",
		icon: <LockIcon/>,
		index: 6
	},
]