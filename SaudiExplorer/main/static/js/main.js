document.addEventListener("DOMContentLoaded", function () {

  const toggleBtn = document.getElementById("theme-toggle");

  let currentTheme = localStorage.getItem("theme") || "light";
  document.documentElement.setAttribute("data-theme", currentTheme);

  updateIcon();

  toggleBtn.addEventListener("click", () => {
    currentTheme = currentTheme === "light" ? "dark" : "light";

    document.documentElement.setAttribute("data-theme", currentTheme);
    localStorage.setItem("theme", currentTheme);

    updateIcon();
  });

  function updateIcon() {
    toggleBtn.textContent = currentTheme === "light" ? "🌙" : "☀️";
  }

});


document.querySelectorAll(".filter-btn").forEach(btn => {
  btn.addEventListener("click", () => {

    document.querySelectorAll(".filter-btn")
      .forEach(b => b.classList.remove("active"));

    btn.classList.add("active");

    const filter = btn.dataset.filter;

    document.querySelectorAll(".card").forEach(card => {

      if (filter === "all") {
        card.style.display = "block";
      } else {
        card.style.display =
          card.dataset.region === filter ? "block" : "none";
      }

    });

  });
});