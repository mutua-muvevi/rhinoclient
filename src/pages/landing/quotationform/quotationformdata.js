
export const quotationFormInputs = [
	{
		type: "text",
		label: "Firstname",
		required: true,
		name:"firstname",
		xs:12,
		sm:6,
		lg:6
	},
	{
		type: "text",
		label: "Lastname",
		required: true,
		name:"lastname",
		xs:12,
		sm:6,
		lg:6
	},
	{
		type: "text",
		label: "Company",
		required: false,
		name:"company",
		xs:12,
		sm:6,
		lg:6
	},
	{
		type: "email",
		label: "Email",
		required: true,
		name:"email",
		xs:12,
		sm:6,
		lg:6
	},
	{
		type: "tel",
		label: "Telephone Number",
		required: true,
		name:"telephone",
		xs:12,
		sm:6,
		lg:6
	},
	{
		type: "text",
		label: "City",
		required: true,
		name:"city",
		xs:12,
		sm:6,
		lg:6
	},
	{
		type: "text",
		label: "Country",
		required: true,
		name:"country",
		xs:12,
		sm:6,
		lg:6
	},
	{
		type: "text",
		label: "Product/Service Detail",
		required: true,
		name:"product",
		xs:12,
		sm:6,
		lg:6
	},
]

export const messageTextArea = {
	name: "message",
	label: "Quotation Message",
	type: "text",
	required: true,
	multiline : true,
	row: 4,
	xs: 12,
	sm: 12,
	lg: 6
}