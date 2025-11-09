
function goToScreen(n){
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  document.getElementById('screen' + n).classList.add('active');
}

function blow(flame){
  flame.style.display = "none";
  checkCandles();
}

function checkCandles(){
  const remaining = document.querySelectorAll('.flame').length;
  if(remaining === 0){
    document.getElementById('wish').classList.remove('hidden');
  }
}


// Heart Rain
setInterval(() => {
  let heart = document.createElement('div');
  heart.classList.add('heart');
  heart.innerHTML = '💗';
  heart.style.left = Math.random()*100 + 'vw';
  heart.style.fontSize = (12 + Math.random()*18) + 'px';
  document.body.appendChild(heart);
  setTimeout(() => heart.remove(), 4000);
}, 350);

// Confetti
function confetti(){
  for(let i=0;i<60;i++){
    let conf = document.createElement('div');
    conf.classList.add('confetti');
    conf.style.left = Math.random()*100 + 'vw';
    conf.style.animationDuration = (1+Math.random()*2)+'s';
    document.body.appendChild(conf);
    setTimeout(()=>conf.remove(),3000);
  }
}

const confettiStyle = `
.confetti {
  position: fixed;
  top: -10px;
  width: 8px; height: 8px;
  background: hsl(` + Math.random()*360 + `,80%,70%);
  animation: drop linear forwards;
}
@keyframes drop {
  to { transform: translateY(100vh) rotate(360deg); }
}`;
let st = document.createElement('style');
st.innerHTML = confettiStyle;
document.head.appendChild(st);

// Trigger confetti when candles all blown
const oldCheck = checkCandles;
checkCandles = function(){
  oldCheck();
  const remaining = document.querySelectorAll('.flame').length;
  if(remaining === 0){
    confetti();
  }
};
