// صوت النقر
document.addEventListener("click", () => {
  const sound = document.getElementById("clickSound");
  sound.currentTime = 0;
  sound.play();
});

// تشغيل الموسيقى بعد أول تفاعل (للمتصفحات)
document.addEventListener("click", () => {
  document.getElementById("bgMusic").play();
}, { once: true });