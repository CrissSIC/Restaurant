import initializeHome from "./home";
import initializeMenu from "./menu";
import initializeContact from "./contact";

function createNav() {
  const navBar = document.createElement("nav");

  const homeBtn = document.createElement("button");
  homeBtn.textContent = "Home";
  homeBtn.classList.add("nav-button");
  homeBtn.addEventListener("click", (e) => {
    if (e.target.classList.contains("select")) return;
    selectButton(homeBtn);
    initializeHome();
  });

  const menuBtn = document.createElement("button");
  menuBtn.textContent = "Menu";
  menuBtn.classList.add("nav-button");
  menuBtn.addEventListener("click", (e) => {
    if (e.target.classList.contains("select")) return;
    selectButton(menuBtn);
    initializeMenu();
  });

  const contactBtn = document.createElement("button");
  contactBtn.textContent = "Contact";
  contactBtn.classList.add("nav-button");
  contactBtn.addEventListener("click", (e) => {
    if (e.target.classList.contains("select")) return;
    selectButton(contactBtn);
    initializeContact();
  });

  navBar.appendChild(homeBtn);
  navBar.appendChild(menuBtn);
  navBar.appendChild(contactBtn);
  return navBar;
}

function selectButton(button) {
  const btns = document.querySelectorAll(".nav-button");
  btns.forEach((button) => {
    if (button !== this) {
      button.classList.remove("select");
    }
  });
  button.classList.add("select");
}

function createMain() {
  const main = document.createElement("main");
  main.classList.add("main");
  main.setAttribute("id", "main");
  return main;
}

function createFooter() {
  const footer = document.createElement("footer");
  footer.classList.add("footer");

  const copyright = document.createElement("p");
  copyright.textContent = "Food photo created by stockking - www.freepik.com";

  const link = document.createElement("a");
  link.href = "https://www.freepik.com/photos/food";
  link.classList.add("link");
  copyright.classList.add("link");

  link.appendChild(copyright);
  footer.appendChild(link);

  return footer;
}

function initializePage() {
  const content = document.getElementById("content");

  content.appendChild(createNav());
  content.appendChild(createMain());
  content.appendChild(createFooter());
  selectButton(document.querySelector(".nav-button"));
  initializeHome();
}

export default initializePage;
