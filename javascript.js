
function cargarNoticias(){

	var url = "https://carlosreneas.github.io/endpoints/noticias.json";

	fetch('inico.json')
		.then(response => response.json())
		.then(data => generarTabla(data))
	.catch(error => {});
}

cargarNoticias();