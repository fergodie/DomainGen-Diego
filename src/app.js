/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here

  let pronoun = ["el", "loco", "travieso", "dale", "esto"];
  let adj = ["ganador", "sueña", "triste", "lugar", "persona"];
  let pepito = ["pepito", "perro", "pampa", "poco", "mucho"];

  for (let i = 0; i < pronoun.length; ++i) {
    for (let e = 0; e < adj.length; ++e) {
      for (let o = 0; o < pepito.length; ++o) {
        console.log(pronoun[i] + adj[e] + pepito[o] + ".com");
      }
    }
  }
};
