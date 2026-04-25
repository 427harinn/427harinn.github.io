const pageType = document.body.dataset.page || "detail";

const headerTemplates = {
  home: `
    <header class="site-header">
      <div class="container header-inner">
        <a href="./index.html" class="logo" aria-label="Haruka Karakawa Portfolio">
          <span class="logo-mark">HK</span>
          <span class="logo-text">
            <strong>Haruka Karakawa</strong>
            <small>Portfolio</small>
          </span>
        </a>

        <nav class="global-nav" aria-label="Primary navigation">
          <a href="./index.html#about">About</a>
          <a href="./index.html#strengths">Strengths</a>
          <a href="./index.html#projects">Projects</a>
          <a href="./index.html#skills">Skills</a>
        </nav>
      </div>
    </header>
  `,
  detail: `
    <header class="site-header">
      <div class="container header-inner">
        <a href="./index.html" class="logo" aria-label="Haruka Karakawa Portfolio">
          <span class="logo-mark">HK</span>
          <span class="logo-text">
            <strong>Haruka Karakawa</strong>
            <small>Portfolio</small>
          </span>
        </a>

        <nav class="global-nav" aria-label="Primary navigation">
          <a href="./index.html#about">About</a>
          <a href="./index.html#projects">Projects</a>
          <a href="./index.html#skills">Skills</a>
          <a href="./index.html#contact">Contact</a>
        </nav>
      </div>
    </header>
  `,
};

const footerTemplate = `
  <footer id="contact" class="site-footer">
    <div class="container footer-grid">
      <!--<section>
        <p class="footer-label">CONTACT</p>
        <h2>お問い合わせ</h2>
        <p>お仕事のご依頼・ご相談はこちらから</p>
        <a href="mailto:karakawa.haruka@example.com" class="footer-mail">karakawa.haruka@example.com</a>
      </section>-->

      <section>
        <p class="footer-label">LINKS</p>
        <h2>各種リンク</h2>
        <ul class="footer-links">
          <li><a href="https://github.com/427harinn">GitHub</a></li>
          <li><a href="https://twitter.com/427harinn_it">X (Twitter)</a></li>
        </ul>
      </section>

      <!--<section>
        <p class="footer-label">OTHER</p>
        <h2>その他</h2>
        <ul class="footer-links">
          <li><a href="#">関連資料（PDF）</a></li>
          <li><a href="#">自己紹介スライド（PDF）</a></li>
        </ul>
      </section>-->
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
