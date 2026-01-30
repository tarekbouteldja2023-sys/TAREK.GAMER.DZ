// تشغيل الموسيقى وصوت النقر
document.addEventListener("click", () => {
  const music = document.getElementById("bgMusic");
  if (music.paused) music.play().catch(() => console.log("اضغط لتشغيل الصوت"));

  const click = document.getElementById("clickSound");
  click.currentTime = 0;
  click.play();
});

// العملة TBS
let coins = 0;
const coinsDisplay = document.getElementById("coins");
function addCoin(amount) {
  coins += amount;
  coinsDisplay.textContent = coins;
}
