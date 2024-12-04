function toggleNav(){
    document.querySelector("aside").classList.toggle("aside-active");
    document.getElementById("shadow").style.display = "block";
}

document.getElementById("close-icon").onclick = function(){
    document.querySelector("aside").classList.remove("aside-active");
    document.getElementById("shadow").style.display = "none";
}