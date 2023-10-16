//Selecionando elementos
const headerBtns = document.querySelectorAll(".botao");
const logDiv = document.getElementById("login");
const loginBtn = document.getElementById("logbtn");
const cadBtn = document.getElementById("cadbtn");
const acessarConta = document.getElementById("btnAcessAccount");

if (localStorage.getItem("auth1") === "true") {
  headerBtns.forEach((button) => {
    button.style.display = "none";
  });
  logDiv.innerHTML =
    '<img id="accountcircle" src="images/account_circle.png" alt="">';
  acessarConta.addEventListener("click", () => {
    window.location = "../accountCandidato.html";
  });
} else {
  loginBtn.addEventListener("click", () => {
    window.location = "../login.html";
  });

  cadBtn.addEventListener("click", () => {
    window.location =
      "../cadastroempresa/cadastrocandidato/cadastrocandidato1.html";
  });
  acessarConta.addEventListener("click", () => {
    window.location = "../login.html";
  });
}
