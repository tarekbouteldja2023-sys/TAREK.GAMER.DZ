// موسيقى الخلفية
const profileMusic = document.getElementById('profile-music');
if(profileMusic) profileMusic.volume = 0.25;

// صوت النقر
document.querySelectorAll('button, input').forEach(el => {
  el.addEventListener('click', ()=>{ new Audio('click.mp3').play(); });
});

// ===== بيانات المستخدم =====
let users = JSON.parse(localStorage.getItem('users')) || {};
let currentUser = null;

// عناصر
const loginBox = document.getElementById('login-box');
const userPanel = document.getElementById('user-panel');
const userNameDisplay = document.getElementById('user-name');
const userAvatarDisplay = document.getElementById('user-avatar');
const userPassDisplay = document.getElementById('user-pass');
const userTbsDisplay = document.getElementById('user-tbs');
const userTimeDisplay = document.getElementById('user-time');

// تسجيل الدخول
document.getElementById('login-btn').addEventListener('click', ()=>{
  const uname = document.getElementById('username').value.trim();
  const pass = document.getElementById('password').value.trim();
  const avatarFile = document.getElementById('avatar').files[0];

  if(!uname || !pass){ alert('املأ جميع الحقول'); return; }

  if(!users[uname]) users[uname] = { pass: pass, tbs:0, time:0, avatar:'' };
  currentUser = users[uname];

  // رفع الصورة
  if(avatarFile){
    const reader = new FileReader();
    reader.onload = function(e){ currentUser.avatar = e.target.result; updateUserPanel(); saveUsers(); };
    reader.readAsDataURL(avatarFile);
  } else {
    updateUserPanel();
    saveUsers();
  }
  loginBox.style.display='none';
  userPanel.style.display='block';
});

// تحديث واجهة المستخدم
function updateUserPanel(){
  if(!currentUser) return;
  userNameDisplay.innerText = document.getElementById('username').value.trim();
  userAvatarDisplay.src = currentUser.avatar || 'profile.png';
  userPassDisplay.innerText = '******';
  userTbsDisplay.innerText = currentUser.tbs;
  userTimeDisplay.innerText = currentUser.time + ' دقيقة';
}

// حفظ المستخدمين
function saveUsers(){ localStorage.setItem('users', JSON.stringify(users)); }

// عداد وقت التفاعل
setInterval(()=>{
  if(currentUser){ currentUser.time += 1; updateUserPanel(); saveUsers(); }
}, 60000);

// إرسال TBS
document.getElementById('send-btn').addEventListener('click', ()=>{
  const recipient = document.getElementById('send-to').value.trim();
  const amount = parseInt(document.getElementById('send-amount').value);
  if(!recipient || isNaN(amount) || amount <=0){ alert('أدخل البيانات صحيحة'); return; }
  if(!currentUser) return;
  if(currentUser.tbs < amount){ alert('رصيدك غير كافي'); return; }
  if(!users[recipient]){ alert('المستخدم غير موجود'); return; }

  currentUser.tbs -= amount;
  users[recipient].tbs += amount;
  saveUsers();
  updateUserPanel();
  alert(`تم إرسال ${amount} TBS إلى ${recipient}`);
});

// تسجيل الخروج
document.getElementById('logout-btn').addEventListener('click', ()=>{
  currentUser=null;
  loginBox.style.display='block';
  userPanel.style.display='none';
});

// ===== صفحة المدير =====
const adminIcon = document.getElementById('admin-icon');
const adminPopup = document.getElementById('admin-popup');
const adminLoginBtn = document.getElementById('admin-login-btn');
const adminCloseBtn = document.getElementById('admin-close-btn');
const adminUserInput = document.getElementById('admin-user');
const adminPassInput = document.getElementById('admin-pass');
const adminInfo = document.getElementById('admin-info');
const usersListDiv = document.getElementById('users-list');

adminIcon.addEventListener('click', ()=>{ adminPopup.style.display='block'; });
adminCloseBtn.addEventListener('click', ()=>{ adminPopup.style.display='none'; adminInfo.style.display='none'; });

// كلمة سر المدير الثابتة
const ADMIN_USERNAME = 'tarek_264_x';
const ADMIN_PASSWORD = '7243576372435763';

adminLoginBtn.addEventListener('click', ()=>{
  const u = adminUserInput.value.trim();
  const p = adminPassInput.value.trim();
  if(u===ADMIN_USERNAME && p===ADMIN_PASSWORD){
    adminInfo.style.display='block';
    usersListDiv.innerHTML='';
    for(let key in users){
      const udata = users[key];
      usersListDiv.innerHTML += `<p>${key} - TBS: ${udata.tbs} - وقت: ${udata.time} دقيقة</p>`;
    }
  } else alert('اسم المستخدم أو كلمة المرور خاطئة');
});
