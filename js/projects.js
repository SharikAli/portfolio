/* =====================================================================
   PROJECTS
   ---------------------------------------------------------------------
   PUBLISHED_APPS → apps live on the stores (one card shows Android + iOS).
   FEATURE_WORK   → features / modules / personal & freelance projects.

   Screenshots: "images" takes up to 3 portrait phone screenshots
   (about 300x640 JPG/WebP in assets/images/projects/).

   Links: leave any link as "" to hide its button. Never add a link you
   haven't opened and verified yourself.

   Store stats: a snapshot copied from the public store pages on the date
   in STORE_STATS_DATE. They change over time — update them, or delete the
   "stats" object to hide them. They describe the app as a whole, not
   your individual contribution.
   ===================================================================== */

window.STORE_STATS_DATE = "October 2026";

window.PUBLISHED_APPS = [
  {
    name: "DIB Pakistan",
    org: "Dubai Islamic Bank Pakistan",
    category: "Digital Banking",
    // Up to 3 phone screenshots (portrait, ~300x640). Leave [] to show the app initials instead.
    images: [
      "assets/images/projects/dib-1.jpg",
      "assets/images/projects/dib-2.jpg",
      "assets/images/projects/dib-3.jpg",
    ],
    summary:
      "Digital banking app for Dubai Islamic Bank Pakistan customers. I contributed to the development and maintenance of payment and customer-service features as part of the delivery team.",
    contributions: [
      "Raast ID management — linking a mobile number as a bank identifier for instant interbank transfers.",
      "Raast Request-to-Pay (RTP) approval/denial workflows with OTP verification and real-time status updates.",
      "Raast P2M QR payments: QR scan/upload, merchant identifier parsing, OTP-verified payment and transaction history.",
      "IBFT and fund-transfer journeys: beneficiary management, validation, transaction limits, receipts and history.",
      "Ticket-based dispute resolution with staged workflows and FCM status notifications.",
    ],
    tech: ["Kotlin", "Swift", "Flutter", "REST APIs", "FCM", "Offline-first"],
    links: {
      playStore:
        "https://play.google.com/store/apps/details?id=com.avanza.ambitwizdib&hl=en",
      appStore: "https://apps.apple.com/pk/app/dib-pakistan/id1156379797",
    },
    stats: {
      playRating: "4.4",
      playReviews: "19.1K",
      playDownloads: "500K+",
      iosRating: "4.0",
      iosRatings: "1.8K",
    },
  },
  {
    name: "JS Mobile",
    org: "JS Bank Limited",
    category: "Mobile Banking",
    images: [
      "assets/images/projects/js-1.jpg",
      "assets/images/projects/js-2.jpg",
      "assets/images/projects/js-3.jpg",
    ],
    summary:
      "Mobile banking app for JS Bank customers. I contributed to the development and maintenance of everyday banking journeys as part of the delivery team.",
    // ⚠ REVIEW: these points are based on the app's public feature list.
    // Edit them so they describe exactly what YOU worked on.
    contributions: [
      "Account overview, balance, statement and transaction-detail screens.",
      "Fund transfers to JS Bank and other IBFT-enabled banks, with input validation and error handling.",
      "Utility bill payment flows integrated with backend banking APIs.",
      "Production bug fixing, crash resolution and release support.",
    ],
    tech: ["Kotlin", "Swift", "REST APIs", "Firebase Crashlytics"],
    links: {
      playStore:
        "https://play.google.com/store/apps/details?id=com.JSBL.bank&hl=en",
      appStore: "https://apps.apple.com/pk/app/js-mobile/id1561630920",
    },
    stats: {
      playRating: "4.5",
      playReviews: "24.3K",
      playDownloads: "1M+",
      iosRating: "4.4",
      iosRatings: "3.9K",
    },
  },
  {
    name: "Faysal DigiBank",
    org: "Faysal Bank Limited",
    category: "Digital Banking",
    images: [
      "assets/images/projects/faysal-1.jpg",
      "assets/images/projects/faysal-2.jpg",
      "assets/images/projects/faysal-3.jpg",
    ],
    summary:
      "Digital banking app for Faysal Bank customers. I contributed to payment, security and card features as part of the delivery team.",
    // ⚠ REVIEW: these points are based on the app's public feature list.
    // Edit them so they describe exactly what YOU worked on.
    contributions: [
      "Interbank fund transfer, bill payment (utility, broadband, government taxes) and mobile top-up journeys.",
      "In-app biometric verification and secure login flows.",
      "Scan-and-Pay QR transactions.",
      "Card management — activation, PIN setup and virtual card creation.",
      "Complaint and dispute lodging, plus ongoing production maintenance.",
    ],
    tech: ["Kotlin", "Swift", "Flutter", "Biometrics", "REST APIs"],
    links: {
      playStore:
        "https://play.google.com/store/apps/details?id=com.avanza.ambitwizfbl&hl=en",
      appStore: "https://apps.apple.com/pk/app/faysal-digibank/id1459836486",
    },
    stats: {
      playRating: "4.1",
      playReviews: "38.7K",
      playDownloads: "1M+",
      iosRating: "4.3",
      iosRatings: "6.9K",
    },
  },
  {
    name: "Al Baraka Bank Pakistan",
    org: "Al Baraka Bank (Pakistan) Limited",
    category: "Mobile Banking",
    images: [], // add screenshots here later
    summary:
      "Mobile banking app for Al Baraka Bank Pakistan. I contributed to real-time payment, fund-transfer and support features as part of the delivery team.",
    contributions: [
      "Raast ID management, Request-to-Pay and P2M QR payment flows with OTP verification.",
      "Inter-bank fund transfer journey: account selection, beneficiary verification, review, authentication and confirmation.",
      "Payment validation and business rules — account checks, transaction limits and balance checks.",
      "Customer support and dispute tickets with role-based stages (Open, In Review, Resolved, Closed).",
    ],
    tech: ["Kotlin", "Swift", "Flutter", "REST APIs", "FCM"],
    links: {
      playStore:
        "https://play.google.com/store/apps/details?id=pk.com.albaraka.mobileapp&hl=en",
      appStore:
        "https://apps.apple.com/pk/app/al-baraka-bank-pakistan/id1290819715",
    },
    stats: {
      playRating: "3.6",
      playReviews: "2K",
      playDownloads: "100K+",
      iosRating: "2.6",
      iosRatings: "167",
    },
  },

  /* ---- ADD MORE PUBLISHED APPS LATER ----------------------------------
     Copy this block (remove the comment markers) and fill it in.
     Leave a link "" to hide its button; delete "stats" if not needed.

  ,{
    name: "[APP NAME]",
    org: "[COMPANY / CLIENT NAME]",
    category: "[e.g. Fintech, E-commerce, Delivery]",
    images: [],                               // up to 3: ["assets/images/projects/app-1.jpg", ...]
    summary: "[One or two sentences about the app and your role.]",
    contributions: [
      "[What you built or improved]",
      "[Another contribution]"
    ],
    tech: ["Kotlin", "Flutter"],
    links: {
      playStore: "",                          // "https://play.google.com/store/apps/details?id=..."
      appStore: "",                           // "https://apps.apple.com/app/id..."
      website: ""                             // optional product website
    },
    stats: {
      playRating: "", playReviews: "", playDownloads: "",
      iosRating: "", iosRatings: ""
    }
  }
  ---------------------------------------------------------------------- */
];

