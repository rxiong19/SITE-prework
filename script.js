//global constants
const clueHoldTime = 1000; //how long you can hear the tone and light the button
const cluePauseTime = 333; // how long to pause in between clues
const nextClueWaitTime = 1000; // how long to wait before the play hit play

//Global variables
var pattern = [2, 2, 4, 3, 2, 1, 2, 4]; //keep track of the button press
var progress = 0; // how far along the player is in guessing the pattern.
var gamePlaying = false; //keep track of the game status
var tonePlaying = false;
var volume = 0.5; // must be 0.0 < volume <1.0
var guessCounter = 0;

function randomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

function startGame() {
  //initialize the game status
  progress = 0;
  gamePlaying = true;
  let arr = [0, 0, 0];
  pattern = Object.assign(pattern, arr.map(x => randomInt(5)));
  document.getElementById("startBtn").classList.add("hidden");
  document.getElementById("stopBtn").classList.remove("hidden");
  playClueSequence();
}

function stopGame() {
  gamePlaying = false;
  document.getElementById("startBtn").classList.remove("hidden");
  document.getElementById("stopBtn").classList.add("hidden");
}

// Sound Synthesis Functions
const freqMap = {
  1: 261.6,
  2: 329.6,
  3: 392,
  4: 466.2
};
//plays the tone of the buttons 1-4
function playTone(btn, len) {
  o.frequency.value = freqMap[btn];
  g.gain.setTargetAtTime(volume, context.currentTime + 0.05, 0.025);
  tonePlaying = true;
  setTimeout(function() {
    stopTone();
  }, len);
  //document.getElementById("btn"+btn).play();
  var myAudio = new Audio('btn'+btn.toString()+'.wav');
  myAudio.play();
}
//The following two funcs. break up playing the tone into two steps.
//Once you start it, it won't be stop until you call stop
function startTone(btn) {
  if (!tonePlaying) {
    o.frequency.value = freqMap[btn];
    g.gain.setTargetAtTime(volume, context.currentTime + 0.05, 0.025);
    tonePlaying = true;
    document.getElementById("btn" + btn).play();
  }
}
function stopTone() {
  g.gain.setTargetAtTime(0, context.currentTime + 0.05, 0.025);
  tonePlaying = false;
}

//Page Initialization
// Init Sound Synthesizer
var context = new AudioContext();
var o = context.createOscillator();
var g = context.createGain();
g.connect(context.destination);
g.gain.setValueAtTime(0, context.currentTime);
o.connect(g);
o.start(0);

//Lighting the buttons
function lightButton(btn) {
  document.getElementById("button" + btn).classList.add("lit");
}

function clearButton(btn) {
  document.getElementById("button" + btn).classList.remove("lit");
}

//When you want to play a single tone
function playSingleClue(btn) {
  if (gamePlaying) {
    lightButton(btn);
    playTone(btn, clueHoldTime);
    setTimeout(clearButton, clueHoldTime, btn);
  }
}

//run the playing pattern
function playClueSequence() {
  guessCounter = 0;
  let delay = nextClueWaitTime; //set delay to initial wait time
  for (let i = 0; i <= progress; i++) {
    // for each clue that is revealed so far
    console.log("play single clue: " + pattern[i] + " in " + delay + "ms");
    setTimeout(playSingleClue, delay, pattern[i]); // set a timeout to play that clue
    delay += clueHoldTime;
    delay += cluePauseTime;
  }
}

//judging the win and loses
function loseGame() {
  stopGame();
  alert("Game Over. You lost.");
}
function winGame() {
  stopGame();
  alert("Game Over. You won!");
}

//game logic
function guess(btn) {
  console.log("user guessed: " + btn);
  if (!gamePlaying) {
    return;
  }

  if (pattern[guessCounter] != btn) {
    loseGame();
  } else {
    if (progress != guessCounter) {
      guessCounter++;
    } else {
      if (progress != pattern.length - 1) {
        progress++;
        playClueSequence();
      } else {
        winGame();
      }
    }
  }
}
