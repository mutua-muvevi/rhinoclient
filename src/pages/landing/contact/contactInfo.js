
export const contactInfo = {
	title: "Contact Us",
	subTitle: "Reach Us Today",
	image: {
		src: "https://res.cloudinary.com/dqweh6zte/image/upload/v1649676177/Rhino%20John%20Background%20Video/Rhinojon%20Product%20images/call-center-rhino-transformed_vca5no.jpg",
		alt: "Rhino John Prime Metals receptionist waiting for your phone call"
	},
	footer: {
		src: "https://res.cloudinary.com/dqweh6zte/image/upload/v1649662392/Rhino%20John%20Background%20Video/Rhinojon%20Product%20images/register_gy9vgp.jpg",
		alt: "Client filling a Rhino John Prime Metals Form"
	}
}

export const contactFormInputs = [
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
		type: "text",
		label: "Company",
		required: true,
		name:"company",
		xs:12,
		sm:6
	},
	{
		type: "tel",
		label: "Telephone",
		required: true,
		name:"telephone",
		xs:12,
		sm:6
	},

]

export const contactFormTextArea = [
	{
		type: "text",
		label: "Message",
		required: true,
		name:"message",
		xs: 12,
		multiline : true,
		row: 6
	},
]