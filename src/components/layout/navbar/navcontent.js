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
		icon: <HomeIcon/>
	},
	{
		label: "About",
		path: "/about",
		icon: <InfoIcon/>
	},
	{
		label: "Service",
		path: "/service",
		icon: <LocalShippingIcon/>
	},
	{
		label: "Products",
		path: "/products",
		icon: <DiamondIcon/>
	},
	{
		label: "Track",
		path: "/track",
		icon: <TravelExploreIcon/>
	},
	{
		label: "Contact",
		path: "/contact",
		icon: <ContactSupportIcon/>
	},
]

export const navItemBottom = [
	{
		label: "Login",
		path: "/login",
		icon: <LockIcon/>
	},
]