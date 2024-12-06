const logoText = document.getElementById("logo-text");
const logo = document.getElementById("logo");
const slogan1 = document.getElementById("slogan1");
const slogan2 = document.getElementById("slogan2");
const popup = document.getElementById("popup");
const shadow = document.getElementById("shadow");

function delay(){
    setTimeout(() => {
      /*
       logoText.style.width = ""
       logoText.style.left = ""
       logoText.style.top = ""
       logo.style.left = ""*/
       logoText.style.display = "none";
       logo.style.display = "none";
       popup.style.bottom = "-30px";
       shadow.style.display = "block";
       slogan1.classList.add("slogan-active");
       slogan2.classList.add("slogan-active");
    }, 2000);
}
delay();
/*setTimeout(() => {
    document.getElementById("screen1").classList.add("hidden");
    document.getElementById("screen2").classList.remove("hidden");
}, 3000);
*/
const emergencyButton = document.getElementById("callBtn");
  emergencyButton.addEventListener("click", () => {
    window.location.href = 'completed.html';
});

