/* =====================================================================
   main.js — renders the data files and wires up interactions.
   You normally don't need to edit this file: change config.js,
   data.js and projects.js instead.
   ===================================================================== */
(function () {
  "use strict";

  var CFG = window.SITE_CONFIG || {};
  var root = document.documentElement;
  var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  root.classList.add("js");

  /* ---------------- Helpers ---------------- */
  function $(sel, ctx) { return (ctx || document).querySelector(sel); }
  function $all(sel, ctx) { return Array.prototype.slice.call((ctx || document).querySelectorAll(sel)); }

  // A value counts as "set" when it's non-empty and not a [PLACEHOLDER]
  function isSet(v) { return typeof v === "string" && v.trim() !== "" && !/^\[.*\]$/.test(v.trim()); }

  function esc(s) {
    return String(s == null ? "" : s).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  }

  // Only allow http(s), mailto and relative links in data-driven hrefs
  function safeUrl(u) {
    if (!isSet(u)) return "";
    u = u.trim();
    if (/^(https?:|mailto:)/i.test(u) || !/^[a-z][a-z0-9+.-]*:/i.test(u)) return u;
    return "";
  }

  /* ---------------- Icons (simple stroke icons, 24x24) ---------------- */
  var ICONS = {
    android: '<path d="M5 16V10a7 7 0 0114 0v6H5z"/><path d="M8 4.5L6.5 2.5M16 4.5l1.5-2M9 9.5h.01M15 9.5h.01M5 16v3a1 1 0 001 1h2v-4M19 16v3a1 1 0 01-1 1h-2v-4"/>',
    apple: '<path d="M16.5 3.5a3.5 3.5 0 01-3 3.5 3.5 3.5 0 013-3.5zM12 7.5c-1-.6-2-.9-3-.9C6.3 6.6 4.5 9 4.5 12.3 4.5 16.6 7.2 21 9.2 21c1 0 1.6-.6 2.8-.6s1.7.6 2.8.6c1.5 0 3.2-2.6 3.8-4.6a3.9 3.9 0 01-.4-7.1 4.2 4.2 0 00-3.2-1.7c-1.1 0-2 .5-3 .9z"/>',
    layers: '<path d="M12 2l10 5-10 5L2 7l10-5z"/><path d="M2 12l10 5 10-5M2 17l10 5 10-5"/>',
    code: '<path d="M8 6l-6 6 6 6M16 6l6 6-6 6M14 4l-4 16"/>',
    server: '<rect x="3" y="3" width="18" height="7" rx="2"/><rect x="3" y="14" width="18" height="7" rx="2"/><path d="M7 6.5h.01M7 17.5h.01"/>',
    flame: '<path d="M12 22a7 7 0 007-7c0-4-3-6-4-10-2 2-3 4-3 6-1-1-2-2-2-4-2 2-5 5-5 8a7 7 0 007 7z"/>',
    card: '<rect x="2" y="5" width="20" height="14" rx="2"/><path d="M2 10h20M6 15h4"/>',
    shield: '<path d="M12 22s8-3.5 8-10V5l-8-3-8 3v7c0 6.5 8 10 8 10z"/><path d="M9 12l2 2 4-4"/>',
    map: '<path d="M9 4L3 6v14l6-2 6 2 6-2V4l-6 2-6-2z"/><path d="M9 4v14M15 6v14"/>',
    rocket: '<path d="M5 15c-1.5 1.5-2 5-2 5s3.5-.5 5-2M14 4c3-2 6-1 6-1s1 3-1 6l-7 7-5-5 7-7z"/><path d="M9 11l-4-1 3-3h4M13 15l1 4 3-3v-4"/>',
    phone: '<rect x="6" y="2" width="12" height="20" rx="3"/><path d="M11 18h2"/>',
    plug: '<path d="M9 2v6M15 2v6M6 8h12v3a6 6 0 01-12 0V8zM12 17v5"/>',
    lock: '<rect x="4" y="10" width="16" height="11" rx="2"/><path d="M8 10V7a4 4 0 018 0v3"/>',
    cart: '<circle cx="9" cy="20" r="1.5"/><circle cx="18" cy="20" r="1.5"/><path d="M2 3h3l2.5 12h11l2-8H6.2"/>',
    fingerprint: '<path d="M12 11v3a8 8 0 01-2 5M8 7.5A5 5 0 0117 11v2a12 12 0 01-1 5M5 10a7 7 0 012-4.5M7 14a14 14 0 01-1 4M12 2a9 9 0 019 9v1"/>',
    bell: '<path d="M6 8a6 6 0 1112 0c0 7 3 9 3 9H3s3-2 3-9M10 21h4"/>',
    user: '<circle cx="12" cy="8" r="4"/><path d="M4 21a8 8 0 0116 0"/>',
    chart: '<path d="M3 3v18h18"/><path d="M7 15l4-4 3 3 5-6"/>',
    bug: '<rect x="7" y="8" width="10" height="13" rx="5"/><path d="M12 8v13M9 5l1.5 3M15 5l-1.5 3M3 13h4M17 13h4M4 19l3-2M20 19l-3-2M4 7l3 2M20 7l-3 2"/>',
    upload: '<path d="M12 16V4m0 0L7 9m5-5l5 5M4 20h16"/>',
    wrench: '<path d="M14.7 6.3a4 4 0 005 5L22 14l-8 8-2.3-2.3a4 4 0 00-5-5L2 10l8-8 2.3 2.3a4 4 0 002.4 2z"/>',
    refresh: '<path d="M21 12a9 9 0 01-15.5 6.2L3 16M3 12A9 9 0 0118.5 5.8L21 8M21 3v5h-5M3 21v-5h5"/>',
    support: '<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="4"/><path d="M5.6 5.6l3.6 3.6M14.8 14.8l3.6 3.6M18.4 5.6l-3.6 3.6M9.2 14.8l-3.6 3.6"/>',
    bank: '<path d="M3 10l9-6 9 6M5 10v8M9.5 10v8M14.5 10v8M19 10v8M3 21h18"/>',
    chat: '<path d="M21 12a8 8 0 01-11.6 7.1L3 21l1.9-6.4A8 8 0 1121 12z"/>',
    car: '<path d="M5 17h14M5 17v2M19 17v2M3 13l2-6h14l2 6v4H3v-4zM7 14h.01M17 14h.01"/>',
    users: '<circle cx="9" cy="8" r="3.5"/><path d="M2 20a7 7 0 0114 0M16 4.5a3.5 3.5 0 010 7M22 20a7 7 0 00-4-6.3"/>',
    food: '<path d="M4 3v8a3 3 0 006 0V3M7 3v18M17 21V3c-2 0-3.5 3-3.5 7s1.5 4 3.5 4"/>',
    truck: '<path d="M2 6h12v10H2zM14 10h4l4 4v2h-8"/><circle cx="6" cy="18" r="2"/><circle cx="18" cy="18" r="2"/>',
    bolt: '<path d="M13 2L4 14h7l-1 8 9-12h-7z"/>',
    calendar: '<rect x="3" y="5" width="18" height="16" rx="2"/><path d="M3 10h18M8 3v4M16 3v4"/>',
    pin: '<path d="M12 22s7-6.2 7-12a7 7 0 10-14 0c0 5.8 7 12 7 12z"/><circle cx="12" cy="10" r="2.5"/>',
    briefcase: '<rect x="2" y="7" width="20" height="14" rx="2"/><path d="M8 7V5a2 2 0 012-2h4a2 2 0 012 2v2M2 13h20"/>',
    external: '<path d="M14 4h6v6M20 4l-9 9M18 14v5a1 1 0 01-1 1H5a1 1 0 01-1-1V7a1 1 0 011-1h5"/>',
    github: '<path d="M9 19c-4.3 1.4-4.3-2.5-6-3m12 5v-3.5c0-1 .1-1.4-.5-2 2.8-.3 5.5-1.4 5.5-6a4.6 4.6 0 00-1.3-3.2 4.2 4.2 0 00-.1-3.2s-1.1-.3-3.5 1.3a12.3 12.3 0 00-6.2 0C6.5 2.8 5.4 3.1 5.4 3.1a4.2 4.2 0 00-.1 3.2A4.6 4.6 0 004 9.5c0 4.6 2.7 5.7 5.5 6-.6.6-.6 1.2-.5 2V21"/>'
  };
  function icon(name) {
    return '<svg class="i" viewBox="0 0 24 24" aria-hidden="true">' + (ICONS[name] || ICONS.code) + "</svg>";
  }
  // Filled store marks for store buttons
  var PLAY_SVG = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 2.5v19c0 .4.4.6.7.4L14.5 12 4.7 2.1c-.3-.2-.7 0-.7.4zM15.6 13.1l2.6 2.6-11.3 6.4 8.7-9zM15.6 10.9L6.9 1.9l11.3 6.4-2.6 2.6zM19.3 9l2.4 1.4c.6.4.6 1.2 0 1.6L19.3 13.4 16.7 12l2.6-3z"/></svg>';
  var APPLE_SVG = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M16.4 12.6c0-2.4 2-3.6 2.1-3.7-1.1-1.7-2.9-1.9-3.5-1.9-1.5-.2-2.9.9-3.7.9-.8 0-1.9-.9-3.2-.8-1.6 0-3.1 1-4 2.4-1.7 3-.4 7.3 1.2 9.7.8 1.2 1.8 2.5 3 2.4 1.2 0 1.7-.8 3.1-.8s1.9.8 3.2.8c1.3 0 2.2-1.2 3-2.4.9-1.4 1.3-2.7 1.3-2.8 0 0-2.5-1-2.5-3.8zM14 5.4c.7-.8 1.1-1.9 1-3-1 0-2.1.7-2.8 1.5-.6.7-1.2 1.8-1 2.9 1 .1 2.1-.6 2.8-1.4z"/></svg>';

  /* ---------------- 1. Apply config ---------------- */
  function applyConfig() {
    $all("[data-cfg]").forEach(function (el) {
      var key = el.getAttribute("data-cfg");
      var val = CFG[key];
      if (val == null || val === "") return;
      el.textContent = val;
      el.classList.toggle("is-placeholder", !isSet(val));
    });

    var links = {
      github: safeUrl(CFG.github),
      linkedin: safeUrl(CFG.linkedin),
      resume: safeUrl(CFG.resume),
      whatsapp: isSet(CFG.whatsapp) ? "https://wa.me/" + CFG.whatsapp.replace(/\D/g, "") : ""
    };
    $all("[data-link]").forEach(function (a) {
      var url = links[a.getAttribute("data-link")];
      if (url) { a.href = url; a.hidden = false; }
      else { a.hidden = true; a.removeAttribute("href"); }
    });

    // Profile photo (About card) — stays hidden until "photo" is set
    var photoBox = $("[data-photo]");
    if (photoBox && isSet(CFG.photo)) {
      var img = new Image();
      img.src = CFG.photo;
      img.alt = "Portrait of " + (isSet(CFG.fullName) ? CFG.fullName : "the site owner");
      img.width = 240; img.height = 240;
      img.decoding = "async";
      photoBox.appendChild(img);
      photoBox.hidden = false;
    }

    // Title, meta & structured data once a real name is set
    if (isSet(CFG.fullName)) {
      document.title = CFG.fullName + " | " + CFG.title + " — Android, iOS, Flutter & Backend";
      var author = $('meta[name="author"]'); if (author) author.content = CFG.fullName;
      var person = {
        "@context": "https://schema.org",
        "@type": "Person",
        name: CFG.fullName,
        jobTitle: CFG.title,
        knowsAbout: ["Android", "iOS", "Flutter", "Kotlin", "Swift", "Kotlin Multiplatform", "Spring Boot", "Firebase", "Mobile App Development"],
        sameAs: [links.github, links.linkedin].filter(Boolean)
      };
      if (safeUrl(CFG.siteUrl)) person.url = CFG.siteUrl;
      var ld = document.createElement("script");
      ld.type = "application/ld+json";
      ld.textContent = JSON.stringify(person);
      document.head.appendChild(ld);
    }

    // Education & courses
    var edu = $("#education-list");
    if (edu) edu.innerHTML = (CFG.education || []).map(function (e) {
      return "<li>" + esc(e.degree) + "<span>" + esc(e.school) + " · " + esc(e.period) + "</span></li>";
    }).join("");
    var courses = $("#courses-list");
    if (courses) courses.innerHTML = (CFG.courses || []).map(function (c) {
      return "<li>" + esc(c.name) + "<span>" + esc(c.provider) + "</span></li>";
    }).join("");

    var year = $("#year"); if (year) year.textContent = new Date().getFullYear();
  }

  /* ---------------- 2. Render sections ---------------- */
  var LEVEL_LABEL = { core: "Core", proficient: "Proficient", familiar: "Familiar / learning" };

  function renderSkills() {
    var el = $("#skills-grid"); if (!el) return;
    el.innerHTML = (window.SKILLS || []).map(function (g) {
      return '<article class="card skill-card reveal">' +
        '<h3><span class="card-icon">' + icon(g.icon) + "</span>" + esc(g.title) + "</h3>" +
        (g.note ? '<p class="skill-note">' + esc(g.note) + "</p>" : "") +
        '<ul class="skill-list">' + g.items.map(function (s) {
          var lvl = LEVEL_LABEL[s.level] ? s.level : "proficient";
          return '<li><span class="lvl lvl-' + lvl + '" role="img" aria-label="' + LEVEL_LABEL[lvl] + '" title="' + LEVEL_LABEL[lvl] + '"></span>' + esc(s.name) + "</li>";
        }).join("") + "</ul></article>";
    }).join("");
  }

  function tagsHtml(list) {
    return list && list.length ? '<ul class="tags" aria-label="Technologies">' + list.map(function (t) { return "<li>" + esc(t) + "</li>"; }).join("") + "</ul>" : "";
  }
  function pointsHtml(list) {
    return list && list.length ? '<ul class="tl-points">' + list.map(function (p) { return "<li>" + esc(p) + "</li>"; }).join("") + "</ul>" : "";
  }

  function renderExperience() {
    var el = $("#timeline"); if (!el) return;
    el.innerHTML = (window.EXPERIENCE || []).map(function (x) {
      return '<li class="tl-item reveal"><article class="card">' +
        '<div class="tl-head"><div><h3>' + esc(x.role) + '</h3><span class="tl-company">' + esc(x.company) + "</span></div>" +
        '<div class="tl-meta"><div>' + esc(x.period) + "</div><div>" + esc(x.location) + "</div></div></div>" +
        pointsHtml(x.points) + tagsHtml(x.tech) + "</article></li>";
    }).join("");
  }

  function storeButton(kind, url, appName) {
    var isPlay = kind === "play";
    return '<a class="store-btn" href="' + esc(url) + '" target="_blank" rel="noopener noreferrer" aria-label="' +
      esc(appName) + (isPlay ? " on Google Play" : " on the App Store") + ' (opens in a new tab)">' +
      (isPlay ? PLAY_SVG : APPLE_SVG) +
      "<span><small>" + (isPlay ? "Get it on" : "Download on the") + "</small>" + (isPlay ? "Google Play" : "App Store") + "</span></a>";
  }

  function renderApps() {
    var el = $("#apps-grid"); if (!el) return;
    var apps = window.PUBLISHED_APPS || [];
    el.innerHTML = apps.map(function (a) {
      var l = a.links || {}, s = a.stats || {};
      var play = safeUrl(l.playStore), ios = safeUrl(l.appStore), web = safeUrl(l.website);
      var platforms = (play ? "<span>Android</span>" : "") + (ios ? "<span>iOS</span>" : "");
      var initials = a.name.split(/\s+/).map(function (w) { return w[0]; }).slice(0, 2).join("").toUpperCase();
      var shots = (a.images || []).filter(isSet).slice(0, 3);
      var media = shots.length
        ? '<div class="app-shots">' + shots.map(function (src, i) {
            return '<img src="' + esc(src) + '" alt="' + esc(a.name) + " app screenshot " + (i + 1) + '" loading="lazy" decoding="async" width="300" height="640">';
          }).join("") + "</div>"
        : '<span class="app-mono" aria-hidden="true">' + esc(initials) + "</span>";

      var stats = "";
      if (s.playRating || s.iosRating) {
        stats = '<div class="store-stats">' +
          (s.playRating ? '<div class="store-stat"><div class="ss-platform">Google Play</div>' +
            '<div class="ss-rating"><span class="star" aria-hidden="true">★</span>' + esc(s.playRating) + '<span class="sr-only"> out of 5</span></div>' +
            '<div class="ss-sub">' + (s.playReviews ? esc(s.playReviews) + " reviews" : "") + (s.playDownloads ? esc(s.playDownloads) + " downloads" : "") + "</div></div>" : "") +
          (s.iosRating ? '<div class="store-stat"><div class="ss-platform">App Store</div>' +
            '<div class="ss-rating"><span class="star" aria-hidden="true">★</span>' + esc(s.iosRating) + '<span class="sr-only"> out of 5</span></div>' +
            '<div class="ss-sub">' + (s.iosRatings ? esc(s.iosRatings) + " ratings" : "") + "</div></div>" : "") +
          "</div>";
      }

      return '<article class="card app-card reveal">' +
        '<div class="app-media' + (shots.length ? " has-shots" : "") + '">' + media + '<span class="app-badge">' + esc(a.category) + "</span>" +
        (platforms ? '<div class="app-platforms" aria-label="Platforms">' + platforms + "</div>" : "") + "</div>" +
        '<div class="app-body"><h3>' + esc(a.name) + '</h3><p class="app-org">' + esc(a.org) + "</p>" +
        stats +
        '<p class="app-summary">' + esc(a.summary) + "</p>" +
        (a.contributions && a.contributions.length ? '<h4 class="contrib-title">What I worked on</h4>' + pointsHtml(a.contributions) : "") +
        tagsHtml(a.tech) +
        '<div class="store-buttons">' + (play ? storeButton("play", play, a.name) : "") + (ios ? storeButton("ios", ios, a.name) : "") +
        (web ? '<a class="btn btn-ghost btn-sm" href="' + esc(web) + '" target="_blank" rel="noopener noreferrer">' + icon("external") + " Website</a>" : "") +
        "</div></div></article>";
    }).join("");

    var note = $("#stats-note");
    if (note && apps.some(function (a) { return a.stats; })) {
      note.textContent = "Ratings, reviews and downloads are a snapshot from the public Google Play and App Store pages as of " +
        (window.STORE_STATS_DATE || "the date noted") + ". They belong to each app as a whole, not to my individual contribution.";
    }
    var statBanking = $("#stat-banking"); if (statBanking) statBanking.textContent = apps.length;
  }

  function renderWork() {
    var el = $("#work-grid"); if (!el) return;
    el.innerHTML = (window.FEATURE_WORK || []).map(function (w) {
      var l = w.links || {};
      var btns = [
        ["github", "Code", "github"], ["website", "Website", "external"],
        ["playStore", "Google Play", "external"], ["appStore", "App Store", "external"]
      ].map(function (b) {
        var u = safeUrl(l[b[0]]);
        return u ? '<a class="btn btn-ghost btn-xs" href="' + esc(u) + '" target="_blank" rel="noopener noreferrer">' + icon(b[2]) + " " + b[1] + "</a>" : "";
      }).join("");
      return '<article class="card work-card reveal">' +
        '<p class="work-type">' + esc(w.type) + "</p><h3>" + esc(w.name) + '</h3><p class="work-context">' + esc(w.context) + "</p>" +
        pointsHtml(w.points) + tagsHtml(w.tech) + (btns ? '<div class="work-links">' + btns + "</div>" : "") + "</article>";
    }).join("");
  }

  function renderCards(selector, list) {
    var el = $(selector); if (!el) return;
    el.innerHTML = (list || []).map(function (s) {
      return '<article class="card reveal"><span class="card-icon">' + icon(s.icon) + "</span><h3>" + esc(s.title) + "</h3><p>" + esc(s.desc) + "</p>" +
        (s.note ? '<span class="service-note">' + esc(s.note) + "</span>" : "") + "</article>";
    }).join("");
  }

  function renderProcess() {
    var el = $("#process-list"); if (!el) return;
    el.innerHTML = (window.PROCESS || []).map(function (p) {
      return '<li class="reveal"><h3>' + esc(p.title) + "</h3><p>" + esc(p.desc) + "</p></li>";
    }).join("");
  }

  /* ---------------- 3. Navigation ---------------- */
  function initNav() {
    var header = $(".site-header");
    var toggle = $(".nav-toggle");
    var menu = $("#nav-menu");
    var mq = window.matchMedia("(max-width: 920px)");

    function setOpen(open) {
      toggle.setAttribute("aria-expanded", String(open));
      toggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
      menu.classList.toggle("open", open);
      document.body.classList.toggle("menu-open", open);
      // Wait a tick so the menu is visible before moving focus into it
      if (open) setTimeout(function () { var first = $("a", menu); if (first) first.focus(); }, 30);
    }
    toggle.addEventListener("click", function () { setOpen(toggle.getAttribute("aria-expanded") !== "true"); });
    menu.addEventListener("click", function (e) { if (e.target.closest("a")) setOpen(false); });
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && menu.classList.contains("open")) { setOpen(false); toggle.focus(); }
      // Keep focus inside the open mobile menu
      if (e.key === "Tab" && menu.classList.contains("open")) {
        var items = [toggle].concat($all("a:not([hidden])", menu));
        var first = items[0], last = items[items.length - 1];
        if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
        else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
      }
    });
    mq.addEventListener("change", function () { if (!mq.matches) setOpen(false); });

    // Header border + back-to-top visibility
    var backTop = $(".back-to-top");
    function onScroll() {
      var y = window.scrollY;
      header.classList.toggle("scrolled", y > 8);
      backTop.classList.toggle("show", y > 600);
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    // Highlight the nav link for the section in view
    if ("IntersectionObserver" in window) {
      var navLinks = $all(".nav-links a");
      var io = new IntersectionObserver(function (entries) {
        entries.forEach(function (en) {
          if (!en.isIntersecting) return;
          navLinks.forEach(function (a) {
            var active = a.getAttribute("href") === "#" + en.target.id;
            a.classList.toggle("active", active);
            if (active) a.setAttribute("aria-current", "true"); else a.removeAttribute("aria-current");
          });
        });
      }, { rootMargin: "-45% 0px -50% 0px" });
      navLinks.forEach(function (a) { var s = $(a.getAttribute("href")); if (s) io.observe(s); });
    }
  }

  /* ---------------- 4. Theme ---------------- */
  function initTheme() {
    var btn = $(".theme-toggle");
    var mql = window.matchMedia("(prefers-color-scheme: light)");
    function current() { return root.getAttribute("data-theme") || (mql.matches ? "light" : "dark"); }
    function sync() {
      var t = current();
      btn.setAttribute("aria-label", t === "dark" ? "Switch to light theme" : "Switch to dark theme");
      var meta = $('meta[name="theme-color"]'); if (meta) meta.content = t === "dark" ? "#0b1020" : "#f7f8fc";
    }
    btn.addEventListener("click", function () {
      var next = current() === "dark" ? "light" : "dark";
      root.setAttribute("data-theme", next);
      try { localStorage.setItem("theme", next); } catch (e) {}
      sync();
    });
    mql.addEventListener("change", sync);
    sync();
  }

  /* ---------------- 5. Reveal & counters ---------------- */
  function initReveal() {
    var items = $all(".reveal");
    if (reduceMotion || !("IntersectionObserver" in window)) { items.forEach(function (el) { el.classList.add("visible"); }); return; }
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) { if (en.isIntersecting) { en.target.classList.add("visible"); io.unobserve(en.target); } });
    }, { rootMargin: "0px 0px -8% 0px" });
    items.forEach(function (el) { io.observe(el); });
  }

  function initCounters() {
    if (reduceMotion || !("IntersectionObserver" in window)) return;
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (!en.isIntersecting) return;
        io.unobserve(en.target);
        var el = en.target, text = el.textContent.trim();
        var m = text.match(/^(\d+)(.*)$/);
        if (!m) return;
        var target = parseInt(m[1], 10), suffix = m[2], start = null, dur = 900;
        function step(ts) {
          if (!start) start = ts;
          var p = Math.min((ts - start) / dur, 1);
          el.textContent = Math.round(target * (1 - Math.pow(1 - p, 3))) + suffix;
          if (p < 1) requestAnimationFrame(step);
        }
        requestAnimationFrame(step);
      });
    }, { threshold: 0.6 });
    $all(".count").forEach(function (el) { io.observe(el); });
  }

  /* ---------------- 6. Contact ---------------- */
  function initContact() {
    var emailSet = isSet(CFG.email);
    var endpoint = safeUrl(CFG.formEndpoint);
    var copyBtn = $("#copy-email"), copyStatus = $(".copy-status");

    if (copyBtn) {
      if (!emailSet) copyBtn.hidden = true;
      copyBtn.addEventListener("click", function () {
        function done(ok) {
          copyStatus.textContent = ok ? "Email copied" : "Copy failed. Please select the address manually.";
          setTimeout(function () { copyStatus.textContent = ""; }, 2500);
        }
        if (navigator.clipboard && window.isSecureContext) {
          navigator.clipboard.writeText(CFG.email).then(function () { done(true); }, function () { done(false); });
        } else {
          var ta = document.createElement("textarea");
          ta.value = CFG.email; ta.setAttribute("readonly", ""); ta.style.position = "absolute"; ta.style.left = "-9999px";
          document.body.appendChild(ta); ta.select();
          var ok = false; try { ok = document.execCommand("copy"); } catch (e) {}
          document.body.removeChild(ta); done(ok);
        }
      });
    }

    var form = $("#contact-form"); if (!form) return;
    var note = $("#form-note"), status = $("#form-status"), submit = $("#cf-submit");

    if (endpoint) {
      note.textContent = "Your message is sent securely through a form service.";
    } else if (emailSet) {
      note.textContent = "Clicking Send opens your email app with this message filled in. You send it from there.";
      submit.textContent = "Open in email app";
    } else {
      note.textContent = "The contact form isn't connected yet. Please use the links on this page.";
      submit.disabled = true;
    }

    function setStatus(msg, kind) { status.textContent = msg; status.className = "form-status " + (kind || ""); }

    form.addEventListener("submit", function (e) {
      e.preventDefault();
      setStatus("");
      var fields = ["name", "email", "subject", "message"].map(function (n) { return form.elements[n]; });
      var firstInvalid = null;
      fields.forEach(function (f) {
        var ok = f.value.trim() !== "" && (f.type !== "email" || /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(f.value.trim()));
        f.setAttribute("aria-invalid", String(!ok));
        if (!ok && !firstInvalid) firstInvalid = f;
      });
      if (firstInvalid) { setStatus("Please fill in all fields with a valid email address.", "err"); firstInvalid.focus(); return; }
      if (form.elements._gotcha.value) return; // bot

      var data = { name: fields[0].value.trim(), email: fields[1].value.trim(), subject: fields[2].value.trim(), message: fields[3].value.trim() };

      if (endpoint) {
        submit.disabled = true; setStatus("Sending…");
        fetch(endpoint, { method: "POST", headers: { "Content-Type": "application/json", Accept: "application/json" }, body: JSON.stringify(data) })
          .then(function (r) {
            if (!r.ok) throw new Error();
            form.reset(); setStatus("Thanks! Your message has been sent.", "ok");
          })
          .catch(function () { setStatus("Sorry, the message couldn't be sent. Please email me directly.", "err"); })
          .then(function () { submit.disabled = false; });
      } else if (emailSet) {
        var body = data.message + "\n\n— " + data.name + " (" + data.email + ")";
        window.location.href = "mailto:" + encodeURIComponent(CFG.email) +
          "?subject=" + encodeURIComponent(data.subject) + "&body=" + encodeURIComponent(body);
        setStatus("Your email app should open now. If it doesn't, copy the email address above.", "ok");
      }
    });
  }

  /* ---------------- Boot ---------------- */
  applyConfig();
  renderSkills();
  renderExperience();
  renderApps();
  renderWork();
  renderCards("#services-grid", window.SERVICES);
  renderCards("#products-grid", window.PRODUCT_TYPES);
  renderCards("#why-grid", window.WHY);
  renderProcess();
  initNav();
  initTheme();
  initReveal();
  initCounters();
  initContact();
})();
