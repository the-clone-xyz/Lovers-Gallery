window.addEventListener("scroll", function () {
  let text = document.getElementById("kata2");
  if (window.scrollY > 50) {
    // Ubah nilai sesuai kebutuhan
    text.style.fontStyle = "italic";
    text.style.opacity = "1";
  } else {
    text.style.fontStyle = "normal";
    text.style.opacity = "0";
  }
});
