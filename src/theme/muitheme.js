import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
	palette: {
		drawer: {
			default: "#131313"
		},
		common: {
			black: "#000",
			white: "#fff"
		},
		primary: {
			main: "#1976d2",
			light: "#42a5f5",
			dark: "#131212",
			contrastText: "#fff"
		},
		secondary: {
			main: "#dea95f",
			light: "#efc76c",
			dark: "#f48d3a",
			contrastText: "#fff"
		},
		error: {
			main: "#d33f3f",
			light: "#ef5350",
			dark: "#c62828",
			contrastText: "#fff"
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
		// grey: {
		
		// },
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
		fontFamily: "'Roboto', sans-serif",
		h1: {
			fontFamily: "'Source Sans Pro', sans-serif;",
		},
		h2: {
			fontFamily: "'Source Sans Pro', sans-serif;",
		},
		h3: {
			fontFamily: "'Source Sans Pro', sans-serif;",
		},
		h4: {
			fontFamily: "'Source Sans Pro', sans-serif;",
		},
		h5: {
			fontFamily: "'Source Sans Pro', sans-serif;",
		},
		h6: {
			fontFamily: "'Source Sans Pro', sans-serif;",
		},
		subtitle1: {
			fontFamily: "'Roboto', sans-serif",
		},
		subtitle2: {
			fontFamily: "'Roboto', sans-serif",
		},
		body1: {
			fontFamily: "'Roboto', sans-serif",
		},
		body2: {
			fontFamily: "'Roboto', sans-serif",
		},
		button: {
			fontFamily: "'Roboto', sans-serif",
		},
		caption: {
			fontFamily: "'Roboto', sans-serif",
		},
		overline: {
			fontFamily: "'Roboto', sans-serif",
		},
		
	}
})