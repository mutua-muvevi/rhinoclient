export const contactInformation = [
	{
		type: "text",
		label: "Fullname",
		required: true,
		name:"fullname",
		xs:12,
		sm:6
	},
	{
		type: "email",
		label: "Email",
		required: true,
		name:"email",
		xs:12,
		sm:6
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
		name: "description",
		label: "Product Context",
		required: true,
		type: "text",
		xs: 12,
		sm: 6
	}
]

export const StorageArea = [
	{
		name: "storageaddress",
		label: "Storage Address",
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
			type: "date",
			xs: 12,
			sm: 6
		},
		{
			name: "dateout",
			label: "Date Out",
			type: "date",
			xs: 12,
			sm: 6
		},
	],
	time : [
		{
			name: "timein",
			label: "Time In",
			type: "time",
			xs: 12,
			sm: 6
		},
	
		{
			name: "timeout",
			label: "Time Out",
			type: "time",
			xs: 12,
			sm: 6
		},

	]
}

export const textareas = [
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
