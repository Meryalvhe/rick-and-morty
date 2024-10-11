import React from "react";
import { Link } from "react-router-dom";
import "../styles/footer.css"


export const Footer = () => {
	return (
		<footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top border-success">
			<div className="col-md-4 d-flex align-items-center ms-5">
				<span className="mb-3 mb-md-0 text-body-secondary font">Made with <i className="fas fa-heart"></i> for Mery Álvarez</span>
			</div>
			<ul className="nav col-md-4 justify-content-end list-unstyled d-flex me-5">
				<li className="ms-3"><Link className="text-body-secondary" to="https://www.linkedin.com/in/luz-mery-alvarez-herrera/"><i className="fab fa-linkedin icon"></i></Link></li>
			</ul>
		</footer>
	);
};