window.FEATURE_WORK = [
  {
    name: "Raast Real-Time Payments",
    context: "Al Baraka & Dubai Islamic Bank · Avanza Solutions",
    type: "Banking feature",
    points: [
      "Raast ID linking for instant, fee-free interbank transfers without sharing an IBAN.",
      "Request-to-Pay approval/denial with OTP and real-time status.",
      "End-to-end P2M QR payments with full validation and failure handling."
    ],
    tech: ["Kotlin", "Swift", "Flutter", "OTP", "QR"],
    links: {}
  },
  {
    name: "IBFT & Fund Transfer Journey",
    context: "Al Baraka & Dubai Islamic Bank · Avanza Solutions",
    type: "Banking feature",
    points: [
      "Beneficiary management, account selection, review, authentication and confirmation.",
      "Business rules: account validation, limits and balance checks.",
      "Receipts and transfer history."
    ],
    tech: ["Clean Architecture", "REST APIs", "Offline handling"],
    links: {}
  },
  {
    name: "Customer Service & Dispute Resolution",
    context: "Al Baraka & Dubai Islamic Bank · Avanza Solutions",
    type: "Banking feature",
    points: [
      "Ticket-based support for disputes, account issues and service requests.",
      "Role-based workflow: Open → In Review → Resolved → Closed.",
      "Real-time status updates and FCM push notifications."
    ],
    tech: ["FCM", "Role-based workflows", "REST APIs"],
    links: {}
  },
  {
    name: "Digital Coaching Platform for Early Childhood Educators",
    context: "Freelance",
    type: "Freelance project",
    points: [
      "Secure accounts plus 1:1 and group session booking with reminders.",
      "Coaching packages with free trial and upgrade/downgrade flows.",
      "Searchable resource library and in-app chat between educators and coaches."
    ],
    tech: ["Flutter", "Firebase", "Subscriptions", "Chat"],
    links: {}
  },
  {
    name: "Cross-Platform Chat App",
    context: "Personal project",
    type: "Personal project",
    points: [
      "Android, iOS and Desktop from a single Compose Multiplatform codebase.",
      "Full auth flow with deep-link email verification; real-time messaging over WebSockets.",
      "Offline-first persistence with automatic sync and FCM/APNs notifications."
    ],
    tech: ["Kotlin Multiplatform", "Compose Multiplatform", "Ktor", "WebSockets"],
    links: {
      github: ""                                 // add your repo URL to show a "Code" button
    }
  }

  /* ---- ADD MORE PROJECTS LATER ----------------------------------------
  ,{
    name: "[PROJECT NAME]",
    context: "[Client / Company / Personal project]",
    type: "[Personal project / Freelance / Case study]",
    points: ["[What it does / what you built]"],
    tech: ["Kotlin"],
    links: { github: "", website: "", playStore: "", appStore: "" }
  }
  ---------------------------------------------------------------------- */
];
