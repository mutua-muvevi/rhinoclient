export const contactInformation = [
	{
		type: "text",
		label: "Firstname",
		required: true,
		name:"firstname",
		xs:12,
		sm:6
	},
	{
		type: "text",
		label: "Fullname",
		required: true,
		name:"lastname",
		xs:12,
		sm:6
	},
	{
		type: "text",
		label: "Email",
		required: true,
		name:"email",
		xs:12,
		sm:12
	},
	{
		type: "tel",
		label: "Telephone",
		required: true,
		name:"telephone",
		xs:12,
		sm:12
	},
	{
		type: "text",
		label: "Company",
		required: true,
		name:"company",
		xs:12,
		sm:12
	},
]

export const productInformation = [
	{
		name: "trackno",
		label: "Track Number",
		required: true,
		type: "text",
		xs: 12,
		sm: 6
	},
	{
		name: "product",
		label: "Product Name",
		required: true,
		type: "text",
		xs: 12,
		sm: 6
	},
	{
		name: "weight",
		label: "Weight",
		required: true,
		type: "number",
		xs: 12,
		sm: 6
	},
	{
		name: "weightunit",
		label: "Weight Unit",
		required: true,
		type: "text",
		xs: 12,
		sm: 6
	},
	{
		name: "producttype",
		label: "Product Type",
		required: true,
		type: "text",
		xs: 12,
		sm: 6
	},
	{
		name: "pieces",
		label: "Pieces",
		required: true,
		type: "number",
		xs: 12,
		sm: 6
	},
	{
		name: "quality",
		label: "Quality",
		required: true,
		type: "text",
		xs: 12,
		sm: 6
	},
]

export const StorageArea = [
	{
		name: "datein",
		label: "Date In",
		type: "text",
		xs: 12,
		sm: 6
	},
	{
		name: "dateout",
		label: "Date Out",
		type: "text",
		xs: 12,
		sm: 6
	},
]

export const storageEvents = {	
	dates: [
		{
			name: "datein",
			label: "Date In",
			type: "text",
			xs: 12,
			sm: 6
		},
		{
			name: "dateout",
			label: "Date Out",
			type: "text",
			xs: 12,
			sm: 6
		},
	],
	time : [
		{
			name: "intime",
			label: "Date In",
			type: "text",
			xs: 12,
			sm: 6
		},
	
		{
			name: "timeout",
			label: "Date In",
			type: "text",
			xs: 12,
			sm: 6
		},

	]
}

export const textareas = [
	{
		name: "observation",
		label: "Observations",
		type: "text",
		xs: 12,
		required: true,
		multiline : true,
		row: 4
	},
	{
		name: "notes",
		label: "Notes",
		type: "text",
		xs: 12,
		required: true,
		multiline : true,
		row: 4
	},
]
