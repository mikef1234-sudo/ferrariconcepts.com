const toggle = document.querySelector("[data-menu-toggle]");
const menu = document.querySelector("[data-menu]");

if (toggle && menu) {
  toggle.addEventListener("click", () => {
    const isOpen = menu.classList.toggle("open");
    toggle.setAttribute("aria-expanded", String(isOpen));
  });
}

const inquiryForm = document.querySelector("[data-inquiry-form]");
const formStatus = document.querySelector("[data-form-status]");

if (inquiryForm && formStatus) {
  inquiryForm.addEventListener("submit", (event) => {
    const action = inquiryForm.getAttribute("action") || "";

    formStatus.textContent = action.startsWith("mailto:")
      ? "Opening your email app to send the inquiry..."
      : "Sending your inquiry...";
  });
}
