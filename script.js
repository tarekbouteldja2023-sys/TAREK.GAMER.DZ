// ======== صوت النقر عند الضغط ========
const clickSound = new Audio('click.mp3');

// تفعيل الصوت على كل روابط <a>
document.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    clickSound.currentTime = 0; // يبدأ من البداية
    clickSound.play();
  });
});

// ======== موسيقى الخلفية (اختياري تحكم) ========
const bgMusic = document.getElementById('music');

// يمكنك إضافة زر لإيقاف أو تشغيل الموسيقى إذا أحببت
function toggleMusic() {
  if (bgMusic.paused) {
    bgMusic.play();
  } else {
    bgMusic.pause();
  }
}

// ======== مثال لتحديث عملة المستخدم TBS (مستقبلي) ========
// عند تنفيذ مهمة أو زيارة صفحة
let userCoins = 0;

function addCoins(amount) {
  userCoins += amount;
  console.log("TBS الحالية: " + userCoins);
  // هنا يمكنك ربط قيمة العملات بعنصر واجهة لعرضها
  const coinDisplay = document.getElementById('user-coins');
  if (coinDisplay) {
    coinDisplay.textContent = userCoins + " TBS";
  }
}

// مثال: مكافأة عند الضغط على بطاقة تواصل (يمكنك لاحقاً ربطه مع كل مهمة)
document.querySelectorAll('.social-card').forEach(card => {
  card.addEventListener('click', () => {
    addCoins(20); // كل نقرة تكسب 20 TBS
  });
});

// ======== شريط الترحيب المتحرك (اختياري التحكم بالسرعة) ========
const welcomeText = document.querySelector('.welcome-text');

// لتغيير السرعة أو إعادة التشغيل
function resetWelcome() {
  welcomeText.style.animation = 'none';
  void welcomeText.offsetWidth; // force reflow
  welcomeText.style.animation = '';
}
