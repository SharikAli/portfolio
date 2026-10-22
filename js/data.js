/* =====================================================================
   SITE DATA — skills, experience, services, product types, process.
   Edit the lists below; the page re-renders them automatically.
   Icons: see the ICONS object in main.js for the available names.
   ===================================================================== */

/* ---------------------------------------------------------------------
   SKILLS
   level: "core"       → daily, production-level work
          "proficient" → used confidently on real projects
          "familiar"   → working knowledge / learning / personal projects
   Adjust any level to match how you want to present yourself.
   --------------------------------------------------------------------- */
window.SKILLS = [
  {
    title: "Android",
    icon: "android",
    items: [
      { name: "Kotlin", level: "core" },
      { name: "Java", level: "core" },
      { name: "Android SDK", level: "core" },
      { name: "Jetpack Compose", level: "core" },
      { name: "XML Views", level: "core" },
      { name: "Lifecycle & Architecture Components", level: "core" },
      { name: "Coroutines & Flow", level: "core" },
      { name: "Hilt / Dagger 2 / Koin", level: "proficient" },
      { name: "Room / DataStore", level: "core" },
      { name: "Retrofit / OkHttp / Ktor", level: "core" },
    ],
  },
  {
    title: "iOS",
    icon: "apple",
    items: [
      { name: "Swift", level: "core" },
      { name: "SwiftUI", level: "core" },
      { name: "UIKit", level: "proficient" },
      { name: "GCD & async/await", level: "proficient" },
      { name: "Core Data / SwiftData", level: "proficient" },
      { name: "Alamofire", level: "proficient" },
    ],
  },
  {
    title: "Cross-Platform",
    icon: "layers",
    items: [
      { name: "Flutter", level: "core" },
      { name: "Dart", level: "core" },
      { name: "Kotlin Multiplatform", level: "proficient" },
      { name: "Compose Multiplatform", level: "proficient" },
      { name: "BLoC / Riverpod", level: "proficient" },
      { name: "Dio / GetIt", level: "proficient" },
      { name: "Hive / SQLite", level: "proficient" },
    ],
  },
  {
    title: "Architecture & Quality",
    icon: "code",
    items: [
      { name: "Clean Architecture", level: "core" },
      { name: "MVVM / MVI", level: "core" },
      { name: "Modularization", level: "proficient" },
      { name: "Offline-first design", level: "proficient" },
      {
        name: "Unit & integration testing (JUnit, Espresso)",
        level: "proficient",
      },
      { name: "Debugging & performance profiling", level: "core" },
      { name: "Crash reporting & production monitoring", level: "core" },
    ],
  },
  {
    title: "Backend (learning & personal projects)",
    icon: "server",
    note: "Built through self-directed learning, courses and personal projects — not commercial employment.",
    items: [
      { name: "Java / Kotlin", level: "proficient" },
      { name: "Spring Boot", level: "proficient" },
      { name: "Ktor", level: "proficient" },
      { name: "Spring Security (JWT, OAuth2)", level: "proficient" },
      { name: "Spring Data JPA", level: "proficient" },
      { name: "Spring Cloud", level: "familiar" },
      { name: "REST APIs / Microservices / Event-driven", level: "proficient" },
      { name: "MySQL / PostgreSQL", level: "proficient" },
      { name: "MongoDB / Redis", level: "proficient" },
      { name: "Apache Kafka / RabbitMQ", level: "familiar" },
      { name: "Docker / Maven / Gradle", level: "familiar" },
      // { name: "AWS (EC2, S3, RDS, Lambda) / GCP", level: "familiar" },
      { name: "JUnit / Mockito / Spring Boot Test", level: "familiar" },
    ],
  },
  {
    title: "Firebase & Cloud",
    icon: "flame",
    items: [
      { name: "Firebase Authentication", level: "proficient" },
      { name: "Cloud Firestore", level: "proficient" },
      { name: "Realtime Database", level: "proficient" },
      { name: "Cloud Messaging (FCM)", level: "core" },
      { name: "Crashlytics", level: "core" },
      { name: "Analytics", level: "proficient" },
      { name: "Remote Config", level: "proficient" },
      { name: "App Distribution", level: "proficient" },
    ],
  },
  {
    title: "Payments & In-App Purchases",
    icon: "card",
    note: "Sensitive payment logic and purchase verification belong on the server; the app handles flows, states and UX.",
    items: [
      { name: "Payment & transfer flows", level: "core" },
      { name: "QR payments", level: "proficient" },
      { name: "Stripe", level: "familiar" },
      { name: "Google Play Billing", level: "proficient" },
      { name: "Apple StoreKit", level: "proficient" },
      { name: "Subscriptions & purchase state handling", level: "proficient" },
    ],
  },
  {
    title: "Authentication & Security",
    icon: "shield",
    items: [
      { name: "Biometric authentication", level: "core" },
      { name: "OTP verification flows", level: "core" },
      { name: "Secure token & session management", level: "core" },
      { name: "Passkeys (Android & iOS)", level: "proficient" },
      { name: "Sign in with Google / Apple", level: "proficient" },
      { name: "OAuth 2.0 / OpenID Connect", level: "proficient" },
      { name: "Secure API integration", level: "core" },
    ],
  },
  {
    title: "Maps, Location & Notifications",
    icon: "map",
    items: [
      { name: "Google Maps SDK", level: "familiar" },
      { name: "Mapbox", level: "proficient" },
      { name: "GPS & location tracking", level: "core" },
      { name: "FCM & APNs push notifications", level: "core" },
      { name: "Deep links & universal links", level: "core" },
      { name: "WebSockets / real-time updates", level: "proficient" },
    ],
  },
  {
    title: "Tools & Delivery",
    icon: "rocket",
    items: [
      { name: "Git & GitHub, code reviews", level: "core" },
      { name: "CI/CD (GitHub Actions)", level: "proficient" },
      { name: "Google Play Console", level: "core" },
      { name: "App Store Connect", level: "proficient" },
      { name: "API testing (Postman)", level: "core" },
      { name: "Release management & maintenance", level: "core" },
    ],
  },
];

