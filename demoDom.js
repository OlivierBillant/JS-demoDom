//Recuperation des elements html par id
let monParagraphe = document.getElementById("monParagraphe");
console.log(monParagraphe);

let mesContenus = document.getElementsByClassName("contenu");
console.log(mesContenus);

    for (let i = 0; i < mesContenus.length; i++) {
        console.log(mesContenus[i]);
    }

    for (let contenu of mesContenus) {
        console.log(contenu);
    }

    Array.from(mesContenus).forEach(element => console.log(element));

let articles = document.getElementsByTagName("article");
console.log(articles);

let contenuParagraphe = document.querySelector("#maDiv p.contenu");
console.log(contenuParagraphe);

let elements = document.querySelectorAll("article, p");
console.log(elements);

