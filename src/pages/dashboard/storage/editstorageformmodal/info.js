import * as Yup from "yup";

export const depositorInformation = [
	{
		type: "text",
		label: "Depositor's Fullname",
		required: true,
		name: "depositorFullname",
		xs: 12,
		sm: 6,
	},
	{
		type: "email",
		label: "Depositor's Email",
		required: true,
		name: "depositorEmail",
		xs: 12,
		sm: 6,
	},
	{
		type: "text",
		label: "Depositor's Telephone",
		name: "depositorTelephone",
		xs: 12,
		sm: 6,
	},
	{
		type: "text",
		label: "Depositor's Company",
		name: "depositorCompany",
		xs: 12,
		sm: 6,
	},
	{
		type: "text",
		label: "Depositor's Address",
		name: "depositorAddress",
		xs: 12,
		sm: 6,
	},
];

export const consigneeInformation = [
	{
		type: "text",
		label: "Consignee's Fullname",
		required: true,
		name: "consigneeFullname",
		xs: 12,
		sm: 6,
	},
	{
		type: "email",
		label: "Consignee's Email",
		required: true,
		name: "consigneeEmail",
		xs: 12,
		sm: 6,
	},
	{
		type: "text",
		label: "Consignee's Telephone",
		name: "consigneeTelephone",
		xs: 12,
		sm: 6,
	},
	{
		type: "text",
		label: "Consignee's Company",
		name: "consigneeCompany",
		xs: 12,
		sm: 6,
	},
	{
		type: "text",
		label: "Consignee's Address",
		name: "consigneeAddress",
		xs: 12,
		sm: 6,
	},
];

export const receiverInformation = [
	{
		type: "text",
		label: "Receiver's Fullname",
		required: true,
		name: "receiverFullname",
		xs: 12,
		sm: 6,
	},
	{
		type: "email",
		label: "Receiver's Email",
		required: true,
		name: "receiverEmail",
		xs: 12,
		sm: 6,
	},
	{
		type: "text",
		label: "Receiver's Telephone",
		name: "receiverTelephone",
		xs: 12,
		sm: 6,
	},
	{
		type: "text",
		label: "Receiver's Date",
		name: "receiverDate",
		xs: 12,
		sm: 6,
	},
	{
		type: "text",
		label: "Receiver's Time",
		name: "receiverTime",
		xs: 12,
		sm: 6,
	},
	{
		type: "text",
		label: "Receiver's Receipt Number",
		name: "receiverReceiptNo",
		xs: 12,
		sm: 6,
	},
];

export const acceptanceInformation = [
	{
		type: "text",
		label: "Goods acceptated for storage from date",
		required: true,
		name: "acceptedFromDate",
		xs: 12,
		sm: 6,
	},
	{
		type: "text",
		label: "Goods acceptated for storage from time",
		required: true,
		name: "acceptedFromTime",
		xs: 12,
		sm: 6,
	},
	{
		type: "text",
		label: "Goods acceptated for storage up to date",
		required: true,
		name: "acceptedToDate",
		xs: 12,
		sm: 6,
	},
	{
		type: "text",
		label: "Goods acceptated for storage up to time",
		required: true,
		name: "acceptedToTime",
		xs: 12,
		sm: 6,
	},
];

export const goodsOwnerInformation = [
	{
		type: "text",
		label: "Goods owner's Fullname",
		required: true,
		name: "ownerFullname",
		xs: 12,
		sm: 6,
	},
	{
		type: "email",
		label: "Goods owner's Email",
		required: true,
		name: "ownerEmail",
		xs: 12,
		sm: 6,
	},
	{
		type: "text",
		label: "Goods owner's Telephone",
		name: "ownerTelephone",
		xs: 12,
		sm: 6,
	},
	{
		type: "text",
		label: "Goods owner's Company",
		name: "ownerCompany",
		xs: 12,
		sm: 6,
	},
	{
		type: "text",
		label: "Goods owner's Address",
		name: "ownerAddress",
		xs: 12,
		sm: 6,
	},
	{
		type: "text",
		label: "Goods owner's Account Number",
		name: "ownerAccountNumber",
		xs: 12,
		sm: 6,
	},
];

export const productDetailsInformation = [
	{
		type: "text",
		label: "Product's HSCode",
		name: "HSCode",
		xs: 12,
		sm: 6,
	},
	{
		type: "number",
		label: "Number of packages / Bags",
		name: "packagesNo",
		xs: 12,
		sm: 6,
	},
	{
		type: "text",
		label: "Product's net quantity in Kgs/Tonnes",
		name: "netQuantity",
		xs: 12,
		sm: 6,
	},
	{
		type: "text",
		label: "Product's market rate at the time of deposit",
		name: "marketRate",
		xs: 12,
		sm: 6,
	},
	{
		type: "text",
		label: "Product's total market value",
		name: "totalMarketValue",
		xs: 12,
		sm: 6,
	},
	{
		type: "text",
		label: "Product's Description",
		name: "description",
		xs: 12,
		sm: 6,
	},
];

export const trackNumber = [
	{
		name: "trackno",
		label: "Track Number",
		required: true,
		type: "text",
		xs: 12,
		sm: 12,
	},
];

