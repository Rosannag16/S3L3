
function aggiungi() {

    const input = document.getElementById("input");
    const lista = document.getElementById("lista");

    if (input.value !== "") {
        const li = document.createElement("li");
        const span = document.createElement("span");
        span.appendChild(document.createTextNode(input.value));
        li.appendChild(span);
        const eliminaBottone = document.createElement("bottone");
        eliminaBottone.appendChild(document.createTextNode("elimina"));

        eliminaBottone.onclick = function () {
            lista.removeChild(li);
        };
        li.appendChild(eliminaBottone);

        li.onclick = function () {
            li.classList.toggle("fatto");
        };

        lista.appendChild(li);

        input.value = "";
    }
}
