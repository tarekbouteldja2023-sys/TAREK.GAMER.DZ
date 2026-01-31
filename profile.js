// موسيقى الخلفية
const profileMusic=document.getElementById('profile-music');if(profileMusic){profileMusic.volume=0.25;}

// صوت النقر
document.querySelectorAll('a, button').forEach(btn=>{btn.addEventListener('click',()=>{const clickSound=new Audio('click.mp3');clickSound.play();});});

// بيانات المستخدم (افتراضية)
let userData={
    username:"TAREK",
    password:"123456",
    profilePic:"profile.png",
    tbs:1000,
    timeSpent:0 // بالدقائق
};

// تسجيل الدخول
const loginBtn=document.getElementById('login-btn');
loginBtn.addEventListener('click',()=>{
    const u=document.getElementById('username').value;
    const p=document.getElementById('password').value;
    if(u===userData.username && p===userData.password){
        document.getElementById('login-container').style.display='none';
        document.getElementById('profile-content').style.display='block';
        document.getElementById('profile-pic').src=userData.profilePic;
        document.getElementById('display-username').innerText=userData.username;
        document.getElementById('user-tbs').innerText=userData.tbs;
        document.getElementById('user-time').innerText=userData.timeSpent+" دقائق";
    } else alert("اسم المستخدم أو كلمة المرور غير صحيحة!");
});

// تسجيل الخروج
document.getElementById('logout-btn').addEventListener('click',()=>{
    document.getElementById('profile-content').style.display='none';
    document.getElementById('login-container').style.display='block';
});

// أيقونة الإدارة
document.getElementById('admin-icon').addEventListener('click',()=>{
    document.getElementById('admin-popup').style.display='block';
});

// نافذة الإدارة
document.getElementById('admin-close-btn').addEventListener('click',()=>{
    document.getElementById('admin-popup').style.display='none';
});

document.getElementById('admin-login-btn').addEventListener('click',()=>{
    const adminPass=document.getElementById('admin-password').value;
    if(adminPass==='7243576372435763'){
        document.getElementById('admin-info').style.display='block';
        const ul=document.getElementById('full-user-info');
        ul.innerHTML=`<li>اسم المستخدم: ${userData.username}</li>
                        <li>رصيد العملة: ${userData.tbs} TBS</li>
                        <li>الوقت داخل الموقع: ${userData.timeSpent} دقائق</li>`;
    } else alert("كلمة المرور خاطئة!");
});

// تحديث الوقت كل دقيقة
setInterval(()=>{
    if(document.getElementById('profile-content').style.display==='block'){
        userData.timeSpent+=1;
        document.getElementById('user-time').innerText=userData.timeSpent+" دقائق";
    }
},60000);