import { pan } from "./Ingredientes/pan.js";
import { queso } from "./Ingredientes/queso.js";
import { tomate } from "./Ingredientes/tomate.js";
import { queso2 } from "./Ingredientes/queso2.js";
import { cebolla } from "./Ingredientes/cebolla.js";
import { avondiga } from "./Ingredientes/avondiga.js";
import { lechuga } from "./Ingredientes/lechuga.js";
import { carne } from "./Ingredientes/carne.js";
import { plato } from "./Ingredientes/plato.js";

let root = document.querySelector("#root");
let estructura = document.createElement("div");
estructura.className = "estructura";

root.appendChild(estructura);

pan(estructura);
queso(estructura);
tomate(estructura);
queso2(estructura);
cebolla(estructura);
avondiga(estructura);
lechuga(estructura);
carne(estructura);
plato(estructura);