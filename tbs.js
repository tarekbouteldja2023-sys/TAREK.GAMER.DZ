// ===== موسيقى الخلفية =====
const music = document.getElementById('music');
if (music) music.volume = 0.25;

// ===== أصوات النقر =====
document.querySelectorAll('a, .social-card a, .sidebar a').forEach(el => {
  el.addEventListener('click', () => {
    const clickSound = new Audio('click.mp3');
    clickSound.play();
  });
});

// ===== نظام TBS =====
let tbs = parseInt(localStorage.getItem('tbs')) || 0;
const tbsDisplay = document.getElementById('tbs-display');

function updateTBSDisplay() {
  if (tbsDisplay) tbsDisplay.innerHTML = `<i class="fa-solid fa-coins"></i> ${tbs} TBS`;
}

// إضافة TBS
function addTBS(amount) {
  tbs += amount;
  localStorage.setItem('tbs', tbs);
  updateTBSDisplay();
  showTBSNotify(amount);
}

// إشعار المكافأة
function showTBSNotify(amount) {
  const notify = document.querySelector('.tbs-notify');
  if (!notify) return;

  notify.innerText = `لقد حصلت على +${amount} TBS!`;
  notify.style.display = 'block';
  setTimeout(() => { notify.style.display = 'none'; }, 2000);
}

// مثال: إضافة 20 TBS عند الضغط على أي بطاقة اجتماعية
document.querySelectorAll('.social-card a').forEach(card => {
  card.addEventListener('click', () => {
    addTBS(20);
  });
});

// تحديث العرض عند تحميل الصفحة
updateTBSDisplay();