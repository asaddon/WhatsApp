# WhatsApp Chat Widget for Websites

A lightweight, zero-dependency, beautifully animated WhatsApp widget for websites. Isolated cleanly in an `<iframe>` to avoid any CSS conflicts with your website's styles.

Supports interactive popup chat cards, ultra-fast direct link mode, customizable floating tooltips, and country-based geo-targeting.

[![Demo](https://img.shields.io/badge/Live-Demo%20%26%20Playground-25D366?style=for-the-badge&logo=whatsapp&logoColor=white)](https://asaddon.github.io/WhatsApp/)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg?style=for-the-badge)](https://opensource.org/licenses/MIT)
[![Bundle Size](https://img.shields.io/badge/bundle%20size-41%20KiB-success?style=for-the-badge)](https://cdn.jsdelivr.net/gh/asaddon/WhatsApp@refs/heads/main/dist/WhatsAppChatBox.min.js)

---

## 🎮 Live Demo & Testing Playground

Experience the widget and test all configuration options in real time:

👉 **[Launch Live Testing Playground](https://asaddon.github.io/WhatsApp/)**

### What you can test in the playground:
- **Instant Mode Presets**: Switch between **Full Card Popup**, **Direct Link Mode**, **Minimalist No-Tooltip**, and **Custom Business Agent** with one click.
- **Interactive Option Controls**:
  - Toggle between **Popup Mode** and **Direct WhatsApp Link**.
  - Customize link opening target (`_blank`, `popup`, or `_self`).
  - Enable/disable the typewriter floating tooltip and tune its auto-hide timeout.
  - Live edit Agent Name, Avatar URL, Status text, Chat Name, and HTML welcome messages.
  - Change the WhatsApp target link or phone number.
- **Live Reinitialization**: Click **"Apply & Reinitialize Widget"** to see your settings reflected instantly on the page without reloading.
- **Real-time Config JSON Preview**: Automatically generates the exact JavaScript initialization code for your custom configuration, ready to copy and paste into your project.

---

## ⚡ Key Features

- **Direct Link Mode (`popup: false`)**: One-click direct redirection to WhatsApp without showing a chat popup.
- **Interactive Popup Card (`popup: true`)**: Elegant popup card featuring agent avatar, status, custom welcome message, and "Start Chat" CTA button.
- **Zero-Overhead Tooltip**: When the tooltip is disabled or empty, no DOM elements, timers, or CSS animations are created, immediately starting the iframe at its minimal `100px` × `120px` footprint.
- **Smart Avatar Loading**: In Direct Link Mode, the avatar `<img>` element is never created in the DOM, guaranteeing **zero image downloads or network requests**. In popup mode, images use `loading="lazy"`.
- **CSS Isolation**: Runs completely inside a transparent, borderless `<iframe>`, ensuring 100% style isolation from your host website.
- **Geo-Targeting**: Restrict visibility to visitors from specific countries or hide it from certain regions via IP geolocation.
- **Modern & Lean**: Built with Webpack 5, Tailwind CSS, and PostCSS with an ultra-lightweight minified production bundle (~41 KiB).

---

## 🚀 Quick Start

### 1. Include the Script

Add the script tag before the closing `</body>` tag or in your document `<head>`:

#### Via CDN (jsDelivr)
```html
<script src="https://cdn.jsdelivr.net/gh/asaddon/WhatsApp@refs/heads/main/dist/WhatsAppChatBox.min.js"></script>
```

#### Or Self-Hosted
Download `WhatsAppChatBox.min.js` from the [`dist/`](./dist/WhatsAppChatBox.min.js) folder:
```html
<script src="/path/to/WhatsAppChatBox.min.js"></script>
```

### 2. Initialize the Widget

```html
<script>
  new WAChatBox({
    link: "https://wa.me/1234567890",
    user: {
      name: "Customer Support",
      avatar: "https://randomuser.me/api/portraits/women/66.jpg",
      status: "Typically replies within minutes"
    },
    chat_name: "Support Team",
    text: "Hey there! 👋<br>How can we help you today?",
    tooltipText: "We're on WhatsApp!",
    tooltipTimeout: 8000,
    popup: true
  });
</script>
```

---

## 🛠️ Operating Modes

### Mode 1: Interactive Popup Card (Default)

Clicking the WhatsApp button opens a stylish chat card displaying your team's avatar, status, and custom welcome message. Clicking "Start Chat" opens WhatsApp in a dedicated window or new tab.

```javascript
new WAChatBox({
  link: "https://wa.me/1234567890",
  popup: true, // Default
  target: "popup", // Opens 600x600 popup window
  user: {
    name: "Sarah from Sales",
    avatar: "https://randomuser.me/api/portraits/women/66.jpg",
    status: "Online • Ready to help"
  },
  text: "Hello! Looking for a quote or have questions? Let's chat!"
});
```

### Mode 2: Direct Link Mode (`popup: false`)

Bypasses the popup card completely. Clicking the floating WhatsApp button (or tooltip) directly opens the WhatsApp chat link.

```javascript
new WAChatBox({
  link: "https://wa.me/1234567890",
  popup: false, // Directly opens WhatsApp on click
  target: "_blank" // Opens in a new browser tab
});
```

> **Performance Advantage:** In Direct Mode, the popup DOM elements and agent avatar `<img src="...">` are completely omitted from the document, saving bandwidth and network requests.

---

## ⚙️ Complete Options Reference

| Option | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `link` | `string` | `"https://wa.me/919999999999"` | Your WhatsApp chat link (e.g. `https://wa.me/<phone_number>`). |
| `popup` | `boolean` | `true` | If `true`, clicking the button opens the chat card popup. If `false`, directly opens WhatsApp. |
| `target` | `string` | `"popup"` / `"_blank"` | Target window for opening the link: `"popup"` (600x600 popup window), `"_blank"` (new tab), or `"_self"` (same window). Defaults to `"popup"` when `popup: true`, and `"_blank"` when `popup: false`. |
| `tooltip` | `boolean` | `true` | Enable or disable the floating greeting tooltip next to the button. Set to `false` to disable. |
| `tooltipText` | `string` | `"We're on WhatsApp"` | Message displayed inside the greeting bubble. Set to `""` to disable the tooltip completely. |
| `tooltipTimeout` | `number` | `5000` | Time in milliseconds before the tooltip automatically dismisses. Set to `0` to disable the tooltip. |
| `user` | `object` | `{...}` | Profile details shown in the chat card header (see below). |
| `user.name` | `string` | `"Alice"` | Agent or business name displayed in the card header. |
| `user.avatar` | `string` | `women/66.jpg` | Image URL for the avatar icon. Omits network requests in Direct Mode. |
| `user.status` | `string` | `"Typically replies within an hour"` | Subtitle line indicating availability or response speed. |
| `chat_name` | `string` | `"Support"` | Header label inside the chat message bubble. |
| `text` | `string` | *(Greeting text)* | Predefined welcome message inside the chat bubble. Supports HTML (e.g., `<br>`, emojis, links). |
| `allowedCountries` | `array` | `[]` | Array of two-letter ISO country codes (e.g. `['US', 'CA', 'GB']`) allowed to see the widget. |
| `blockedCountries` | `array` | `[]` | Array of two-letter ISO country codes (e.g. `['IN', 'PK']`) where the widget is hidden. |

---

## 📖 Recipes & Advanced Usage

### Disabling the Tooltip Completely

If you prefer a clean floating button without the typewriter greeting tooltip, disable it using any of the following methods:

```javascript
// Method 1: Set tooltip to false
new WAChatBox({
  link: "https://wa.me/1234567890",
  tooltip: false
});

// Method 2: Pass an empty string
new WAChatBox({
  link: "https://wa.me/1234567890",
  tooltipText: ""
});

// Method 3: Set timeout to 0
new WAChatBox({
  link: "https://wa.me/1234567890",
  tooltipTimeout: 0
});
```

*When disabled, zero tooltip DOM nodes, timers, or typewriter keyframe animations are executed.*

---

### Geo-Targeting by Country

Target your website visitors based on their geographic location using ISO 3166-1 alpha-2 country codes:

#### Whitelist: Show Only in Selected Countries
```javascript
new WAChatBox({
  link: "https://wa.me/1234567890",
  allowedCountries: ["US", "CA", "GB", "AU"] // Only visible to US, Canada, UK, and Australia
});
```

#### Blacklist: Hide in Selected Countries
```javascript
new WAChatBox({
  link: "https://wa.me/1234567890",
  blockedCountries: ["FR", "DE"] // Hidden for visitors from France and Germany
});
```

> **Note:** Geo detection uses the visitor's IP address via [api.country.is](https://api.country.is/). If the network request fails or is blocked by an ad-blocker, the widget gracefully falls back to visible.

---

### Custom Window Targets

Control exactly how the WhatsApp chat opens:

```javascript
// Open in a new browser tab:
new WAChatBox({
  link: "https://wa.me/1234567890",
  target: "_blank"
});

// Open in a centered popup window (600x600):
new WAChatBox({
  link: "https://wa.me/1234567890",
  target: "popup"
});

// Open in the current browser window:
new WAChatBox({
  link: "https://wa.me/1234567890",
  target: "_self"
});
```

---

## 💻 Local Development & Testing

Want to test changes or contribute locally?

### 1. Clone the repository
```bash
git clone https://github.com/asaddon/WhatsApp.git
cd WhatsApp
```

### 2. Install dependencies
```bash
npm install
```

### 3. Start the local development server
```bash
npm start
```
This starts the Webpack dev server at `http://localhost:3000/` with hot module reloading and opens the interactive testing playground in your browser.

### 4. Build for production
```bash
npm run build
```
Compiles and minifies the code into [`dist/WhatsAppChatBox.min.js`](./dist/WhatsAppChatBox.min.js) and synchronizes [`docs/WhatsAppChatBox.min.js`](./docs/WhatsAppChatBox.min.js) for GitHub Pages.

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).
