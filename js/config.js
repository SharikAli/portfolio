/* =====================================================================
   SITE CONFIG — the ONE place to update your personal details.
   ---------------------------------------------------------------------
   Any value still wrapped in square brackets, e.g. "[YOUR EMAIL]",
   is treated as "not set yet":
     - text placeholders are shown highlighted so you can spot them,
     - link buttons (GitHub, LinkedIn, CV, WhatsApp…) are hidden
       automatically so visitors never hit a broken link.
   Replace each value, save the file, and refresh the page.
   ===================================================================== */

window.SITE_CONFIG = {
  // ---- Identity ------------------------------------------------------
  fullName: "SHARIK ALI",
  shortName: "SHARIK ALI", // used in the logo / footer
  title: "Mobile Application Engineer",
  headline:
    "Mobile Application Engineer | Android, iOS, Flutter & Backend Development",
  location: "Karachi, Pakistan",

  // ---- Contact -------------------------------------------------------
  email: "sharik.charolia3@gmail.com", // e.g. "name@example.com"
  phone: "+92 3408046575", // shown as text, e.g. "+92 300 0000000"
  whatsapp: "[YOUR WHATSAPP NUMBER]", // digits only with country code, e.g. "923000000000"
  linkedin: "https://www.linkedin.com/in/sharik-charolia-418ba4245/", // full URL, e.g. "https://www.linkedin.com/in/your-handle"
  github: "https://github.com/SharikAli", // full URL, e.g. "https://github.com/your-handle"
  preferredContact: "sharik.charolia3@gmail.com",

  // ---- Files ---------------------------------------------------------
  photo: "[YOUR PROFILE PHOTO]", // e.g. "assets/images/profile.jpg" (square, ~800x800)
  resume: "assets/resume/Sharik-Ali_Mobile_App_Developer_CV.pdf", // e.g. "assets/resume/CV.pdf"

  // ---- Status --------------------------------------------------------
  availability: "Available for full-time roles & freelance projects",

  // ---- Experience figures (your own figures — edit freely) -----------
  yearsMobile: "5+", // years of mobile development
  appsPublished: "5+", // apps published & maintained (your figure)

  // ---- Education -----------------------------------------------------
  education: [
    {
      degree: "Bachelor of Science in Computer Science (BSCS)",
      school: "Muhammad Ali Jinnah University, Karachi, Pakistan",
      period: "2018 – 2022",
    },
  ],

  // ---- Courses / training (completed online courses, not certifications)
  courses: [
    {
      name: "Building Industry-Level Compose Multiplatform Android & iOS Apps",
      provider: "Philipp Lackner",
    },
    {
      name: "Building Industry-Level Kotlin Backends with Spring Boot",
      provider: "Philipp Lackner",
    },
  ],

  // ---- Contact form --------------------------------------------------
  // Leave empty to use the mailto fallback (opens the visitor's email app).
  // To receive messages directly, paste a free Formspree / Web3Forms
  // endpoint here — see README "Contact form" section.
  formEndpoint: "",

  // ---- SEO / sharing -------------------------------------------------
  siteUrl: "[YOUR WEBSITE URL]", // e.g. "https://your-handle.github.io/portfolio/"
};
