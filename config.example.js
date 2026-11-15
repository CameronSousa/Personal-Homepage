// Public default settings. Safe to commit.
// To use your own defaults: copy this file to config.js (which is git-ignored) and edit it.
//   cp config.example.js config.js
// config.js is loaded first, so if it exists, these values are ignored.
window.HOMEPAGE_CONFIG = window.HOMEPAGE_CONFIG || {
  greet: "friend",
  profileName: "Home",
  accent: "",
  links: [
    { name: "GitHub", url: "https://github.com" },
    { name: "Mail", url: "https://mail.google.com" },
    { name: "Calendar", url: "https://calendar.google.com" },
    { name: "YouTube", url: "https://youtube.com" }
  ],
  // Used only if location lookups fail. unit: "fahrenheit" or "celsius"
  weather: { label: "New York, NY", lat: 40.71, lon: -74.01, unit: "fahrenheit" }
};
