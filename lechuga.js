function lechuga(contenedor) {
    let divLechuga = document.createElement("div");
    divLechuga.className = "div-lechuga";
    contenedor.appendChild(divLechuga);

    for (let i = 1; i <= 1; i++) {
        let child = document.createElement("div");
        child.className = `div-lechuga${i}`;
        divLechuga.appendChild(child); 
    }

    contenedor.appendChild(divLechuga);
}

export { lechuga };