import { BrowserRouter, Routes, Route} from 'react-router-dom';
import { ThemeProvider } from "@mui/material/styles";
import About from "./pages/landing/about/about";
import Contact from "./pages/landing/contact/contact";
import Home from "./pages/landing/home/home";
import Products from "./pages/landing/products/product";
import Services from "./pages/landing/services/services";
import Track from "./pages/landing/track/track";
import {theme} from "./theme/muitheme";
import Widgets from "./pages/landing/widgets/widgets";

function App() {
	return (
		<div className="App">
			<BrowserRouter>
				<ThemeProvider theme={theme}>
					<Routes>
						<Route path="/" element={<Home/>} />
						<Route path="/about" element={<About/>}/>
						<Route path="/products" element={<Products/>}/>
						<Route path="/services" element={<Services/>}/>
						<Route path="/track" element={<Track/>}/>
						<Route path="/contact" element={<Contact/>}/>
						<Route path="/widgets" element={<Widgets/>}/>
					</Routes>
				</ThemeProvider>
			</BrowserRouter>
		</div>
	);
}

export default App;