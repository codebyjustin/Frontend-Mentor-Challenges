const eamil = document.getElementById("email");
const form = document.getElementById("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const email = form["email"].value;
  const emailValue = email.value;
  const small = form.querySelector("small");

  if (!emailValue) {
    email.classList.add("error");
    small.innerTex = "Please provide valid email";
    small.style.display = "inline-block";
  } else if (!validateEmail(emailValue)) {
    email.classList.add("error");
    small.innerTex = "Please provide valid email";
    small.style.display = "inline-block";
  } else {
    email.classList.remove("error");
    email.classList.add("error");
    small.innerTex = "";
    small.style.display = "none";
  }
});

function validateEmail(email) {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}
