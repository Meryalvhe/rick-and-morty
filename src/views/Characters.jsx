import React from "react";
import "../styles/characters.css"
import { Link } from "react-router-dom";

export const Characters = () => {
	/* 	const { store, actions } = useContext(Context);
		const params = useParams(); */
	return (
		<div class="card mt-4">
			<img src="..." class="card-img-top" alt="..."/>
				<div class="card-body">
					<h5 class="card-title">Card title</h5>
					<p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
					<Link href="#" class="btn btn-primary">Go somewhere</Link>
				</div>
		</div>
	);
};
