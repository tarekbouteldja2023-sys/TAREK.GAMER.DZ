// موسيقى الخلفية
const music=document.getElementById('music');if(music){music.volume=0.25;}

// صوت النقر
document.querySelectorAll('button,input').forEach(el=>{
  el.addEventListener('click',()=>{const click=new Audio('click.mp3');click.play();});
});

// تسجيل الدخول
const loginBtn=document.getElementById('login-btn');
const usernameInput=document.getElementById('username');
const passwordInput=document.getElementById('password');
const profilePicInput=document.getElementById('profile-pic');
const loginCard=document.getElementById('login-card');
const userInfo=document.getElementById('user-info');
const userImage=document.getElementById('user-image');
const userName=document.getElementById('user-name');
const userTBS=document.getElementById('user-tbs');
const userTime=document.getElementById('user-time');
const logoutBtn=document.getElementById('logout-btn');
const adminIcon=document.getElementById('admin-icon');

let currentUser=null;

// تحميل بيانات المستخدم من localStorage
if(localStorage.getItem('currentUser')){
  currentUser=JSON.parse(localStorage.getItem('currentUser'));
  showUserInfo();
}

loginBtn.addEventListener('click',()=>{
  const username=usernameInput.value.trim();
  const password=passwordInput.value.trim();
  if(!username||!password){alert('يرجى إدخال اسم المستخدم وكلمة السر');return;}

  let imgSrc='';
  if(profilePicInput.files[0]){
    imgSrc=URL.createObjectURL(profilePicInput.files[0]);
  }else{
    imgSrc=''; // صورة افتراضية
  }

  currentUser={username,password,imgSrc,tbs:0,time:0};
  localStorage.setItem('currentUser',JSON.stringify(currentUser));
  showUserInfo();
});

function showUserInfo(){
  loginCard.style.display='none';
  userInfo.style.display='block';
  userImage.src=currentUser.imgSrc||'profile.png';
  userName.textContent=currentUser.username;
  userTBS.textContent=currentUser.tbs;
  userTime.textContent=currentUser.time;
}

// تسجيل الخروج
logoutBtn.addEventListener('click',()=>{
  localStorage.removeItem('currentUser');
  location.reload();
});

// أيقونة المدير
adminIcon.addEventListener('click',()=>{
  const pwd=prompt('أدخل كلمة مرور المدير:');
  if(pwd==='7243576372435763'){
    window.location.href='admin.html';
  }else{
    alert('كلمة المرور خاطئة!');
  }
});
