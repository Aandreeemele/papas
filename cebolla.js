function cebolla(contenedor) {
    let divCebolla = document.createElement("div");
    divCebolla.className = "div-cebolla";

    for (let i = 1; i <= 6; i++) {
        let child = document.createElement("div");
        child.className = `div-cebolla${i}`;
        divCebolla.appendChild(child); 
    }

    contenedor.appendChild(divCebolla);
}

export { cebolla };