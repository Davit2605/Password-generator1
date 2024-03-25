const btnEl = document.getElementById("btn");
const copyEl = document.querySelector(".fa-copy");
const inputEl = document.getElementById("input");
const alertEl = document.querySelector(".alert-container");

btnEl.addEventListener("click", () => {
  generatePassword();
});
copyEl.addEventListener("click", () => {
  copyPassword();
  if (inputEl.value) {
    alertEl.classList.remove("active");
    setTimeout(() => {
      alertEl.classList.add("active");
    }, 2000);
  }
});

function generatePassword() {
  let password = "";
  const chars =
    "0123456789abcdefghijklmnopqrstuvwxtz!@#$%^&*()_+?:{}[]ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const passwordLength = 14;
  for (let index = 0; index < passwordLength; index++) {
    const randomPassword = Math.floor(Math.random() * chars.length);
    password += chars.substring(randomPassword, randomPassword + 1);
  }
  inputEl.value = password;
  alertEl.innerText = password + "  copied!";
}

function copyPassword() {
  inputEl.select();
  inputEl.setSelectionRange(0, 9999);
  navigator.clipboard.writeText(inputEl.value);
}
