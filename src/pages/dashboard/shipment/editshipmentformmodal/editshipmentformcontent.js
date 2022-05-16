
export const shippersInformation = [
	{
		type: "text",
		label: "Shipper's Fullname",
		required: true,
		name:"shippersfullname",
		xs:12,
		sm:4
	},
	{
		type: "email",
		label: "Shipper's Email",
		required: true,
		name:"shippersemail",
		xs:12,
		sm:4
	},
	{
		type: "text",
		label: "Shipper Company",
		required: true,
		name:"shipperscompany",
		xs:12,
		sm:4
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
		type: "text",
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
		label: "Cosignee Fullname",
		required: true,
		name:"consignfullname",
		xs:12,
		sm:4
	},
	{
		type: "email",
		label: "Cosignee Email",
		required: true,
		name:"consignemail",
		xs:12,
		sm:4
	},
	{
		type: "text",
		label: "Cosignee Company",
		required: true,
		name:"consigncompany",
		xs:12,
		sm:4
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
		label: "Cosignee Address",
		required: true,
		name:"consignaddress",
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
		sm:4
	},
	{
		type: "email",
		label: "Collector's Email",
		required: true,
		name:"collectoremail",
		xs:12,
		sm:4
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
		type: "text",
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
		label: "Item's Name",
		required: true,
		name:"itemsname",
		xs:12,
		sm:4
	},
	{
		type: "number",
		label: "Item's Weight",
		required: true,
		name:"itemsweight",
		xs:12,
		sm:4
	},
	{
		type: "text",
		label: "Unit",
		required: true,
		name:"itemsweightunit",
		xs:12,
		sm:4
	},
	{
		type: "text",
		label: "Track Number",
		required: true,
		name:"trackno",
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
]


export const departureInformation = {
	location: [
		{
			type: "text",
			label: "Origin Service Area",
			required: true,
			name:"departureaddress",
			xs:12,
			sm:6
		},
		{
			type: "text",
			label: "Departure Airport Code",
			required: true,
			name:"departureairportcode",
			xs:12,
			sm:6
		},
	],

	date : {
		type: "text",
		label: "Date of Departure",
		required: false,
		name:"departuredate",
		xs:12,
		sm:12
	},
	time: {
		type: "text",
		label: "Time of Departure",
		required: false,
		name:"departuretime",
		xs:12,
		sm:12
	},
}


export const destinationInformation = {
	location : [
		{
			type: "text",
			label: "Destination Address",
			required: true,
			name:"arrivaladdress",
			xs:12,
			sm:6
		},
		{
			type: "text",
			label: "Arrival Airport Code",
			required: true,
			name:"arrivalairportcode",
			xs:12,
			sm:6
		},
	],
	date : {
		type: "text",
		label: "Estimated Arrival Date",
		required: true,
		name:"arrivaldate",
		xs:12,
		sm:12
	},
	time: {
		type: "text",
		label: "Estimated Arrival Time",
		required: true,
		name:"arrivaltime",
		xs:12,
		sm:12
	},
}


