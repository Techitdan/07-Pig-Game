'use strict'

let setTimer= null;
let playing = true;

const counter = function(){
   setTimer = setInterval(function(){
  if(minutes.value<=0 && seconds.value<=0){
    seconds.value=0;
    minutes.value = 0

  } else if(minutes.value !=0 && seconds.value==0){
    seconds.value = 59;
    minutes.value--;
  } else if (seconds.value != 0){
    //seconds.value= seconds.value - 1;
    seconds.value--
  }
},1000)
}

const init = function(){
  minutes.value = 0;
  seconds.value = 0;
}

const startBtn= document.querySelector('.start');
const resetBtn = document.querySelector('.reset');
const minutes = document.querySelector('.minutes');
const seconds = document.querySelector('.seconds');


resetBtn.addEventListener('click',function(){
  console.log('Great')
  init();
  clearInterval(setTimer);
  minutes.removeAttribute('disabled', '');
  seconds.removeAttribute('disabled', ''); 
})

window.addEventListener('load', function(){
 init();
})

startBtn.addEventListener('click', function(){if(playing == true){
  counter();
  playing = false;
  startBtn.textContent = 'Stop'; 
  minutes.setAttribute('disabled', '');
  seconds.setAttribute('disabled', ''); 
} else{
  playing = true;
  clearInterval(setTimer);
  startBtn.textContent = 'Start'; 
}
})