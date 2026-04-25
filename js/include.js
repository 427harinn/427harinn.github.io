async function includeHTML(selector, filePath) {
  const target = document.querySelector(selector);
  if (!target) return;

  const res = await fetch(filePath);
  const html = await res.text();
  target.innerHTML = html;
}

document.addEventListener("DOMContentLoaded", () => {
  includeHTML("#header-placeholder", "./components/header.html");
  includeHTML("#footer-placeholder", "./components/footer.html");
});
