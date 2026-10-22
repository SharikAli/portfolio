# Mobile Engineer Portfolio

A fast, responsive portfolio site built with plain **HTML, CSS and JavaScript**. There is no framework, no build step and no paid service. It works on any free static host.

---

## 1. What's inside

```
portfolio/
├── index.html              Page structure, SEO and social-sharing tags
├── css/style.css           All styles (colours are CSS variables at the top)
├── js/
│   ├── config.js           ← YOUR DETAILS: name, email, links, CV, photo, figures
│   ├── data.js             Skills, experience, services, app types, process
│   ├── projects.js         Published apps + other projects (with "add later" templates)
│   └── main.js             Renders everything and handles interactions (rarely edited)
├── assets/
│   ├── images/             profile photo, og-image.jpg (link preview), projects/ screenshots
│   └── resume/             your CV PDF
├── README.md               This guide
└── CHECKLIST.md            What to replace before publishing + final checks
```

---

## 2. Preview it on your computer

**Option A: double-click.** Open `index.html` in Chrome, Safari, Edge or Firefox. Everything works except the copy-email button in some browsers, which needs a server (option B).

**Option B: local server (recommended).** In a terminal, inside the `portfolio` folder:

```bash
python3 -m http.server 8000
```

Then open <http://localhost:8000>. Press `Ctrl + C` to stop.

If you don't have Python, the free **Live Server** extension for VS Code does the same job.

---

## 3. Personalise the site

### 3.1 Your details: `js/config.js`
Replace every value in square brackets, for example `"[YOUR EMAIL]"` becomes `"you@example.com"`.

- Values you haven't filled in **show up highlighted in amber** on the page, so they're easy to spot.
- Link buttons (GitHub, LinkedIn, WhatsApp, Download CV) **stay hidden until you fill them in**, so there are never broken links.
- `whatsapp` takes **digits only** with the country code, e.g. `"923001234567"`.

Also replace `[YOUR NAME]` in the `<head>` of `index.html`: the `<title>`, `og:title` and `author` tags. Search engines and link previews read those before JavaScript runs.

### 3.2 Add your CV
1. Save your CV as a PDF, e.g. `CV.pdf`, in `assets/resume/`.
2. In `config.js`: `resume: "assets/resume/CV.pdf"`.

The **Download CV** buttons appear automatically.

### 3.3 Add your photo
The photo appears in the About card. It stays hidden until you set it.
1. Save a square photo (about 800×800, under 150 KB) as `assets/images/profile.jpg`.
2. In `config.js`: `photo: "assets/images/profile.jpg"`.

### 3.4 Skills and levels: `js/data.js`
Each skill has a `level` of `"core"`, `"proficient"` or `"familiar"`. Change these so they're honest and in line with your CV. The backend group carries a note saying the skills come from learning and personal projects. Edit or remove that note as your experience grows.

### 3.5 Experience: `js/data.js` → `EXPERIENCE`
Copy an `{ ... }` block to add a role. Newest goes first.

### 3.6 Projects: `js/projects.js`
- **`PUBLISHED_APPS`**: one card per app, with the **Google Play and App Store buttons in the same card**. Leave a link as `""` to hide its button.
- **Store stats** (`stats`): a snapshot from the public store pages (date in `STORE_STATS_DATE`). Refresh them now and then, or delete the `stats` object to hide them.
- **JS Mobile and Faysal DigiBank contributions** are based on each app's public feature list. **Edit them so they describe exactly what you did.**
- **Add a new app later:** at the end of `PUBLISHED_APPS` there is a commented-out template. Copy it, remove the `/*` and `*/`, and fill it in. Keep the comma before `{`.
- **Add another project** (GitHub repo, freelance, case study): use the template at the end of `FEATURE_WORK`. Set `links.github` to show a **Code** button.
- **Screenshots:** each card shows up to 3 portrait phone screenshots. Put them (about 300×640 JPG/WebP) in `assets/images/projects/` and list them in `images: [...]`. Leave `images: []` to show the app's initials instead. Never show real customer data.

### 3.7 Services, app types, process
All in `js/data.js`. Edit the text, delete items or add new ones. Icon names are listed in the `ICONS` object in `js/main.js`.

### 3.8 Colours
Change the variables at the top of `css/style.css`: `--accent`, `--accent-2` and `--grad`.

---

## 4. Contact form

A static site can't send email by itself, so the form has two modes:

