// الموسيقى
const music=document.getElementById('music');
if(music){music.volume=0.25;}

// صوت النقر
document.querySelectorAll('button').forEach(btn=>{
  btn.addEventListener('click', ()=>{ new Audio('click.mp3').play(); });
});

// ساعة رقمية وترحيب
function updateClock(){
  const now = new Date();
  let h = now.getHours();
  let m = now.getMinutes();
  let s = now.getSeconds();
  if(h<10) h='0'+h;
  if(m<10) m='0'+m;
  if(s<10) s='0'+s;
  document.getElementById('clock').innerText = `${h}:${m}:${s}`;
  
  // رسالة ترحيب حسب الوقت
  let msg = 'مرحبا بك في الموقع!';
  if(h>=5 && h<12) msg='صباح الخير!';
  else if(h>=12 && h<18) msg='مساء الخير!';
  else msg='تصبح على خير!';
  document.getElementById('welcome-msg').innerText = msg;
}
setInterval(updateClock,1000);
updateClock();

// استرجاع البيانات
let tbs = parseInt(localStorage.getItem('tbs')) || 0;
let timeSpent = parseInt(localStorage.getItem('timeSpent')) || 0;

setInterval(()=>{
  timeSpent++;
  localStorage.setItem('timeSpent',timeSpent);
  if(document.getElementById('time-spent')) document.getElementById('time-spent').innerText = `${timeSpent} دقيقة`;
},60000);

// تسجيل الدخول
document.getElementById('login-btn').addEventListener('click', ()=>{
  const username = document.getElementById('username-field').value;
  const password = document.getElementById('password-field').value;
  const profileImgInput = document.getElementById('profile-img-input').files[0];

  if(!username || !password){alert('الرجاء إدخال البيانات كاملة'); return;}

  let reader = new FileReader();
  reader.onload = function(e){
    if(profileImgInput) localStorage.setItem('profileImage', e.target.result);
    saveUser(username,password);
    showProfile();
  };
  if(profileImgInput) reader.readAsDataURL(profileImgInput);
  else { saveUser(username,password); showProfile(); }
});

function saveUser(username,password){
  localStorage.setItem('username',username);
  localStorage.setItem('password',password);
  localStorage.setItem('tbs',tbs);
  localStorage.setItem('timeSpent',timeSpent);
}

// عرض البروفايل
function showProfile(){
  document.getElementById('login-container').style.display='none';
  document.getElementById('profile-container').style.display='block';
  loadUserData();
}

// استرجاع البيانات
function loadUserData(){
  const username = localStorage.getItem('username');
  const profileImage = localStorage.getItem('profileImage');
  if(profileImage) document.getElementById('profile-img').src=profileImage;
  document.getElementById('profile-name').innerText=username;
  document.getElementById('tbs-display').innerText=`${tbs} TBS`;
  document.getElementById('time-spent').innerText=`${timeSpent} دقيقة`;
}

// تسجيل الخروج
document.getElementById('logout-btn').addEventListener('click', ()=>{
  localStorage.removeItem('password'); 
  document.getElementById('login-container').style.display='block';
  document.getElementById('profile-container').style.display='none';
  document.getElementById('password-field').value='';
});

// استرجاع اسم المستخدم عند العودة
window.onload = function(){
  const storedUsername = localStorage.getItem('username');
  if(storedUsername){
    document.getElementById('username-field').value=storedUsername;
    document.getElementById('password-field').focus();
  }
}

// المهام - إضافة TBS عند الانتهاء
document.querySelectorAll('.task-btn').forEach(btn=>{
  btn.addEventListener('click', ()=>{
    const amount = parseInt(btn.getAttribute('data-tbs'));
    tbs += amount;
    localStorage.setItem('tbs',tbs);
    document.getElementById('tbs-display').innerText=`${tbs} TBS`;
    btn.disabled=true;
    btn.innerText = 'تم إكمال المهمة!';
  });
});

// نافذة المدير
document.getElementById('admin-icon').addEventListener('click',()=>{
  document.getElementById('admin-popup').style.display='block';
});

document.getElementById('admin-close-btn').addEventListener('click',()=>{
  document.getElementById('admin-popup').style.display='none';
});

document.getElementById('admin-login-btn').addEventListener('click',()=>{
  const adminPassword = document.getElementById('admin-password').value;
  if(adminPassword==='7243576372435763'){
    document.getElementById('admin-content').style.display='block';
    alert('تم الدخول للصفحة الادارية');
  } else alert('كلمة السر خاطئة!');
});
