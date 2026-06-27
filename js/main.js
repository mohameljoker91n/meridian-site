/* Meridian Technology — interactions */
(function () {
  "use strict";
  var html = document.documentElement;

  var T = {
    en: {
      title: "Meridian Technology — Egyptian Technology Company",
      toggle: "العربية",
      toggleAria: "Switch to Arabic"
    },
    ar: {
      title: "مريديان للتكنولوجيا — شركة تكنولوجيا مصرية",
      toggle: "EN",
      toggleAria: "التبديل إلى الإنجليزية"
    }
  };

  var nodes = document.querySelectorAll("[data-ar]");
  var toggle = document.getElementById("langToggle");
  var menuBtn = document.getElementById("menuBtn");
  var nav = document.getElementById("primaryNav");
  var header = document.getElementById("siteHeader");

  function setLang(lang) {
    html.lang = lang;
    html.dir = lang === "ar" ? "rtl" : "ltr";
    for (var i = 0; i < nodes.length; i++) {
      var el = nodes[i];
      if (el.dataset.en === undefined) el.dataset.en = el.textContent;
      el.textContent = lang === "ar" ? el.dataset.ar : el.dataset.en;
    }
    if (toggle) {
      toggle.textContent = T[lang].toggle;
      toggle.setAttribute("aria-label", T[lang].toggleAria);
    }
    document.title = T[lang].title;
    try { localStorage.setItem("meridian-lang", lang); } catch (e) {}
  }

  // initial language: stored choice, else browser hint, else English
  var stored = null;
  try { stored = localStorage.getItem("meridian-lang"); } catch (e) {}
  var initial = stored ||
    (((navigator.language || "").toLowerCase().indexOf("ar") === 0) ? "ar" : "en");
  setLang(initial);

  if (toggle) {
    toggle.addEventListener("click", function () {
      setLang(html.lang === "ar" ? "en" : "ar");
    });
  }

  // mobile menu
  function setMenu(open) {
    if (!nav || !menuBtn) return;
    nav.classList.toggle("open", open);
    menuBtn.setAttribute("aria-expanded", open ? "true" : "false");
  }
  if (menuBtn) {
    menuBtn.addEventListener("click", function () {
      setMenu(!nav.classList.contains("open"));
    });
  }
  if (nav) {
    var links = nav.querySelectorAll("a");
    for (var j = 0; j < links.length; j++) {
      links[j].addEventListener("click", function () { setMenu(false); });
    }
  }
  window.addEventListener("keydown", function (e) {
    if (e.key === "Escape") setMenu(false);
  });

  // sticky header elevation
  function onScroll() {
    if (header) header.classList.toggle("scrolled", window.scrollY > 16);
  }
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });

  // scroll reveal
  var reduce = window.matchMedia &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var reveals = document.querySelectorAll(".reveal");
  if (reduce || !("IntersectionObserver" in window)) {
    for (var k = 0; k < reveals.length; k++) reveals[k].classList.add("in");
  } else {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("in");
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -8% 0px" });
    for (var m = 0; m < reveals.length; m++) io.observe(reveals[m]);
  }
})();
