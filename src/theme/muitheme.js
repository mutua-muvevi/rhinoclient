import { createTheme,  } from "@mui/material/styles";

export let theme = createTheme({
	palette: {
		drawer: {
			default: "rgba(19, 19, 19, 1)",
			defaultHalfOpacity: "rgba(19, 19, 19, 0.5)",
		},
		common: {
			black: "#000",
			white: "#fff"
		},
		primary: {
			main: "#dea95f",
			light: "#efc76c",
			dark: "#f48d3a",
			contrastText: "#fff"
		},
		secondary: {
			main: "#dea95f",
			light: "#efc76c",
			dark: "#f48d3a",
			contrastText: "#fff"
		},
		error: {
			halfOpacity: "rgba(211, 63, 63, 0.5)",
			main: "rgba(211, 63, 63, 1)",
			light: "rgba(239, 83, 80, 1)",
			dark: "rgba(198, 40, 40, 1)",
			contrastText: "rgba(255, 255, 255, 1)",
		},
		warning: {
			main: "#ed6c02",
			light: "#ff9800",
			dark: "#e65100",
			contrastText: "#fff"
		},
		info: {
			main: "#0288d1",
			light: "#03a9f4",
			dark: "#01579b",
			contrastText: "#fff"
		},
		success: {
			main: "#2e7d32",
			light: "#4caf50",
			dark: "#1b5e20",
			contrastText: "#fff"
		},
		text: {
			primary: "rgba(220, 220, 220, 0.8)",
			secondary: "rgba(220, 220, 220, 0.6)",
			disabled: "rgba(220, 220, 220, 0.3)",
		},
		background: {
			default: "#202020",
			paper: "#323332"
		}
	},
	shape: {
		default: 4,
		rounded: 10
	},
	typography: {
		fontFamily: "'Rubik', sans-serif",
		h1: {
			fontFamily: "'Rubik', sans-serif",
			fontWeight: "500 !important",
		},
		h2: {
			fontFamily: "'Rubik', sans-serif",
			fontWeight: "500 !important",
		},
		h3: {
			fontFamily: "'Rubik', sans-serif",
			fontWeight: "500 !important",
		},
		h4: {
			fontFamily: "'Rubik', sans-serif",
			fontWeight: "500 !important",
		},
		h5: {
			fontFamily: "'Rubik', sans-serif",
			fontWeight: "500 !important",
		},
		h6: {
			fontFamily: "'Rubik', sans-serif",
			fontWeight: "500 !important",
		},
		subtitle1: {
			fontFamily: "'Fira Sans', sans-serif",
			fontWeight: "500 important",
		},
		subtitle2: {
			fontFamily: "'Fira Sans', sans-serif",
			fontWeight: "500 important",
		},
		body1: {
			fontFamily: "'Fira Sans', sans-serif",
		},
		body2: {
			fontFamily: "'Fira Sans', sans-serif",
		},
		button: {
			fontFamily: "'Fira Sans', sans-serif",
		},
		caption: {
			fontFamily: "'Fira Sans', sans-serif",
		},
		overline: {
			fontFamily: "'Fira Sans', sans-serif",
		},
		
	}
})