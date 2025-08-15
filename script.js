// Simple scroll-to-top functionality
window.addEventListener("scroll", () => {
  const button = document.getElementById("scroll-to-top");
  if (window.scrollY > 300) {
    button.style.display = "block";
  } else {
    button.style.display = "none";
  }
});

document.getElementById("scroll-to-top").addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});
