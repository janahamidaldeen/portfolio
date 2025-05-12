const typewriterElement = document.getElementById("typewriter");
const words = ["developer", "engineer", "innovator", "entrepreneur", "maker", "leader"];
let wordIndex = 0;
let charIndex = 0;
let typing = true;

function typeEffect() {
  const currentWord = words[wordIndex];
  
  if (typing) {
    typewriterElement.textContent = currentWord.substring(0, charIndex + 1);
    charIndex++;

    if (charIndex === currentWord.length) {
      typing = false;
      setTimeout(typeEffect, 800); // pause before deleting
    } else {
      setTimeout(typeEffect, 100);
    }

  } else {
    typewriterElement.textContent = currentWord.substring(0, charIndex - 1);
    charIndex--;

    if (charIndex === 0) {
      typing = true;
      wordIndex = (wordIndex + 1) % words.length;
      setTimeout(typeEffect, 100);
    } else {
      setTimeout(typeEffect, 50);
    }
  }
}

typeEffect();
