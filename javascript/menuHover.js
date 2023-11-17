const facebook = document.getElementById("Facebook");
const linkedin = document.getElementById("linkedin");
const discord = document.getElementById("Discord");
const behance = document.getElementById("behance");
const fb = document.getElementById("fb");
const ln = document.getElementById("ln");
const dc = document.getElementById("dc");
const be = document.getElementById("be");

facebook.addEventListener("mouseover", () =>{
  fb.classList.add("rotate");
  facebook.classList.add("fb-bg");
});
facebook.addEventListener("mouseout", () =>{
  fb.classList.remove("rotate");
  facebook.classList.remove("fb-bg");
});

linkedin.addEventListener("mouseover", () =>{
  ln.classList.add("rotate");
  linkedin.classList.add("ln-bg");
});
linkedin.addEventListener("mouseout", () =>{
  ln.classList.remove("rotate");
  linkedin.classList.remove("ln-bg");
});

discord.addEventListener("mouseover", () =>{
  dc.classList.add("rotate");
  discord.classList.add("dc-bg");
});
discord.addEventListener("mouseout", () =>{
  dc.classList.remove("rotate");
  discord.classList.remove("dc-bg");
});

behance.addEventListener("mouseover", () =>{
  be.classList.add("rotate");
  behance.classList.add("be-bg");
});
behance.addEventListener("mouseout", () =>{
  be.classList.remove("rotate");
  behance.classList.remove("be-bg");
});




// get the element to animate
const element = document.getElementById('acceuil');
const elementHeight = element.clientHeight;

// listen for scroll event and call animate function
document.addEventListener('scroll', animate);

// check if element is in view
function inView() {
  // get window height
  var windowHeight = window.innerHeight;
  // get number of pixels that the document is scrolled
  var scrollY = window.scrollY || window.pageYOffset;
  
  // get current scroll position (distance from the top of the page to the bottom of the current viewport)
  var scrollPosition = scrollY + windowHeight;
  // get element position (distance from the top of the page to the bottom of the element)
  var elementPosition = element.getBoundingClientRect().top + scrollY + elementHeight;
  
  // is scroll position greater than element position? (is element in view?)
  if (scrollPosition > elementPosition) {
    return true;
  }
  
  return false;
}

// animate element when it is in view
function animate() {
  // is element in view?
  if (inView()) {
      // element is in view, add class to element
      document.getElementById("menu1").style.background = "linear-gradient(90deg,#55E6A5 30%,transparent 10%)";
  }else{
    document.getElementById("menu1").style.background = "linear-gradient(90deg,#827B7B 30%,transparent 10%)";
  }
}