/* ---------------------------------------------------------------------
   EXPERIENCE — newest first. Copy an object to add a role.
   --------------------------------------------------------------------- */
window.EXPERIENCE = [
  {
    company: "Avanza Solutions",
    role: "Senior Software Engineer",
    period: "Jan 2025 – Aug 2026",
    location: "Karachi, Pakistan",
    points: [
      "Owned core banking app modules — services, networking and local database layers — for a live, regulated banking client, with offline storage validated by unit and instrumentation tests.",
      "Partnered with banking stakeholders to turn regulatory and compliance requirements into technical solutions, clarifying edge cases before implementation to reduce rework.",
      "Diagnosed and resolved production crashes and defects in live banking features, reducing customer-facing downtime on critical flows.",
      "Hardened transfer and payment flows against network failure with retry logic and offline handling, keeping transactions resilient on poor connectivity."
    ],
    tech: ["Kotlin", "Swift", "Flutter", "Clean Architecture", "Unit & instrumentation tests"]
  },
  {
    company: "Avanza Solutions",
    role: "Software Engineer",
    period: "May 2023 – Dec 2024",
    location: "Karachi, Pakistan",
    points: [
      "Designed, built and maintained Flutter applications end-to-end for a banking client, balancing performance, responsiveness and compliance requirements.",
      "Collaborated with UX/UI, backend and product teams to define technical solutions and ship features on schedule.",
      "Identified and resolved performance bottlenecks, memory leaks and crashes, improving app stability and battery efficiency."
    ],
    tech: ["Flutter", "Dart", "BLoC", "REST APIs", "Firebase"]
  },
  {
    company: "Sikander Corporation",
    role: "Software Engineer",
    period: "Mar 2021 – Apr 2023",
    location: "Japan · Remote",
    points: [
      "Built Android applications using Kotlin and Flutter, integrating with backend services to deliver a smooth, reliable UI.",
      "Owned core app infrastructure — services, networking and database integration — across multiple projects.",
      "Implemented efficient local storage and wrote unit and instrumentation tests, improving stability and reducing regressions.",
      "Worked with cross-functional teams to design and ship new features that improved user experience."
    ],
    tech: ["Kotlin", "Android SDK", "Flutter", "Room", "Retrofit", "JUnit", "Riverpod"]
  }
];

