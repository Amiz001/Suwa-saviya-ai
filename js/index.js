//sidebar toggle
function toggleNav(){
    document.querySelector("aside").classList.toggle("aside-active");
    document.getElementById("shadow").style.display = "block";
}

document.getElementById("close-icon").onclick = function(){
    document.querySelector("aside").classList.remove("aside-active");
    document.getElementById("shadow").style.display = "none";
}

//sidebar select effect
const items = document.querySelectorAll("li");

items.forEach(item => {

  item.addEventListener("click", event =>{
    items.forEach(i => {
          i.classList.replace('li-active', "");
      });
      event.target.classList.toggle("li-active");
  });
});

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

//voice result page

function displayBtn(){
    /*document.getElementById("header").style.display = "none";
    document.getElementById("list1").style.display = "none";
    document.getElementById("button-line").style.display = "none";*/
    document.getElementById("action-btn").style.display = "none";
    document.getElementById("result-view").style.display = "block";
}

function micAnimate(){
  document.getElementById("small-circle").classList.add("circle-active");
  document.getElementById("large-circle").classList.remove("large-circle-active");

  setTimeout(() => {
    document.getElementById("small-circle").classList.remove("circle-active");
    window.location.href = 'voice-result.html';
  }, 8000);
}

//display contact
function displayContact(){
  document.querySelector("section").classList.toggle("section-active");

  document.getElementById("back").onclick = function(){
    document.querySelector("section").classList.remove("section-active");
  }
}

    


    