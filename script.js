// صوت النقر عند الضغط
const clickSound = new Audio('click.mp3');
document.querySelectorAll('a').forEach(link => {
  link.addEventListener('click',()=> {
    clickSound.currentTime = 0;
    clickSound.play();
  });
});

// موسيقى الخلفية
const bgMusic = document.getElementById('music');
function toggleMusic() {
  if(bgMusic.paused){ bgMusic.play(); }
  else{ bgMusic.pause(); }
}

// مثال العملة TBS
let userCoins = 0;
function addCoins(amount) {
  userCoins += amount;
  const coinDisplay = document.getElementById('user-coins');
  if(coinDisplay){ coinDisplay.textContent = userCoins + " TBS"; }
}

// إضافة مكافأة عند الضغط على أي بطاقة تواصل
document.querySelectorAll('.social-card').forEach(card=>{
  card.addEventListener('click',()=>addCoins(20));
});

// شريط الترحيب تحكم بالسرعة
const welcomeText = document.querySelector('.welcome-text');
function resetWelcome(){
  welcomeText.style.animation='none';
  void welcomeText.offsetWidth;
  welcomeText.style.animation='';
}
