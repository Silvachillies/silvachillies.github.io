import RPS from "../../static/img/RPS.png";
import Calculator from "../../static/img/Calculator.png";
import Etch from "../../static/img/Etch-a-Sketch.png";
import Library from "../../static/img/Library.png";
import WeatherApp from "../../static/img/WeatherAPP.png";
const projectItems = {
  RPSLINKS() {
    const RPSLINKS = document.createElement("a");
    RPSLINKS.title = "RPS";
    RPSLINKS.href = "https://silvachillies.github.io/ROCK-PAPER-SCISSORS-UI/";
    return RPSLINKS;
  },
  RPSCODE() {
    const RPSCODE = document.createElement("a");
    RPSCODE.title = "RPS CODE";
    RPSCODE.href = "https://github.com/Silvachillies/ROCK-PAPER-SCISSORS-UI";
    return RPSCODE;
  },
  EASLINKS() {
    const eas = document.createElement("a");
    eas.title = "LIVE";
    eas.href = "https://silvachillies.github.io/ETCH-A-SKETCH/";
    return eas;
  },
  EASCODE() {
    const EASCODE = document.createElement("a");
    EASCODE.title = "CODE";
    EASCODE.href = "https://github.com/Silvachillies/ETCH-A-SKETCH";
    return EASCODE;
  },
  calculatorlinks() {
    const calculator = document.createElement("a");
    calculator.title = "LIVE calculator";
    calculator.href = "https://silvachillies.github.io/Calculator-JS/";
    return calculator;
  },
  calculatorCode() {
    const calculatorCode = document.createElement("a");
    calculatorCode.title = "Calculator Code";
    calculatorCode.href = "https://github.com/Silvachillies/Calculator-JS";
    return calculatorCode;
  },
  librarylink() {
    const library = document.createElement("a");
    library.title = "Live library";
    library.href = "https://silvachillies.github.io/JS-Library/";
    return library;
  },
  libraryCode() {
    const libraryCode = document.createElement("a");
    libraryCode.title = "Library Code";
    libraryCode.href = "https://github.com/Silvachillies/JS-Library";
    return libraryCode;
  },
  weatherLinks() {
    const weather = document.createElement("a");
    weather.title = "Weather";
    weather.href = "https://silvachillies.github.io/Weather-Website/";
    return weather;
  },
  weatherCode() {
    const weatherCode = document.createElement("a");
    weatherCode.title = "Weather Code";
    weatherCode.href = "https://github.com/Silvachillies/Weather-Website";
    return weatherCode;
  },
};

function portfolioItems() {
  const portfolioItemEAS = document.createElement("div");
  //portfolioItemEAS.classList.add("container");
  //portfolioItemEAS.setAttribute("href", projectItems.EASLINKS);
  portfolioItemEAS.innerHTML = `
  <div class="portfolios">
  <p>An Etch-a-Sketch which allows you to draw on a grid in various colours.</p>
  <a class="live" a href = ${projectItems.EASCODE()}>CODE</a>
  <a class ="live EAS" a href = ${projectItems.EASLINKS()}>LIVE</a>
   <img src= ${Etch} class = "projectImages"></img>
  </div>
  <div class="portfolios">
   <p>A Rock, Paper, Scissors game created using HTML, CSS and Javascript.</p>
     <a class="live a href = ${projectItems.RPSCODE()}" >CODE</button>
   <a class="live" a href = ${projectItems.RPSLINKS()}>LIVE</a>
   <img src= ${RPS} class = "projectImages"></img>
   </div>
   <div class="portfolios">
   <p>A calculator built using HTML, CSS and JavaScript</p>
   <a class="live" a href = ${projectItems.calculatorCode()} >CODE</a>
   <a class="live live_calculator" a href = ${projectItems.calculatorlinks()}>LIVE</a>
   <img src= ${Calculator} class = "projectImages"></img>
   </div>
   <div class="portfolios">
   <p>Library, an application which tracks my reading list</p>
   <a class="live" a href = ${projectItems.libraryCode()}>CODE</a>
   <a class="live live_library" a href = ${projectItems.librarylink()}>LIVE</a>
   <img src= ${Library} class = "projectImages"></img>
     </div>
   <div class="portfolios">
   <p>Weather App, utilises a weather API to update weather in a location of your choice</p>
   <a class="live" a href = ${projectItems.weatherCode()}>CODE</a>
   <a class="live live_weather" a href = ${projectItems.weatherLinks()}>LIVE</button>
   <img src= ${WeatherApp} class = "projectImages"></img>
</div>

  `;
  return portfolioItemEAS;
}
export default function projectPage() {
  const projects = document.createElement("div");
  projects.classList.add("projectsPage");

  projects.appendChild(portfolioItems());

  return projects;
}
