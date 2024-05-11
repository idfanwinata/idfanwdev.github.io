// Kotak Modal
const itemDetailModal = document.querySelector(".modal");
const itemDetailButtons = document.querySelectorAll(".btn-primary");

itemDetailButtons.forEach((btn) => {
  btn.onclick = (e) => {
    itemDetailModal.style.display = "flex";
    e.preventDefault();
  };
});

// klik tombol tutup modal
document.querySelector(".btn-secondary").addEventListener("click", (e) => {
  itemDetailModal.style.display = "none";
  e.preventDefault();
});

document.querySelector(".btn-close").addEventListener("click", (e) => {
  itemDetailModal.style.display = "none";
  e.preventDefault();
});

// klik di luar modal
window.onclick = (e) => {
  if (e.target === itemDetailModal) {
    itemDetailModal.style.display = "none";
  }
};
