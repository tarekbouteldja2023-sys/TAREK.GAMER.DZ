// موسيقى الخلفية
const musicProfile = document.getElementById('music-profile');
if(musicProfile){musicProfile.volume=0.25;}

// صوت النقر عند الضغط على أي زر
document.querySelectorAll('button').forEach(btn=>{
  btn.addEventListener('click',()=>{new Audio('click.mp3').play();});
});

// البيانات الافتراضية
let users = JSON.parse(localStorage.getItem('users')) || [];
let currentUser = JSON.parse(localStorage.getItem('currentUser')) || null;

// عناصر DOM
const loginContainer = document.getElementById('login-container');
const dashboard = document.getElementById('user-dashboard');
const userName = document.getElementById('user-name');
const userImage = document.getElementById('user-image');
const userTBS = document.getElementById('user-tbs');
const userTime = document.getElementById('user-time');
const loginBtn = document.getElementById('login-btn');
const logoutBtn = document.getElementById('logout-btn');
const profilePicInput = document.getElementById('profile-pic');
const usernameInput = document.getElementById('username');
const passwordInput = document.getElementById('password');
const loginMsg = document.getElementById('login-msg');

// مدير
const adminIcon = document.getElementById('admin-icon');
const adminPopup = document.getElementById('admin-popup');
const adminLoginBtn = document.getElementById('admin-login-btn');
const adminPassword = document.getElementById('admin-password');
const adminMsg = document.getElementById('admin-msg');
const adminDashboard = document.getElementById('admin-dashboard');

// عند تسجيل الدخول
loginBtn.addEventListener('click',()=>{
  const name=usernameInput.value.trim();
  const pass=passwordInput.value.trim();
  if(name===''){loginMsg.innerText='الرجاء إدخال اسم المستخدم'; return;}
  if(pass===''){loginMsg.innerText='الرجاء إدخال كلمة المرور'; return;}

  // تحقق إذا هو المدير
  if(name==='tarek_264_x' && pass==='7243576372435763'){
    loginMsg.innerText='';
    adminPopup.style.display='block';
    loginContainer.style.display='none';
    return;
  }

  // المستخدم العادي
  let user = users.find(u=>u.name===name);
  if(!user){
    // إنشاء مستخدم جديد
    let pic = '';
    if(profilePicInput.files[0]){
      pic = URL.createObjectURL(profilePicInput.files[0]);
    }
    user = {name:name,password:pass,tbs:0,time:0,pic:pic};
    users.push(user);
    localStorage.setItem('users',JSON.stringify(users));
  }else{
    if(user.password!==pass){loginMsg.innerText='كلمة المرور غير صحيحة'; return;}
  }

  currentUser = user;
  localStorage.setItem('currentUser',JSON.stringify(currentUser));
  showDashboard();
});

function showDashboard(){
  loginContainer.style.display='none';
  dashboard.style.display='block';
  userName.innerText=currentUser.name;
  userImage.src=currentUser.pic || 'profile.png';
  userTBS.innerText=currentUser.tbs;
  userTime.innerText=currentUser.time;

  // تحديث الوقت كل دقيقة
  setInterval(()=>{
    currentUser.time +=1;
    userTime.innerText=currentUser.time;
    saveCurrentUser();
  },60000);
}

logoutBtn.addEventListener('click',()=>{
  loginContainer.style.display='block';
  dashboard.style.display='none';
  currentUser=null;
  localStorage.removeItem('currentUser');
});

// حفظ البيانات
function saveCurrentUser(){
  const idx = users.findIndex(u=>u.name===currentUser.name);
  users[idx]=currentUser;
  localStorage.setItem('users',JSON.stringify(users));
  localStorage.setItem('currentUser',JSON.stringify(currentUser));
}

// أيقونة المدير
adminIcon.addEventListener('click',()=>{
  adminPopup.style.display='block';
});

// تسجيل دخول المدير
adminLoginBtn.addEventListener('click',()=>{
  if(adminPassword.value==='7243576372435763'){
    adminMsg.innerText='تم الدخول بنجاح!';
    adminDashboard.innerHTML='';
    users.forEach(u=>{
      adminDashboard.innerHTML+=`<p>${u.name} - TBS: ${u.tbs} - وقت التفاعل: ${u.time} دقيقة</p>`;
    });
  }else{
    adminMsg.innerText='كلمة المرور غير صحيحة!';
  }
});