/* ---------------------------------------------------------------------
   SERVICES — edit title/desc/icon freely. "note" is optional fine print.
   --------------------------------------------------------------------- */
window.SERVICES = [
  { icon: "layers", title: "Cross Platform Development - Flutter / Kotlin Multiplatform", desc: "One codebase for Android and iOS, clean state management and a structure that's easy to extend." },
  { icon: "android", title: "Native Android App Development", desc: "Kotlin apps with Jetpack Compose or XML, built on MVVM/MVI and Clean Architecture." },
  { icon: "apple", title: "Native iOS App Development", desc: "Swift apps with SwiftUI or UIKit that follow Apple's platform conventions." },
  { icon: "phone", title: "UI/UX Implementation & Responsive Design", desc: "Pixel-accurate implementation of Figma designs, reusable components and layouts that adapt to every screen." },
  { icon: "plug", title: "Firebase, Database & REST API Integration", desc: "Reliable data layers with caching, offline support, error handling and clear loading/empty states." },
  { icon: "lock", title: "Secure User Authentication & Authorization", desc: "Login, registration, OTP, token refresh and session handling designed around secure defaults." },
  { icon: "card", title: "Payment Gateway Integration", desc: "Payment flows with clear status handling; verification and sensitive operations kept server-side.", note: "Scope depends on the gateway and your backend." },
  { icon: "cart", title: "Google Play Billing & Apple StoreKit", desc: "In-app purchases and subscriptions with entitlement handling and server-side receipt validation." },
  { icon: "fingerprint", title: "Passkey & Biometric Authentication", desc: "Passwordless sign-in with passkeys plus Face ID / fingerprint for fast, secure access." },
  { icon: "map", title: "Maps, GPS Tracking & Location Features", desc: "Google Maps or Mapbox, live tracking, geofencing and location-based features with battery-aware updates." },
  { icon: "bell", title: "Push Notifications (FCM & APNs)", desc: "Targeted notifications, deep-link routing and foreground/background handling on both platforms." },
  { icon: "user", title: "Sign in with Google & Apple", desc: "Social sign-in that follows platform guidelines and links cleanly to your user accounts." },
  { icon: "server", title: "Spring Boot Backend & REST APIs", desc: "REST APIs with Spring Boot or Ktor — authentication, validation and database integration for MVPs and app backends." },
  { icon: "chart", title: "Admin Dashboard Backend & API Integration", desc: "Backend services and APIs that power admin dashboards.", note: "Frontend dashboard development available when agreed." },
  { icon: "bug", title: "Testing, Bug Fixing & Performance Optimization", desc: "Crash analysis, memory and jank fixes, and unit/integration tests that prevent regressions." },
  { icon: "upload", title: "Play Store & App Store Submission", desc: "Store listings, signing, review guidelines, staged rollouts and release notes." },
  { icon: "wrench", title: "Maintenance & Feature Enhancements", desc: "Taking over existing apps, adding features and keeping dependencies and OS targets current." },
  { icon: "code", title: "Architecture Improvements & Refactoring", desc: "Modularizing and refactoring legacy code toward testable, maintainable architecture — incrementally and safely." },
  { icon: "refresh", title: "CI/CD Setup & Release Management", desc: "Automated builds, tests and distribution with GitHub Actions, Jenkins or Firebase App Distribution." },
  { icon: "support", title: "Post-Delivery Support", desc: "Monitoring, fixes and small improvements after launch, on a scope we agree upfront." }
];

