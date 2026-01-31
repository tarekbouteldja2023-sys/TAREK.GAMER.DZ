// ============================================
// صوت النقر عند الضغط على أي رابط أو زر
// ============================================
document.querySelectorAll('a, .social-card a').forEach(btn => {
  btn.addEventListener('click', () => {
    const clickSound = new Audio('click.mp3');
    clickSound.play();
  });
});

// ============================================
// نظام العملة TBS مع حفظها في localStorage
// ============================================

// جلب الرصيد من localStorage أو البدء من صفر
let tbs = localStorage.getItem('tbs') ? parseInt(localStorage.getItem('tbs')) : 0;

// عنصر عرض الرصيد في الشريط العلوي
const tbsDisplay = document.getElementById('tbs-display');

// تحديث عرض الرصيد
function updateTBSDisplay() {
  if(tbsDisplay){
    tbsDisplay.innerHTML = `<i class="fa-solid fa-coins"></i> ${tbs} TBS`;
  }
}

// إضافة TBS وحفظه
function addTBS(amount) {
  tbs += amount;
  localStorage.setItem('tbs', tbs);
  updateTBSDisplay();
}

// تحديث عرض الرصيد عند تحميل الصفحة مباشرة
updateTBSDisplay();

// ربط البطاقات الاجتماعية بإضافة TBS عند الضغط
document.querySelectorAll('.social-card a').forEach(cardBtn => {
  cardBtn.addEventListener('click', () => {
    addTBS(20); // يمكن تغيير الرقم حسب المهمة أو البطاقة
  });
});

// ============================================
// موسيقى الخلفية
// ============================================
const music = document.getElementById('music');
if(music){ music.volume = 0.25; }
