function playSpeech(){
    const audio = new Audio("audio/completed.wav");
    document.getElementById("circle4").classList.add("circle4-active");

    audio.play();

    setTimeout(() => {
        document.getElementById("circle4").classList.remove("circle4-active");
        window.location.href = 'voice-input.html';
    }, 5000);
  }

  playSpeech();