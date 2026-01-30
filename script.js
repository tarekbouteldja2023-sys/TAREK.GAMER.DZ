// تشغيل صوت النقر عند الضغط على أي رابط أو زر
document.querySelectorAll('a, .social-card a').forEach(btn => {
  btn.addEventListener('click', () => {
    const clickSound = new Audio('click.mp3');
    clickSound.play();
  });
});

// ====== عملة TBS ====== //
let tbs = 0; // البداية

const tbsDisplay = document.getElementById('tbs-display');

// دالة لزيادة العملة
function addTBS(amount) {
  tbs += amount;
  updateTBSDisplay();
}

// تحديث عرض العملة في الشريط العلوي
function updateTBSDisplay() {
  if(tbsDisplay){
    tbsDisplay.innerHTML = `<i class="fa-solid fa-coins"></i> ${tbs} TBS`;
  }
}

// مثال: زيادة TBS عند الضغط على مهام أو بطاقات التواصل
document.querySelectorAll('.social-card a').forEach(cardBtn => {
  cardBtn.addEventListener('click', () => {
    addTBS(20); // كل ضغطة تعطي 20 TBS
  });
});

// موسيقى الخلفية تشغيل تلقائي + تحكم
const music = document.getElementById('music');
if(music){
  music.volume = 0.25; // هادئ قليلاً
}

// إضافة مؤثر عند المرور على أيقونات الشريط العلوي (اختياري)
document.querySelectorAll('.top-nav a').forEach(iconBtn => {
  iconBtn.addEventListener('mouseenter', () => {
    iconBtn.style.transform = 'scale(1.1)';
  });
  iconBtn.addEventListener
