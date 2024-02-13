import "../css/main.css";
import loadHomePage from "./homepage";
import projectPage from "./projects";
import loadAbout from "./about";

const aboutBtn = document.querySelector(".about");
const projectsPage = document.querySelector(".projects");
const homeBtn = document.querySelector(".home");

function compo() {
  const el = document.createElement("p");
  el.textContent = "I Am an portfolio";
  el.style.color = "red";
  el.style.fontWeight = "bolder";
  return el;
}
//document.body.appendChild(compo());
loadHomePage();
export function clearContent() {
  const content = document.querySelector(".content");
  content.innerHTML = "";
  return content;
}

aboutBtn.addEventListener("click", (e) => {
  e.preventDefault();
  clearContent();
  loadAbout();
});

projectsPage.addEventListener("click", (e) => {
  e.preventDefault();
  clearContent();
  document.querySelector(".content").appendChild(projectPage());
});

homeBtn.addEventListener("click", (e) => {
  e.preventDefault();
  clearContent();
  document.querySelector(".content").append(loadHomePage());
});
