export function setupRevealAnimations() {
  const elements = document.querySelectorAll(".reveal");
  if (!("IntersectionObserver" in window)) {
    elements.forEach((el) => el.classList.add("visible"));
    return;
  }
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 },
  );
  elements.forEach((element) => observer.observe(element));
}

export function setupCursor() {
  if (!window.matchMedia("(pointer:fine)").matches) return;
  const dot = document.querySelector(".cursor-dot");
  const ring = document.querySelector(".cursor-ring");
  const spotlight = document.querySelector(".spotlight");
  if (!dot || !ring || !spotlight) return;
  let mouseX = innerWidth / 2,
    mouseY = innerHeight / 2,
    ringX = mouseX,
    ringY = mouseY;
  window.addEventListener("mousemove", (event) => {
    mouseX = event.clientX;
    mouseY = event.clientY;
    dot.style.left = `${mouseX}px`;
    dot.style.top = `${mouseY}px`;
    spotlight.style.left = `${mouseX}px`;
    spotlight.style.top = `${mouseY}px`;
  });
  const animate = () => {
    ringX += (mouseX - ringX) * 0.16;
    ringY += (mouseY - ringY) * 0.16;
    ring.style.left = `${ringX}px`;
    ring.style.top = `${ringY}px`;
    requestAnimationFrame(animate);
  };
  animate();
  document.addEventListener("pointerover", (event) => {
    if (event.target.closest("a, button, .project-card"))
      ring.classList.add("hover");
  });
  document.addEventListener("pointerout", (event) => {
    if (event.target.closest("a, button, .project-card"))
      ring.classList.remove("hover");
  });
}
