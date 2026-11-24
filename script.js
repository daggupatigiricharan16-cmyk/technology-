const menuButton = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav");
menuButton.addEventListener("click", () => {
  const open = nav.classList.toggle("open");
  menuButton.setAttribute("aria-expanded", String(open));
  menuButton.textContent = open ? "×" : "☰";
});
nav.querySelectorAll("a").forEach(link => link.addEventListener("click", () => {
  nav.classList.remove("open");
  menuButton.setAttribute("aria-expanded", "false");
  menuButton.textContent = "☰";
}));

document.querySelectorAll(".swatch").forEach(button => {
  button.addEventListener("click", () => {
    document.querySelectorAll(".swatch").forEach(item => item.classList.remove("active"));
    button.classList.add("active");
    document.querySelector("#selectedColour").textContent = button.dataset.colour.toUpperCase();
  });
});

document.querySelectorAll(".storage-option").forEach(button => {
  button.addEventListener("click", () => {
    document.querySelectorAll(".storage-option").forEach(item => item.classList.remove("active"));
    button.classList.add("active");
  });
});

document.querySelector("#buyButton").addEventListener("click", () => {
  const storage = document.querySelector(".storage-option.active").textContent;
  document.querySelector("#purchaseMessage").textContent =
    `Great choice: Nova X (${storage}). This is a demo page, so no order or payment has been created.`;
});