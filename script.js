// تشغيل الموسيقى بعد أول نقرة
document.addEventListener("click", () => {
  const music = document.getElementById("bgMusic");
  if (music.paused) {
    music.play().catch(e => console.log("Audio requires user interaction"));
  }

  // صوت النقر
  const click = document.getElementById("clickSound");
  click.currentTime = 0;
  click.play();
});
