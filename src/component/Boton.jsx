import React, { useContext, useEffect, useState } from "react";
import "../styles/boton.css"
import { Context } from "../store/appContext";

export const Boton = () => {

const [ newCharacters, setNewCharacter] = useState(2);
const { store, actions } = useContext(Context);

const setNewsCharacters=(value)=>{
	value = newCharacters;
	setNewCharacter(newCharacters + 1);
	actions.getNewCharactersRaM(newCharacters.toString());
}


	return (
		<div className="container d-flex justify-content-center mb-5">
			<button className="beautiful-button" onClick={()=>setNewsCharacters(newCharacters)}>
				See more!
			</button>
		</div>
	);
};