export const otherDetails = [
	{
		name: "privateMarks",
		label: "Private marks of the depositor on the packages, if any",
		type: "text",
		xs: 12,
		sm: 6,
	},
	{
		name: "handlingCharges",
		label: "Rate of storage and handling charges",
		type: "text",
		xs: 12,
		sm: 6,
	},
	{
		name: "assuredFor",
		label: "Assured for fire, theft, burglarly, missappropriation, strikes or terrorism",
		type: "text",
		xs: 12,
		sm: 6,
	},
	{
		name: "receiptNumber",
		label: "Receipt number",
		type: "text",
		xs: 12,
		sm: 6,
	},
	{
		name: "receiptValidUpTo",
		label: "Receipt is valid up to",
		type: "text",
		xs: 12,
		sm: 6,
	},
	{
		name: "productOrigin",
		label: "Origin of the product deposited",
		type: "text",
		xs: 12,
		sm: 6,
	},
];


export const FORM_VALIDATION = Yup.object().shape({
	depositorFullname: Yup.string()
		.min(3, "Minimum characters required for depositor's fullname is 3")
		.required("Please add the depositor's Fullname"),
	depositorEmail: Yup.string()
		.email("please add a valid email")
		.min(3, "Minimum characters required for depositor's email is 3")
		.required("Please add the depositor's email"),
	depositorTelephone: Yup.string()
		.min(3, "Minimum characters required for depositor's telephone is 3"),
	depositorCompany: Yup.string()
		.min(3, "Minimum characters required for depositor's company is 3"),
	depositorAddress: Yup.string()
		.min(3, "Minimum characters required for depositor's address is 3"),


	consigneeFullname: Yup.string()
		.min(3, "Minimum characters required for consignee's fullname is 3"),
	consigneeEmail: Yup.string()
		.min(3, "Minimum characters required for consignee's email is 3"),
	consigneeTelephone: Yup.string()
		.min(3, "Minimum characters required for consignee's telephone is 3"),
	consigneeCompany: Yup.string()
		.min(3, "Minimum characters required for consignee's company is 3"),
	consigneeAddress: Yup.string()
		.min(3, "Minimum characters required for consignee's address is 3"),


	receiverFullname: Yup.string()
		.min(3, "Minimum characters required for receiver's fullname is 3"),
	receiverEmail: Yup.string()
		.email("please add a valid email")
		.min(3, "Minimum characters required for receiver's email is 3"),
	receiverTelephone: Yup.string()
		.min(3, "Minimum characters required for receiver's telephone number is 3"),
	receiverDate: Yup.string()
		.min(3, "Minimum characters required for receiver's date is 3"),
	receiverTime: Yup.string()
		.min(3, "Minimum characters required for receiver's time is 3"),
	receiverReceiptNo: Yup.string()
		.min(3, "Minimum characters required for receiver's receipt number is 3"),


	acceptedFromDate: Yup.string()
		.min(3, "Minimum characters required for good's acceptance date is 3"),
	acceptedFromTime: Yup.string()
		.min(3, "Minimum characters required for good's acceptance time is 3"),
	acceptedToDate: Yup.string()
		.min(3, "Minimum characters required for good's acceptance date is 3"),
	acceptedToTime: Yup.string()
		.min(3, "Minimum characters required for good's acceptance time is 3"),


	ownerFullname: Yup.string()
		.min(3, "Minimum characters required for goods owner's fullname is 3"),
	ownerEmail: Yup.string()
		.email("please use a valid email")
		.min(3, "Minimum characters required for goods owner's email is 3"),
	ownerTelephone: Yup.string()
		.min(3, "Minimum characters required for goods owner's telephone is 3"),
	ownerCompany: Yup.string()
		.min(3, "Minimum characters required for goods owner's company is 3"),
	ownerAddress: Yup.string()
		.min(3, "Minimum characters required for goods owner's address is 3"),
	ownerAccountNumber: Yup.string()
		.min(3, "Minimum characters required for goods owner's account number is 3"),

	productDetailArray: Yup.array().of(
		Yup.object().shape({
			HSCode: Yup.string()
				.min(3, "Minimum required characters for HSCode is 3")
				.required(3, "HSCode is required"),
			packagesNo: Yup.number()
				.min(1, "Minimum required characters for HSCode is 1"),
			netQuantity: Yup.string()
				.min(3, "Minimum required characters for net quantity is 3"),
			marketRate: Yup.string()
				.min(3, "Minimum required characters for market rate is 3"),
			totalMarketValue: Yup.string()
				.min(3, "Minimum required characters for total market value is 3"),
			description: Yup.string()
				.min(20, "Minimum required characters for description of the goods is 20")
				.max(1000, "Maximum required characters for description of the goods is 1000")
				.required(3, "HSCode is required"),
			})
	),

	privateMarks: Yup.string()
		.min(3, "Minimum characters required for private marks description is 3"),
	handlingCharges: Yup.string()
		.min(3, "Minimum characters required for handling charges is 3"),
	assuredFor: Yup.string()
		.min(3, "Minimum characters required for assured for is 3"),
	receiptNumber: Yup.string()
		.min(3, "Minimum characters required for receipt number is 3"),
	receiptValidUpTo: Yup.string()
		.min(3, "Minimum characters required for receipt validation period is 3"),
	productOrigin: Yup.string()
		.min(3, "Minimum characters required for product origin is 3"),


	trackno: Yup.string()
		.min(3, "Minimum characters required for track number is 3")
		.required("Please add the a tracking number"),
});
