//sidebar toggle
function toggleNav(){
    document.querySelector("aside").classList.toggle("aside-active");
    document.getElementById("shadow").style.display = "block";
}

document.getElementById("close-icon").onclick = function(){
    document.querySelector("aside").classList.remove("aside-active");
    document.getElementById("shadow").style.display = "none";
}

//text animations
const textElement = document.getElementById("text2");

const sentences = ["ඇද වැටීමක්", "ජලයේ / වතුරේ ගිලීමක්"];

let sentenceIndex = 0;
let charIndex = 0;
let typingSpeed = 100; 
let pauseBetweenSentences = 1500;

function typeText() {
  const currentSentence = sentences[sentenceIndex];
  textElement.textContent = currentSentence.slice(0, charIndex++);

  if (charIndex > currentSentence.length) {
    setTimeout(() => deleteText(), pauseBetweenSentences);
  } else {
    setTimeout(typeText, typingSpeed);
  }
}

function deleteText() {
  const currentSentence = sentences[sentenceIndex];
  textElement.textContent = currentSentence.slice(0, --charIndex);

  if (charIndex === 0) {
    sentenceIndex = (sentenceIndex + 1) % sentences.length;
    setTimeout(typeText, typingSpeed);
  } else { 
    setTimeout(deleteText, typingSpeed);
  }
}

typeText();