import Odin from "../../static/img/odin-lined.png";
import Arsenal from "../../static/img/arsenal.png";
import UFC from "../../static/img/UFC.png";

function aboutMe() {
  const about = document.createElement("div");
  about.classList.add("aboutPage");
  about.innerHTML = `
  <h1>ABOUT ME</h1>
  <div class=intro>My name is Alim Nawaz, an aspriring Web Developer. I started my professional career at 17 working in door-to-door sales. 
  Yes I know, the human equivalent of junk mail.</div>
  <div class=intro>During this time I sold broadband, signed people up to charities, Sky TV and much more. All this was on a commission only basis. No sales = No wages.</div>
  <div class=intro>Eventually I used my exprience to move into better sales roles, I worked in media, construction and advertising sectors.</div>
  <div class=experience>Having worked in media I worked closely with some of the software developers within our company, I instantly became\n
  fascinated with the processes of web development.</div>
  <div class=experience>The power of software and the impact it has on our world today, the limitless opportunites it opens up, always fascinated me. The internet's impact on business, communication and society, 
  watching its growth has always amazed me. Talking to some of my colleagues the thing that struck me most was their passion for what they did, how much they enjoyed their work, something I struggled to relate to having worked in sales for so long.</div>
  <div class=experience>At their direction I began studying in my own time, starting with HTML and CSS and Javascript, I began following the Odin Project.</div>
  <div class=intro>Although initally The Odin Project was very challenging (still is), I enjoyed it immensely, being able to solve a problem after being stuck for so long gave me a great feeling of accomplisment. While I had times I felt hopeless I can see myself progressing quite quickly now I've got a grasp on the fundamentals.
  I think FAC will help further solidify those skills, the part I look forward to most is the chance to work with others in the same boat as me, people to bounce ideas off, exploring new approaches to problem solving. People to hold me accountable. Learning on your own whilst balancing work, life and everything else can become tiresome and eventually burnout creeps up on you.
  </div>
  <div class=intro>I especially like the fact that we are expected to have a certain level of competency coming in. Being around others, who have also put similar effort in can and should be a game changer.</div>
  <div class=intro>Outside of work, I am a football fanatic, been a lifelong Arsenal fan, our stadium also happens to be very close the FAC office! I was briefly an amatuer MMA fighter, and still remain an avid MMA/UFC fan.</div>
  <div class=images>
<div class=Odin>
  <img src=${Odin}><caption The Odin Project/></img>
</div>
<div class=Odin>
<img src=${Arsenal}></img>
</div>
<div class=Odin>
<img src=${UFC}></img>
</div>
<div>
  `;

  return about;
}

export default function loadAbout() {
  document.querySelector(".content").appendChild(aboutMe());
}
