const scenes = document.querySelectorAll('.scene');
const clamp = (v, min, max) => Math.min(Math.max(v, min), max);
function update() {
  const vh = window.innerHeight;
  scenes.forEach(sc => {
    const r = sc.getBoundingClientRect();
    const total = r.height - vh;
    const scrolled = clamp((vh - r.top) / total, 0, 1);
    sc.style.setProperty('--p', scrolled);
  });
  requestAnimationFrame(update);
}
update();
