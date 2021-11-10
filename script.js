let points = 0;
let n = 1;
let speed = 1000; 
let hideTime = 400
let status =  document.getElementById("win")
function getRandom(min, max) {
  return Math.random() * (max - min) + min;
}
setInterval(()=>{
  n = Math.floor(getRandom(1,9));
  let box = document.getElementById('c'+n)
  box.classList.toggle("colorbox")

  setTimeout(() => {
	  box.classList.toggle("colorbox");
	}, hideTime);
}, speed);


function Check(box){
  if(box === n){
    points++;
  }
  else if(points>0){
    points--;
  }
  win.innerHTML = 'У тебя ' + points +' очков';
}