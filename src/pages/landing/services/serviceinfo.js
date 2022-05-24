import CurrencyExchangeIcon from '@mui/icons-material/CurrencyExchange';
import FlightTakeoffIcon from '@mui/icons-material/FlightTakeoff';
import DirectionsBoatFilledIcon from '@mui/icons-material/DirectionsBoatFilled';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import ArticleIcon from '@mui/icons-material/Article';
import WarehouseIcon from '@mui/icons-material/Warehouse';

export const serviceBannerInfo = {
	title: "Our Services",
	subTitle: "",
	paragraph: [
		`Kenya being the center hub in Africa with several connections to the rest of the world through accessible entry and exit points by air, sea and road, the existing infrastructures contribute to put Kenya the busiest transit point handling consignments from a multitude of origins to a multiple of destinations across the world.`,
		`We are offering transport, logistics and customs clearance/handling services for local and international shipments providing full logistics activities of shipping, storage and security of consignment. We are operational in Kenya, with offices in big cities of Nairobi, Mombasa, Nakuru, Kisumu, Eldoret and in the main borders of Namanga, Busia and Malaba.`
	],
	image: {
		src: "https://res.cloudinary.com/dqweh6zte/image/upload/v1649662357/Rhino%20John%20Background%20Video/Rhinojon%20Product%20images/containers_flevwd.jpg",
		alt: "Container Depot, Rhino john prime metals"
	},
	footer: {
		src: "https://res.cloudinary.com/dqweh6zte/image/upload/v1649662392/Rhino%20John%20Background%20Video/Rhinojon%20Product%20images/register_gy9vgp.jpg",
		alt: "Container Depot, Rhino john prime metals"
	}
}

