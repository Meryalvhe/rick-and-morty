import React from "react";
import rickandMorty from "../img/rym.png"
import logo from "../img/logo.png"
import "../styles/navbar.css"


export const Navbar = () => {
	return (
		<header className="d-flex flex-wrap justify-content-center py-3 mb-4">
			<a href="/" className="d-flex align-items-center mb-3 mb-md-0  link-body-emphasis text-decoration-none">
				<img src={rickandMorty} alt="" className="logo" />
				<img src={logo} alt="" />
			</a>
		</header>
	);
};
