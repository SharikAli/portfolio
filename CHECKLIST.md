# Pre-publish checklist

## A. Personal information to replace

In `js/config.js`:
- [ ] `fullName`: `[YOUR FULL NAME]`
- [ ] `shortName`: `[YOUR FIRST NAME]` (logo)
- [ ] `location`: `[YOUR CITY, COUNTRY]`
- [ ] `email`: `[YOUR EMAIL]`
- [ ] `phone`: `[YOUR PHONE]`
- [ ] `whatsapp`: `[YOUR WHATSAPP NUMBER]` (digits only), or leave it as is to hide the button
- [ ] `linkedin`: `[YOUR LINKEDIN URL]`
- [ ] `github`: `[YOUR GITHUB URL]`
- [ ] `preferredContact`: `[EMAIL / LINKEDIN / WHATSAPP]`
- [ ] `availability`: set to "Available for full-time roles & freelance projects". Change it if your status changes
- [ ] `photo`: add `assets/images/profile.jpg` and set the path
- [ ] `resume`: add `assets/resume/CV.pdf` and set the path
- [ ] `siteUrl`: your live URL, once published
- [ ] `formEndpoint` (optional): a Formspree or Web3Forms endpoint

In `index.html` `<head>`:
- [ ] `[YOUR NAME]` in `<title>`, `og:title` and `author`
- [ ] After publishing: uncomment `canonical` and `og:url` and add your URL

## B. Content to review
- [ ] Skill levels in `js/data.js` match what you'd defend in an interview
- [ ] **JS Mobile** and **Faysal DigiBank** contribution points in `js/projects.js` describe what *you* did
- [ ] DIB and Al Baraka contribution points are accurate
- [ ] "14+ apps published & maintained" (`appsPublished`) is a figure you can back up
- [ ] Store ratings and downloads are still current (`STORE_STATS_DATE`)
- [ ] You're comfortable listing the client apps publicly (check any NDA with past employers)
- [ ] Any screenshots contain no real customer data

## C. Final verification
**Links**
- [ ] All 4 Google Play buttons open the correct app
- [ ] All 4 App Store buttons open the correct app
- [ ] GitHub, LinkedIn, WhatsApp and CV buttons work (or stay hidden while unset)
- [ ] Every nav link scrolls to its section

**Responsive**
- [ ] Phone (about 375 px): no sideways scrolling, menu opens and closes, buttons are easy to tap
- [ ] Tablet (about 768 px)
- [ ] Desktop (1280 px and wider)

**Accessibility**
- [ ] Tab through the whole page: every control is reachable and shows a focus ring
- [ ] Esc closes the mobile menu
- [ ] Theme toggle works and both themes are readable
- [ ] With "Reduce motion" on in your OS, the page has no animations

**Contact**
- [ ] The copy-email button copies the right address
- [ ] The form opens your email app (mailto), or sends a test message (form service)

**Deployment**
- [ ] The live URL loads over HTTPS
- [ ] Sharing the link on LinkedIn or WhatsApp shows the title and preview image
- [ ] Optional: run Lighthouse in Chrome DevTools (Performance, Accessibility, SEO)
