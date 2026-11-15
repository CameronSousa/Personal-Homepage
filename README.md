### Personal Browser Homepage

A fast, single-file, zero-dependency personal start page and new-tab dashboard built with vanilla HTML, CSS, and JavaScript. Designed to run locally (`file://`) in any modern browser, complete with multiple profiles, live widgets, custom search shortcuts, and a companion browser extension to prevent the address bar from stealing focus on load.

### Features

- **Multi-Profile Support:** Switch between custom profiles (e.g., _Home_, _Work_), each with its own greeting, accent color, quick links, and widget layout.
- **Smart Search Bar:**
  - Supports Google, DuckDuckGo, Bing, Brave, and custom search engines (`%s` URL templates).
  - **Site Shortcuts:** Prefix queries with `yt` (YouTube), `gh` (GitHub), `w` (Wikipedia), `g` (Google), or `d` (DuckDuckGo)—for example, `yt lofi beats`.
  - Press `/` anywhere on the page to jump straight to the search input.
- **Modular Dashboard Blocks:**
  - **Weather:** Live temperature, high/low, and wind speed via Open-Meteo, supporting automatic IP/GPS detection or custom city/ZIP search.
  - **System Monitor:** Live OS, browser, CPU/GPU info, battery status, session uptime, and real-time canvas FPS meter.
  - **Scratchpad & To-Do Lists:** Auto-saving local notes and interactive checklists.
  - **Timer:** Built-in customizable countdown/Pomodoro timer.
  - **Custom Boxes:** Create your own text notes, link lists, checklists, image/GIF cards, or event countdowns.
- **In-Browser Customization:** Click **Edit** in the top-right corner to drag-and-drop links and cards, tweak accent colors, or export/import your settings as JSON.
- **Adaptive Theme:** Automatically switches between dark and light glassmorphism themes based on your system preference, paired with an interactive particle constellation background (respects `prefers-reduced-motion`).

---

### Setup & Configuration

1. **Clone the repository:**

   ```bash
   git clone [https://github.com/The-R34per/Personal-Homepage](https://github.com/The-R34per/Personal-Homepage.git)
   cd Personal-Homepage
   ```

2. **Create your personal config file:**
   Copy the example configuration file to `config.js` (which is git-ignored so your personal details stay private):

   ```bash
   cp config.example.js config.js
   ```

3. **Customize `config.js` (Optional):**

This step is optional. You can also customize everything in the homepage itself.

Open `config.js` to set your default greeting, profile name, accent color, starter links, and fallback weather location:

```javascript
window.HOMEPAGE_CONFIG = {
  greet: "User",
  profileName: "Home",
  accent: "",
  links: [
    { name: "GitHub", url: "[https://github.com](https://github.com)" },
    {
      name: "Mail",
      url: "[https://mail.google.com](https://mail.google.com)",
    },
    {
      name: "Calendar",
      url: "[https://calendar.google.com](https://calendar.google.com)",
    },
    { name: "YouTube", url: "[https://youtube.com](https://youtube.com)" },
  ],
  weather: {
    label: "New York, NY",
    lat: 40.71,
    lon: -74.01,
    unit: "fahrenheit",
  },
};
```

> **Note:** Once loaded in your browser, all layout, link, and profile changes made via the **Edit** button are saved automatically in `localStorage`.

4. **Set as your browser homepage:**
   Open `index.html` in your browser, copy its `file:///...` path from the address bar, and paste it into your browser's **Homepage** / **On startup** settings.

---

### Browser Extension (Prevent URL Bar Focus)

When opening a local `file://` page in a new tab, most browsers automatically highlight the URL bar—forcing you to click the page before typing into the search bar. This repository includes a lightweight companion extension to keep keyboard focus inside the homepage search box upon loading.

## Installation (Chromium / Chrome / Brave / Edge)

1. Unzip the file to a folder somewhere on your computer
2. Open your browser's extensions page (`chrome://extensions`, `brave://extensions`, or `edge://extensions`).
3. Enable **Developer mode** (usually a toggle in the top-right corner).
4. Click **Load unpacked** and select the extension folder inside this repository.
5. _(If using `file://` URLs)_ Click **Details** on the newly loaded extension and toggle on **Allow access to file URLs**.

## Installation (Firefox)

1. Navigate to `about:debugging#/runtime/this-firefox`.
2. Click **Load Temporary Add-on...** and select the `manifest.json` file inside the extension folder.

---

### Project Structure

```text
├── index.html                    # Main homepage (HTML, CSS, and JS in a single file)
├── config.example.js             # Public default configuration template
├── config.js                     # Your personal configuration (git-ignored)
└── focus-browser-extension/      # Companion browser extension to manage new-tab focus
```
