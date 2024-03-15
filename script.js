const axios = require("axios");

let connectButton = document.querySelector("header .bouton-connexion");
let contactForm = document.getElementById("form-modal");

connectButton.addEventListener("click", () => {
  contactForm.classList.remove("hidden");
});

contactForm.addEventListener("submit", async (event) => {
  event.preventDefault;
  contactForm.classList.add("hidden");

  const data = {
    firstname: document.querySelector("#firstname").value,
    lastname: document.querySelector("#lastname").value,
    email: document.querySelector("#email").value,
    subject: document.querySelector("#subject").value,
    message: document.querySelector("#message").value,
  };

  const response = await axios.post("http://localhost:3000/form", data);
});
