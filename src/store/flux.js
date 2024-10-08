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
			console.log(data.results)
			setStore({ characters: data.results })
		} 
	}
}
};


export default getState;
