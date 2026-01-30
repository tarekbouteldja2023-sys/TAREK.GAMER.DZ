// صوت النقر عند الضغط
document.addEventListener('click', function(){
    var clickSound = new Audio('click.mp3');
    clickSound.play();
});

// الساعة الرقمية
function updateTime(){
    const now = new Date();
    const h = String(now.getHours()).padStart(2,'0');
    const m = String(now.getMinutes()).padStart(2,'0');
    const s = String(now.getSeconds()).padStart(2,'0');
    document.getElementById('time').textContent = h+":"+m+":"+s;
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

// بطاقات 30 يوم رمضان مع ألوان الإطارات
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