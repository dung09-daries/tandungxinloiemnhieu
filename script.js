const btnNo = document.getElementById("btnNo");
const btnYes = document.getElementById("btnYes");
const toast = document.getElementById("toast");
const row = document.querySelector(".btn-row");

const TARGET_URL = "https://dung09-daries.github.io/tamthu/";

function showToast(msg) {
  toast.textContent = msg;
  toast.classList.add("show");
  clearTimeout(showToast._t);
  showToast._t = setTimeout(() => toast.classList.remove("show"), 1000);
}

function clamp(n, min, max) {
  return Math.max(min, Math.min(max, n));
}

function moveNoButton() {
  if (getComputedStyle(btnNo).position !== "absolute") {
    const r = btnNo.getBoundingClientRect();
    const rr = row.getBoundingClientRect();
    btnNo.style.position = "absolute";
    btnNo.style.left = `${r.left - rr.left}px`;
    btnNo.style.top  = `${r.top  - rr.top }px`;
  }

  const rr = row.getBoundingClientRect();
  const br = btnNo.getBoundingClientRect();

  const maxX = rr.width - br.width;
  const maxY = rr.height - br.height;

  const x = Math.random() * maxX;
  const y = Math.random() * maxY;

  btnNo.style.left = `${clamp(x, 0, maxX)}px`;
  btnNo.style.top  = `${clamp(y, 0, maxY)}px`;

  showToast("Hong cho chọn 😼");
}

btnNo.addEventListener("mouseenter", moveNoButton);
btnNo.addEventListener("touchstart", (e) => { e.preventDefault(); moveNoButton(); }, { passive: false });
btnNo.addEventListener("click", moveNoButton);

btnYes.addEventListener("click", () => {
  window.location.href = TARGET_URL; // MỞ LIỀN
});
