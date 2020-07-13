




export const getConnect = () => {
	return fetch('http://localhost:3000', {
		method: 'GET'
	}).then((response) => {
		console.log(response);
	})
};