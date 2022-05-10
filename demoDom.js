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

//Modifier le Dom
    //Modifier le contenu d'un paragraphe
        //On récupère le paragraphe
        let p =  document.getElementById("monParagraphe");

        // 1 - En utilisant textContent : permet d'insérer du texte dans un élément
            p.textContent += " Message généré par Javascript avec textContent";
            // p.textContent = "Message généré par Javascript";


        // 2 - innerHTML : permet d'insérer du HTML dans un élément
            p.innerHTML = "Message généré par <strong>JS</strong> avec innerHTML";

    //Modifier la classe d'un element
    p.classList.add("rouge");

    //Modifier le style d'un élément
    p.style.color = "red";

    //Frabriquer de nouveaux éléments
    let d = document.getElementById("maDiv");
    let input = document.createElement("input");
    input.setAttribute("type", "password");
    d.appendChild(input);