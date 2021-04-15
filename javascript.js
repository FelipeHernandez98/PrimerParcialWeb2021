
function cargarNoticias(){

	var url = "https://carlosreneas.github.io/endpoints/noticias.json";

	fetch('url')
		.then(response => response.json())
		.then(data => generarInicio(data))
	.catch(error => {});
}

function generarInicio(json){
	const inicio = document.getElementById('#inicio');

	for(let i in json){
		inicio.innerHTML += `<div><h1>${json[i.titulo]}- ${json[1].categoria}- ${json[i].fecha}</h1>3
							<h3>${json[i].descripcion}</h3>
							<p>${json[i].detalle}</p>
							<img src ='${json[i.img]}'></img></div>`
	}
}

function cargarNoticia1(){

	var url2= "https://carlosreneas.github.io/endpoints/noticia_1.json";

	fetch('url2')
		.then(response => response.json())
		.then(data => generarTabla(data))
	.catch(error => {});
}


function cargarNoticia6(){

	var url3= "https://carlosreneas.github.io/endpoints/noticia_6.json";

	fetch('url3')
		.then(response => response.json())
		.then(data => generarTabla(data))
	.catch(error => {});
}
function cargarCatTec(){

	var url4= "https://carlosreneas.github.io/endpoints/categoria_tecnologia.json";

	fetch('url4')
		.then(response => response.json())
		.then(data => generarTabla(data))
	.catch(error => {});
}
function cargarCatDep(){

	var url5 = "https://carlosreneas.github.io/endpoints/categoria_deporte.json";

	fetch('url5')
		.then(response => response.json())
		.then(data => generarTabla(data))
	.catch(error => {});
}

cargarNoticias();