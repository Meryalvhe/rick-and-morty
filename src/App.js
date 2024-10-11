import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import injectContext from "./store/appContext.js";
import { Navbar } from "./component/Navbar.jsx";
import { Footer } from "./component/Footer.jsx";

function App() {
  const basename = process.env.BASENAME || "";

	return (
		<div className="d-flex flex-column min-vh-100">
			<BrowserRouter basename={basename}>
					<Navbar />
					<Routes>
					</Routes>
					<Footer />
			</BrowserRouter>
		</div>
	);
};

export default injectContext(App);

