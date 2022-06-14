

export const blogFormTitle = [

	{
		type: "text",
		label: "Title",
		required: true,
		name:"title",
		xs:12,
		sm:12,
		md:12,
		lg:12,
		xl:12,
	},
	{
		type: "text",
		label: "Subtitle",
		required: true,
		name:"subtitle",
		xs:12,
		sm:12,
		md:12,
		lg:12,
		xl:12,
	}
] 

export const blogImage = [
	{
		type: "text",
		label: "Cover Image",
		required: true,
		name:"coverImage",
		xs:12,
		sm:4
	},
	{
		type: "text",
		label: "Card Image",
		required: true,
		name:"thumbnail",
		xs:12,
		sm:4
	},
]

export const blogFormCategory = {
	type: "text",
	label: "Category",
	required: true,
	name:"category",
	xs:12,
	sm:4
}

export const blogFormTags = {
	type: "text",
	label: "Tags",
	required: true,
	name:"tags",
	xs:12,
	sm:4
}

export const blogContentTitles = [
	{
		type: "text",
		label: "Topic",
		required: true,
		name:"content[-1].header",
		xs:12,
		sm:4
	},
	{
		type: "text",
		label: "Subtopic",
		required: false,
		name:"content[-1].subheader",
		xs:12,
		sm:4
	}
]

export const blogFormContent = [

	{
		type: "text",
		label: "Paragraph",
		required: true,
		name:"paragraph",
		xs:12,
		sm:4
	},
	{
		type: "text",
		label: "List title",
		required: true,
		name:"listtitle",
		xs:12,
		sm:4
	},
	{
		type: "text",
		label: "List Items",
		required: true,
		name:"listitems",
		xs:12,
		sm:4
	},
]