| Mode | How | What happens |
|---|---|---|
| **Default (mailto)** | `formEndpoint: ""` and your `email` set | Opens the visitor's email app with the message filled in. They press Send. |
| **Form service (free tier)** | Paste an endpoint into `formEndpoint` | Sends the message straight to your inbox |

**Formspree (free tier, limited submissions per month):**
1. Sign up at <https://formspree.io> and create a form.
2. Copy the endpoint, e.g. `https://formspree.io/f/abcdwxyz`.
3. Paste it into `config.js` → `formEndpoint`.
4. Publish, send yourself a test message, and confirm it in Formspree.

Web3Forms and Getform work the same way. Check their current free-tier limits before you choose. Form contents are never stored in the browser.

---

## 5. Publish for free

All three options below host static sites for free on their standard plans, with HTTPS included. Free-tier limits can change, so check each provider's current terms.

### ⭐ Recommended for beginners: GitHub Pages

**Step 1: Create a GitHub account** at <https://github.com> (free).

**Step 2: Create a repository**
1. Click **+** → **New repository**.
2. Name it:
   - `your-username.github.io` → your site lives at `https://your-username.github.io/`, **or**
   - `portfolio` → your site lives at `https://your-username.github.io/portfolio/`.
3. Set it to **Public**. Free GitHub Pages needs a public repository on a free account.
4. Click **Create repository**.

**Step 3: Upload the files**
1. On the new repo page, click **uploading an existing file**.
2. Drag in the **contents** of the `portfolio` folder: `index.html`, `css`, `js`, `assets`, `README.md` and `CHECKLIST.md`. `index.html` must be at the top level, not inside another folder.
3. Click **Commit changes**.

**Step 4: Turn on Pages**
1. Go to **Settings** → **Pages**.
2. Under **Build and deployment**, choose **Source: Deploy from a branch**.
3. Pick **Branch: `main`** and **Folder: `/ (root)`**, then **Save**.
4. Wait 1–2 minutes and refresh. The page shows **"Your site is live at …"**. That's your public URL.

**Step 5: Finish the SEO setup**
Put your live URL into `config.js` → `siteUrl`. In `index.html`, uncomment and fill in the `canonical` and `og:url` lines.

**Updating later:** open a file on GitHub, click the ✏️ pencil, edit, then **Commit changes**. Or drag in a replacement file with **Add file → Upload files**. The site updates in about a minute.

**Limits worth knowing:**
- Public repo on a free account.
- Soft limits: about 1 GB per site and about 100 GB of bandwidth per month. That's plenty for a portfolio.
- Not meant for commercial e-commerce.

### Netlify (free plan)
1. Sign up at <https://app.netlify.com>.
2. **Add new site → Deploy manually**, then drag the `portfolio` folder onto the page.
3. You get a URL like `https://random-name.netlify.app`. Rename it under **Site configuration → Change site name**.
4. **To update:** drag the folder again under **Deploys**. Or connect your GitHub repo and every commit deploys automatically.
5. **Limits:** the free plan has monthly bandwidth and build quotas. See Netlify's pricing page.

### Cloudflare Pages (free plan)
1. Sign up at <https://dash.cloudflare.com>.
2. **Workers & Pages → Create → Pages → Upload assets** (or connect your GitHub repo).
3. Name the project and upload the `portfolio` folder.
4. You get `https://project-name.pages.dev`.
5. **Limits:** generous free bandwidth, plus a monthly build limit when connected to Git.

---

## 6. Custom domain (optional, not free)

Registering a domain such as `yourname.dev` **costs money**, usually around US$10–20 a year from a registrar like Cloudflare, Namecheap or Porkbun. Hosting stays free.

- **GitHub Pages:** Settings → Pages → **Custom domain** → enter your domain. At your registrar, add the DNS records GitHub shows: a `CNAME` for `www`, and the `A` records for the root domain. Then tick **Enforce HTTPS**.
- **Netlify / Cloudflare Pages:** **Domain management → Add custom domain** and follow the DNS steps.

DNS changes can take anywhere from a few minutes to 48 hours.

---

## 7. Accessibility and quality built in

- Semantic landmarks, a skip link, a single `h1` and a logical heading order.
- Fully keyboard-usable. The mobile menu closes with Esc and keeps focus inside while it's open.
- Visible focus rings, labelled form fields and descriptive link labels.
- Respects **reduced motion**: animations and count-ups are switched off.
- Light and dark themes. The site follows the system setting until the visitor chooses. Only the theme choice is saved in the browser.
- External links open in a new tab with `rel="noopener noreferrer"`.
- No external fonts, libraries or trackers, so the page loads fast.
