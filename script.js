const texts = [
  "Aspiring Software Engineer",
  "Full Stack Developer",
  "AI Enthusiast",
  "Cloud Learner"
];

let speed = 100;

const textElements = document.querySelector(".typing");

let textIndex = 0;
let charIndex = 0;

/* TYPING EFFECT */
function typeWriter(){

  if(charIndex < texts[textIndex].length){

    textElements.innerHTML += texts[textIndex].charAt(charIndex);

    charIndex++;

    setTimeout(typeWriter,speed);

  }

  else{

    setTimeout(eraseText,1500);

  }

}

function eraseText(){

  if(textElements.innerHTML.length > 0){

    textElements.innerHTML =
    textElements.innerHTML.slice(0,-1);

    setTimeout(eraseText,50);

  }

  else{

    textIndex++;

    if(textIndex >= texts.length){
      textIndex = 0;
    }

    charIndex = 0;

    setTimeout(typeWriter,500);

  }

}

window.onload = typeWriter;
/* CURSOR GLOW EFFECT */

const glow = document.querySelector(".cursor-glow");

document.addEventListener("mousemove", (e) => {

  glow.style.left = e.clientX + "px";
  glow.style.top = e.clientY + "px";

});