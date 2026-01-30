document.addEventListener("click", () => {
  const music = document.getElementById("bgMusic");
  if (music.paused) music.play().catch(() => console.log("اضغط لتشغيل الصوت"));

  const click = document.getElementById("clickSound");
  click.currentTime = 0;
  click.play();
});
