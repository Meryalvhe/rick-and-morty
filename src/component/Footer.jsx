import React from "react";
import { Link } from "react-router-dom";
import "../styles/footer.css"


export const Footer = () => {
	return (
		<footer class="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top border-success">
			<div class="col-md-4 d-flex align-items-center ms-5">
				<span class="mb-3 mb-md-0 text-body-secondary font">Made with <i class="fas fa-heart"></i> for Mery Álvarez</span>
			</div>
			<ul class="nav col-md-4 justify-content-end list-unstyled d-flex me-5">
				<li class="ms-3"><Link class="text-body-secondary" to="https://www.linkedin.com/in/luz-mery-alvarez-herrera/"><i class="fab fa-linkedin icon"></i></Link></li>
			</ul>
		</footer>
	);
};
