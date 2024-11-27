function pan(contenedor) {
    let div = document.createElement("div");
    div.className = "pan1";
    contenedor.appendChild(div);

    let div1 = document.createElement("div");
    div1.className = "pan01";
    contenedor.appendChild(div1);


    let div2 = document.createElement("div");
    div2.className = "pan02";
    contenedor.appendChild(div2);


    let div3 = document.createElement("div");
    div3.className = "pan03";
    contenedor.appendChild(div3);
}

export { pan };