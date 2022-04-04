
export const shippersInformation = [
	{
		type: "text",
		label: "Shipper's Fullname",
		required: true,
		name:"shippersfullname",
		xs:12,
		sm:6
	},
	{
		type: "email",
		label: "Shipper's Email",
		required: true,
		name:"shippersemail",
		xs:12,
		sm:6
	},
	{
		type: "text",
		label: "Shipper's ID/Passport",
		required: true,
		name:"shippersidno",
		xs:12,
		sm:12
	},
	{
		type: "tel",
		label: "Shipper's Telephone",
		required: true,
		name:"shipperstelephone",
		xs:12,
		sm:12
	},
	{
		type: "tel",
		label: "Shipper's Company",
		required: true,
		name:"shipperscompany",
		xs:12,
		sm:12
	},
	{
		type: "tel",
		label: "Shipper's Address",
		required: true,
		name:"shippersaddress",
		xs:12,
		sm:12
	},
]

export const cosignInformation = [
	{
		type: "text",
		label: "Cosign Fullname",
		required: true,
		name:"consignfullname",
		xs:12,
		sm:6
	},
	{
		type: "email",
		label: "Cosign Email",
		required: true,
		name:"consignaddress",
		xs:12,
		sm:6
	},
	{
		type: "tel",
		label: "Cosign Telephone",
		required: true,
		name:"consigntelephone",
		xs:12,
		sm:12
	},
	{
		type: "text",
		label: "Cosign Company",
		required: true,
		name:"consigncompany",
		xs:12,
		sm:12
	},
]


export const collectorInformation = [
	{
		type: "text",
		label: "Collector's Fullname",
		required: true,
		name:"collectorfullname",
		xs:12,
		sm:6
	},
	{
		type: "email",
		label: "Collector's Email",
		required: true,
		name:"collectoraddress",
		xs:12,
		sm:6
	},
	{
		type: "tel",
		label: "Collector's Telephone",
		required: true,
		name:"collectortel",
		xs:12,
		sm:12
	},
	{
		type: "tel",
		label: "Collector's Address",
		required: true,
		name:"collectoraddress",
		xs:12,
		sm:12
	},
]


export const itemInformation = [
	{
		type: "text",
		label: "Track Number",
		required: true,
		name:"trackno",
		xs:12,
		sm:12
	},
	{
		type: "text",
		label: "Item Name",
		required: true,
		name:"itemsname",
		xs:12,
		sm:12
	},
	{
		type: "number",
		label: "Item Weight",
		required: true,
		name:"itemsweight",
		xs:12,
		sm:12
	},
	{
		type: "text",
		label: "Weight unit",
		required: true,
		name:"itemsweightunit",
		xs:12,
		sm:12
	},
	{
		type: "number",
		label: "Number of items",
		required: true,
		name:"itemspieces",
		xs:12,
		sm:12
	},
	{
		type: "text",
		label: "Quality",
		required: true,
		name:"itemsquality",
		xs:12,
		sm:12
	},
	{
		type: "text",
		label: "Packaging Unit Name",
		required: true,
		name:"quantifiableunit",
		xs:12,
		sm:12
	},
	{
		type: "text",
		label: "Item State",
		required: true,
		name:"itemsproducttype",
		xs:12,
		sm:12
	},
]


export const departureInformation = {
	location: [
		{
			type: "text",
			label: "Origin Service City",
			required: true,
			name:"departurecity",
			xs:12,
			sm:12
		},
		{
			type: "text",
			label: "Origin Service Country",
			required: true,
			name:"departurecountry",
			xs:12,
			sm:12
		},
	],

	date : {
		type: "text",
		label: "Departure Date",
		required: true,
		name:"departuredate",
		xs:12,
		sm:12
	},
	time: {
		type: "text",
		label: "Departure Time",
		required: true,
		name:"departuretime",
		xs:12,
		sm:12
	},
}


export const destinationInformation = {
	location : [
		{
			type: "text",
			label: "Destination City",
			required: true,
			name:"arrivalcity",
			xs:12,
			sm:12
		},
		{
			type: "text",
			label: "Destination Country",
			required: true,
			name:"arrivalcountry",
			xs:12,
			sm:12
		}
	],
	date : {
		type: "text",
		label: "Arrival Date",
		required: true,
		name:"arrivaldate",
		xs:12,
		sm:12
	},
	time: {
		type: "text",
		label: "Arrival Time",
		required: true,
		name:"arrivaltime",
		xs:12,
		sm:12
	},
}

export const logisticsInformation = [
	{
		type: "text",
		label: "Mode of transport",
		required: true,
		name:"logisticstype",
		xs:12,
		sm:12
	},
]