/* ---------------------------------------------------------------------
   PRODUCT TYPES — kinds of apps you can help build (not past projects).
   --------------------------------------------------------------------- */
window.PRODUCT_TYPES = [
  { icon: "chat", title: "Chat & Messaging", desc: "Real-time 1:1 and group messaging, media sharing, notifications and user presence." },
  { icon: "car", title: "Ride-Hailing & Taxi Booking", desc: "Maps, live GPS tracking, driver and passenger flows, fare display and trip status." },
  { icon: "users", title: "Social Networking", desc: "Profiles, feeds, follows, media uploads, reactions and messaging." },
  { icon: "food", title: "Food Delivery", desc: "Restaurant listings, menus, cart, checkout, order tracking and notifications." },
  { icon: "cart", title: "E-commerce & Shopping", desc: "Catalogues, search and filters, cart, payments, orders and wishlists." },
  { icon: "truck", title: "Courier & Logistics", desc: "Parcel booking, rider assignment, live tracking and proof of delivery." },
  { icon: "bolt", title: "On-Demand Services", desc: "Service discovery, provider profiles, booking, payments and ratings." },
  { icon: "bank", title: "Fintech & Digital Banking", desc: "Secure authentication, accounts, transaction history, transfers, QR payments and secure API integration." },
  { icon: "calendar", title: "Booking & Appointments", desc: "Availability calendars, reservations, reminders and rescheduling." },
  { icon: "refresh", title: "Subscription-Based Apps", desc: "Free trials, plan upgrades and downgrades, gated content and billing integration." },
  { icon: "pin", title: "Location-Based & Tracking", desc: "Geofencing, background location, live maps and location history." },
  { icon: "briefcase", title: "Business & Enterprise", desc: "Role-based access, offline-first workflows, forms, approvals and reporting." }
];

/* ---------------------------------------------------------------------
   PROCESS
   --------------------------------------------------------------------- */
window.PROCESS = [
  { title: "Requirement Analysis", desc: "Understand goals, users, constraints and edge cases before writing code." },
  { title: "Technical Planning & Architecture", desc: "Choose platform, architecture, data flow and integrations; agree on scope." },
  { title: "UI/UX Implementation", desc: "Turn designs into reusable, accessible, responsive components." },
  { title: "Mobile & Backend Development", desc: "Build features in small, reviewable increments." },
  { title: "API Integration", desc: "Connect services with robust error handling, retries and clear states." },
  { title: "Testing & QA", desc: "Unit, integration and device testing; fix issues found by QA." },
  { title: "Release & Store Submission", desc: "Signing, store listings, review compliance and staged rollouts." },
  { title: "Monitoring & Support", desc: "Track crashes and performance, ship fixes and improvements." }
];

/* ---------------------------------------------------------------------
   WHY WORK WITH ME
   --------------------------------------------------------------------- */
window.WHY = [
  { icon: "layers", title: "Native & cross-platform", desc: "Kotlin, Swift, Flutter and Kotlin Multiplatform — the right tool for each product." },
  { icon: "rocket", title: "Production-scale experience", desc: "Live apps used by large audiences, with strict security, reliability and performance requirements." },
  { icon: "server", title: "Mobile + backend understanding", desc: "Comfortable on both sides of the API, which makes integrations smoother." },
  { icon: "code", title: "Maintainable architecture", desc: "Clean, modular, testable code that's easy to scale and hand over." },
  { icon: "shield", title: "Secure, resilient integrations", desc: "Careful token handling, validation, retries and failure states." },
  { icon: "bug", title: "Production debugging", desc: "Crash analysis, performance profiling and stability improvements." },
  { icon: "upload", title: "Publishing & maintenance", desc: "Hands-on with Play Console, App Store Connect and long-term upkeep." },
  { icon: "chat", title: "Clear communication", desc: "Regular updates, honest estimates and ongoing support." }
];
