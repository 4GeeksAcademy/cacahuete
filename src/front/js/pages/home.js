import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/home.css";

export const Home = () => {
	const { store, actions } = useContext(Context);
	const [songSuggestion, setSongSuggestion] = useState("");

	useEffect(() => {
		// Aquí podrías cargar datos iniciales si es necesario
	}, []);

	const handleGetSuggestion = async () => {
		// Aquí iría la lógica para obtener una sugerencia de canción
		// Por ahora, solo simularemos una sugerencia
		setSongSuggestion("Canción sugerida: 'Don't Stop the Music' by Rihanna");
	};

	return (
		<div className="text-center mt-5">
			<h1>DJ Song Suggester</h1>
			<button onClick={handleGetSuggestion} className="btn btn-primary">
				Get Song Suggestion
			</button>
			{songSuggestion && (
				<div className="mt-3">
					<p>{songSuggestion}</p>
				</div>
			)}
		</div>
	);
};