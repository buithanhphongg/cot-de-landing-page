import { content, links } from './site-data.js';

const app = document.querySelector('#app');
const sections = ['about', 'topics', 'channels', 'contact'];
const escapeHtml = (value) => String(value).replace(/[&<>"']/g, (character) => ({
  '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;',
})[character]);

function externalLink(url, label, className, newWindowText) {
  return `<a class="${className}" href="${url}" target="_blank" rel="noopener noreferrer" aria-label="${escapeHtml(label)} (${escapeHtml(newWindowText)})">${escapeHtml(label)} <span aria-hidden="true">↗</span></a>`;
}

function render(lang) {
  const t = content[lang];
  document.documentElement.lang = lang;
  document.title = lang === 'vi' ? 'Cốt Đê — Code kể cho dễ hiểu' : 'Cốt Đê — Code, explained plainly';
  document.querySelector('.skip-link').textContent = t.skipLink;
  document.querySelector('meta[name="description"]').content = t.metaDescription;
  app.innerHTML = `
    <header class="site-header">
      <div class="shell header-inner">
        <a class="wordmark" href="#top" aria-label="Cốt Đê — home">CỐT<span>ĐÊ</span><i aria-hidden="true">.</i></a>
        <nav class="main-nav" aria-label="${lang === 'vi' ? 'Điều hướng chính' : 'Main navigation'}">
          ${sections.map((section, index) => `<a href="#${section}">${escapeHtml(t.nav[index])}</a>`).join('')}
        </nav>
        <div class="header-actions">
          <div class="language-switch" aria-label="Language">
            <button type="button" data-lang="vi" aria-pressed="${lang === 'vi'}">VI</button>
            <span aria-hidden="true">/</span>
            <button type="button" data-lang="en" aria-pressed="${lang === 'en'}">EN</button>
          </div>
          ${externalLink(links.youtube, t.headerCta, 'header-link', t.newWindow)}
        </div>
      </div>
    </header>

    <main id="main">
      <section class="hero shell" id="top" aria-labelledby="hero-title">
        <div class="hero-copy">
          <p class="eyebrow"><span class="eyebrow-mark" aria-hidden="true"></span>${escapeHtml(t.eyebrow)}</p>
          <h1 id="hero-title">${t.heroTitle}</h1>
          <p class="hero-body">${escapeHtml(t.heroBody)}</p>
          <div class="hero-actions">
            ${externalLink(links.youtube, t.heroPrimary, 'button button-dark', t.newWindow)}
            <a class="text-link" href="#topics">${escapeHtml(t.heroSecondary)} <span aria-hidden="true">↓</span></a>
          </div>
          <div class="hero-stamp" aria-hidden="true"><span>CỐT ĐÊ</span><span>TECH, MADE HUMAN</span></div>
        </div>
        <figure class="hero-figure">
          <img src="./founders.jpg" alt="${lang === 'vi' ? 'Phong mặc áo dài xanh đứng cạnh Bảo mặc áo dài trắng ở sân vườn' : 'Phong in blue and Bảo in white in a garden'}" width="1024" height="1024" fetchpriority="high" />
          <figcaption><span>FIG. 01</span>${escapeHtml(t.photoCaption)}</figcaption>
        </figure>
      </section>

      <section class="section section-about" id="about" aria-labelledby="about-title">
        <div class="shell section-grid">
          <p class="section-index">${escapeHtml(t.aboutIndex)}</p>
          <div class="section-main about-main">
            <h2 id="about-title">${escapeHtml(t.aboutTitle)}</h2>
            <p>${escapeHtml(t.aboutBody)}</p>
          </div>
          <p class="about-note"><span aria-hidden="true">↳</span>${escapeHtml(t.aboutAside)}</p>
        </div>
      </section>

      <section class="section section-topics" id="topics" aria-labelledby="topics-title">
        <div class="shell section-grid">
          <p class="section-index">${escapeHtml(t.topicsIndex)}</p>
          <div class="section-main">
            <div class="section-heading">
              <h2 id="topics-title">${escapeHtml(t.topicsTitle)}</h2>
              <p>${escapeHtml(t.topicsIntro)}</p>
            </div>
            <div class="topic-list">
              ${t.topics.map((topic) => `<article class="topic-row"><span class="topic-number">${topic.number}</span><h3>${escapeHtml(topic.title)}</h3><p>${escapeHtml(topic.description)}</p><span class="topic-arrow" aria-hidden="true">↗</span></article>`).join('')}
            </div>
          </div>
        </div>
      </section>

      <section class="section section-channels" id="channels" aria-labelledby="channels-title">
        <div class="shell section-grid">
          <p class="section-index">${escapeHtml(t.channelsIndex)}</p>
          <div class="section-main">
            <h2 id="channels-title">${escapeHtml(t.channelsTitle)}</h2>
            <div class="channel-list">
              ${t.channels.map((channel) => `<a class="channel" href="${links[channel.key]}" target="_blank" rel="noopener noreferrer" aria-label="${escapeHtml(channel.label)} ${escapeHtml(channel.handle)} (${escapeHtml(t.newWindow)})"><span class="channel-name">${escapeHtml(channel.label)} <small>${escapeHtml(channel.handle)}</small></span><span class="channel-desc">${escapeHtml(channel.description)}</span><span class="channel-action">${escapeHtml(channel.action)} ↗</span></a>`).join('')}
            </div>
          </div>
        </div>
      </section>

      <section class="section section-contact" id="contact" aria-labelledby="contact-title">
        <div class="shell section-grid">
          <p class="section-index">${escapeHtml(t.contactIndex)}</p>
          <div class="section-main contact-main">
            <h2 id="contact-title">${escapeHtml(t.contactTitle)}</h2>
            <p>${escapeHtml(t.contactBody)}</p>
            <div class="contact-actions">
              ${externalLink(links.bao, t.contactBao, 'button button-light', t.newWindow)}
              ${externalLink(links.phong, t.contactPhong, 'button button-outline', t.newWindow)}
            </div>
          </div>
        </div>
      </section>
    </main>

    <footer class="site-footer">
      <div class="shell footer-top"><a class="wordmark" href="#top">CỐT<span>ĐÊ</span><i aria-hidden="true">.</i></a><p>${escapeHtml(t.footerLine)}</p></div>
      <div class="shell footer-bottom"><span>© ${new Date().getFullYear()} Cốt Đê</span><span>Phong & Bảo</span></div>
    </footer>`;

  app.querySelectorAll('[data-lang]').forEach((button) => {
    button.addEventListener('click', () => {
      const nextLang = button.dataset.lang;
      if (nextLang === lang) return;
      try { localStorage.setItem('cotde_lang', nextLang); } catch { /* Preferences may be unavailable. */ }
      render(nextLang);
    });
  });
}

let preferredLanguage = 'vi';
try {
  const savedLanguage = localStorage.getItem('cotde_lang');
  if (savedLanguage in content) preferredLanguage = savedLanguage;
} catch { /* Use Vietnamese when storage is unavailable. */ }
render(preferredLanguage);
