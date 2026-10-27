/* =========================================================================
   P.E.T Docs — Uygulama, Akıllı Görsel/Logo Yuvası, Çoklu İndirme & Router
   ========================================================================= */
(function () {
  'use strict';

  var BRAND_ICONS = [
    'fa-github', 'fa-android', 'fa-discord', 'fa-google-drive',
    'fa-windows', 'fa-linux', 'fa-apple', 'fa-tiktok'
  ];

  var PLATFORM_PRESETS = {
    windows:   { label: 'Windows (PC)',           sub: 'ZIP Paketi · 64-bit',    icon: 'fa-windows' },
    windows32: { label: 'Windows (32-bit)',       sub: 'ZIP Paketi · Eski PC',   icon: 'fa-windows' },
    android:   { label: 'Android (Mobil)',        sub: 'APK Kurulum Dosyası',    icon: 'fa-android' },
    android32: { label: 'Android (ARMv7 / 32-bit)', sub: 'APK Kurulum Dosyası',  icon: 'fa-android' },
    linux:     { label: 'Linux (x64)',            sub: 'ZIP Paketi',             icon: 'fa-linux' },
    macos:     { label: 'macOS',                  sub: 'ZIP Paketi',             icon: 'fa-apple' },
    ios:       { label: 'iOS (IPA)',              sub: 'Mobil Paket',            icon: 'fa-apple' }
  };

  var STATE = {
    docsData: null,
    archiveData: null,
    linksData: null,
    supportData: null,
    updatesData: null,
    currentPage: 'home',
    activeDocSlug: null,
    archiveCategory: 'all',
    searchHits: [],
    searchActiveIdx: 0
  };

  var PAGE_TITLES = {
    home: 'P.E.T Docs — Psych Engine Türkiye',
    docs: 'Dokümanlar — P.E.T Docs',
    archive: 'Arşiv — P.E.T Docs',
    links: 'Linkler — P.E.T Docs',
    support: 'Destek — P.E.T Docs'
  };

  function el(id) { return document.getElementById(id); }

  function esc(s) {
    if (s == null) return '';
    return String(s)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#39;');
  }

  function normTR(s) {
    if (!s) return '';
    return String(s)
      .toLocaleLowerCase('tr-TR')
      .replace(/ı/g, 'i')
      .replace(/ğ/g, 'g')
      .replace(/ü/g, 'u')
      .replace(/ş/g, 's')
      .replace(/ö/g, 'o')
      .replace(/ç/g, 'c');
  }

  function slugifyTR(s) {
    return normTR(s)
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/^-+|-+$/g, '');
  }

  function iconPrefix(iconName) {
    return BRAND_ICONS.indexOf(iconName) !== -1 ? 'fa-brands' : 'fa-solid';
  }

  function inferDownloadIcon(d) {
    if (d && d.icon) return d.icon;
    var hay = normTR(((d && d.label) || '') + ' ' + ((d && d.url) || ''));
    if (hay.indexOf('android') !== -1 || hay.indexOf('apk') !== -1 || hay.indexOf('mobil') !== -1) return 'fa-android';
    if (hay.indexOf('windows') !== -1 || hay.indexOf('exe') !== -1) return 'fa-windows';
    if (hay.indexOf('linux') !== -1) return 'fa-linux';
    if (hay.indexOf('drive.google') !== -1 || hay.indexOf('drive') !== -1) return 'fa-google-drive';
    if (hay.indexOf('github.com') !== -1 && hay.indexOf('/releases') === -1) return 'fa-github';
    if (hay.indexOf('mediafire') !== -1 || hay.indexOf('mega') !== -1 || hay.indexOf('part ') !== -1) return 'fa-cloud-arrow-down';
    if (hay.indexOf('#/docs') !== -1 || hay.indexOf('rehber') !== -1) return 'fa-book-open';
    return 'fa-download';
  }

  function showToast(msg) {
    var host = el('toast-host');
    if (!host) return;
    var t = document.createElement('div');
    t.className = 'pet-toast';
    t.innerHTML = '<i class="fa-solid fa-check" style="color:#f87171"></i><span>' + esc(msg) + '</span>';
    host.appendChild(t);
    setTimeout(function () {
      t.style.opacity = '0';
      t.style.transition = 'opacity .22s ease';
      setTimeout(function () { if (t.parentNode) t.parentNode.removeChild(t); }, 230);
    }, 2200);
  }

  window.copyText = function (text, successMsg) {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(text).then(function () {
        showToast(successMsg || 'Kopyalandı');
      }).catch(function () { fallbackCopy(text, successMsg); });
    } else {
      fallbackCopy(text, successMsg);
    }
  };

  function fallbackCopy(text, successMsg) {
    var ta = document.createElement('textarea');
    ta.value = text;
    ta.style.position = 'fixed';
    ta.style.opacity = '0';
    document.body.appendChild(ta);
    ta.select();
    try { document.execCommand('copy'); showToast(successMsg || 'Kopyalandı'); } catch (e) {}
    document.body.removeChild(ta);
  }

  var barTimer = null;
  function flashLoadingBar() {
    var b = el('ux-loading-bar');
    if (!b) return;
    clearTimeout(barTimer);
    b.classList.add('on');
    b.style.transition = 'none';
    b.style.width = '0%';
    b.style.opacity = '1';
    requestAnimationFrame(function () {
      b.style.transition = 'width .28s cubic-bezier(.4,0,.2,1)';
      b.style.width = '80%';
      barTimer = setTimeout(function () {
        b.style.width = '100%';
        setTimeout(function () {
          b.style.transition = 'opacity .2s ease';
          b.style.opacity = '0';
          setTimeout(function () { b.classList.remove('on'); b.style.width = '0%'; }, 200);
        }, 90);
      }, 140);
    });
  }

  window.toggleMobileNav = function () {
    var nav = el('mobile-nav');
    var btn = el('mobile-nav-toggle');
    if (!nav) return;
    if (nav.classList.contains('is-open')) {
      window.closeMobileNav();
    } else {
      nav.classList.remove('is-closed');
      nav.classList.add('is-open');
      if (btn) btn.setAttribute('aria-expanded', 'true');
    }
  };

  window.closeMobileNav = function () {
    var nav = el('mobile-nav');
    var btn = el('mobile-nav-toggle');
    if (!nav) return;
    nav.classList.remove('is-open');
    nav.classList.add('is-closed');
    if (btn) btn.setAttribute('aria-expanded', 'false');
  };

  /* ---------------------------------------------------------------------
     VERİ YÜKLEME
     1) GitHub Pages dosyaları 10 dakika (max-age=600) CDN'de cache'liyor.
        Her sayfa açılışında URL'e benzersiz ?v=... ekleyip 'no-store'
        istiyoruz; böylece güncellenen JSON hemen görünür.
     2) Bir JSON okunamazsa SESSİZCE eski yedeğe düşmek yerine hem konsola
        hem ekrana uyarı yazıyoruz. (Eskiden bozuk bir JSON, fark edilmeden
        fallback-data.js içindeki eski içeriğin gösterilmesine yol açıyordu.)
     --------------------------------------------------------------------- */
  var DATA_BUST = Date.now();

  function showDataWarning(path, reason) {
    if (window.console && console.warn) {
      console.warn('[P.E.T Docs] ' + path + ' okunamadı (' + reason + '). Eski yedek veri kullanılıyor.');
    }
    var host = el('data-warning-host');
    if (!host) {
      host = document.createElement('div');
      host.id = 'data-warning-host';
      host.setAttribute('role', 'alert');
      host.style.cssText = 'position:fixed;left:12px;right:12px;bottom:12px;z-index:99999;' +
        'background:#3b1114;border:1px solid #f87171;color:#ffe4e6;border-radius:10px;' +
        'padding:10px 14px;font:13px/1.5 system-ui,-apple-system,sans-serif;' +
        'box-shadow:0 8px 30px rgba(0,0,0,.55)';
      document.body.appendChild(host);
    }
    host.innerHTML = '<strong>⚠️ Güncel veri yüklenemedi.</strong> ' +
      '<code>' + esc(path) + '</code> dosyası okunamadı (' + esc(reason) + '). ' +
      'Bu sayfa <strong>eski yedek veriyi</strong> gösteriyor. ' +
      '<button type="button" id="data-warning-retry" style="margin-left:8px;background:#f87171;' +
      'color:#1a0507;border:0;border-radius:6px;padding:4px 10px;cursor:pointer;font-weight:700">' +
      'Yeniden dene</button>';
    var btn = el('data-warning-retry');
    if (btn) btn.onclick = function () { window.location.reload(); };
  }

  function fetchJsonWithFallback(path, fallbackKey) {
    var fb = (window.PET_FALLBACK && window.PET_FALLBACK[fallbackKey]) ? window.PET_FALLBACK[fallbackKey] : {};
    var url = path + (path.indexOf('?') === -1 ? '?' : '&') + 'v=' + DATA_BUST;
    return fetch(url, { cache: 'no-store' })
      .then(function (r) {
        if (!r.ok) {
          showDataWarning(path, 'HTTP ' + r.status);
          return fb;
        }
        // Response.json() BOM'u yok saysa da, bozuk JSON (ör. sondaki virgül)
        // burada hata verir — sebebini görünür kılıyoruz.
        return r.json().catch(function (err) {
          showDataWarning(path, 'geçersiz JSON: ' + (err && err.message ? err.message : err));
          return fb;
        });
      })
      .catch(function (err) {
        showDataWarning(path, err && err.message ? err.message : 'ağ hatası');
        return fb;
      });
  }

  function loadAllData() {
    return Promise.all([
      fetchJsonWithFallback('data/docs.json', 'docs'),
      fetchJsonWithFallback('data/archive.json', 'archive'),
      fetchJsonWithFallback('data/links.json', 'links'),
      fetchJsonWithFallback('data/support.json', 'support'),
      fetchJsonWithFallback('data/updates.json', 'updates')
    ]).then(function (res) {
      STATE.docsData = res[0] || { docs: [] };
      STATE.archiveData = res[1] || { categories: [], items: [] };
      STATE.linksData = res[2] || { groups: [] };
      STATE.supportData = res[3] || { channels: [], checklist: [] };
      STATE.updatesData = res[4] || { items: [] };
    });
  }

  /* =========================================================================
     ARŞİV AKILLI LOGO YUVASI YARDIMCILARI
     ========================================================================= */
  window.onArchiveLogoLoad = function (imgEl) {
    if (!imgEl || !imgEl.naturalWidth) return;
    var wrap = imgEl.closest('.archive-logo-wrap');
    if (!wrap) return;
    imgEl.classList.remove('hidden');
    var slot = wrap.querySelector('.archive-logo-slot');
    if (slot) slot.classList.add('hidden');
  };

  window.onArchiveLogoError = function (imgEl) {
    if (!imgEl) return;
    var wrap = imgEl.closest('.archive-logo-wrap');
    if (!wrap) return;
    imgEl.classList.add('hidden');
    var slot = wrap.querySelector('.archive-logo-slot');
    if (slot) slot.classList.remove('hidden');
  };

  function getCategoryFallbackIcon(cat) {
    if (cat === 'engine') return 'fa-cubes';
    if (cat === 'modpack') return 'fa-folder-open';
    if (cat === 'tool') return 'fa-wrench';
    return 'fa-image';
  }

  function renderArchiveLogoHtml(it, isMini) {
    var logoPath = (it && it.logo) ? it.logo : ('assets/img/logos/' + esc(it.id || 'logo') + '.png');
    var fallbackIcon = getCategoryFallbackIcon(it && it.category);
    var cls = 'archive-logo-wrap' + (isMini ? ' mini' : '');
    return (
      '<div class="' + cls + '" title="Logo dosyası: ' + esc(logoPath) + '">' +
        '<img src="' + esc(logoPath) + '" alt="" class="archive-logo-img hidden" onload="onArchiveLogoLoad(this)" onerror="onArchiveLogoError(this)">' +
        '<div class="archive-logo-slot">' +
          '<i class="fa-solid ' + fallbackIcon + '" aria-hidden="true"></i>' +
        '</div>' +
      '</div>'
    );
  }

  function extractHostHint(url) {
    if (!url || url.indexOf('#/') === 0) return '';
    try {
      return new URL(url).hostname.replace(/^www\./, '');
    } catch (e) {
      return '';
    }
  }

  function normalizePlatformEntries(raw) {
    var list = [];
    if (!raw) return list;

    if (Array.isArray(raw)) {
      raw.forEach(function (p) {
        if (!p) return;
        var u = p.url ? String(p.url).trim() : '';
        list.push({
          label: p.label || 'Platform',
          sub: p.sub || p.note || '',
          url: u,
          icon: p.icon || inferDownloadIcon({ label: p.label, url: u })
        });
      });
      return list;
    }

    if (typeof raw === 'object') {
      Object.keys(raw).forEach(function (key) {
        var val = raw[key];
        var preset = PLATFORM_PRESETS[key.toLowerCase()];
        if (val && typeof val === 'object') {
          var objUrl = val.url ? String(val.url).trim() : '';
          list.push({
            label: val.label || (preset ? preset.label : key),
            sub: val.sub || val.note || (preset ? preset.sub : ''),
            url: objUrl,
            icon: val.icon || (preset ? preset.icon : inferDownloadIcon({ label: key, url: objUrl }))
          });
        } else {
          var strUrl = val != null ? String(val).trim() : '';
          list.push({
            label: preset ? preset.label : key,
            sub: preset ? preset.sub : '',
            url: strUrl,
            icon: preset ? preset.icon : inferDownloadIcon({ label: key, url: strUrl })
          });
        }
      });
    }
    return list;
  }

  function normalizeArchiveDownloads(it) {
    var out = [];
    if (Array.isArray(it.downloads)) {
      it.downloads.forEach(function (d) {
        if (!d) return;
        var rawPlats = d.platforms || d.options || null;
        var platList = normalizePlatformEntries(rawPlats);

        if (platList.length) {
          out.push({
            label: d.label || 'İndir',
            url: '',
            platforms: platList,
            icon: inferDownloadIcon(d),
            primary: Boolean(d.primary)
          });
          return;
        }

        if (d.url && String(d.url).trim() !== '') {
          out.push({
            label: d.label || 'İndir',
            url: String(d.url).trim(),
            platforms: null,
            icon: inferDownloadIcon(d),
            primary: Boolean(d.primary)
          });
        }
      });
    }
    if (it.directUrl) out.push({ label: 'İndir', url: it.directUrl, platforms: null, icon: 'fa-download', primary: !out.length });
    if (it.mediafireUrl) out.push({ label: 'MediaFire', url: it.mediafireUrl, platforms: null, icon: 'fa-cloud-arrow-down', primary: !out.length });
    if (it.driveUrl) out.push({ label: 'Drive', url: it.driveUrl, platforms: null, icon: 'fa-google-drive', primary: !out.length });
    if (it.githubUrl) out.push({ label: 'GitHub', url: it.githubUrl, platforms: null, icon: 'fa-github', primary: !out.length });

    var hasPrimary = out.some(function (x) { return x.primary; });
    if (!hasPrimary && out.length) out[0].primary = true;
    return out;
  }

  /* =========================================================================
     ANA SAYFA BİLEŞENLERİ (Rehberler + Son Eklenenler + Arşiv Önizleme)
     ========================================================================= */
  function renderHomeWidgets() {
    var docsGrid = el('home-docs-grid');
    if (docsGrid && STATE.docsData) {
      var docs = STATE.docsData.docs || [];
      docsGrid.innerHTML = docs.map(function (d) {
        return (
          '<a href="#/docs/' + esc(d.slug) + '" class="Coolbox">' +
            '<div style="display:flex; align-items:center; justify-content:space-between; gap:8px">' +
              '<span class="vcr" style="font-size:14.5px; color:#fff">' + esc(d.title) + '</span>' +
              '<i class="fa-solid fa-arrow-right" style="font-size:11px; color:#f87171"></i>' +
            '</div>' +
            '<p style="font-size:12.5px; color:#9aa0b6; line-height:1.55; margin-top:6px">' + esc(d.summary || '') + '</p>' +
          '</a>'
        );
      }).join('');
    }

    var updatesCard = el('home-updates-card');
    var updatesList = el('home-updates-list');
    if (updatesList && STATE.updatesData) {
      var updates = STATE.updatesData.items || [];
      if (!updates.length) {
        if (updatesCard) updatesCard.classList.add('hidden');
      } else {
        if (updatesCard) updatesCard.classList.remove('hidden');
        updatesList.innerHTML = updates.map(function (u) {
          var href = u.href || '#/';
          var ext = href.indexOf('http') === 0 ? ' target="_blank" rel="noopener"' : '';
          return (
            '<a href="' + esc(href) + '"' + ext + ' class="update-row">' +
              '<span class="update-date">' + esc(u.date || '') + '</span>' +
              '<div style="flex:1; min-width:0">' +
                '<div class="vcr" style="font-size:13.5px; color:#fff">' + esc(u.title) + '</div>' +
                (u.desc ? '<div style="font-size:12.3px; color:#9aa0b6; margin-top:2px; line-height:1.5">' + esc(u.desc) + '</div>' : '') +
              '</div>' +
              '<i class="fa-solid fa-arrow-right" style="font-size:11px; color:#f87171; margin-top:4px; flex-shrink:0"></i>' +
            '</a>'
          );
        }).join('');
      }
    }

    var archHost = el('home-archive-preview');
    if (archHost && STATE.archiveData) {
      var preview = (STATE.archiveData.items || []).slice(0, 4);
      archHost.innerHTML = preview.map(function (it) {
        var meta = [it.version, it.platforms, it.size].filter(Boolean).join(' · ');
        return (
          '<a href="#/archive" class="link-row-card" style="text-decoration:none; padding:11px 14px">' +
            renderArchiveLogoHtml(it, true) +
            '<div style="flex:1; min-width:0">' +
              '<div class="vcr" style="font-size:13.5px; color:#fff">' + esc(it.title) + '</div>' +
              '<div style="font-size:12px; color:#8f95ab; margin-top:2px">' + esc(meta) + '</div>' +
            '</div>' +
            '<span class="vcr" style="font-size:11.5px; color:#fca5a5; flex-shrink:0">Arşiv →</span>' +
          '</a>'
        );
      }).join('');
    }
  }

  /* =========================================================================
     DOKÜMANLAR (BAŞLIKLAR + ALT BAŞLIK PAYLAŞIMI + AKILLI GÖRSEL YUVASI)
     ========================================================================= */
  window.onDocImgLoad = function (imgEl) {
    if (!imgEl || !imgEl.naturalWidth) return;
    var wrap = imgEl.closest('.doc-ss-wrap');
    if (!wrap) return;
    var fig = wrap.querySelector('.doc-ss-card');
    var slot = wrap.querySelector('.doc-ss-slot');
    if (fig) fig.classList.remove('hidden');
    if (slot) slot.classList.add('hidden');
  };

  window.onDocImgError = function (imgEl) {
    if (!imgEl) return;
    var wrap = imgEl.closest('.doc-ss-wrap');
    if (!wrap) return;
    var fig = wrap.querySelector('.doc-ss-card');
    var slot = wrap.querySelector('.doc-ss-slot');
    if (fig) fig.classList.add('hidden');
    if (slot) slot.classList.remove('hidden');
  };

  window.copySectionLink = function (docSlug, secSlug) {
    var base = window.location.href.split('#')[0];
    var hashPath = '#/docs/' + docSlug + '/' + secSlug;
    if (history.replaceState) {
      history.replaceState(null, '', hashPath);
    }
    window.copyText(base + hashPath, 'Alt başlık linki kopyalandı');
  };

  function scrollToDocSection(secSlug) {
    if (!secSlug) return;
    var secEl = el('sec-' + secSlug);
    if (!secEl) return;
    requestAnimationFrame(function () {
      secEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
      secEl.classList.add('doc-section-flash');
      setTimeout(function () {
        secEl.classList.remove('doc-section-flash');
      }, 1700);
    });
  }

  function renderDocsSidebar() {
    var host = el('docs-sidebar-list');
    if (!host || !STATE.docsData) return;
    var docs = STATE.docsData.docs || [];

    host.innerHTML = docs.map(function (d) {
      var active = d.slug === STATE.activeDocSlug ? ' active' : '';
      return (
        '<button type="button" class="docs-nav-btn' + active + '" onclick="window.location.hash=\'#/docs/' + esc(d.slug) + '\'">' +
          '<span>' + esc(d.title) + '</span>' +
          '<i class="fa-solid fa-arrow-right" style="font-size:10px; opacity:' + (active ? '1' : '.35') + '"></i>' +
        '</button>'
      );
    }).join('');
  }

  function renderDocBlock(b, docSlug) {
    if (!b || !b.type) return '';

    if (b.type === 'heading') {
      var secSlug = b.id || slugifyTR(b.text || '');
      return (
        '<h3 class="doc-section-h" id="sec-' + esc(secSlug) + '">' +
          '<span>' + esc(b.text) + '</span>' +
          '<button type="button" class="doc-anchor-btn" title="Alt başlığın linkini kopyala" aria-label="Alt başlığın linkini kopyala" onclick="copySectionLink(\'' + esc(docSlug) + '\', \'' + esc(secSlug) + '\')">' +
            '<i class="fa-solid fa-link" aria-hidden="true"></i>' +
          '</button>' +
        '</h3>'
      );
    }
    if (b.type === 'paragraph') {
      return '<p class="doc-p">' + esc(b.text) + '</p>';
    }
    if (b.type === 'callout') {
      var v = b.variant || 'info';
      return (
        '<div class="doc-callout ' + esc(v) + '">' +
          (b.title ? '<div class="doc-callout-title">' + esc(b.title) + '</div>' : '') +
          '<div class="doc-callout-text">' + esc(b.text || '') + '</div>' +
        '</div>'
      );
    }
    if (b.type === 'steps') {
      var rows = (b.items || []).map(function (st, i) {
        return (
          '<div class="doc-step">' +
            '<div class="doc-step-num">' + (i + 1) + '</div>' +
            '<div style="min-width:0">' +
              '<div class="doc-step-title">' + esc(st.title) + '</div>' +
              '<div class="doc-step-desc">' + esc(st.desc) + '</div>' +
            '</div>' +
          '</div>'
        );
      }).join('');
      return '<div class="doc-steps">' + rows + '</div>';
    }
    if (b.type === 'screenshot') {
      var src = b.src || '';
      var cap = b.caption || 'Ekran görüntüsü';
      if (!src) return '';
      return (
        '<div class="doc-ss-wrap">' +
          '<figure class="doc-ss-card hidden" onclick="openLightbox(\'' + esc(src) + '\', \'' + esc(cap) + '\')">' +
            '<img src="' + esc(src) + '" alt="' + esc(cap) + '" onload="onDocImgLoad(this)" onerror="onDocImgError(this)">' +
            '<figcaption class="doc-ss-cap">' +
              '<span>' + esc(cap) + '</span>' +
              '<span class="vcr" style="font-size:11px; color:#fca5a5"><i class="fa-solid fa-expand"></i> Büyüt</span>' +
            '</figcaption>' +
          '</figure>' +
          '<div class="doc-ss-slot">' +
            '<div class="doc-ss-slot-left">' +
              '<i class="fa-solid fa-image" style="color:#6b7280"></i>' +
              '<span>' + esc(cap) + '</span>' +
            '</div>' +
            '<span class="doc-ss-slot-path">' + esc(src) + '</span>' +
          '</div>' +
        '</div>'
      );
    }
    return '';
  }

  function renderDocArticle(slug, sectionSlug) {
    var docs = (STATE.docsData && STATE.docsData.docs) || [];
    if (!docs.length) return;
    var idx = docs.findIndex(function (d) { return d.slug === slug; });
    if (idx === -1) idx = 0;
    var doc = docs[idx];
    var docChanged = STATE.activeDocSlug !== doc.slug;
    STATE.activeDocSlug = doc.slug;

    renderDocsSidebar();

    var host = el('docs-article-view');
    if (!host) return;

    if (docChanged || !host.innerHTML) {
      var blocksHtml = (doc.blocks || []).map(function (b) {
        return renderDocBlock(b, doc.slug);
      }).join('');
      var prevDoc = idx > 0 ? docs[idx - 1] : null;
      var nextDoc = idx < docs.length - 1 ? docs[idx + 1] : null;
      var shareUrl = window.location.href.split('#')[0] + '#/docs/' + doc.slug;

      host.innerHTML =
        '<div style="display:flex; align-items:flex-start; justify-content:space-between; gap:12px; flex-wrap:wrap">' +
          '<h2 class="doc-title">' + esc(doc.title) + '</h2>' +
          '<button type="button" onclick="copyText(\'' + esc(shareUrl) + '\', \'Sayfa linki kopyalandı\')" class="FunkinButton" style="padding:5px 10px; font-size:11px">' +
            '<i class="fa-solid fa-link" style="color:#f87171"></i> Linki Kopyala' +
          '</button>' +
        '</div>' +
        '<p class="doc-lead">' + esc(doc.summary || '') + '</p>' +
        '<div style="margin-top:14px">' + blocksHtml + '</div>' +
        '<div class="doc-nav-footer">' +
          (prevDoc
            ? '<a href="#/docs/' + esc(prevDoc.slug) + '" class="FunkinButton"><i class="fa-solid fa-arrow-left"></i> ' + esc(prevDoc.title) + '</a>'
            : '<span></span>') +
          (nextDoc
            ? '<a href="#/docs/' + esc(nextDoc.slug) + '" class="FunkinButton">' + esc(nextDoc.title) + ' <i class="fa-solid fa-arrow-right"></i></a>'
            : '<span></span>') +
        '</div>';
    }

    if (STATE.currentPage === 'docs') {
      document.title = doc.title + ' — P.E.T Docs';
      if (sectionSlug) {
        scrollToDocSection(sectionSlug);
      } else if (docChanged) {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }
  }

  /* =========================================================================
     ARŞİV SEKMESİ (Akıllı Logo + Çoklu İndirme Seçenekleri)
     ========================================================================= */
  window.setArchiveCategory = function (catId) {
    STATE.archiveCategory = catId || 'all';
    renderArchiveCats();
    renderArchive();
  };

  function renderArchiveCats() {
    var host = el('archive-cat-tabs');
    if (!host || !STATE.archiveData) return;
    var cats = STATE.archiveData.categories || [];

    var list = [{ id: 'all', label: 'Tümü' }].concat(cats);
    host.innerHTML = list.map(function (c) {
      var on = STATE.archiveCategory === c.id ? ' active' : '';
      return '<button type="button" class="TabButton' + on + '" onclick="setArchiveCategory(\'' + esc(c.id) + '\')">' + esc(c.label) + '</button>';
    }).join('');
  }

  window.renderArchive = function () {
    var grid = el('archive-grid');
    var empty = el('archive-empty');
    if (!grid || !STATE.archiveData) return;

    var q = normTR((el('archive-search') && el('archive-search').value) || '');
    var items = STATE.archiveData.items || [];

    var filtered = items.filter(function (it) {
      if (STATE.archiveCategory !== 'all' && it.category !== STATE.archiveCategory) return false;
      if (q) {
        var dlLabels = (it.downloads || []).map(function (d) { return d.label || ''; }).join(' ');
        var hay = normTR([it.title, it.description, it.version, it.platforms, dlLabels].join(' '));
        if (hay.indexOf(q) === -1) return false;
      }
      return true;
    });

    if (!filtered.length) {
      grid.innerHTML = '';
      if (empty) empty.classList.remove('hidden');
      return;
    }
    if (empty) empty.classList.add('hidden');

    grid.innerHTML = filtered.map(function (it) {
      var meta = [it.version, it.platforms, it.size].filter(Boolean).join(' · ');
      var dls = normalizeArchiveDownloads(it);

      var actionsHtml = '';
      if (dls.length) {
        var btns = dls.map(function (d, dlIdx) {
          var ic = d.icon || 'fa-download';
          var pref = iconPrefix(ic);

          if (d.platforms && d.platforms.length) {
            return (
              '<button type="button" class="' + (d.primary ? 'primary' : '') + '" onclick="openPlatformModal(\'' + esc(it.id) + '\', ' + dlIdx + ')">' +
                '<i class="' + pref + ' ' + esc(ic) + '" aria-hidden="true"></i> ' +
                esc(d.label) +
                ' <i class="fa-solid fa-chevron-down" style="font-size:9px; opacity:.75" aria-hidden="true"></i>' +
              '</button>'
            );
          }

          var isInternal = d.url.indexOf('#/') === 0;
          var targetAttrs = isInternal ? '' : ' target="_blank" rel="noopener"';
          return (
            '<a href="' + esc(d.url) + '"' + targetAttrs + ' class="' + (d.primary ? 'primary' : '') + '">' +
              '<i class="' + pref + ' ' + esc(ic) + '" aria-hidden="true"></i> ' +
              esc(d.label) +
            '</a>'
          );
        }).join('');
        actionsHtml = '<div class="archive-actions">' + btns + '</div>';
      } else {
        actionsHtml = '<div style="margin-top:12px; padding-top:10px; border-top:1px solid rgba(255,255,255,.06); font-size:11.5px; color:#6b7280">İndirme linki yakında eklenecek</div>';
      }

      var thumbHtml = it.image
        ? '<div class="archive-thumb"><img src="' + esc(it.image) + '" alt="" loading="lazy" onerror="this.parentNode.style.display=\'none\'"></div>'
        : '';

      return (
        '<div class="archive-card">' +
          thumbHtml +
          '<div class="archive-head">' +
            renderArchiveLogoHtml(it, false) +
            '<div style="min-width:0; flex:1">' +
              '<h3 class="archive-title">' + esc(it.title) + '</h3>' +
              (meta ? '<div class="archive-meta">' + esc(meta) + '</div>' : '') +
            '</div>' +
          '</div>' +
          '<p class="archive-desc">' + esc(it.description || '') + '</p>' +
          actionsHtml +
        '</div>'
      );
    }).join('');
  };

  /* =========================================================================
     PLATFORM SEÇİM MODALI (Windows / Android / Linux vb. Ayrı Link Yönlendirme)
     ========================================================================= */
  window.openPlatformModal = function (itemId, dlIdx) {
    var m = el('platform-modal');
    var head = el('platform-modal-head');
    var listHost = el('platform-modal-list');
    if (!m || !listHost || !STATE.archiveData) return;

    var item = (STATE.archiveData.items || []).find(function (x) { return x.id === itemId; });
    if (!item) return;

    var dls = normalizeArchiveDownloads(item);
    var dl = dls[dlIdx];
    if (!dl || !dl.platforms || !dl.platforms.length) return;

    if (head) {
      head.innerHTML =
        renderArchiveLogoHtml(item, true) +
        '<div style="min-width:0">' +
          '<div id="platform-modal-title" class="vcr" style="font-size:14.5px; color:#fff; white-space:nowrap; overflow:hidden; text-overflow:ellipsis">' + esc(item.title) + '</div>' +
          '<div id="platform-modal-sub" style="font-size:11.8px; color:#9aa0b6; margin-top:2px">' + esc(dl.label) + ' — Platform Seçin</div>' +
        '</div>';
    }

    listHost.innerHTML = dl.platforms.map(function (p) {
      var ic = p.icon || 'fa-download';
      var pref = iconPrefix(ic);
      var hasUrl = Boolean(p.url && p.url !== '');
      var hostHint = extractHostHint(p.url);
      var subParts = [p.sub, hostHint].filter(Boolean).join(' · ');

      if (hasUrl) {
        var isInternal = p.url.indexOf('#/') === 0;
        var targetAttrs = isInternal ? '' : ' target="_blank" rel="noopener"';
        return (
          '<a href="' + esc(p.url) + '"' + targetAttrs + ' class="platform-opt-row" onclick="closePlatformModal()">' +
            '<div class="platform-opt-icon"><i class="' + pref + ' ' + esc(ic) + '" aria-hidden="true"></i></div>' +
            '<div style="flex:1; min-width:0">' +
              '<div class="vcr" style="font-size:13.8px; color:#fff">' + esc(p.label) + '</div>' +
              (subParts ? '<div style="font-size:11.8px; color:#9aa0b6; margin-top:2px">' + esc(subParts) + '</div>' : '') +
            '</div>' +
            '<span class="vcr" style="font-size:11.5px; color:#fca5a5; flex-shrink:0; display:inline-flex; align-items:center; gap:5px">' +
              'İndir <i class="fa-solid fa-arrow-up-right-from-square" style="font-size:10px" aria-hidden="true"></i>' +
            '</span>' +
          '</a>'
        );
      }

      return (
        '<button type="button" class="platform-opt-row is-empty" onclick="notifyMissingPlatform(\'' + esc(p.label) + '\')">' +
          '<div class="platform-opt-icon"><i class="' + pref + ' ' + esc(ic) + '" aria-hidden="true"></i></div>' +
          '<div style="flex:1; min-width:0">' +
            '<div class="vcr" style="font-size:13.8px; color:#fff">' + esc(p.label) + '</div>' +
            '<div style="font-size:11.8px; color:#8f95ab; margin-top:2px">' + esc(p.sub || 'İndirme bağlantısı henüz eklenmedi') + '</div>' +
          '</div>' +
          '<span class="vcr" style="font-size:11px; color:#8f95ab; flex-shrink:0">Yakında</span>' +
        '</button>'
      );
    }).join('');

    m.classList.add('open');
  };

  window.closePlatformModal = function () {
    var m = el('platform-modal');
    if (m) m.classList.remove('open');
  };

  window.notifyMissingPlatform = function (platLabel) {
    showToast((platLabel || 'Bu platform') + ' linki henüz eklenmedi');
  };

  /* =========================================================================
     LİNKLER SEKMESİ
     ========================================================================= */
  function renderLinks() {
    var host = el('links-groups-host');
    if (!host || !STATE.linksData) return;

    host.innerHTML = (STATE.linksData.groups || []).map(function (g) {
      var rows = (g.items || []).map(function (it) {
        var prefix = iconPrefix(it.icon || 'fa-link');
        return (
          '<div class="link-row-card">' +
            '<div class="link-icon-box"><i class="' + prefix + ' ' + esc(it.icon || 'fa-link') + '"></i></div>' +
            '<div style="flex:1; min-width:0">' +
              '<div class="vcr" style="font-size:14px; color:#fff">' + esc(it.title) + '</div>' +
              '<p style="font-size:12.5px; color:#9aa0b6; margin-top:2px">' + esc(it.desc || '') + '</p>' +
            '</div>' +
            '<div style="display:flex; gap:6px; flex-shrink:0">' +
              '<button type="button" class="FunkinButton" style="padding:7px 10px; font-size:11px" title="Linki kopyala" onclick="copyText(\'' + esc(it.url) + '\', \'Link kopyalandı\')"><i class="fa-solid fa-copy"></i></button>' +
              '<a href="' + esc(it.url) + '" target="_blank" rel="noopener" class="FunkinButton white" style="padding:7px 12px; font-size:11.5px">Aç <i class="fa-solid fa-arrow-up-right-from-square" style="font-size:10px"></i></a>' +
            '</div>' +
          '</div>'
        );
      }).join('');

      return (
        '<div class="RoundedContents">' +
          '<div class="Item">' +
            '<h3 class="fe-divider" style="margin-bottom:14px">' + esc(g.title) + '</h3>' +
            '<div style="display:grid; gap:8px">' + rows + '</div>' +
          '</div>' +
        '</div>'
      );
    }).join('');
  }

  /* =========================================================================
     DESTEK SEKMESİ (TikTok @sametgkte + Discord samette111 + GitHub Issues)
     ========================================================================= */
  function renderSupport() {
    var host = el('support-host');
    if (!host || !STATE.supportData) return;
    var s = STATE.supportData;

    var channelCards = (s.channels || []).map(function (ch) {
      var pref = iconPrefix(ch.icon || 'fa-headset');
      var copyVal = ch.copyValue || ch.handle || '';
      var copyMsg = ch.copyToast || ('Kopyalandı: ' + copyVal);
      var hasUrl = ch.url && String(ch.url).trim() !== '';

      var actionsHtml = '';
      if (hasUrl) {
        actionsHtml =
          '<a href="' + esc(ch.url) + '" target="_blank" rel="noopener" class="FunkinButton crimson" style="flex:1">' +
            '<i class="' + pref + ' ' + esc(ch.icon) + '"></i> ' + esc(ch.openLabel || 'Aç') +
            ' <i class="fa-solid fa-arrow-up-right-from-square" style="font-size:10px"></i>' +
          '</a>' +
          '<button type="button" class="FunkinButton" onclick="copyText(\'' + esc(copyVal) + '\', \'' + esc(copyMsg) + '\')" title="Kullanıcı adını kopyala">' +
            '<i class="fa-solid fa-copy"></i> Kopyala' +
          '</button>';
      } else {
        actionsHtml =
          '<button type="button" class="FunkinButton crimson" style="flex:1" onclick="copyText(\'' + esc(copyVal) + '\', \'' + esc(copyMsg) + '\')">' +
            '<i class="fa-solid fa-copy"></i> Kullanıcı Adını Kopyala' +
          '</button>' +
          (ch.id === 'discord'
            ? '<a href="https://discord.com/app" target="_blank" rel="noopener" class="FunkinButton" title="Discord uygulamasını aç">Discord <i class="fa-solid fa-arrow-up-right-from-square" style="font-size:10px"></i></a>'
            : '');
      }

      return (
        '<div class="support-card">' +
          '<div style="display:flex; align-items:center; gap:12px">' +
            '<div class="support-icon-lg"><i class="' + pref + ' ' + esc(ch.icon || 'fa-headset') + '" aria-hidden="true"></i></div>' +
            '<div>' +
              '<h3 style="font-size:16px; text-align:left">' + esc(ch.platform) + '</h3>' +
              '<div style="font-size:12px; color:#8f95ab; margin-top:2px">Geliştirici İletişim</div>' +
            '</div>' +
          '</div>' +
          '<div class="support-handle-box">' +
            '<span>' + esc(ch.handle) + '</span>' +
            '<button type="button" onclick="copyText(\'' + esc(copyVal) + '\', \'' + esc(copyMsg) + '\')" style="background:transparent; border:none; color:#fca5a5; font-size:12px; padding:2px 4px" title="Kopyala">' +
              '<i class="fa-solid fa-copy"></i>' +
            '</button>' +
          '</div>' +
          '<p style="font-size:12.8px; color:#c2c0ce; line-height:1.58; margin-top:10px; flex:1">' + esc(ch.description || '') + '</p>' +
          '<div style="display:flex; gap:7px; margin-top:14px; flex-wrap:wrap">' + actionsHtml + '</div>' +
        '</div>'
      );
    }).join('');

    var bugHtml = '';
    if (s.bugReport && s.bugReport.url) {
      bugHtml =
        '<div class="link-row-card" style="margin-top:10px">' +
          '<div class="link-icon-box"><i class="fa-solid fa-bug" aria-hidden="true"></i></div>' +
          '<div style="flex:1; min-width:0">' +
            '<div class="vcr" style="font-size:14px; color:#fff">' + esc(s.bugReport.title) + '</div>' +
            '<p style="font-size:12.5px; color:#9aa0b6; margin-top:2px">' + esc(s.bugReport.description || '') + '</p>' +
          '</div>' +
          '<a href="' + esc(s.bugReport.url) + '" target="_blank" rel="noopener" class="FunkinButton white" style="padding:7px 13px; font-size:11.5px; flex-shrink:0">' +
            esc(s.bugReport.buttonLabel || 'Aç') + ' <i class="fa-solid fa-arrow-up-right-from-square" style="font-size:10px"></i>' +
          '</a>' +
        '</div>';
    }

    var checklistRows = (s.checklist || []).map(function (st, i) {
      return (
        '<div class="doc-step">' +
          '<div class="doc-step-num">' + (i + 1) + '</div>' +
          '<div style="min-width:0">' +
            '<div class="doc-step-title">' + esc(st.title) + '</div>' +
            '<div class="doc-step-desc">' + esc(st.desc) + '</div>' +
          '</div>' +
        '</div>'
      );
    }).join('');

    host.innerHTML =
      '<div class="RoundedContents">' +
        '<div class="Item" style="text-align:center">' +
          '<h2>' + esc(s.title || 'Destek') + '</h2>' +
          '<p style="color:#9aa0b6; max-width:540px; margin:6px auto 0 auto; font-size:13.5px">' + esc(s.subtitle || '') + '</p>' +
        '</div>' +
      '</div>' +
      '<div class="RoundedContents">' +
        '<div class="Item">' +
          '<div class="support-grid">' + channelCards + '</div>' +
          bugHtml +
        '</div>' +
      '</div>' +
      (checklistRows
        ? '<div class="RoundedContents">' +
            '<div class="Item">' +
              '<h3 class="fe-divider" style="margin-bottom:14px">Yazmadan Önce Kısa Notlar</h3>' +
              '<div class="doc-steps" style="margin:0">' + checklistRows + '</div>' +
            '</div>' +
          '</div>'
        : '');
  }

  /* =========================================================================
     LIGHTBOX & HIZLI ARAMA (Ctrl+K — Alt Başlıklar ve Destek Dahil)
     ========================================================================= */
  window.openLightbox = function (src, caption) {
    var m = el('lightbox-modal');
    var img = el('lightbox-img');
    var cap = el('lightbox-caption');
    if (!m || !img) return;
    img.src = src;
    img.alt = caption || '';
    if (cap) cap.textContent = caption || '';
    m.classList.add('open');
  };
  window.closeLightbox = function () {
    var m = el('lightbox-modal');
    if (m) m.classList.remove('open');
  };

  window.openSearchModal = function () {
    var m = el('search-modal');
    var inp = el('global-search-input');
    if (!m) return;
    m.classList.add('open');
    runGlobalSearch(inp ? inp.value : '');
    setTimeout(function () { if (inp) inp.focus(); }, 50);
  };
  window.closeSearchModal = function () {
    var m = el('search-modal');
    if (m) m.classList.remove('open');
  };

  window.runGlobalSearch = function (rawQ) {
    var host = el('global-search-results');
    if (!host) return;
    var q = normTR((rawQ || '').trim());
    var hits = [];

    (STATE.docsData && STATE.docsData.docs || []).forEach(function (d) {
      var bodyText = (d.blocks || []).map(function (b) {
        return [b.title, b.text, b.caption].concat((b.items || []).map(function (s) { return s.title + ' ' + s.desc; })).join(' ');
      }).join(' ');

      if (!q || normTR(d.title + ' ' + d.summary + ' ' + bodyText).indexOf(q) !== -1) {
        hits.push({
          icon: 'fa-book-open',
          prefix: 'fa-solid',
          title: d.title,
          sub: d.summary,
          action: function () { window.location.hash = '#/docs/' + d.slug; }
        });
      }

      if (q) {
        (d.blocks || []).forEach(function (b) {
          if (b.type === 'heading' && b.text && normTR(b.text).indexOf(q) !== -1) {
            var secSlug = b.id || slugifyTR(b.text);
            hits.push({
              icon: 'fa-hashtag',
              prefix: 'fa-solid',
              title: b.text,
              sub: d.title + ' — Alt başlığa git',
              action: function () { window.location.hash = '#/docs/' + d.slug + '/' + secSlug; }
            });
          }
        });
      }
    });

    (STATE.archiveData && STATE.archiveData.items || []).forEach(function (it) {
      if (!q || normTR(it.title + ' ' + it.description + ' ' + (it.version || '')).indexOf(q) !== -1) {
        hits.push({
          icon: 'fa-box-archive',
          prefix: 'fa-solid',
          title: it.title + (it.version ? ' (' + it.version + ')' : ''),
          sub: it.description,
          action: function () { window.location.hash = '#/archive'; }
        });
      }
    });

    (STATE.supportData && STATE.supportData.channels || []).forEach(function (ch) {
      var hay = normTR('destek iletisim ' + ch.platform + ' ' + ch.handle + ' ' + ch.description);
      if (!q || hay.indexOf(q) !== -1) {
        hits.push({
          icon: ch.icon || 'fa-headset',
          prefix: iconPrefix(ch.icon || 'fa-headset'),
          title: ch.platform + ' (' + ch.handle + ')',
          sub: 'Destek & İletişim',
          action: function () { window.location.hash = '#/support'; }
        });
      }
    });

    if (q) {
      (STATE.linksData && STATE.linksData.groups || []).forEach(function (g) {
        (g.items || []).forEach(function (l) {
          if (normTR(l.title + ' ' + l.desc).indexOf(q) !== -1) {
            hits.push({
              icon: 'fa-link',
              prefix: 'fa-solid',
              title: l.title,
              sub: l.desc,
              action: function () { window.open(l.url, '_blank', 'noopener'); }
            });
          }
        });
      });
    }

    STATE.searchHits = hits.slice(0, 14);
    STATE.searchActiveIdx = 0;

    if (!STATE.searchHits.length) {
      host.innerHTML = '<div style="padding:20px; text-align:center; color:#9aa0b6; font-size:13px">Sonuç bulunamadı.</div>';
      return;
    }

    host.innerHTML = STATE.searchHits.map(function (h, i) {
      return (
        '<div class="search-hit' + (i === 0 ? ' active' : '') + '" onclick="triggerSearchHit(' + i + ')">' +
          '<i class="' + (h.prefix || 'fa-solid') + ' ' + esc(h.icon) + '" style="color:#f87171; width:18px; text-align:center"></i>' +
          '<div style="flex:1; min-width:0">' +
            '<div class="vcr" style="font-size:13px; color:#fff; white-space:nowrap; overflow:hidden; text-overflow:ellipsis">' + esc(h.title) + '</div>' +
            '<div style="font-size:11.5px; color:#9aa0b6; white-space:nowrap; overflow:hidden; text-overflow:ellipsis">' + esc(h.sub || '') + '</div>' +
          '</div>' +
        '</div>'
      );
    }).join('');
  };

  window.triggerSearchHit = function (idx) {
    var h = STATE.searchHits[idx];
    if (!h) return;
    closeSearchModal();
    h.action();
  };

  /* =========================================================================
     ROUTER
     ========================================================================= */
  function highlightNav(pageId) {
    document.querySelectorAll('[data-nav]').forEach(function (a) {
      var on = a.getAttribute('data-nav') === pageId;
      a.classList.toggle('nav-active', on);
      if (on) a.setAttribute('aria-current', 'page');
      else a.removeAttribute('aria-current');
    });
  }

  function switchPageDom(pageId, skipTopScroll) {
    var target = el('page-' + pageId);
    if (!target) return;
    var changed = STATE.currentPage !== pageId;
    STATE.currentPage = pageId;

    document.querySelectorAll('.page').forEach(function (p) { p.classList.remove('active'); });
    target.classList.add('active');
    highlightNav(pageId);

    if (changed) {
      flashLoadingBar();
      if (!skipTopScroll) {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }
  }

  function handleRoute() {
    var raw = (window.location.hash || '').replace(/^#\/?/, '').replace(/\/$/, '');
    var parts = raw.split('/');
    var root = (parts[0] || '').toLowerCase();
    var docSlug = parts[1] || '';
    var sectionSlug = parts[2] || '';

    closeMobileNav();

    if (!root || root === 'home') {
      switchPageDom('home');
      document.title = PAGE_TITLES.home;
      return;
    }
    if (root === 'docs' || root === 'dokumanlar') {
      switchPageDom('docs', Boolean(sectionSlug));
      renderDocArticle(docSlug || STATE.activeDocSlug || '', sectionSlug);
      return;
    }
    if (root === 'archive' || root === 'arsiv') {
      switchPageDom('archive');
      document.title = PAGE_TITLES.archive;
      return;
    }
    if (root === 'links' || root === 'linkler') {
      switchPageDom('links');
      document.title = PAGE_TITLES.links;
      return;
    }
    if (root === 'support' || root === 'destek') {
      switchPageDom('support');
      document.title = PAGE_TITLES.support;
      return;
    }

    switchPageDom('home');
    document.title = PAGE_TITLES.home;
  }

  document.addEventListener('keydown', function (e) {
    var searchOpen = el('search-modal') && el('search-modal').classList.contains('open');

    if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
      e.preventDefault();
      if (searchOpen) closeSearchModal();
      else openSearchModal();
      return;
    }
    if (e.key === 'Escape') {
      closeLightbox();
      closePlatformModal();
      closeSearchModal();
      closeMobileNav();
      return;
    }
    if (searchOpen && STATE.searchHits.length) {
      if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
        e.preventDefault();
        var dir = e.key === 'ArrowDown' ? 1 : -1;
        STATE.searchActiveIdx = (STATE.searchActiveIdx + dir + STATE.searchHits.length) % STATE.searchHits.length;
        document.querySelectorAll('#global-search-results .search-hit').forEach(function (row, idx) {
          row.classList.toggle('active', idx === STATE.searchActiveIdx);
          if (idx === STATE.searchActiveIdx) row.scrollIntoView({ block: 'nearest' });
        });
      } else if (e.key === 'Enter') {
        e.preventDefault();
        window.triggerSearchHit(STATE.searchActiveIdx);
      }
    }
  });

  function boot() {
    loadAllData().then(function () {
      renderHomeWidgets();
      renderArchiveCats();
      renderArchive();
      renderLinks();
      renderSupport();
      var firstSlug = (STATE.docsData.docs && STATE.docsData.docs[0]) ? STATE.docsData.docs[0].slug : '';
      STATE.activeDocSlug = firstSlug;
      renderDocArticle(firstSlug, '');
      handleRoute();
      window.addEventListener('hashchange', handleRoute);
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', boot);
  } else {
    boot();
  }
})();
