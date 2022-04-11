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
import Dashhome from "./pages/dashboard/home/dashhome";
import DashQuotation from "./pages/dashboard/quotation/quotation";
import Dashshipment from "./pages/dashboard/shipment/shipment";
import Dashstorage from "./pages/dashboard/storage/storage";
import Dashusers from "./pages/dashboard/users/users";
import Layout from "./components/layout/layout";
import Dashmap from "./pages/dashboard/map/map";
import Modal from "react-modal";
import Landinglayout from "./components/layout/landinglayout";

Modal.setAppElement("#root")

function App() {
	return (
		<div className="App">
			<BrowserRouter>
				<ThemeProvider theme={theme}>
					<Routes>
						<Route path="/" element={<Home/>} />

						<Route path="/landing" element={<Landinglayout/>}>
							<Route path="/landing/about" element={<About/>}/>
							<Route path="/landing/products" element={<Products/>}/>
							<Route path="/landing/services" element={<Services/>}/>
							<Route path="/landing/track" element={<Track/>}/>
							<Route path="/landing/contact" element={<Contact/>}/>
							<Route path="/landing/widgets" element={<Widgets/>}/>
						</Route>

						<Route path="/dashboard" element={<Layout/>}>
							<Route index element={<Dashhome/>}/>
							<Route path="/dashboard/quotation" element={<DashQuotation/>}/>
							<Route path="/dashboard/shipment" element={<Dashshipment/>}/>
							<Route path="/dashboard/storage" element={<Dashstorage/>}/>
							<Route path="/dashboard/users" element={<Dashusers/>}/>
							<Route path="/dashboard/map" element={<Dashmap/>}/>
						</Route>
						

					</Routes>
				</ThemeProvider>
			</BrowserRouter>
		</div>
	);
}

export default App;