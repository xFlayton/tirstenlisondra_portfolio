document.addEventListener('DOMContentLoaded', () => {
  const dot = document.getElementById('cursor-follower');
  let mouseX = 0, mouseY = 0, dotX = 0, dotY = 0;
  const speed = 0.1;

  // update target
  document.addEventListener('mousemove', e => {
    mouseX = e.clientX;
    mouseY = e.clientY;
  });

  // add/remove class on interactive elements
  document.querySelectorAll('a, button, .nav-button').forEach(el => {
    el.addEventListener('mouseenter', () => dot.classList.add('hovered'));
    el.addEventListener('mouseleave', () => dot.classList.remove('hovered'));
  });

  // smooth follow loop
  function animate() {
    dotX += (mouseX - dotX) * speed;
    dotY += (mouseY - dotY) * speed;
    dot.style.left = `${dotX}px`;
    dot.style.top  = `${dotY}px`;
    requestAnimationFrame(animate);
  }
  animate();
});
