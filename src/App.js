import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import injectContext from "./store/appContext.js";
import { Navbar } from "./component/Navbar.jsx";
import { Footer } from "./component/Footer.jsx";

function App() {
  const basename = process.env.BASENAME || "";

	return (
		<div>
			<BrowserRouter basename={basename}>
				{/* <ScrollToTop> */}
					<Navbar />
					<Routes>
						{/* <Route path="/" element={<Home />} /> */}
{/* 						<Route path="/demo" element={<Demo />} />
						<Route path="/single/:theid" element={<Single />} /> */}
						<Route path="*" element={<h1>Not found!</h1>} />
					</Routes>
					<Footer />
				{/* </ScrollToTop> */}
			</BrowserRouter>
		</div>
	);
};

export default injectContext(App);

