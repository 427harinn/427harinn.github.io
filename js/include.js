const pageType = document.body.dataset.page || "detail";

const headerTemplates = {
  home: `
    <header class="site-header site-header--home">
      <div class="container header-inner">
        <a href="./index.html" class="logo" aria-label="Haruka Karakawa Portfolio">
          <span class="logo-text">
            <strong>Haruka Karakawa</strong>
            <small>Portfolio</small>
          </span>
        </a>

        <nav class="global-nav" aria-label="Primary navigation">
          <a href="./index.html#about"><span>自己紹介</span></a>
          <a href="./index.html#strengths"><span>強み</span></a>
          <a href="./index.html#projects"><span>作品</span></a>
          <a href="./index.html#skills"><span>スキル</span></a>
        </nav>

      </div>
    </header>
  `,
  detail: `
    <header class="site-header site-header--home">
      <div class="container header-inner">
        <a href="./index.html" class="logo" aria-label="Haruka Karakawa Portfolio">
          <span class="logo-text">
            <strong>Haruka Karakawa</strong>
            <small>Portfolio</small>
          </span>
        </a>

        <nav class="global-nav" aria-label="Primary navigation">
          <a href="./index.html#about"><span>自己紹介</span></a>
          <a href="./index.html#strengths"><span>強み</span></a>
          <a href="./index.html#projects"><span>作品</span></a>
          <a href="./index.html#skills"><span>スキル</span></a>
        </nav>
      </div>
    </header>
  `,
};

const footerTemplate = `
  <footer id="contact" class="site-footer">
    <div class="container footer-grid">

      <section>
        <p class="footer-label">LINKS</p>
        <h2>各種リンク</h2>
        <ul class="footer-links">
          <li><a href="https://github.com/427harinn">GitHub</a></li>
          <li><a href="https://twitter.com/427harinn_it">X (Twitter)</a></li>
          <li><a href="https://unityroom.com/users/427harinn">Unityroom</a></li>
        </ul>
      </section>
    </div>

    <div class="footer-bottom">
      <p>© 2026 Haruka Karakawa All rights reserved.</p>
    </div>
  </footer>
`;

const headerPlaceholder = document.getElementById("header-placeholder");
if (headerPlaceholder) {
  headerPlaceholder.outerHTML = (headerTemplates[pageType] || headerTemplates.detail).trim();
}

const footerPlaceholder = document.getElementById("footer-placeholder");
if (footerPlaceholder) {
  footerPlaceholder.outerHTML = footerTemplate.trim();
}
