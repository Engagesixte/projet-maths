let nombre01 = 0;
let nombre02 = 0;
let score = 0;
let nombreQuestions = 0;

function genereQuestion(op) {
    let max = 11; // par défaut pour les additions/soustractions simples

    if (op === "div") {
        const maxFacteur = 10;
        const facteur = Math.floor(Math.random() * (maxFacteur + 1));
        nombre02 = Math.floor(Math.random() * maxFacteur) + 1;
        nombre01 = facteur * nombre02;
    } else if (op === "sub") {
        // Soustractions simples (0 à 10)
        nombre01 = Math.floor(Math.random() * max);
        nombre02 = Math.floor(Math.random() * (nombre01 + 1));
    } else if (op === "sub20") {
        // Soustractions 0 à 20
        max = 21;
        nombre01 = Math.floor(Math.random() * max);
        nombre02 = Math.floor(Math.random() * (nombre01 + 1));
    } else if (op === "sub100") {
        // Soustractions 0 à 100
        max = 101;
        nombre01 = Math.floor(Math.random() * max);
        nombre02 = Math.floor(Math.random() * (nombre01 + 1));
    } else if (op === "add100") {
        do {
            nombre01 = Math.floor(Math.random() * 100);
            nombre02 = Math.floor(Math.random() * 100);
        } while (nombre01 + nombre02 > 100);
    } else {
        // Par défaut : additions ou multiplications simples
        nombre01 = Math.floor(Math.random() * max);
        nombre02 = Math.floor(Math.random() * max);
    }

    // Mise à jour de l'affichage
    document.getElementById("p1").textContent = nombre01;
    document.getElementById("p2").textContent = nombre02;
    document.getElementById("reponseEleve").value = "";
    document.getElementById("resultat").textContent = "";
    document.getElementById("compteurQuestions").textContent = nombreQuestions;
    nombreQuestions++;
}

function verifieReponse(op) {
    const reponse = parseInt(document.getElementById("reponseEleve").value);
    let solution;
    const bravoImg = document.getElementById("mathBravissimo");
    const oopsImg = document.getElementById("mathOops");

    if (op === "add" || op === "add100") {
        solution = nombre01 + nombre02;
    } else if (op === "mul") {
        solution = nombre01 * nombre02;
    } else if (op === "sub" || op === "sub20" || op === "sub100") {
        solution = nombre01 - nombre02;
    } else if (op === "div") {
        solution = Math.floor(nombre01 / nombre02);
    }

    let affichage = "";

    if (isNaN(reponse)) {
        affichage = "Attention, tu n'as pas tapé un nombre.";
        bravoImg.style.display = "none";
        oopsImg.style.display = "none";
    } else if (reponse === solution) {
        score++;
        document.getElementById("scoreAffiche").textContent = score;
        affichage = "✅ Bravo, c'est la bonne réponse !";
        bravoImg.style.display = "inline-block";
        oopsImg.style.display = "none";
    } else {
        affichage = `❌ Oups, la bonne réponse était ${solution}.`;
        bravoImg.style.display = "none";
        oopsImg.style.display = "inline-block";
    }

    document.getElementById("resultat").textContent = affichage;
}