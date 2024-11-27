function plato(contenedor){
    let divplato = document.createElement("div");
    divplato.className = "div-plato";
    contenedor.appendChild(divplato);

    let divTitulo = document.createElement('div')
    divTitulo.className = "div-titulo"
    contenedor.appendChild(divTitulo)

    let divTitulo1 = document.createElement('div')
    divTitulo1.className = "div-titulo1"
    divTitulo1.textContent = "Hamburguesa 😋"
    contenedor.appendChild(divTitulo1)
}
export { plato };