
export const eventModalFormContent = [
	{
		type: "string",
		label: "Track number",
		required: true,
		name:"trackno",
		xs:12,
		sm:12,
		md:4,
		multiline: false,
		rows: 1
	},
	{
		type: "number",
		label: "Event Number",
		required: true,
		name:"number",
		xs:12,
		sm:12,
		md:4,
		multiline: false,
		rows: 1
	},
	{
		type: "text",
		label: "Current Location",
		required: true,
		name:"currentlocation",
		xs:12,
		md:4,
		multiline: false,
		rows: 1
	},

	{
		type: "text",
		label: "Status",
		required: true,
		name:"shippingstatus",
		xs:12,
		md:4,
		multiline: false,
		rows: 1
	},
	{
		type: "text",
		label: "Description",
		required: true,
		name:"notes",
		xs:12,
		sm:12,
		multiline: true,
		rows: 4
	},
]

export const eventTime = {
	type: "time",
	label: "Item's Name",
	required: true,
	name:"timeevents",
	xs:12,
	sm:4
}

export const eventDate = {
	type: "date",
	label: "Date Events",
	required: true,
	name:"dateevents",
	xs:12,
	sm:4
}