const sidebarToggle = document.querySelector(".sidebar-toggle");
const sidebar = document.querySelector(".sidebar");

sidebarToggle.addEventListener("click", () => {
  sidebar.classList.toggle("show");
});
const button = document.querySelector('button');

button.addEventListener('click', () => {
  window.location.href = 'https://replit.com';
});