const MODE = "siksa"; // "halus" | "siksa" | "brutal"

function halus() {
  const HOLD = [];
  const t0 = Date.now();
  (function tick() {
    HOLD.push(new Array(1e6).fill("tenggat"));
    const box = document.createElement("div");
    box.style.cssText = "position:absolute;left:-9999px;top:0";
    const frag = document.createDocumentFragment();
    for (let i = 0; i < 3000; i++) {
      const s = document.createElement("span");
      s.textContent = "tenggat " + i;
      frag.appendChild(s);
    }
    box.appendChild(frag);
    document.body.appendChild(box);
    const el = Date.now() - t0;
    setTimeout(tick, Math.max(0, 800 - el / 50));
  })();
}

function siksa() {
  const burn = (ms) => {
    const t = performance.now();
    while (performance.now() - t < ms) Math.sqrt(Math.random());
  };
  let r = 0;
  (function cycle() {
    burn(2500 + r * 400);
    r = Math.min(r + 1, 14);
    setTimeout(cycle, 120);
  })();
}

function brutal() {
  document.title = "Tenggat (hang)";
  while (true) Math.sqrt(Math.random());
}

setTimeout(() => {
  const b = document.createElement("div");
  b.textContent = "MODE: " + MODE.toUpperCase();
  b.style.cssText =
    "position:fixed;right:12px;bottom:88px;z-index:9999;padding:6px 12px;" +
    "border-radius:999px;background:#1a73e8;color:#fff;" +
    "font:600 11px/1 system-ui;letter-spacing:.08em;" +
    "box-shadow:0 6px 20px rgba(0,0,0,.25)";
  document.body.appendChild(b);
}, 800);

setTimeout(() => {
  if (MODE === "brutal") brutal();
  else if (MODE === "siksa") siksa();
  else halus();
}, 2500);
