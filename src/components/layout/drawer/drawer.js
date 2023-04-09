import { NavLink } from "react-router-dom";

import { Divider, IconButton, List, ListItem, Link, ListItemButton} from "@mui/material";
import MuiDrawer from '@mui/material/Drawer';
import { styled } from "@mui/system";

import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItemText from '@mui/material/ListItemText';
import SettingsPowerIcon from '@mui/icons-material/SettingsPower';

import { listItemsBottom, listItemsTop } from "./listItem";

import Logo from "../../../assets/images/logos/Rhino card logo - PNG.png"


const drawerWidth = 240;

const sx= {
	minWidth: 0,
	// mr: open ? 3 : 'auto',
	justifyContent: 'center',
}

// open drawer mixin
const openedMixin = (theme) => ({
	width: drawerWidth,
	transition: theme.transitions.create('width', {
		easing: theme.transitions.easing.sharp,
		duration: theme.transitions.duration.enteringScreen,
	}),
	overflowX: 'hidden',
});

const LogoItem = styled("img")(({theme}) => ({
	width: "95%",
	marginLeft: "auto",
	marginRight: "auto",
	marginBottom: "20px",
	margin: "20px auto"
}))

// close drawer mixing
const closedMixin = (theme) => ({
	transition: theme.transitions.create('width', {
		easing: theme.transitions.easing.sharp,
		duration: theme.transitions.duration.leavingScreen,
	}),
	overflowX: 'hidden',
	width: `calc(${theme.spacing(7)} + 1px)`,
	[theme.breakpoints.up('sm')]: {
		width: `calc(${theme.spacing(8)} + 1px)`,
	},
});


const DrawerHeader = styled('div')(({ theme }) => ({
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'flex-end',
	padding: theme.spacing(0, 1),
	paddingBottom: "10px",

	// necessary for content to be below app bar
	...theme.mixins.toolbar,
}));

const navlinkStyle = {
	textDecoration: "none",
	color: "white"
}



const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
	({ theme, open }) => ({
		color: theme.palette.common.white,
		width: drawerWidth,
		flexShrink: 0,
		whiteSpace: 'nowrap',
		boxSizing: 'border-box',
		backgroundColor: "#131313 !important",
		...(open && {
			...openedMixin(theme),
			'& .MuiDrawer-paper': openedMixin(theme),
		}),
		...(!open && {
			...closedMixin(theme),
			'& .MuiDrawer-paper': closedMixin(theme),
		}),
		}),
);

const StyledListItem = styled(ListItem)(({ theme }) => ({
	margin: 0,
	padding: 0,
	"&:active": {
		backgroundColor: theme.palette.secondary.dark,
		color: "white",
		"& .MuiListItemIcon-root": {
			color: "white"
		}
	},
	"&.Mui-active": {
		backgroundColor: "red",
		color: "white",
		"& .MuiListItemIcon-root": {
			color: "white"
		}
	},
	"&.Mui-selected": {
		backgroundColor: "red",
		color: "white",
		"& .MuiListItemIcon-root": {
			color: "white"
		}
	},
}))

const StyledListItemButton = styled(ListItemButton)(({ theme }) => ({
	"&:hover": {
		backgroundColor: theme.palette.secondary.dark,
		color: "white",
		"& .MuiListItemIcon-root": {
			color: "white"
		}
	},
	"&.Mui-active": {
		backgroundColor: "red",
		color: "white",
		"& .MuiListItemIcon-root": {
			color: "white"
		}
	},
}))

const StyledListItemText = styled(ListItemText)(({ theme }) => ({

	"&$selected:hover": {
		backgroundColor: "purple",
		color: "white",
		"& .MuiListItemIcon-root": {
			color: "white"
		}
	}
}))

const DrawerComponent = ({open, handleDrawerOpen, handleDrawerClose, theme}) => {

	const activeNavlink={
		textDecoration: "none",
		color: theme.palette.primary.main,
		borderTopLeftRadius: "20px",
		borderBottomLeftRadius: "20px",
	}

	const logOut = () => {
		window.localStorage.clear()
	}

	return (
		<Drawer
			anchor="left"
			open={open}
			variant="permanent"
			PaperProps={{
				sx: {
					backgroundColor: "#1c1c1c",
					color: "white",
				  }
			}}
		>
			
			<DrawerHeader>
				<IconButton onClick={handleDrawerClose}>
					{theme.direction === 'rtl' ? <ChevronRightIcon sx = {{color : "#fff"}}/> : <ChevronLeftIcon sx = {{color : "#fff"}}/>}
				</IconButton>
			</DrawerHeader>

			<List >
				<ListItem>
					<LogoItem src={Logo} alt="Rhino John Prime Metal Logo"/>
				</ListItem>
			

				{
					listItemsTop.map((el, index) => (
						<NavLink 
							style={({isActive}) => 
								isActive ? activeNavlink : navlinkStyle
							} 
							to={el.path} 
							key={index}>
							<StyledListItem>
								<StyledListItemButton
									sx={{
										minHeight: 48,
										justifyContent: open ? 'initial' : 'center',
										px: 2.5,
									}}
								>
									{el.icon}
									<StyledListItemText primary={el.label} sx={{ opacity: open ? 1 : 0 , marginLeft: "15px"}} />

								</StyledListItemButton>
								
							</StyledListItem>
						</NavLink>
					))
				}
				<Divider sx={{ color: "secondary" }}/>

				{
					listItemsBottom.map((el, index) => (
						<NavLink 
							style={({isActive}) => 
								isActive ? activeNavlink : navlinkStyle
							} 
							to={el.path} 
							key={index}>
							<ListItemButton
								sx={{
									minHeight: 48,
									justifyContent: open ? 'initial' : 'center',
									px: 2.5,
								}}
							>
								{el.icon}
								<ListItemText primary={el.label} sx={{ opacity: open ? 1 : 0 , marginLeft: "15px"}} />

							</ListItemButton>
						</NavLink>
					))
				}
				<Link  
					href="/auth/login" 
					onClick={logOut}
					style={{textDecoration: "none", color: "white"}}
				>
					<ListItemButton
						sx={{
							minHeight: 48,
							justifyContent: open ? 'initial' : 'center',
							px: 2.5,
						}}
					>
						<SettingsPowerIcon sx={sx}/>
						<ListItemText primary="Sign out" sx={{ opacity: open ? 1 : 0 , marginLeft: "15px"}} />

					</ListItemButton>
				</Link>



			</List>

		</Drawer>
	)
}

export default DrawerComponent