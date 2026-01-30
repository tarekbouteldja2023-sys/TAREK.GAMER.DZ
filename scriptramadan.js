// عناصر الساعة
const clockEl = document.getElementById('digital-clock');
const countdownEl = document.getElementById('ramadan-countdown');

// تحديد موعد رمضان 2026
const ramadanStart = new Date('2026-02-17T00:00:00');

// دالة لتحديث التاريخ الميلادي والهجري
function updateDates(){
  const now = new Date();
  // ميلادي
  document.getElementById('gregorian-date').innerText = now.toLocaleDateString('ar-EG');
  // هجري (تقريبًا)
  const hijri = new Intl.DateTimeFormat('ar-SA-u-ca-islamic',{day:'numeric',month:'long',year:'numeric'}).format(now);
  document.getElementById('hijri-date').innerText = hijri;
}

// دالة الساعة الرقمية
function updateClock(){
  const now = new Date();
  let h=String(now.getHours()).padStart(2,'0');
  let m=String(now.getMinutes()).padStart(2,'0');
  let s=String(now.getSeconds()).padStart(2,'0');
  clockEl.innerText = `${h}:${m}:${s}`;
}

// دالة العد التنازلي
function updateCountdown(){
  const now = new Date();
  let diff = ramadanStart - now;
  if(diff <=0){
    countdownEl.style.display='none';
  } else {
    let days = Math.floor(diff/(1000*60*60*24));
    let hours = Math.floor((diff%(1000*60*60*24))/(1000*60*60));
    let minutes = Math.floor((diff%(1000*60*60))/(1000*60));
    let seconds = Math.floor((diff%(1000*60))/1000);
    countdownEl.innerText = `${days} يوم ${hours} ساعة ${minutes} دقيقة ${seconds} ثانية`;
  }
}

// تحديث مواعيد الصلاة (قيمة تقريبية يومية)
function updatePrayerTimes(){
  // هنا قيم ثابتة يمكنك لاحقاً تحديثها ديناميكيًا
  const times = {
    fajr:'05:30',
    shurooq:'06:45',
    dhuhr:'12:15',
    asr:'15:30',
    maghrib:'18:00',
    isha:'19:30'
  };
  for(let key in times){
    document.getElementById(key).innerText = times[key];
  }
}

// تحديث دوري كل ثانية
setInterval(updateClock,1000);
setInterval(updateCountdown,1000);
setInterval(updateDates,60000);
updateClock();
updateCountdown();
updateDates();
updatePrayerTimes();
