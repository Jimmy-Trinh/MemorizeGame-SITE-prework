// global constants
const cluePauseTime = 333; //how long to pause in between clues
const nextClueWaitTime = 1000; //how long to wait before starting playback of the clue sequence

//Global Variables
// var pattern = [1, 2, 4, 3, 4, 2, 5, 6];
var pattern = []
var patternSize = 8 
var progress = 0; 
var gamePlaying = false;
var tonePlaying = false;
var volume = 0.4;  //must be between 0.0 and 1.0
var guessCounter = 0;
var clueHoldTime = 1000; //how long to hold each clue's light/sound (changed to var to speed up)
var mistakes = 0;

const mistakesText = document.getElementById('mistakesText');

function rngPattern(patternSize){
  for (var i = 0; i <= patternSize; i++) {
    pattern[i] = Math.floor(Math.random() * (6 - 1 + 1) + 1); // inclusive range of 1-6 (for # of btns)
  }
}

function startGame(){
  //initialize game variables
  progress = 0;
  gamePlaying = true;
  rngPattern(patternSize)
  mistakes = 0;
  
  // swap the Start and Stop buttons
  document.getElementById("startBtn").classList.add("hidden");
  document.getElementById("stopBtn").classList.remove("hidden");
  playClueSequence();
}

function stopGame(){
  //initialize game variables
  gamePlaying = false;
  
  // swap the Start and Stop buttons
  document.getElementById("startBtn").classList.remove("hidden");
  document.getElementById("stopBtn").classList.add("hidden");
}

// Lighting and clearing a button
function lightButton(btn){
  document.getElementById("button"+btn).classList.add("lit")
}

function clearButton(btn){
  document.getElementById("button"+btn).classList.remove("lit")
}

// plays a clue for user
function playSingleClue(btn){
  if(gamePlaying){
    lightButton(btn);
    playTone(btn,clueHoldTime);
    setTimeout(clearButton,clueHoldTime,btn);
  }
}

function playClueSequence(){
  guessCounter = 0;
  let delay = nextClueWaitTime; //set delay to initial wait time
  clueHoldTime -= 50; // each time clue is played, the Hold time is reduced to speed up clue
  
  for(let i=0;i<=progress;i++){ // for each clue that is revealed so far
    console.log("play single clue: " + pattern[i] + " in " + delay + "ms")
    setTimeout(playSingleClue,delay,pattern[i]) // set a timeout to play that clue
    delay += clueHoldTime;
    delay += cluePauseTime;
  }
}

// win and lose
function loseGame(){
  mistakesText.textContent = "Mistakes remaining: 0";
  stopGame();
  alert("Game Over. You lost.");
}

function winGame(){
  stopGame();
  alert("Congratulations, you won!");
}

// Handling Guesses
function guess(btn){
  console.log("user guessed: " + btn);
  if(!gamePlaying){
    return;
  }

  // add game logic here
  
  // Is Guess correct?
  if (btn == pattern[guessCounter]) {
    // Yes. Is turn over?
    if (guessCounter == progress) {
      // Yes. Is this the last turn?
      if (progress == (pattern.length - 1)) {
        // Yes. Win game!
        winGame();
      } else {
        // Not last turn. Increment progress, play next clue
        progress++;
        playClueSequence();
      }
    } else {
      // No turn is not over. increment guessCounter
      guessCounter++;
    }
  } else {
    // No, incorrect guess. Lose game if 3 mistakes are up.
    // use 2 b/c inclusive
    if (mistakes == 2) {
      loseGame();
    } else {
      mistakes++;
      // alerts user and updates text display on web page to show mistakes
      alert(`You guessed wrong!\n${3-mistakes} mistake(s) remaining.`);
      mistakesText.textContent = "Mistakes remaining: " + (3-mistakes);
      
      playClueSequence();
    }
  }
}

// Sound Synthesis Functions
const freqMap = {
  1: 200,
  2: 250,
  3: 300,
  4: 350,
  5: 400,
  6: 450
}
function playTone(btn,len){ 
  o.frequency.value = freqMap[btn]
  g.gain.setTargetAtTime(volume,context.currentTime + 0.05,0.025)
  tonePlaying = true
  setTimeout(function(){
    stopTone()
  },len)
}
function startTone(btn){
  if(!tonePlaying){
    o.frequency.value = freqMap[btn]
    g.gain.setTargetAtTime(volume,context.currentTime + 0.05,0.025)
    tonePlaying = true
  }
}
function stopTone(){
    g.gain.setTargetAtTime(0,context.currentTime + 0.05,0.025)
    tonePlaying = false
}

//Page Initialization
// Init Sound Synthesizer
var context = new AudioContext()
var o = context.createOscillator()
var g = context.createGain()
g.connect(context.destination)
g.gain.setValueAtTime(0,context.currentTime)
o.connect(g)
o.start(0)

// audio did not play in Chrome
// this makes it so that it checks if user interacts with page to 
document.querySelector('button').addEventListener('click', function() {
  context.resume().then(() => {
    console.log('Playback resumed successfully');
  });
});