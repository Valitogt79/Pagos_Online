//* Obteniendo las llaves publica y privada
import STRIPE_KEYS from "./stripe-keys.js";

//* definiendo las variables
const d = document,
  $tacos = d.getElementById("tacos"),
  $template = d.getElementById("taco-template").content,
  $fragment = d.createDocumentFragment();

//* Realizando la conexion a la API de Stripe

fetch("https://api.stripe.com/v1/products", {
  headers: {
    //Autorizacion de autenticacion con stripe
    Authorization: `Bearer ${STRIPE_KEYS.secret}`,
  },
}).then((res) => {
  console.log(res);
});
