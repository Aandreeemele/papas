function avondiga(contenedor) {
    let divAvondiga = document.createElement("div");
    divAvondiga.className = "div-avondiga";

    for (let i = 1; i <= 3; i++) {
        let child = document.createElement("div");
        child.className = `div-avondiga${i}`;
        divAvondiga.appendChild(child); 
    }

    contenedor.appendChild(divAvondiga);
}

export { avondiga };