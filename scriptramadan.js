// موسيقى الخلفية وصوت النقر
document.body.addEventListener('click',()=>{ 
    const clickSound=new Audio('click.mp3');
    clickSound.play();
});
const music=document.getElementById('bg-music');
music.volume=0.5;

// الساعة الرقمية
function updateDigitalClock(){
    const now = new Date();
    let h = String(now.getHours()).padStart(2,'0');
    let m = String(now.getMinutes()).padStart(2,'0');
    let s = String(now.getSeconds()).padStart(2,'0');
    document.getElementById('digitalClock').textContent = `${h}:${m}:${s}`;
}
setInterval(updateDigitalClock,1000);
updateDigitalClock();

// التاريخ الميلادي والهجري
function updateDates(){
    const now = new Date();
    const greg = now.toLocaleDateString('ar-EG',{weekday:'long',year:'numeric',month:'long',day:'numeric'});
    document.getElementById('gregorian').textContent = "ميلادي: " + greg;

    const hijri = new Intl.DateTimeFormat('ar-TN-u-ca-islamic',{day:'numeric',month:'long',year:'numeric'}).format(now);
    document.getElementById('hijri').textContent = "هجري: " + hijri;
}
updateDates();
setInterval(updateDates,60000);

// عداد رمضان
function countdownRamadan(){
    const today = new Date();
    const ramadanStart = new Date("2026-03-02T00:00:00");
    const diff = ramadanStart - today;
    const countdownEl = document.getElementById('countdownDisplay');
    const dayStatus = document.getElementById('dayStatus');

    if(diff <=0){
        countdownEl.style.display='none';
        dayStatus.textContent = "اليوم 1 من رمضان";
    } else {
        const days = Math.floor(diff / (1000*60*60*24));
        const hours = Math.floor((diff % (1000*60*60*24)) / (1000*60*60));
        const minutes = Math.floor((diff % (1000*60*60)) / (1000*60));
        const seconds = Math.floor((diff % (1000*60)) / 1000);
        countdownEl.textContent = `عدد الأيام المتبقية حتى رمضان: ${days} يوم ${hours}:${minutes}:${seconds}`;
        dayStatus.textContent = `اليوم غير محدد`;
    }
}
setInterval(countdownRamadan,1000);
countdownRamadan();

// بطاقات الأدعية اليومية (يمكن إضافة حتى 30 بطاقة)
const prayers = [
    {type:"دعاء", text:"اللهم بلغنا رمضان"},
    {type:"حديث", text:"صوموا لرؤيته وأفطروا لرؤيته"},
    {type:"قرآن", text:"القرآن الكريم شفاء للقلوب"},
    {type:"دعاء", text:"ربنا آتنا في الدنيا حسنة"},
    {type:"حديث", text:"أفضل الأعمال: إدخال السرور على الناس"},
    // أكمل حتى 30 بطاقة
];

function generateCards(){
    const container = document.getElementById('cards');
    prayers.forEach((item,index)=>{
        const card = document.createElement('div');
        card.className='social-card';
        card.innerHTML = `<div class="social-top">${item.type}</div><span>${item.text}</span>`;
        container.appendChild(card);
    });
}
generateCards();

// مؤقت مواعيد الصلاة (يمكن تحديثه ديناميكيًا)
function updatePrayerTimes(){
    const fajr="05:15", dhuhr="12:30", asr="15:45", maghrib="18:15", isha="19:45";
    document.getElementById('fajr').textContent=fajr;
    document.getElementById('dhuhr').textContent=dhuhr;
    document.getElementById('asr').textContent=asr;
    document.getElementById('maghrib').textContent=maghrib;
    document.getElementById('isha').textContent=isha;
}
updatePrayerTimes();
