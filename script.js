// صوت النقر عند الضغط على أي رابط أو زر
document.querySelectorAll('a, .social-card a').forEach(btn => {
  btn.addEventListener('click', () => {
    const clickSound = new Audio('click.mp3');
    clickSound.play();
  });
});

// ===== عملة TBS ===== //
let tbs = 0; 
const tbsDisplay = document.getElementById('tbs-display');

function addTBS(amount) {
  tbs += amount;
  updateTBSDisplay();
}

function updateTBSDisplay() {
  if(tbsDisplay){
    tbsDisplay.innerHTML = `<i class="fa-solid fa-coins"></i> ${tbs} TBS`;
  }
}

// مثال: زيادة TBS عند الضغط على بطاقات التواصل
document.querySelectorAll('.social-card a').forEach(cardBtn => {
  cardBtn.addEventListener('click', () => {
    addTBS(20);
  });
});

// موسيقى الخلفية
const music = document.getElementById('music');
if(music){
  music.volume = 0.25;
}

// تأثير Hover للشريط العلوي
document.querySelectorAll('.top-nav a').forEach(iconBtn => {
  iconBtn.addEventListener('mouseenter', () => { iconBtn.style.transform = 'scale(1.1)'; });
  iconBtn.addEventListener('mouseleave', () => { iconBtn.style.transform = 'scale(1)'; });
});
