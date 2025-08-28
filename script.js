document.addEventListener("DOMContentLoaded", () => {
  const intro = document.getElementById("intro");
  const landing = document.getElementById("landing");
  const count = document.getElementById("count");

  if (!intro || !landing || !count) return;

  let countdown = 3;

  const countdownInterval = setInterval(() => {
    if (countdown > 1) {
      countdown--;
      count.textContent = countdown;
    } else {
      count.textContent = "GO!";
      count.style.color = "#00ff66";

      setTimeout(() => {
        intro.style.display = "none";
        landing.classList.remove("hidden");
      }, 1000);

      clearInterval(countdownInterval);
    }
  }, 1000);

  // ==== Sprite Animation (optional) ====
  const sprite = document.getElementById("sprite");
  if (sprite) {
    let frame = 0;
    const totalFrames = 10;

    setInterval(() => {
      const paddedFrame = String(frame).padStart(3, "0");
      sprite.src = `sprites/Inactivo__${paddedFrame}.png`;
      frame = (frame + 1) % totalFrames;
    }, 100);
  }
});