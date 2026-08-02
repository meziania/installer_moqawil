const STORAGE_KEY = "moqawil-site-lang";

function setLang(lang) {
  const next = lang === "ar" ? "ar" : "fr";
  document.documentElement.lang = next;
  document.documentElement.dir = next === "ar" ? "rtl" : "ltr";
  document.querySelectorAll(".lang-switch button").forEach((btn) => {
    btn.classList.toggle("active", btn.dataset.langBtn === next);
  });
  localStorage.setItem(STORAGE_KEY, next);
}

function initLang() {
  const saved = localStorage.getItem(STORAGE_KEY);
  const browser = navigator.language?.toLowerCase().startsWith("ar") ? "ar" : "fr";
  setLang(saved || browser);
}

function initGuideNav() {
  const links = [...document.querySelectorAll(".guide-nav a")];
  const cards = links
    .map((a) => document.querySelector(a.getAttribute("href")))
    .filter(Boolean);

  if (!links.length || !("IntersectionObserver" in window)) return;

  const observer = new IntersectionObserver(
    (entries) => {
      const visible = entries
        .filter((e) => e.isIntersecting)
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
      if (!visible) return;
      links.forEach((a) => {
        a.classList.toggle("active", a.getAttribute("href") === `#${visible.target.id}`);
      });
    },
    { rootMargin: "-30% 0px -55% 0px", threshold: [0.1, 0.4] }
  );

  cards.forEach((card) => observer.observe(card));
}

document.addEventListener("DOMContentLoaded", () => {
  initLang();
  initGuideNav();

  document.querySelectorAll("[data-lang-btn]").forEach((btn) => {
    btn.addEventListener("click", () => setLang(btn.dataset.langBtn));
  });
});
