function queso2(contenedor) {
 
    let divQueso1 = document.createElement("div");
    divQueso1.className = "div-queso1";
    contenedor.appendChild(divQueso1);

    let divQueso2 = document.createElement("div");
    divQueso2.className = "div-queso2";
    contenedor.appendChild(divQueso2);

    let divQueso3 = document.createElement("div");
    divQueso3.className = "div-queso3";
    contenedor.appendChild(divQueso3);
}

export { queso2 };