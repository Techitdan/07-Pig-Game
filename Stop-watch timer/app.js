'use strict';

let playing = true;
let startTimer = null;
// Selecting elements
const startBtn = document.querySelector('.start');
const resetBtn = document.querySelector('.reset');
const minutes = document.querySelector('.minutes');
const seconds = document.querySelector('.seconds');

const init = function(){
  minutes.value = 0;
  seconds.value = 0;
}



/* // the set the settimoeout displays a function  once a a stipulated time
setTimeout(function() {
  console.log("i'll show after 2 secs")
}, 2000);
 */
/// the set interval displays a function continuously at a stipulated interval


function counter (){ 
  startTimer = setInterval(function() {if (minutes.value <=0 && seconds.value<=0){
    minutes.value = 0;
    seconds.value = 0;
  } else if (minutes.value != 0 && seconds.value == 0){
   seconds.value = 59;
    minutes.value = minutes.value - 1;
  } else if (seconds.value != 0){
    seconds.value--;

  }}, 1000)
}

resetBtn.addEventListener('click', function(){
  init();
  clearInterval(startTimer);
  startBtn.textContent = 'Start';
  minutes.removeAttribute('disabled');
  seconds.removeAttribute('disabled');

})

window.addEventListener('load', function(){
 init();
})

startBtn.addEventListener('click', function(){
  if(playing == true) {
 counter();
 playing = false;
 startBtn.textContent = 'Stop';
 minutes.setAttribute('disabled', '');
 seconds.setAttribute('disabled', ''); 
} else{
  playing = true;
  clearInterval(startTimer);
  startBtn.textContent = 'Start';
}
})