// تشغيل الموسيقى بعد أول نقرة + صوت النقر
document.addEventListener("click", () => {
  const music = document.getElementById("bgMusic");
  if (music.paused) music.play().catch(() => console.log("Click to enable audio"));

  const click = document.getElementById("clickSound");
  click.currentTime = 0;
  click.play();
});
