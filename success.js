(function () {
  const params = new URLSearchParams(window.location.search);
  const isError = params.get("error") === "1";
  let lang = "he";
  try {
    lang = sessionStorage.getItem("picasow_lang") === "en" ? "en" : "he";
  } catch (_) { /* ignore */ }

  const root = document.documentElement;
  root.lang = lang;
  root.dir = lang === "en" ? "ltr" : "rtl";
  document.title = lang === "en" ? "Success | Picasow" : "בהצלחה | Picasow";

  const card = document.getElementById("successCard");
  const icon = document.getElementById("successIcon");
  const eyebrow = document.getElementById("successEyebrow");
  const title = document.getElementById("successTitle");
  const text = document.getElementById("successText");
  const back = document.getElementById("successBack");
  const retry = document.getElementById("successRetry");
  const confettiContainer = document.getElementById("confetti");
  const audio = document.getElementById("quoteSuccessSound");

  function copyLang(el) {
    if (!el) return;
    const mode = isError ? "-fail" : "";
    const attr = lang === "en" ? "data-en" + mode : "data-he" + mode;
    const value = el.getAttribute(attr);
    if (value != null) el.textContent = value;
  }

  [eyebrow, title, text, back, retry].forEach(copyLang);

  if (isError) {
    if (card) card.classList.add("success-page__card--error");
    if (icon) icon.textContent = "!";
    if (retry) retry.hidden = false;
  } else {
    fireConfetti();
    playSuccessSound();
  }

  function fireConfetti() {
    if (!confettiContainer) return;
    confettiContainer.innerHTML = "";
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion) return;
    const colors = ["#22c55e", "#16a34a", "#f59e0b", "#ef4444", "#8b5cf6", "#06b6d4", "#ec4899", "#facc15"];
    const frag = document.createDocumentFragment();
    for (let i = 0; i < 110; i++) {
      const piece = document.createElement("span");
      piece.className = "confetti__piece";
      piece.style.left = Math.random() * 100 + "%";
      piece.style.background = colors[i % colors.length];
      piece.style.setProperty("--confetti-x", Math.random() * 280 - 140 + "px");
      piece.style.setProperty("--confetti-rot", Math.random() * 720 - 360 + "deg");
      piece.style.setProperty("--confetti-duration", 2.6 + Math.random() * 2.1 + "s");
      piece.style.setProperty("--confetti-delay", Math.random() * 0.45 + "s");
      piece.style.width = 6 + Math.random() * 6 + "px";
      piece.style.height = 10 + Math.random() * 10 + "px";
      frag.appendChild(piece);
    }
    confettiContainer.appendChild(frag);
  }

  function playSuccessSound() {
    if (!audio) return;
    try {
      audio.currentTime = 0;
      audio.volume = 0.85;
      const playPromise = audio.play();
      if (playPromise && typeof playPromise.catch === "function") {
        playPromise.catch(() => {});
      }
    } catch (_) { /* ignore */ }
  }
})();
