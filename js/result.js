const logoText = document.querySelector(".logo-text");
const logo = document.querySelector(".logo");
const slogan1 = document.getElementById("slogan1");
const slogan2 = document.getElementById("slogan2");
const popup = document.getElementById("popup");
const shadow = document.getElementById("shadow");

function delay(){
    setTimeout(() => {
       logoText.classList.add("logo-text-active");
       logo.classList.add("logo-active");
       popup.style.bottom = "-30px";
       shadow.style.display = "block";
       slogan1.classList.add("slogan-active");
       slogan2.classList.add("slogan-active");
    }, 2000);
}
delay();
const emergencyButton = document.getElementById("callBtn");
  emergencyButton.addEventListener("click", () => {
    window.location.href = 'completed.html';
});

