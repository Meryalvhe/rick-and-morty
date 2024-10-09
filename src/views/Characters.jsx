import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../styles/characters.css"

export const Characters = () => {
	const { store, actions } = useContext(Context);



	return (
		<div className="container mt-5 mb-3 d-flex aling-items-center">
			{!store ? <h1> not found </h1> :
				<div className="row" >
					{store.characters.map((item, id) =>
						<div key={id} className="col-lg-3 col-md-6 col-sm-12 mb-5 d-flex justify-content-center">
							<div className="card">
								<div className='card-image d-flex aling-items-center'>
									<img src={item.image} className="card-img image" alt={item.name} />
								</div>
								<div className="text-center">
									<h6 className="heading">{item.name}</h6>
									<p className=""> <strong>Gender:</strong> {item.gender}</p>
									<p className=""> <strong>Specie:</strong> {item.species}</p>
									<p className=""><strong>Status:</strong> {item.status}</p>
								</div>
							</div>
						</div>
					)}
				</div>
			}
		</div>


	);
};

