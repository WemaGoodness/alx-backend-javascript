function getResponseFromAPI() {
	return new Promise((resolve, reject) => {
		fetch('https://intranet.alxswe.com/projects/1225')
			.then(response => {
				if (!response.ok) {
					throw new Error(`HTTP error! status: ${response.status}`);
				}
				return response.json();
			})
			.then(data => resolve(data))
			.catch(error => reject(error));
	});
}

export default getResponseFromAPI;
