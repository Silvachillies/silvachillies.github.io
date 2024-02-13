import HTML from "../../static/img/html.png";
import JS from "../../static/img/js.png";
import CSS from "../../static/img/css-3.png";
import React from "../../static/img/atom.png";
function homepage() {
  const homepageland = document.createElement("div");
  homepageland.classList.add("homepage");
  homepageland.appendChild(
    homepageContent("Check out some of our amazing projects")
  );
  homepageland.appendChild(
    homepageContent("Alim Nawaz is an aspiring web developer from London,")
  );
  homepageland.appendChild(
    homepageContent(
      "we utilise the latest technology to build beautiful reponsive websites"
    )
  );
  homepageland.append(Technologies(HTML));
  homepageland.append(Technologies(JS));
  homepageland.append(Technologies(CSS));
  homepageland.append(Technologies(React));

  homepageland.append(
    writeUp(
      "Get in touch today, our team is ready to help you build the site of your dreams "
    )
  );
  return homepageland;
}

function Technologies(...techs) {
  const imageContainer = document.createElement("div");
  imageContainer.classList.add("imageContainer");
  const ourtech = document.createElement("img");
  ourtech.src = techs;
  imageContainer.appendChild(ourtech);
  return imageContainer;
}

function homepageContent(p) {
  const hpcontent = document.createElement("div");
  hpcontent.classList.add("hpcontent");
  hpcontent.textContent = p;
  return hpcontent;
}

function writeUp(text) {
  const writeUp = document.createElement("div");
  //writeUp.classList.add("writeUp");
  writeUp.textContent = text;
  writeUp.style.marginTop = "-10.5rem";
  writeUp.style.maxWidth = "50vw";
  writeUp.style.backgroundColor = "azure";
  writeUp.style.color = "black";
  writeUp.style.padding = "20px";
  writeUp.style.borderRadius = "10px";
  writeUp.style.fontWeight = "80px";

  return writeUp;
}

export default function loadHomePage() {
  document.querySelector(".content").appendChild(homepage());
}
