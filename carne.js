function carne(contenedor) {
    let divCarne = document.createElement("div");
    divCarne.className = "div-carne1";
    contenedor.appendChild(divCarne);

    let divCarne2 = document.createElement("div");
    divCarne2.className = "div-carne2";
    contenedor.appendChild(divCarne2);
    
}

export { carne };