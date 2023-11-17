/* cHANGER LE TEXT AUTOMATIQUEMENT*/


let i = 0;

const randomizeText = () => {
  const phrase = document.querySelector('#word');
  const compStyles = window.getComputedStyle(phrase);
  const animation = compStyles.getPropertyValue('animation');
  const animationTime = parseFloat(animation.match(/\d*[.]?\d+/)) * 600;
  
  const phrases = ['Développeur', 'designer'];
  
  i = randomNum(i, phrases.length);
  const newPhrase = phrases[i];
  
  setTimeout(() => {
    phrase.textContent = newPhrase;
  }, 100); // time to allow opacity to hit 0 before changing word
}

const randomNum = (num, max) => {
  let j = Math.floor(Math.random() * max);
  
  // ensure diff num every time
  if (num === j) {
    return randomNum(i, max);
  } else {
    return j;
  }
}

const getAnimationTime = () => {
  const phrase = document.querySelector('#word');
  const compStyles = window.getComputedStyle(phrase);
  let animation = compStyles.getPropertyValue('animation');
  
  // firefox support for non-shorthand property
  animation != "" ? animation : animation = compStyles.getPropertyValue('-moz-animation-duration');
  
    // webkit support for non-shorthand property
  animation != "" ? animation : animation = compStyles.getPropertyValue('-webkit-animation-duration');
  
  
  const animationTime = parseFloat(animation.match(/\d*[.]?\d+/)) * 1000;
  return animationTime;
}

randomizeText();
setInterval(randomizeText, getAnimationTime());


/* Auto writting text*/

const textElement = document.getElementById("text");
const text = "Jeannot";
let index = 1;

const writeText = () => {
  textElement.innerText = text.slice(0, index);
  index++;
  if (index > text.length) index = text.length;
  setTimeout(writeText, 400);
};

writeText();




/* Hover animation sur l'image*/

const desc = document.getElementById("img");
const txt = document.getElementById("txt");

desc.addEventListener("mouseover", () =>{
  txt.style.visibility = "visible";
    n = 0;
});

desc.addEventListener("mouseout", () =>{
    txt.style.visibility = "hidden";   
});






/* Counter*/

var myVar = setInterval(myTimer, 600) ;
var n = 0;

function myTimer() {
  var d = n++ 
  document.getElementById("exp").innerHTML = d;
  if (n > 25) n = 25;
  setTimeout(myTimer, 500);
};

/* animation projets*/

const boxText = document.getElementById("box-txt");
const boxText2 = document.getElementById("box-txt2");
const bttn = document.getElementById("bttn");
const bttn2 = document.getElementById("bttn2");
const Box = document.getElementById("Box");

bttn.addEventListener("click", showDesc);
function showDesc(){
  boxText.style.display = "block";
  boxText2.style.display = "none";
}

bttn2.addEventListener("click", showDesc2);
function showDesc2(){
  boxText2.style.display = "block";
  boxText.style.display = "none";
}




