function playSpeech(){
    const audio = new Audio("audio/speech.wav");

    setTimeout(() => {
        audio.play();
        document.getElementById("circle4").classList.add("circle4-active");
    }, 3000);
    
  
    setTimeout(() => {
      document.getElementById("circle4").classList.remove("circle4-active");
    }, 40000);
}

playSpeech();