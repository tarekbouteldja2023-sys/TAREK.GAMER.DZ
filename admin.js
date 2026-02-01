// موسيقى الخلفية
const adminMusic = document.getElementById('admin-music');
if(adminMusic) adminMusic.volume = 0.25;

// صوت النقر
document.querySelectorAll('button, input').forEach(el => {
  el.addEventListener('click', ()=>{ new Audio('click.mp3').play(); });
});

// بيانات المستخدمين من localStorage
let users = JSON.parse(localStorage.getItem('users')) || {};

// عناصر
const adminLoginBox = document.getElementById('admin-login-box');
const adminPanel = document.getElementById('admin-panel');
const usersListDiv = document.getElementById('users-list');
const adminLogoutBtn = document.getElementById('admin-logout-btn');

// بيانات المدير
const ADMIN_USERNAME = 'tarek_264_x';
const ADMIN_PASSWORD = '7243576372435763';

// تسجيل الدخول
document.getElementById('admin-login-btn').addEventListener('click', ()=>{
  const uname = document.getElementById('admin-username').value.trim();
  const pass = document.getElementById('admin-password').value.trim();
  if(uname === ADMIN_USERNAME && pass === ADMIN_PASSWORD){
    adminLoginBox.style.display='none';
    adminPanel.style.display='block';
    updateUsersList();
  } else alert('اسم المستخدم أو كلمة المرور خاطئة');
});

// تحديث قائمة المستخدمين
function updateUsersList(){
  usersListDiv.innerHTML='';
  for(let key in users){
    const udata = users[key];
    usersListDiv.innerHTML += `<p><strong>${key}</strong> - TBS: ${udata.tbs} - وقت التفاعل: ${udata.time} دقيقة</p>`;
  }
}

// تسجيل الخروج
adminLogoutBtn.addEventListener('click', ()=>{
  adminPanel.style.display='none';
  adminLoginBox.style.display='block';
});