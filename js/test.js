const refs = {
  overlay: document.getElementById("overlay"),
  modalWindow: document.getElementById("modalWindow"),
  closeBtn: document.getElementById("closeBtn"),
  openBtn: document.getElementById("openBtn"),
};

const classes = {
  openMolal: "open-modal",
};

refs.openBtn.addEventListener("click", handleModal);
refs.closeBtn.addEventListener("click", handleModal);
refs.overlay.addEventListener("click", handleModal);
document.addEventListener("keydown", handleModalClose);

function handleModal() {
  document.body.classList.toggle(classes.openMolal);
}

function handleModalClose({ code }) {
  if (code === "Escape") {
    document.body.classList.remove(classes.openMolal);
  }
}
