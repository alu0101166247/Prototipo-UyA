function info(){
	var parrafos = document.getElementsByTagName("p")
	console.log("Cantidad de parrafos: " + parrafos.length)
	var enlaces = document.getElementsByTagName("a")
	console.log("Cantidad de enlaces: " + enlaces.length)
	var div = document.getElementsByTagName("div")
	console.log("Cantidad de div: " + div.length)
}
info()