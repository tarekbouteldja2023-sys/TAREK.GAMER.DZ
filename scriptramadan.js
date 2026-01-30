// صوت النقر
document.addEventListener('click', function(){
    var clickSound = new Audio('click.mp3');
    clickSound.play();
});

// الساعة الرقمية مع تغيير اللون حسب وقت الصلاة
function updateTime(){
    const now = new Date();
    let h = now.getHours();
    const m = String(now.getMinutes()).padStart(2,'0');
    const s = String(now.getSeconds()).padStart(2,'0');
    let color = "#FFD700"; // default

    if(h>=4 && h<12) color="#1E90FF";       // الفجر
    else if(h>=12 && h<15) color="#FFFF00"; // الظهر
    else if(h>=15 && h<18) color="#FF8C00"; // العصر
    else if(h>=18 && h<20) color="#FF4500"; // المغرب
    else color="#0000CD";                    // العشاء

    document.getElementById('time').textContent = `${String(h).padStart(2,'0')}:${m}:${s}`;
    document.getElementById('time').style.color = color;
}
setInterval(updateTime,1000);
updateTime();

// التاريخ الميلادي
function updateGregorian(){
    const now = new Date();
    const day = now.getDate();
    const month = now.getMonth()+1;
    const year = now.getFullYear();
    document.getElementById('gregorian').textContent = `التاريخ الميلادي: ${day}/${month}/${year}`;
}
updateGregorian();

// التاريخ الهجري
function updateHijri(){
    const now = new Date();
    const hijriDate = now.toLocaleDateString('ar-SA-u-ca-islamic');
    document.getElementById('hijri').textContent = `التاريخ الهجري: ${hijriDate}`;
}
updateHijri();

// بطاقات الأدعية اليومية
const duaa = [
"اللهم بلغنا رمضان","صيام يوم يكفر السنة الماضية","قيام ليلة القدر","ذكر الله","قراءة القرآن",
"صلة الرحم","صدقة","صبر واحتساب","دعاء الصائم","ذكر الاستغفار",
"التوبة","طلب العلم","الدعاء للمسلمين","حسن الخلق","التوكل على الله",
"الدعاء للأهل","استغفار دائم","شكر الله","دعاء للمريض","قراءة سورة البقرة",
"ذكر الله بعد الصلاة","دعاء قبل النوم","الاستغفار بعد الفجر","دعاء السفر","دعاء عند السجود",
"ذكر النبي","الحمد لله","الدعاء عند الفجر","تلاوة القرآن","ذكر الله"];

const types = [
"duaa","duaa","hadith","quran","duaa","hadith","quran","duaa","hadith","quran",
"duaa","duaa","hadith","quran","duaa","hadith","quran","duaa","hadith","quran",
"duaa","duaa","hadith","quran","duaa","hadith","quran","duaa","hadith","quran"
];

function loadCards(){
    const cardsContainer = document.getElementById('cards');
    const today = new Date().getDate();
    cardsContainer.innerHTML = '';
    for(let i=0;i<duaa.length;i++){
        const card = document.createElement('div');
        card.className='card '+types[i];
        card.textContent=`اليوم ${i+1}: ${duaa[i]}`;
        if(i === today-1) card.classList.add('today');
        cardsContainer.appendChild(card);
    }
}
loadCards();

// العداد حتى رمضان
function countdownRamadan(){
    const today = new Date();
    const ramadanStart = new Date("2026-03-02"); // أول يوم رمضان
    const countdownEl = document.getElementById('countdown');
    const diff = ramadanStart - today;
    if(diff <=0){
        countdownEl.style.display='none'; // رمضان بدأ
    } else {
        const days = Math.floor(diff / (1000*60*60*24));
        countdownEl.textContent = `عدد الأيام المتبقية حتى رمضان: ${days} يوم`;
    }
}
countdownRamadan();
setInterval(countdownRamadan,3600000);

// مواقيت الصلاة ديناميكية
const prayerTimesData = {
    "2026-01-30": {fajr:"05:10", dhuhr:"12:35", asr:"15:50", maghrib:"18:20", isha:"19:55"},
    "2026-02-06": {fajr:"05:15", dhuhr:"12:40", asr:"15:55", maghrib:"18:25", isha:"20:00"}
};
function updatePrayerTimes(){
    const todayStr = new Date().toISOString().slice(0,10);
    if(prayerTimesData[todayStr]){
        const p = prayerTimesData[todayStr];
        document.getElementById('fajr').textContent = p.fajr;
        document.getElementById('dhuhr').textContent = p.dhuhr;
        document.getElementById('asr').textContent = p.asr;
        document.getElementById('maghrib').textContent = p.maghrib;
        document.getElementById('isha').textContent = p.isha;
    }
}
updatePrayerTimes();
