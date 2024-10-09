import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../styles/characters.css"

export const Characters = () => {
	const { store, actions } = useContext(Context);



	return (
		<div className="container mt-5 mb-3">
			{!store ? <h1> not found </h1> :
				<div className="row" >
					{store.characters.map((item, id) =>
						<div key={id} className="col-lg-3 col-md-6 col-sm-12 mb-5">
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




{/* <div className="container mt-3 mb-3">
			{!store ? <h1> not found </h1> :
				<div className="row" >
					{store.characters.map((item, id) => 
					<div key={id} className="col-lg-3 col-md-6 col-sm-10 mb-3">
					<div className="card" >
						<img src={item.image} className="card-img-top" alt={item.name}/>
						<div className="card-body">
							<h5 className="card-title">{item.name}</h5>
							<p className="card-text">Gender: {item.gender}</p>
							<p className="card-text">Gender: {item.species}</p>
						</div>
					</div>
					</div>
					)}
				</div>
			}
		</div> */}
