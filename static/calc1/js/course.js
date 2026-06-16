(function () {
  const key = "calc1-language";
  const root = document.documentElement;

  function apply(lang) {
    const next = lang === "vi" ? "vi" : "en";
    root.setAttribute("data-course-lang", next);
    try {
      localStorage.setItem(key, next);
    } catch (error) {}
    document.querySelectorAll("[data-course-lang-button]").forEach((button) => {
      button.setAttribute("aria-pressed", button.dataset.courseLangButton === next ? "true" : "false");
    });
    if (window.MathJax && window.MathJax.typesetPromise) {
      window.MathJax.typesetPromise();
    }
  }

  let initial = "en";
  try {
    initial = localStorage.getItem(key) || "en";
  } catch (error) {}
  apply(initial);

  const toggle = document.createElement("div");
  toggle.className = "course-lang-toggle";
  toggle.setAttribute("aria-label", "Language");
  toggle.innerHTML = [
    '<button type="button" data-course-lang-button="en">EN</button>',
    '<button type="button" data-course-lang-button="vi">VI</button>'
  ].join("");
  toggle.addEventListener("click", (event) => {
    const button = event.target.closest("[data-course-lang-button]");
    if (button) apply(button.dataset.courseLangButton);
  });
  document.body.appendChild(toggle);
  apply(root.getAttribute("data-course-lang") || initial);
})();

