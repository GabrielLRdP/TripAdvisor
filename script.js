let connectButton = document.querySelector("header .bouton-connexion");
let contactForm = document.getElementById("form-modal");
let body = document.getElementById("body");

connectButton.addEventListener("click", () => {
  contactForm.classList.remove("hidden");
  body.classList.add("noscroll");
});

contactForm.addEventListener("submit", async (event) => {
  event.preventDefault();
  contactForm.classList.add("hidden");
  body.classList.remove("noscroll");

  const data = {
    firstname: document.querySelector("#firstname").value,
    lastname: document.querySelector("#lastname").value,
    email: document.querySelector("#email").value,
    subject: document.querySelector("#subject").value,
    message: document.querySelector("#message").value,
  };
  console.log(data);
  const response = await axios.post("http://localhost:3000/form", data);
});
