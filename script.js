// var numberOfDrums = document.querySelectorAll(".drum").length;

// for (var i = 0; i < numberOfDrums; i++) {
//   document.querySelectorAll(".drum")[i].addEventListener("click", handleClick);
// }

// var audio = new Audio("./sounds/crash.mp3");

// function handleClick() {
//   console.log(audio.play());
// }

const drumW = document.querySelector(".drum1");
const drumA = document.querySelector(".drum2");
const drumS = document.querySelector(".drum3");
const drumD = document.querySelector(".drum4");
const drumJ = document.querySelector(".drum5");
const drumK = document.querySelector(".drum6");
const drumL = document.querySelector(".drum7");

var audioW = new Audio("./sounds/crash.mp3");

drumW.addEventListener("click", function () {
  audioW.currentTime = 0;
  audioW.play();
  drumW.style.backgroundColor = "gray";
  setTimeout(() => {
    drumW.style.backgroundColor = "white";
  }, 100);
});

var audioA = new Audio("./sounds/kick-bass.mp3");

drumA.addEventListener("click", function () {
  audioA.currentTime = 0;
  audioA.play();
  drumA.style.backgroundColor = "gray";
  setTimeout(() => {
    drumA.style.backgroundColor = "white";
  }, 100);
});

var audioS = new Audio("./sounds/snare.mp3");

drumS.addEventListener("click", function () {
  audioS.currentTime = 0;
  audioS.play();
  drumS.style.backgroundColor = "gray";
  setTimeout(() => {
    drumS.style.backgroundColor = "white";
  }, 100);
});

var audioD = new Audio("./sounds/tom-1.mp3");

drumD.addEventListener("click", function () {
  audioD.currentTime = 0;
  audioD.play();
  drumD.style.backgroundColor = "gray";
  setTimeout(() => {
    drumD.style.backgroundColor = "white";
  }, 100);
});

var audioJ = new Audio("./sounds/tom-2.mp3");

drumJ.addEventListener("click", function () {
  audioJ.currentTime = 0;
  audioJ.play();
  drumJ.style.backgroundColor = "gray";
  setTimeout(() => {
    drumJ.style.backgroundColor = "white";
  }, 100);
});

var audioK = new Audio("./sounds/tom-3.mp3");

drumK.addEventListener("click", function () {
  audioK.currentTime = 0;
  audioK.play();
  drumK.style.backgroundColor = "gray";
  setTimeout(() => {
    drumK.style.backgroundColor = "white";
  }, 100);
});

var audioL = new Audio("./sounds/tom-4.mp3");

drumL.addEventListener("click", function () {
  audioL.currentTime = 0;
  audioL.play();
  drumL.style.backgroundColor = "gray";
  setTimeout(() => {
    drumL.style.backgroundColor = "white";
  }, 100);
});

document.addEventListener("keydown", function (e) {
  if (e.key === "w" || e.key === "W") {
    audioW.currentTime = 0;
    audioW.play();
    drumW.style.backgroundColor = "gray";
  } else if (e.key === "a" || e.key === "A") {
    audioA.currentTime = 0;
    audioA.play();
    drumA.style.backgroundColor = "gray";
  } else if (e.key === "s" || e.key === "S") {
    audioS.currentTime = 0;
    audioS.play();
    drumS.style.backgroundColor = "gray";
  } else if (e.key === "d" || e.key === "D") {
    audioD.currentTime = 0;
    audioD.play();
    drumD.style.backgroundColor = "gray";
  } else if (e.key === "j" || e.key === "J") {
    audioJ.currentTime = 0;
    audioJ.play();
    drumJ.style.backgroundColor = "gray";
  } else if (e.key === "k" || e.key === "K") {
    audioK.currentTime = 0;
    audioK.play();
    drumK.style.backgroundColor = "gray";
  } else if (e.key === "l" || e.key === "L") {
    audioL.currentTime = 0;
    audioL.play();
    drumL.style.backgroundColor = "gray";
  }
});

document.addEventListener("keyup", function (e) {
  if (e.key === "w" || e.key === "W") {
    drumW.style.backgroundColor = "white";
  }
  if (e.key === "a" || e.key === "A") {
    drumA.style.backgroundColor = "white";
  }
  if (e.key === "s" || e.key === "S") {
    drumS.style.backgroundColor = "white";
  }
  if (e.key === "d" || e.key === "D") {
    drumD.style.backgroundColor = "white";
  }
  if (e.key === "j" || e.key === "J") {
    drumJ.style.backgroundColor = "white";
  }
  if (e.key === "k" || e.key === "K") {
    drumK.style.backgroundColor = "white";
  }
  if (e.key === "l" || e.key === "L") {
    drumL.style.backgroundColor = "white";
  }
});
