import React, { useEffect } from "react";

import { BrowserRouter, Routes, Route} from 'react-router-dom';
import { ThemeProvider } from "@mui/material/styles";
import {theme} from "./theme/muitheme";

import Home from "./pages/landing/home/home";
import About from "./pages/landing/about/about";
import Products from "./pages/landing/products/product";
import Services from "./pages/landing/services/services";
import Contact from "./pages/landing/contact/contact";
import Track from "./pages/landing/track/track";
import Widgets from "./pages/landing/widgets/widgets";

import TrackStorage from "./pages/landing/track/trackstorage";
import Tracklayout from "./components/layout/tracklayout";
import TrackShipment from "./pages/landing/track/trackshipment";

import Dashhome from "./pages/dashboard/home/dashhome";
import DashQuotation from "./pages/dashboard/quotation/quotation";
import Dashshipment from "./pages/dashboard/shipment/shipment";
import Dashstorage from "./pages/dashboard/storage/storage";
import Dashusers from "./pages/dashboard/users/users";
import Layout from "./components/layout/layout";
import Dashmap from "./pages/dashboard/map/map";

import Landinglayout from "./components/layout/landinglayout";
import AuthLayout from "./components/layout/authlayout";

import Login from "./pages/auth/login/login";
import ForgotPassword from "./pages/auth/forgotpassword/forgotpassword";
import ResetPassword from "./pages/auth/resetpassword/resetpassword";

import { connect } from "react-redux";

import { fetchUser } from "./redux/user/useraction"
import { getShipment } from "./redux/shipment/shipmentactions";
import { getStorage } from "./redux/storage/storageaction";

import { getStorageQuotation } from "./redux/storagequotation/storagequotationactions";


function App({ token, getShipment, getStorage, getStorageQuotation, fetchUser }) {

	useEffect(() => {

		try {
			fetchUser(token);

			getShipment(token);
			getStorage(token);
			getStorageQuotation(token)
		} catch (error) {
			console.log("USER ERROR", error)
		}


		// quotation
		
	},[ token, getShipment, getStorage, fetchUser, getStorageQuotation ])

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
							<Route path="/landing/contact" element={<Contact/>}/>
							<Route path="/landing/widgets" element={<Widgets/>}/>
						</Route>
						
						<Route path="/track" element={<Tracklayout/>}>
							<Route path="/track/main" element={<Track/>}/>
							<Route path="/track/shipment" element={<TrackShipment/>}/>
							<Route path="/track/storage" element={<TrackStorage/>}/>
						</Route>

						<Route path="/auth" element={<AuthLayout/>}>
							<Route path="/auth/login" element={<Login/>}/>
							<Route path="/auth/forgotpassword" element={<ForgotPassword/>}/>
							<Route path="/auth/resetpassword/:resetToken" element={<ResetPassword/>}/>
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

const mapStateToProps = ({ auth }) => ({
	token: auth.token,
	errMessage: auth.errMessage
})

const mapDispatchToProps = (dispatch) => ({
	fetchUser: (token) => dispatch(fetchUser(token)),

	getShipment: (token) => dispatch(getShipment(token)),
	getStorage: (token) => dispatch(getStorage(token)),

	getStorageQuotation : (token) => dispatch(getStorageQuotation(token))
})

export default connect(mapStateToProps, mapDispatchToProps)(App)