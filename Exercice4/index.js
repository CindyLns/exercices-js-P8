const button = document.getElementById("myButton");
const contenuMessage = "Bonjour, vous avez cliqué sur le bouton !"

function addMessage() {
    const message = document.createElement ('p');
    message.innerText = contenuMessage;

    document.body.appendChild(message);
}

button.addEventListener("click", addMessage);
  