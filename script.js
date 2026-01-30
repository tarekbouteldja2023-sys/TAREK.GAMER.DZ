// صوت النقر
document.addEventListener("click", () => {
  const click = document.getElementById("clickSound");
  click.currentTime = 0;
  click.play();
});

// تشغيل الموسيقى بعد أول تفاعل
document.addEventListener("click", () => {
  document.getElementById("bgMusic").play();
}, { once: true });