export const serviceItemInformation = [
	{
		title: "Trading",
		image: {
			src: "https://res.cloudinary.com/dqweh6zte/image/upload/v1649662367/Rhino%20John%20Background%20Video/Rhinojon%20Product%20images/goldtrading_vzutpy.jpg",
			alt: "Trading services offered by Rhino John Prime Metals"
		},
		paragraph: [
			`We have succeeded in establishing, over the years, a system of partnership with the various actors and stakeholders in the mining sector in Africa, mainly those operating in countries with significant mining reserves and operating mines.`,
			`Among these actors, we find artisanal miners, small and medium scale production mines and mining cooperatives. The other players are traders and commission agents.`,
		],
		id: "service-trading",
		modal: {
			title: "Trading Services",
			id: "service-trading-modal",
			icon: <CurrencyExchangeIcon color="#fff" sx={{fontSize: "180px"}}/>,
			listIcon: <CurrencyExchangeIcon color="secondary"/>,
			image: {
				src: "https://res.cloudinary.com/dqweh6zte/image/upload/v1649662367/Rhino%20John%20Background%20Video/Rhinojon%20Product%20images/goldtrading_vzutpy.jpg",
				alt: "Trading services offered by Rhino John Prime Metals"
			}, 
			paragraph: [
				`We have succeeded in establishing, over the years, a system of partnership with the various actors and stakeholders in the mining sector in Africa, mainly those operating in countries with significant mining reserves and operating mines. Among these actors, we find artisanal miners, small and medium scale production mines and mining cooperatives. The other players are traders and commission agents.`,
				`We organized ourselves and gained notoriety as an agency for facilitating commercial contracts between sellers and buyers of mining products at a reasonable pre-negotiated fee we source, inspect, transport and refine precious stones on behalf of private investors.`,
			],
			list: [
				{
					title: ``,
					paragraph: [""],
					listItems: [``]
				},
				{
					title: ``,
					paragraph: [''],
					listItems: [""]
				},
			]
		}
		
	},

	{
		title: "Air Transport",
		image: {
			src: "https://res.cloudinary.com/dqweh6zte/image/upload/v1649688490/Rhino%20John%20Background%20Video/Rhinojon%20Product%20images/air_transport_u3fywr.jpg",
			alt: "Air Transport services offered by Rhino John Prime Metals"
		},
		paragraph: [
			`We provide air transport services for international deliveries by cargo freight and chartered aircraft with major destinations around the world.`,
			`Very often, in order to ensure secure deliveries by avoiding countless transshipments for deliveries to distant destinations, we offer charter flights for direct transport.`,
		],
		id: "service-air-transport",
		modal: {
			title: "Air Transport",
			id: "service-air-transport-modal",
			icon: <FlightTakeoffIcon color="#fff" sx={{fontSize: "180px"}}/>,
			listIcon: <FlightTakeoffIcon color="secondary"/>,
			image: {
				src: "https://res.cloudinary.com/dqweh6zte/image/upload/v1649688490/Rhino%20John%20Background%20Video/Rhinojon%20Product%20images/air_transport_u3fywr.jpg",
				alt: "Air Transport services offered by Rhino John Prime Metals"
			}, 
			paragraph: [
				`We provide air transport services for international deliveries by cargo freight and chartered aircraft with major destinations around the world. Very often, in order to ensure secure deliveries by avoiding countless transshipments for deliveries to distant destinations, we offer charter flights for direct transport.`,
				`Thanks to the development of our network we can offer you a full range of services to and from anywhere in the world. By referring to blue chip airlines, we are able to control transit times, space allocation and offer greater flexibility allowing us to provide premium service to you and your customers. Our international network and our extensive international agency will always find the right solution to get your product where it needs to be.`,
			],
			list: [
				{
					title: `Air Transport and Logistics Services`,
					paragraph: [
						`To make the air cargo transport operations easy, we work with providers who have air cargo facilities conveniently located near airports, thereby streamlining the movement of urgent air cargo shipments. With their support, we are ensuring a smooth transition on the ground for all last mile delivery requirements. As a chain service for picking up cargo from the place of departure to the final destination, we offer:`,
					],
					listItems: [
						`Airport to airport services`,
						`Door to airport services`,
						`Airport to door services`,
						`Tailored solutions taking into account the particularity of the cargo and the wishes of the customer.`,
					]
				},
				{
					title: `Shipment Tracking`,
					paragraph: [
						`We understand that air freight is a service that must meet deadlines. We therefore ensure through our online portal the visibility of the movement of our shipments with real-time data anywhere in the world.`,
					],
					listItems: [""]
				},
			]
		}
	},
	
	{
		title: "Sea Transport",
		image: {
			src: "https://res.cloudinary.com/dqweh6zte/image/upload/c_crop,h_780,w_1200/v1649688874/Rhino%20John%20Background%20Video/Rhinojon%20Product%20images/seafreight-transformed_dw4sjw.jpg",
			alt: "Sea Transport services offered by Rhino John Prime Metals"
		},
		paragraph: [
			`We offer ocean freight services for several destinations in the world and for each volume, both LCL (Less Than Container Load) as FCL (Full Container Load).`,
			` Our international sea freight service will assist you get your product where it needs to be by covering not only freight movement of your product, but also customs clearance with our in-house team of freight specialists.`,
		],
		id: "service-sea-transport",
		modal: {
			title: "Sea Transport",
			id: "service-sea-transport-modal",
			icon: <DirectionsBoatFilledIcon color="#fff" sx={{fontSize: "180px"}}/>,
			listIcon: <DirectionsBoatFilledIcon color="secondary"/>,
			image: {
				src: "https://res.cloudinary.com/dqweh6zte/image/upload/c_crop,h_780,w_1200/v1649688874/Rhino%20John%20Background%20Video/Rhinojon%20Product%20images/seafreight-transformed_dw4sjw.jpg",
				alt: "Sea Transport services offered by Rhino John Prime Metals"
			}, 
			paragraph: [
				`We offer ocean freight services for several destinations in the world and for each volume, both LCL (Less Than Container Load) as FCL (Full Container Load).`,
				`Our international sea freight service will assist you get your product where it needs to be by covering not only freight movement of your product, but also customs clearance with our in-house team of freight specialists.`,
				`With our online portal, our clients are fully informed of the ocean freight movement by the real time tracking technology.`,
			],
			list: [
				{
					title: ``,
					paragraph: [""],
					listItems: [""]
				},
				{
					title: ``,
					paragraph: [""],
					listItems: [""]
				},
			]
		}
		
	},
	{
		title: "Land Transport",
		image: {
			src: "https://res.cloudinary.com/dqweh6zte/image/upload/v1649688672/Rhino%20John%20Background%20Video/Rhinojon%20Product%20images/transitcargo-transformed_xkxslp.jpg",
			alt: "Land Logistics service by Rhino John Prime Metals"
		},
		paragraph: [
			`We have teams of freight forwarders and road transport service providers experienced with good knowledge and experience.`,
			` Through our strong partnership network in Africa, we provide sustainable road and rail transport solutions for mining products from their places of extraction and production to places of transit and their final destinations.`,
		],
		id: "service-land-transport",
		modal: {
			title: "Land Transport",
			id: "service-land-transport-modal",
			icon: <LocalShippingIcon color="#fff" sx={{fontSize: "180px"}}/>,
			listIcon: <LocalShippingIcon color="secondary"/>,
			image: {
				src: "https://res.cloudinary.com/dqweh6zte/image/upload/v1649688672/Rhino%20John%20Background%20Video/Rhinojon%20Product%20images/transitcargo-transformed_xkxslp.jpg",
				alt: "Land Logistics service by Rhino John Prime Metals"
			}, 
			paragraph: [
				`We have teams of freight forwarders and road transport service providers experienced with good knowledge and experience.`,
				`Through our strong partnership network in Africa, we provide sustainable road and rail transport solutions for mining products from their places of extraction and production to places of transit and their final destinations. Our coverage extend from West Africa to South Africa through East and Central Africa.`,
			],
			list: [
				{
					title: ``,
					paragraph: [""],
					listItems: [""]
				},
				{
					title: ``,
					paragraph: [""],
					listItems: [""]
				},
			]
		}
	},
	{
		title: "Custom Clearance",
		image: {
			src: "https://res.cloudinary.com/dqweh6zte/image/upload/v1649750889/Rhino%20John%20Background%20Video/Rhinojon%20Product%20images/clearance-person-transformed_cklloq.jpg",
			alt: "Customs Clearance, Rhino John Prime Metals"
		},
		paragraph: [
			`From our vast connection with fully licensed customs brokerage companies, we provide clients with the best services with regard to clearance of shipments with customs`,
			` Rhinojohn Prime Metal offers customs clearance services with the preparation and submission of documentation required for import, export and transit.`,
		],
		id: "service-custom-clearance",
		modal: {
			title: "Customs Clearance",
			id: "service-custom-clearance-modal",
			icon: <ArticleIcon color="#fff" sx={{fontSize: "180px"}}/>,
			listIcon: <ArticleIcon color="secondary"/>,
			image: {
				src: "https://res.cloudinary.com/dqweh6zte/image/upload/v1649750889/Rhino%20John%20Background%20Video/Rhinojon%20Product%20images/clearance-person-transformed_cklloq.jpg",
				alt: "Customs Clearance, Rhino John Prime Metals"
			}, 
			paragraph: [
				`From our vast connection with fully licensed customs brokerage companies, we provide clients with the best services with regard to clearance of shipments with customs`,
				`Rhinojohn Prime Metal offers customs clearance services with the preparation and submission of documentation required for import, export and transit. Our team will guide you through any complex documentation process.`,
			],
			list: [
				{
					title: ``,
					paragraph: [""],
					listItems: [""]
				},
				{
					title: ``,
					paragraph: [""],
					listItems: [""]
				},
			]
		}
	},
	{
		title: "Storage Services",
		image: {
			src: "https://res.cloudinary.com/dqweh6zte/image/upload/v1649689200/Rhino%20John%20Background%20Video/Rhinojon%20Product%20images/warehouse-transformed_htf88q.jpg",
			alt: "Storage Services,produced by Rhino John Prime Metals"
		},
		paragraph: [
			`Rhinojohn Prime Metal also offers warehousing and storage services for minerals through available customs bonded warehouses and vaults at our facilities.`,
			` The safety of mining products stored in our custody is guaranteed with the support of both government and private security services.`,
		],
		id: "service-storage",
		modal: {
			title: "Storage Services",
			id: "service-storage-modal",
			icon: <WarehouseIcon color="#fff" sx={{fontSize: "180px"}}/>,
			listIcon: <WarehouseIcon color="secondary"/>,
			image: {
				src: "https://res.cloudinary.com/dqweh6zte/image/upload/v1649662417/Rhino%20John%20Background%20Video/Rhinojon%20Product%20images/warehouse_lx0wm3.jpg",
				alt: "Trading services offered by Rhino John Prime Metals"
			}, 
			paragraph: [
				`We provide air transport services for international deliveries by cargo freight and chartered aircraft with major destinations around the world. Very often, in order to ensure secure deliveries by avoiding countless transshipments for deliveries to distant destinations, we offer charter flights for direct transport.`,
				`Thanks to the development of our network we can offer you a full range of services to and from anywhere in the world. By referring to blue chip airlines, we are able to control transit times, space allocation and offer greater flexibility allowing us to provide premium service to you and your customers. Our international network and our extensive international agency will always find the right solution to get your product where it needs to be.`,
			],
			list: [
				{
					title: ` `,
					paragraph: [" "],
					listItems: [``]
				},
				{
					title: ``,
					paragraph: [''],
					listItems: [""]
				},
			]
		}
	}
]