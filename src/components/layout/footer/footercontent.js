import LocationOnIcon from '@mui/icons-material/LocationOn';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import EmailIcon from '@mui/icons-material/Email';

import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';


export const footerLeft = {
	title: "About",
	paragraph: [
		`
			Rhinojohn Prime Metal Internatonal Limited is a global company that 
			has grown to become one of the leading players in the precious 
			metals and stones value chain. We focus on trading, safekeeping, 
			logistics and delivery of these valuable products.
		`,
		`
			Our team of globally exposed experts have a combined experience of more 
			than 20 years in this trade and guarantee continous transactions. 
			They will link you to the right actors and dealers in the trade; 
			from Miners (Artisanal and Industrial), Buyers, Sellers, Intermediaries, 
			Refiners and Gemologist.
		`
	]
}

export const footerMiddle = {
	title: "Contact Information",
	body: [
		{
			text: "Karen Nairobi Kenya",
			icon : <LocationOnIcon/>
		},
		{
			text: "+254 20 869 3000",
			icon : <LocalPhoneIcon/>
		},
		{
			text: "info@rhinojonprimemetals.com",
			icon : <EmailIcon/>
		},
	],
	footer: [
		{
			icon : <FacebookIcon/>,
			link: "#"
		},
		{
			icon : <TwitterIcon/>,
			link: "#"
		},
		{
			icon : <InstagramIcon/>,
			link: "#"
		},
		{
			icon : <LinkedInIcon/>,
			link: "#"
		},
	]
}