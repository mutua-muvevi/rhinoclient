import DiamondIcon from '@mui/icons-material/Diamond';
import WarehouseIcon from '@mui/icons-material/Warehouse';
import FlightTakeoffIcon from '@mui/icons-material/FlightTakeoff';

import HandshakeIcon from '@mui/icons-material/Handshake';
import MailLockIcon from '@mui/icons-material/MailLock';
import PersonAddAlt1Icon from '@mui/icons-material/PersonAddAlt1';
import VerifiedIcon from '@mui/icons-material/Verified';


export const aboutBannerCarousel = [
	{
		image: {
			src: "https://res.cloudinary.com/dqweh6zte/image/upload/v1649662365/Rhino%20John%20Background%20Video/Rhinojon%20Product%20images/goldrefining_h4wgig.jpg",
			alt: "Gold been smelted, Rhino John Prime Metals"
		},
		title: "Gold Smelting",
		subtitle: "Removing Impurities From Gold Ore",
		paragraph: [" "]
	},
	{
		image: {
			src: "https://res.cloudinary.com/dqweh6zte/image/upload/c_crop,h_900,w_1500/v1649751851/Rhino%20John%20Background%20Video/Rhinojon%20Product%20images/bankok-warehouse-transformed_l1vkkh.jpg",
			alt: "A warehouse/ storage facility, Rhino John Prime Metals"
		},
		title: "Storage and Warehousing",
		subtitle: "We offer warehousing and storage services for minerals through available customs bonded warehouses and vaults at our facilities.",
		paragraph: [" "]
	},
	{
		image: {
			src: "https://res.cloudinary.com/dqweh6zte/image/upload/v1649688672/Rhino%20John%20Background%20Video/Rhinojon%20Product%20images/transitcargo-transformed_xkxslp.jpg",
			alt: "A truck standing next to a container cruise, Rhino John Prime Metals"
		},
		title: "Land Transport and Logistics",
		subtitle: " We provide sustainable road and rail transport solutions for mining products",
		paragraph: [" "]
	},
	{
		image: {
			src: "https://res.cloudinary.com/dqweh6zte/image/upload/v1649688490/Rhino%20John%20Background%20Video/Rhinojon%20Product%20images/air_transport_u3fywr.jpg",
			alt: "Items being loaded to a cargo plane, Rhino John Prime Metals"
		},
		title: "Air Transport",
		subtitle: " We provide sustainable air transport solutions for all products",
		paragraph: [" "]
	},
	{
		image: {
			src: "https://res.cloudinary.com/dqweh6zte/image/upload/v1649662411/Rhino%20John%20Background%20Video/Rhinojon%20Product%20images/ship4_oohgkd.png",
			alt: "A container ship loaded, Rhino John Prime Metals"
		},
		title: "Sea Transport",
		subtitle: " We provide sustainable sea transport solutions for all products",
		paragraph: [" "]
	}
]


export const aboutIntroContent = {
	title: "More about us",
	paragraph: [
		`Rhinojohn Prime Metal Internatonal Limited is a global company that has grown to become one of the leading players in the precious metals and stones value chain. We focus on trading, safekeeping, logistics and delivery of these valuable products`,
		`Our team of globally exposed experts have a combined experience of more than 20 years in this trade and guarantee continous transactions. They will link you to the right actors and dealers in the trade; from Miners (Artisanal and Industrial), Buyers, Sellers, Intermediaries, Refiners and Gemologist.`,
		`We source our precious metals and gemstones from countries rich in mineral resources around the world especially in Africa and Asia. We work with artisanal miners and registered small mining companies from Kenya, Tanzania, the Democratic Republic of Congo, Ghana, Liberia, Sierra Leone, Bukinafaso, Botswana, Angola, Zimbabwe, South Sudan, Central African Republic, Namibia and Papua New Guinea.`,
		`Our trading policy comply with international standards with regard to tracability and accountability.`,
	],
	link: "/landing/services"
}

export const aboutCoreValuesContent = {
	image: {
		src: "https://res.cloudinary.com/dqweh6zte/image/upload/v1649764305/Rhino%20John%20Background%20Video/Rhinojon%20Product%20images/black_staff_yfqt5i.jpg",
		alt: "A Staff Member Welcoming you, Rhino John Prime Metals"
	},
	title: "Our Values",
	subtitle: "",
	values: [
		{
			icon: <HandshakeIcon sx={{fontSize: 35}}/>,
			valuesTitle: "Trust and Integrity",
			valueText: "Our promises are backed up by actions and we strive to earn and maintain trust with all our stakeholders from the time of introduction to the end of our transaction."
		},
		{
			icon: <MailLockIcon sx={{fontSize: 35}}/>,
			valuesTitle: "Confidentiality",
			valueText: "Due to the nature of business, the transaction and client details are never revealed to any third parties whatsoever."
		},
		{
			icon: <PersonAddAlt1Icon sx={{fontSize: 35}}/>,
			valuesTitle: "Accountability",
			valueText: "Accountability breeds responsibility, and we at Rhinojohn Prime Metal International Limited hold ourselves accountable for everything we do."
		},
		{
			icon: <VerifiedIcon sx={{fontSize: 35}}/>,
			valuesTitle: "Excellence",
			valueText: "We strive to set the highest standard of quality in everything we do"
		}
	]

}

export const aboutCounterInfo = [
	{
		icon: <WarehouseIcon  sx={{ fontSize: 50 }}/>,
		number: 89,
		text: "Storage Locations"
	},
	{
		icon: <FlightTakeoffIcon  sx={{ fontSize: 50 }}/>,
		number: 740,
		text: "Tonnes Shipped"
	},
	{
		icon: <DiamondIcon  sx={{ fontSize: 50 }}/>,
		number: 75,
		text: "Tonnes tonnes of Mineral Sold"
	},
	{
		icon: <WarehouseIcon  sx={{ fontSize: 50 }}/>,
		number: 345,
		text: "Tonnes in Storage"
	},
]
