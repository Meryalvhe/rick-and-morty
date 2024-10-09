const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			message: null,
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			],
			characters: [{}]

		},
		actions: {

	 		getCharactersRaM: async () => {
			const response = await fetch('https://rickandmortyapi.com/api/character/?page=1');
			if (!response.ok) {
				console.log('error');
				return
			}
			const data = await response.json();
			setStore({ characters: data.results });
		},
			getNewCharactersRaM: async (newPage) =>{
				const response = await fetch(`https://rickandmortyapi.com/api/character/?page=${newPage}`)
				if(!response.ok){
					console.log('error:')
				};
				const data = await response.json();
				let newsCharacters = data.results;
				setStore({characters: [...getStore().characters.concat(newsCharacters)]});
			}

	}
}
};


export default getState;
