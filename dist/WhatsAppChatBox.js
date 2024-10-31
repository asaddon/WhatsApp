/*!
 * 
 *         Whatsapp Chat Box v1.0.0
 *         Copyright (c) 2024
 *         License: MIT
 *
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 265:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(81);
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(645);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/*\n! tailwindcss v3.2.7 | MIT License | https://tailwindcss.com\n*//*\n1. Prevent padding and border from affecting element width. (https://github.com/mozdevs/cssremedy/issues/4)\n2. Allow adding a border to an element by just adding a border-width. (https://github.com/tailwindcss/tailwindcss/pull/116)\n*/\n\n*,\n::before,\n::after {\n  box-sizing: border-box; /* 1 */\n  border-width: 0; /* 2 */\n  border-style: solid; /* 2 */\n  border-color: #e5e7eb; /* 2 */\n}\n\n::before,\n::after {\n  --tw-content: '';\n}\n\n/*\n1. Use a consistent sensible line-height in all browsers.\n2. Prevent adjustments of font size after orientation changes in iOS.\n3. Use a more readable tab size.\n4. Use the user's configured `sans` font-family by default.\n5. Use the user's configured `sans` font-feature-settings by default.\n*/\n\nhtml {\n  line-height: 1.5; /* 1 */\n  -webkit-text-size-adjust: 100%; /* 2 */\n  -moz-tab-size: 4; /* 3 */\n  -o-tab-size: 4;\n     tab-size: 4; /* 3 */\n  font-family: ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Ubuntu, Cantarell, Noto Sans, sans-serif, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\"; /* 4 */\n  font-feature-settings: normal; /* 5 */\n}\n\n/*\n1. Remove the margin in all browsers.\n2. Inherit line-height from `html` so users can set them as a class directly on the `html` element.\n*/\n\nbody {\n  margin: 0; /* 1 */\n  line-height: inherit; /* 2 */\n}\n\n/*\n1. Add the correct height in Firefox.\n2. Correct the inheritance of border color in Firefox. (https://bugzilla.mozilla.org/show_bug.cgi?id=190655)\n3. Ensure horizontal rules are visible by default.\n*/\n\nhr {\n  height: 0; /* 1 */\n  color: inherit; /* 2 */\n  border-top-width: 1px; /* 3 */\n}\n\n/*\nAdd the correct text decoration in Chrome, Edge, and Safari.\n*/\n\nabbr:where([title]) {\n  text-decoration: underline;\n  -webkit-text-decoration: underline dotted;\n          text-decoration: underline dotted;\n}\n\n/*\nRemove the default font size and weight for headings.\n*/\n\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  font-size: inherit;\n  font-weight: inherit;\n}\n\n/*\nReset links to optimize for opt-in styling instead of opt-out.\n*/\n\na {\n  color: inherit;\n  text-decoration: inherit;\n}\n\n/*\nAdd the correct font weight in Edge and Safari.\n*/\n\nb,\nstrong {\n  font-weight: bolder;\n}\n\n/*\n1. Use the user's configured `mono` font family by default.\n2. Correct the odd `em` font sizing in all browsers.\n*/\n\ncode,\nkbd,\nsamp,\npre {\n  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, \"Liberation Mono\", \"Courier New\", monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/*\nAdd the correct font size in all browsers.\n*/\n\nsmall {\n  font-size: 80%;\n}\n\n/*\nPrevent `sub` and `sup` elements from affecting the line height in all browsers.\n*/\n\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\n\nsub {\n  bottom: -0.25em;\n}\n\nsup {\n  top: -0.5em;\n}\n\n/*\n1. Remove text indentation from table contents in Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=999088, https://bugs.webkit.org/show_bug.cgi?id=201297)\n2. Correct table border color inheritance in all Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=935729, https://bugs.webkit.org/show_bug.cgi?id=195016)\n3. Remove gaps between table borders by default.\n*/\n\ntable {\n  text-indent: 0; /* 1 */\n  border-color: inherit; /* 2 */\n  border-collapse: collapse; /* 3 */\n}\n\n/*\n1. Change the font styles in all browsers.\n2. Remove the margin in Firefox and Safari.\n3. Remove default padding in all browsers.\n*/\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  font-family: inherit; /* 1 */\n  font-size: 100%; /* 1 */\n  font-weight: inherit; /* 1 */\n  line-height: inherit; /* 1 */\n  color: inherit; /* 1 */\n  margin: 0; /* 2 */\n  padding: 0; /* 3 */\n}\n\n/*\nRemove the inheritance of text transform in Edge and Firefox.\n*/\n\nbutton,\nselect {\n  text-transform: none;\n}\n\n/*\n1. Correct the inability to style clickable types in iOS and Safari.\n2. Remove default button styles.\n*/\n\nbutton,\n[type='button'],\n[type='reset'],\n[type='submit'] {\n  -webkit-appearance: button; /* 1 */\n  background-color: transparent; /* 2 */\n  background-image: none; /* 2 */\n}\n\n/*\nUse the modern Firefox focus style for all focusable elements.\n*/\n\n:-moz-focusring {\n  outline: auto;\n}\n\n/*\nRemove the additional `:invalid` styles in Firefox. (https://github.com/mozilla/gecko-dev/blob/2f9eacd9d3d995c937b4251a5557d95d494c9be1/layout/style/res/forms.css#L728-L737)\n*/\n\n:-moz-ui-invalid {\n  box-shadow: none;\n}\n\n/*\nAdd the correct vertical alignment in Chrome and Firefox.\n*/\n\nprogress {\n  vertical-align: baseline;\n}\n\n/*\nCorrect the cursor style of increment and decrement buttons in Safari.\n*/\n\n::-webkit-inner-spin-button,\n::-webkit-outer-spin-button {\n  height: auto;\n}\n\n/*\n1. Correct the odd appearance in Chrome and Safari.\n2. Correct the outline style in Safari.\n*/\n\n[type='search'] {\n  -webkit-appearance: textfield; /* 1 */\n  outline-offset: -2px; /* 2 */\n}\n\n/*\nRemove the inner padding in Chrome and Safari on macOS.\n*/\n\n::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\n/*\n1. Correct the inability to style clickable types in iOS and Safari.\n2. Change font properties to `inherit` in Safari.\n*/\n\n::-webkit-file-upload-button {\n  -webkit-appearance: button; /* 1 */\n  font: inherit; /* 2 */\n}\n\n/*\nAdd the correct display in Chrome and Safari.\n*/\n\nsummary {\n  display: list-item;\n}\n\n/*\nRemoves the default spacing and border for appropriate elements.\n*/\n\nblockquote,\ndl,\ndd,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\nhr,\nfigure,\np,\npre {\n  margin: 0;\n}\n\nfieldset {\n  margin: 0;\n  padding: 0;\n}\n\nlegend {\n  padding: 0;\n}\n\nol,\nul,\nmenu {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n}\n\n/*\nPrevent resizing textareas horizontally by default.\n*/\n\ntextarea {\n  resize: vertical;\n}\n\n/*\n1. Reset the default placeholder opacity in Firefox. (https://github.com/tailwindlabs/tailwindcss/issues/3300)\n2. Set the default placeholder color to the user's configured gray 400 color.\n*/\n\ninput::-moz-placeholder, textarea::-moz-placeholder {\n  opacity: 1; /* 1 */\n  color: #9ca3af; /* 2 */\n}\n\ninput::placeholder,\ntextarea::placeholder {\n  opacity: 1; /* 1 */\n  color: #9ca3af; /* 2 */\n}\n\n/*\nSet the default cursor for buttons.\n*/\n\nbutton,\n[role=\"button\"] {\n  cursor: pointer;\n}\n\n/*\nMake sure disabled buttons don't get the pointer cursor.\n*/\n:disabled {\n  cursor: default;\n}\n\n/*\n1. Make replaced elements `display: block` by default. (https://github.com/mozdevs/cssremedy/issues/14)\n2. Add `vertical-align: middle` to align replaced elements more sensibly by default. (https://github.com/jensimmons/cssremedy/issues/14#issuecomment-634934210)\n   This can trigger a poorly considered lint error in some tools but is included by design.\n*/\n\nimg,\nsvg,\nvideo,\ncanvas,\naudio,\niframe,\nembed,\nobject {\n  display: block; /* 1 */\n  vertical-align: middle; /* 2 */\n}\n\n/*\nConstrain images and videos to the parent width and preserve their intrinsic aspect ratio. (https://github.com/mozdevs/cssremedy/issues/14)\n*/\n\nimg,\nvideo {\n  max-width: 100%;\n  height: auto;\n}\n\n/* Make elements with the HTML hidden attribute stay hidden by default */\n[hidden] {\n  display: none;\n}\n  body {\n    font-family: ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Ubuntu, Cantarell, Noto Sans, sans-serif, \"Segoe UI\", Roboto, Ubuntu, Cantarell, \"Noto Sans\", sans-serif;\n    text-rendering: optimizeLegibility;\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n  }\n\n*, ::before, ::after {\n  --tw-border-spacing-x: 0;\n  --tw-border-spacing-y: 0;\n  --tw-translate-x: 0;\n  --tw-translate-y: 0;\n  --tw-rotate: 0;\n  --tw-skew-x: 0;\n  --tw-skew-y: 0;\n  --tw-scale-x: 1;\n  --tw-scale-y: 1;\n  --tw-pan-x:  ;\n  --tw-pan-y:  ;\n  --tw-pinch-zoom:  ;\n  --tw-scroll-snap-strictness: proximity;\n  --tw-ordinal:  ;\n  --tw-slashed-zero:  ;\n  --tw-numeric-figure:  ;\n  --tw-numeric-spacing:  ;\n  --tw-numeric-fraction:  ;\n  --tw-ring-inset:  ;\n  --tw-ring-offset-width: 0px;\n  --tw-ring-offset-color: #fff;\n  --tw-ring-color: rgba(59, 130, 246, 0.5);\n  --tw-ring-offset-shadow: 0 0 rgba(0,0,0,0);\n  --tw-ring-shadow: 0 0 rgba(0,0,0,0);\n  --tw-shadow: 0 0 rgba(0,0,0,0);\n  --tw-shadow-colored: 0 0 rgba(0,0,0,0);\n  --tw-blur:  ;\n  --tw-brightness:  ;\n  --tw-contrast:  ;\n  --tw-grayscale:  ;\n  --tw-hue-rotate:  ;\n  --tw-invert:  ;\n  --tw-saturate:  ;\n  --tw-sepia:  ;\n  --tw-drop-shadow:  ;\n  --tw-backdrop-blur:  ;\n  --tw-backdrop-brightness:  ;\n  --tw-backdrop-contrast:  ;\n  --tw-backdrop-grayscale:  ;\n  --tw-backdrop-hue-rotate:  ;\n  --tw-backdrop-invert:  ;\n  --tw-backdrop-opacity:  ;\n  --tw-backdrop-saturate:  ;\n  --tw-backdrop-sepia:  ;\n}\n\n::backdrop {\n  --tw-border-spacing-x: 0;\n  --tw-border-spacing-y: 0;\n  --tw-translate-x: 0;\n  --tw-translate-y: 0;\n  --tw-rotate: 0;\n  --tw-skew-x: 0;\n  --tw-skew-y: 0;\n  --tw-scale-x: 1;\n  --tw-scale-y: 1;\n  --tw-pan-x:  ;\n  --tw-pan-y:  ;\n  --tw-pinch-zoom:  ;\n  --tw-scroll-snap-strictness: proximity;\n  --tw-ordinal:  ;\n  --tw-slashed-zero:  ;\n  --tw-numeric-figure:  ;\n  --tw-numeric-spacing:  ;\n  --tw-numeric-fraction:  ;\n  --tw-ring-inset:  ;\n  --tw-ring-offset-width: 0px;\n  --tw-ring-offset-color: #fff;\n  --tw-ring-color: rgba(59, 130, 246, 0.5);\n  --tw-ring-offset-shadow: 0 0 rgba(0,0,0,0);\n  --tw-ring-shadow: 0 0 rgba(0,0,0,0);\n  --tw-shadow: 0 0 rgba(0,0,0,0);\n  --tw-shadow-colored: 0 0 rgba(0,0,0,0);\n  --tw-blur:  ;\n  --tw-brightness:  ;\n  --tw-contrast:  ;\n  --tw-grayscale:  ;\n  --tw-hue-rotate:  ;\n  --tw-invert:  ;\n  --tw-saturate:  ;\n  --tw-sepia:  ;\n  --tw-drop-shadow:  ;\n  --tw-backdrop-blur:  ;\n  --tw-backdrop-brightness:  ;\n  --tw-backdrop-contrast:  ;\n  --tw-backdrop-grayscale:  ;\n  --tw-backdrop-hue-rotate:  ;\n  --tw-backdrop-invert:  ;\n  --tw-backdrop-opacity:  ;\n  --tw-backdrop-saturate:  ;\n  --tw-backdrop-sepia:  ;\n}\n@keyframes bounce {\n    0%, 20%, 50%, 80%, 100% {\n      transform: translateY(0);\n    }\n    40% {\n      transform: translateY(-15px);\n    }\n    60% {\n      transform: translateY(-10px);\n    }\n  }\n.bounce {\n    animation: bounce 1s ease infinite;\n  }\n/* Use CSS custom properties for commonly used values */\n:root {\n    --chat-primary: rgb(15, 23, 42);\n    --chat-accent: rgb(37, 211, 102);\n    --chat-text: rgb(255, 255, 255);\n  }\n.chat-bg::before {\n    content: \"\";\n    position: absolute;\n    top: 0;\n    right: 0;\n    bottom: 0;\n    left: 0;\n    z-index: 0;\n    opacity: 0.08;\n  }\n.chat-box {\n    --padding: 7px 14px 6px;\n    padding: 7px 14px 6px;\n    padding: var(--padding);\n    background-color: rgb(15, 23, 42);\n    background-color: var(--chat-primary);\n    border-radius: 0 8px 8px;\n    position: relative;\n    z-index: 2;\n    box-shadow: 0 1px 0.5px rgba(0, 0, 0, 0.13);\n    margin: 4px 0 0 -22px;\n    max-width: calc(100% - 66px);\n    opacity: 0;\n    visibility: hidden;\n    transform-origin: center top;\n    transition: margin-left 0.3s ease,\n                opacity 0.3s ease,\n                visibility 0.3s ease;\n  }\n.chat-box.show {\n    visibility: visible;\n    opacity: 1;\n    margin-left: 0;\n  }\n.chat-box::before {\n    content: \"\";\n    position: absolute;\n    top: 0;\n    left: -12px;\n    width: 12px;\n    height: 19px;\n    background-position: 50% 50%;\n    background-repeat: no-repeat;\n    background-size: contain;\n  }\n/* Optimize text styles */\n.chat-time {\n    text-align: right;\n    margin: 4px -8px -4px 0;\n    font-size: 12px;\n    line-height: 16px;\n    color: rgb(37, 211, 102);\n    color: var(--chat-accent);\n  }\n.chat-name {\n    font-size: 13px;\n    font-weight: 700;\n    line-height: 18px;\n    color: rgb(37, 211, 102);\n    color: var(--chat-accent);\n  }\n.chat-message {\n    font-size: 14px;\n    line-height: 19px;\n    margin-top: 4px;\n    color: rgb(255, 255, 255);\n    color: var(--chat-text);\n  }\n/* Optimize button styles */\n.chat-btn {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    padding: 8px 12px;\n    margin: 20px;\n    border: none;\n    border-radius: 24px;\n    background: rgb(0, 201, 98);\n    color: rgb(0, 0, 0);\n    font-size: 15px;\n    font-weight: 700;\n    line-height: 20px;\n    cursor: pointer;\n    position: relative;\n    overflow: hidden;\n    -webkit-appearance: none;\n       -moz-appearance: none;\n            appearance: none;\n  }\n.chat-whatsapp-icon {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    width: 48px;\n    height: 48px;\n  }\n.replies-in {\n    font-size: 15px;\n    line-height: 18px;\n    margin-top: 4px;\n    color: rgb(255, 255, 255);\n    color: var(--chat-text);\n  }\n.name-head {\n    font-size: 16px;\n    font-weight: 700;\n    line-height: 20px;\n    color: rgb(37, 211, 102);\n    color: var(--chat-accent);\n  }\n.need-btn {\n    -webkit-user-select: none;\n       -moz-user-select: none;\n            user-select: none;\n  }\n.static {\n  position: static;\n}\n.fixed {\n  position: fixed;\n}\n.absolute {\n  position: absolute;\n}\n.relative {\n  position: relative;\n}\n.bottom-1 {\n  bottom: 0.25rem;\n}\n.right-0 {\n  right: 0px;\n}\n.right-1 {\n  right: 0.25rem;\n}\n.right-2 {\n  right: 0.5rem;\n}\n.right-\\[-6px\\] {\n  right: -6px;\n}\n.right-full {\n  right: 100%;\n}\n.top-1 {\n  top: 0.25rem;\n}\n.top-1\\/2 {\n  top: 50%;\n}\n.top-2 {\n  top: 0.5rem;\n}\n.float-right {\n  float: right;\n}\n.mx-4 {\n  margin-left: 1rem;\n  margin-right: 1rem;\n}\n.my-4 {\n  margin-top: 1rem;\n  margin-bottom: 1rem;\n}\n.ml-2 {\n  margin-left: 0.5rem;\n}\n.mr-2 {\n  margin-right: 0.5rem;\n}\n.flex {\n  display: flex;\n}\n.h-0 {\n  height: 0px;\n}\n.h-16 {\n  height: 4rem;\n}\n.h-2 {\n  height: 0.5rem;\n}\n.h-2\\.5 {\n  height: 0.625rem;\n}\n.h-3 {\n  height: 0.75rem;\n}\n.h-4 {\n  height: 1rem;\n}\n.h-5 {\n  height: 1.25rem;\n}\n.w-0 {\n  width: 0px;\n}\n.w-2 {\n  width: 0.5rem;\n}\n.w-2\\.5 {\n  width: 0.625rem;\n}\n.w-3 {\n  width: 0.75rem;\n}\n.w-4 {\n  width: 1rem;\n}\n.w-5 {\n  width: 1.25rem;\n}\n.max-w-sm {\n  max-width: 24rem;\n}\n.-translate-y-1\\/2 {\n  --tw-translate-y: -50%;\n  transform: translate(var(--tw-translate-x), -50%) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n}\n.transform {\n  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n}\n.cursor-pointer {\n  cursor: pointer;\n}\n.flex-col {\n  flex-direction: column;\n}\n.items-center {\n  align-items: center;\n}\n.justify-center {\n  justify-content: center;\n}\n.overflow-hidden {\n  overflow: hidden;\n}\n.whitespace-nowrap {\n  white-space: nowrap;\n}\n.rounded-full {\n  border-radius: 9999px;\n}\n.rounded-lg {\n  border-radius: 0.5rem;\n}\n.border {\n  border-width: 1px;\n}\n.border-2 {\n  border-width: 2px;\n}\n.border-y-\\[6px\\] {\n  border-top-width: 6px;\n  border-bottom-width: 6px;\n}\n.border-l-\\[6px\\] {\n  border-left-width: 6px;\n}\n.border-white {\n  --tw-border-opacity: 1;\n  border-color: rgba(255, 255, 255, 1);\n  border-color: rgb(255 255 255 / var(--tw-border-opacity));\n}\n.border-y-transparent {\n  border-top-color: transparent;\n  border-bottom-color: transparent;\n}\n.border-l-black {\n  --tw-border-opacity: 1;\n  border-left-color: rgba(0, 0, 0, 1);\n  border-left-color: rgb(0 0 0 / var(--tw-border-opacity));\n}\n.bg-\\[\\#ff0000\\] {\n  --tw-bg-opacity: 1;\n  background-color: rgba(255, 0, 0, 1);\n  background-color: rgb(255 0 0 / var(--tw-bg-opacity));\n}\n.bg-black {\n  --tw-bg-opacity: 1;\n  background-color: rgba(0, 0, 0, 1);\n  background-color: rgb(0 0 0 / var(--tw-bg-opacity));\n}\n.bg-green-500 {\n  --tw-bg-opacity: 1;\n  background-color: rgba(34, 197, 94, 1);\n  background-color: rgb(34 197 94 / var(--tw-bg-opacity));\n}\n.bg-slate-900 {\n  --tw-bg-opacity: 1;\n  background-color: rgba(15, 23, 42, 1);\n  background-color: rgb(15 23 42 / var(--tw-bg-opacity));\n}\n.p-1 {\n  padding: 0.25rem;\n}\n.p-3 {\n  padding: 0.75rem;\n}\n.p-7 {\n  padding: 1.75rem;\n}\n.p-8 {\n  padding: 2rem;\n}\n.px-4 {\n  padding-left: 1rem;\n  padding-right: 1rem;\n}\n.py-1 {\n  padding-top: 0.25rem;\n  padding-bottom: 0.25rem;\n}\n.py-4 {\n  padding-top: 1rem;\n  padding-bottom: 1rem;\n}\n.text-sm {\n  font-size: 0.875rem;\n  line-height: 1.25rem;\n}\n.font-bold {\n  font-weight: 700;\n}\n.font-semibold {\n  font-weight: 600;\n}\n.text-white {\n  --tw-text-opacity: 1;\n  color: rgba(255, 255, 255, 1);\n  color: rgb(255 255 255 / var(--tw-text-opacity));\n}\n.opacity-0 {\n  opacity: 0;\n}\n.opacity-100 {\n  opacity: 1;\n}\n.shadow-lg {\n  --tw-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -4px rgba(0, 0, 0, 0.1);\n  --tw-shadow-colored: 0 10px 15px -3px var(--tw-shadow-color), 0 4px 6px -4px var(--tw-shadow-color);\n  box-shadow: 0 0 rgba(0,0,0,0), 0 0 rgba(0,0,0,0), 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -4px rgba(0, 0, 0, 0.1);\n  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);\n}\n.transition-opacity {\n  transition-property: opacity;\n  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n  transition-duration: 150ms;\n}\n.duration-200 {\n  transition-duration: 200ms;\n}\n#wa-box.show {\n    display: block !important;\n  }\n#wa-box.show {\n    animation: fadeInUp 0.5s ease forwards;\n  }\n#wa-box.hide {\n    display: block !important;\n  }\n#wa-box.hide {\n    animation: fadeOutDown 0.5s ease forwards;\n  }\n@keyframes fadeInUp {\n    from {\n      transform: translate3d(0, 40px, 0);\n      opacity: 0;\n    }\n    to {\n      transform: translate3d(0, 0, 0);\n      opacity: 1;\n    }\n  }\n@keyframes fadeOutDown {\n    from {\n      transform: translate3d(0, 0, 0);\n      opacity: 1;\n    }\n    to {\n      transform: translate3d(0, 40px, 0);\n      opacity: 0;\n    }\n  }\n\n/* Base styles with better performance */\n\n/* Optimize animations using transform instead of multiple properties */\n\n/* Optimize animations */\n\n.hover\\:no-underline:hover {\n  text-decoration-line: none;\n}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 645:
/***/ ((module) => {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ 81:
/***/ ((module) => {

"use strict";


module.exports = function (i) {
  return i[1];
};

/***/ }),

/***/ 379:
/***/ ((module) => {

"use strict";


var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ 216:
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ 565:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ 795:
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ 589:
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ 819:
/***/ ((module) => {

module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"none\"><path d=\"M16 8L8 16M8.00001 8L16 16\" stroke=\"#999999\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path></svg>"

/***/ }),

/***/ 474:
/***/ ((module) => {

module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" viewBox=\"0 0 90 90\" fill=\"#fff\" className=\"h-5\"><path d=\"M90,43.841c0,24.213-19.779,43.841-44.182,43.841c-7.747,0-15.025-1.98-21.357-5.455L0,90l7.975-23.522 c-4.023-6.606-6.34-14.354-6.34-22.637C1.635,19.628,21.416,0,45.818,0C70.223,0,90,19.628,90,43.841z M45.818,6.982 c-20.484,0-37.146,16.535-37.146,36.859c0,8.065,2.629,15.534,7.076,21.61L11.107,79.14l14.275-4.537 c5.865,3.851,12.891,6.097,20.437,6.097c20.481,0,37.146-16.533,37.146-36.857S66.301,6.982,45.818,6.982z M68.129,53.938 c-0.273-0.447-0.994-0.717-2.076-1.254c-1.084-0.537-6.41-3.138-7.4-3.495c-0.993-0.358-1.717-0.538-2.438,0.537 c-0.721,1.076-2.797,3.495-3.43,4.212c-0.632,0.719-1.263,0.809-2.347,0.271c-1.082-0.537-4.571-1.673-8.708-5.333 c-3.219-2.848-5.393-6.364-6.025-7.441c-0.631-1.075-0.066-1.656,0.475-2.191c0.488-0.482,1.084-1.255,1.625-1.882 c0.543-0.628,0.723-1.075,1.082-1.793c0.363-0.717,0.182-1.344-0.09-1.883c-0.27-0.537-2.438-5.825-3.34-7.977 c-0.902-2.15-1.803-1.792-2.436-1.792c-0.631,0-1.354-0.09-2.076-0.09c-0.722,0-1.896,0.269-2.889,1.344 c-0.992,1.076-3.789,3.676-3.789,8.963c0,5.288,3.879,10.397,4.422,11.113c0.541,0.716,7.49,11.92,18.5,16.223 C58.2,65.771,58.2,64.336,60.186,64.156c1.984-0.179,6.406-2.599,7.312-5.107C68.398,56.537,68.398,54.386,68.129,53.938z\"></path></svg>"

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";

// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js
var injectStylesIntoStyleTag = __webpack_require__(379);
var injectStylesIntoStyleTag_default = /*#__PURE__*/__webpack_require__.n(injectStylesIntoStyleTag);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/styleDomAPI.js
var styleDomAPI = __webpack_require__(795);
var styleDomAPI_default = /*#__PURE__*/__webpack_require__.n(styleDomAPI);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js
var setAttributesWithoutAttributes = __webpack_require__(565);
var setAttributesWithoutAttributes_default = /*#__PURE__*/__webpack_require__.n(setAttributesWithoutAttributes);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/insertStyleElement.js
var insertStyleElement = __webpack_require__(216);
var insertStyleElement_default = /*#__PURE__*/__webpack_require__.n(insertStyleElement);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/styleTagTransform.js
var styleTagTransform = __webpack_require__(589);
var styleTagTransform_default = /*#__PURE__*/__webpack_require__.n(styleTagTransform);
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/styles.css
var styles = __webpack_require__(265);
;// CONCATENATED MODULE: ./src/styles.css

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (styleTagTransform_default());
options.setAttributes = (setAttributesWithoutAttributes_default());
options.insert = function insertIntoTarget(element, options) {
                window.chatBoxStyle = element;
              };
options.domAPI = (styleDomAPI_default());
options.insertStyleElement = (insertStyleElement_default());

var update = injectStylesIntoStyleTag_default()(styles/* default */.Z, options);




       /* harmony default export */ const src_styles = (styles/* default */.Z && styles/* default.locals */.Z.locals ? styles/* default.locals */.Z.locals : undefined);

// EXTERNAL MODULE: ./src/whatsapp.svg
var whatsapp = __webpack_require__(474);
var whatsapp_default = /*#__PURE__*/__webpack_require__.n(whatsapp);
// EXTERNAL MODULE: ./src/cross.svg
var cross = __webpack_require__(819);
var cross_default = /*#__PURE__*/__webpack_require__.n(cross);
;// CONCATENATED MODULE: ./src/app.js
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }



var WAChatBox = function () {
  function WAChatBox(config) {
    var _this = this;
    _classCallCheck(this, WAChatBox);
    _defineProperty(this, "handleClickOutside", function (event, iframeDocument) {
      var waBox = iframeDocument.querySelector("#wa-box");
      if (!(waBox !== null && waBox !== void 0 && waBox.classList.contains("show"))) return;
      var isClickInside = event.target.closest("#wa-box") || event.target.closest("#toggleWaBox") || event.target.id === "toggleWaBox";
      if (!isClickInside) {
        _this.toggleChatBox(iframeDocument, "hide");
      }
    });
    _defineProperty(this, "toggleChatBox", function (iframeDocument, forcedAction) {
      var waBox = iframeDocument.querySelector("#wa-box");
      var action = forcedAction || (waBox.classList.contains("show") ? "hide" : "show");
      if (action === "show") {
        waBox.classList.remove("hide");
        waBox.classList.add("show");
        requestAnimationFrame(function () {
          var _iframeDocument$query, _iframeDocument$query2;
          (_iframeDocument$query = iframeDocument.querySelector(".chat-box")) === null || _iframeDocument$query === void 0 ? void 0 : _iframeDocument$query.classList.add("show");
          _this.iframe.style.width = "408px";
          _this.iframe.style.height = ((_iframeDocument$query2 = iframeDocument.querySelector("#full-waBox")) === null || _iframeDocument$query2 === void 0 ? void 0 : _iframeDocument$query2.offsetHeight) + "px";
        });
      } else {
        waBox.classList.remove("show");
        waBox.classList.add("hide");
        setTimeout(function () {
          _this.iframe.style.width = "300px";
          _this.iframe.style.height = "200px";
        }, 500);
      }
    });
    _defineProperty(this, "iframeLoaded", function () {
      var iframeDocument = _this.iframe.contentDocument;
      if (!iframeDocument) return;
      iframeDocument.body.append(_this.render());
      iframeDocument.body.append(chatBoxStyle);
      _this.setupIframeEventListeners(iframeDocument);
    });
    _defineProperty(this, "render", function () {
      var _this$config = _this.config,
        _this$config$user = _this$config.user,
        user = _this$config$user === void 0 ? {} : _this$config$user,
        text = _this$config.text,
        button_text = _this$config.button_text,
        chat_name = _this$config.chat_name,
        tooltipText = _this$config.tooltipText;
      var _user$name = user.name,
        name = _user$name === void 0 ? '' : _user$name,
        _user$avatar = user.avatar,
        avatar = _user$avatar === void 0 ? '' : _user$avatar,
        _user$status = user.status,
        status = _user$status === void 0 ? '' : _user$status;
      return createElement("div", {
        className: "fixed bottom-1 right-0 p-3",
        id: "full-waBox",
        onClick: function onClick(e) {
          return e.stopPropagation();
        }
      }, createElement("div", {
        className: "max-w-sm overflow-hidden rounded-lg bg-slate-900 shadow-lg",
        style: "display: none",
        id: "wa-box",
        onClick: function onClick(e) {
          return e.stopPropagation();
        }
      }, createElement("div", {
        className: "relative flex p-8 py-4"
      }, createElement("div", {
        className: "relative"
      }, avatar && createElement("img", {
        src: avatar,
        alt: "Website Logo",
        className: "h-16 rounded-full"
      }), createElement("div", {
        className: "absolute bottom-1 right-1 h-3 w-3 rounded-full border-2 border-white bg-green-500"
      })), createElement("div", {
        className: "flex flex-col p-3"
      }, createElement("div", {
        className: "name-head font-bold"
      }, name), createElement("div", {
        className: "replies-in"
      }, status)), createElement("div", {
        className: "text-bold absolute right-2 top-2"
      }, createElement("a", {
        id: "toggleWaBox",
        className: "cursor-pointer"
      }, createElement("div", {
        className: "w-4 h-4",
        dangerouslySetInnerHTML: {
          __html: (cross_default())
        }
      })))), createElement("div", {
        className: "chat-bg relative bg-slate-900 p-7"
      }, createElement("div", {
        className: "chat-box"
      }, createElement("div", {
        className: "chat-name"
      }, chat_name), createElement("div", {
        className: "chat-message",
        dangerouslySetInnerHTML: {
          __html: text
        }
      }), createElement("div", {
        className: "chat-time"
      }, _this.formatTime(new Date())))), createElement("div", {
        className: "bg-slate-900"
      }, createElement("div", null, createElement("a", {
        className: "hover:no-underline",
        id: "open-wa"
      }, createElement("div", {
        className: "chat-btn"
      }, createElement("div", {
        className: "w-4 h-4 mr-2",
        dangerouslySetInnerHTML: {
          __html: whatsapp_default().replace(/fill="[^"]*"/g, "fill=\"#000000\"")
        }
      }), "Start Chat")), " "))), createElement("div", {
        className: "relative float-right my-4 flex cursor-pointer group"
      }, createElement("div", {
        id: "wa-tooltip",
        className: "absolute right-full mr-2 top-1/2 -translate-y-1/2 bg-black text-white px-4 py-1 rounded-lg text-sm whitespace-nowrap transition-opacity duration-200 ".concat(_this.showTooltip ? 'opacity-100' : 'opacity-0')
      }, tooltipText, createElement("div", {
        className: "absolute top-1/2 -translate-y-1/2 right-[-6px] w-0 h-0 border-y-[6px] border-y-transparent border-l-[6px] border-l-black"
      })), createElement("div", {
        className: "relative flex cursor-pointer justify-center rounded-full bg-black p-1 font-semibold text-white need-btn bounce",
        id: "toggleWaBox",
        onClick: function onClick(e) {
          return e.stopPropagation();
        }
      }, createElement("div", {
        className: button_text ? "flex mx-4" : "flex"
      }, createElement("div", {
        className: "chat-whatsapp-icon"
      }, createElement("div", {
        className: "w-5 h-5",
        dangerouslySetInnerHTML: {
          __html: (whatsapp_default())
        }
      })), button_text ? createElement("div", {
        className: "ml-2 flex items-center justify-center"
      }, button_text) : ""), createElement("div", {
        className: "absolute right-1 top-1 h-2.5 w-2.5 rounded-full bg-[#ff0000]"
      }))));
    });
    this.config = _objectSpread(_objectSpread({}, WAChatBox.DEFAULT_CONFIG), config);
    this.showTooltip = true;
    this.setupIframe();
    this.bindEvents();
  }
  _createClass(WAChatBox, [{
    key: "setupIframe",
    value: function setupIframe() {
      this.iframe = document.createElement("iframe");
      this.iframe.onload = this.iframeLoaded;
      this.iframe.src = "about:blank";
      Object.assign(this.iframe.style, {
        position: "fixed",
        top: "50%",
        transform: "translateY(-50%)",
        bottom: "0",
        right: "0",
        maxWidth: "100%",
        width: "300px",
        height: "200px",
        border: "none",
        zIndex: "999999999"
      });
      document.body.append(this.iframe);
    }
  }, {
    key: "bindEvents",
    value: function bindEvents() {
      var _this2 = this;
      var handleDocumentClick = function handleDocumentClick(e) {
        if (_this2.iframe.contentDocument) {
          _this2.handleClickOutside(e, _this2.iframe.contentDocument);
        }
      };
      document.addEventListener("click", handleDocumentClick);
      setTimeout(function () {
        var _this2$iframe$content;
        _this2.showTooltip = false;
        var tooltip = (_this2$iframe$content = _this2.iframe.contentDocument) === null || _this2$iframe$content === void 0 ? void 0 : _this2$iframe$content.querySelector("#wa-tooltip");
        tooltip === null || tooltip === void 0 ? void 0 : tooltip.remove();
      }, this.config.tooltipTimeout);
    }
  }, {
    key: "formatTime",
    value: function formatTime(date) {
      var hours = date.getHours() % 12 || 12;
      var minutes = String(date.getMinutes()).padStart(2, '0');
      var ampm = date.getHours() >= 12 ? 'PM' : 'AM';
      return "".concat(hours, ":").concat(minutes, " ").concat(ampm);
    }
  }, {
    key: "setupIframeEventListeners",
    value: function setupIframeEventListeners(iframeDocument) {
      var _this3 = this;
      iframeDocument.addEventListener("click", function (e) {
        return _this3.handleClickOutside(e, iframeDocument);
      });
      var openWa = iframeDocument.querySelector("#open-wa");
      openWa === null || openWa === void 0 ? void 0 : openWa.addEventListener("click", function (e) {
        e.stopPropagation();
        _this3.config.link && window.open(_this3.config.link, "popup", "width=600,height=600");
      });
      iframeDocument.querySelectorAll("#toggleWaBox").forEach(function (el) {
        el.addEventListener("click", function (e) {
          e.stopPropagation();
          _this3.toggleChatBox(iframeDocument);
        });
      });
      var waTooltip = iframeDocument.querySelector("#wa-tooltip");
      waTooltip === null || waTooltip === void 0 ? void 0 : waTooltip.addEventListener("click", function (e) {
        e.stopPropagation();
        _this3.toggleChatBox(iframeDocument);
      });
      var waBox = iframeDocument.querySelector("#wa-box");
      waBox === null || waBox === void 0 ? void 0 : waBox.addEventListener("click", function (e) {
        return e.stopPropagation();
      });
    }
  }]);
  return WAChatBox;
}();
_defineProperty(WAChatBox, "DEFAULT_CONFIG", {
  link: "https://wa.me/919999999999",
  user: {
    name: "Alice",
    avatar: "https://randomuser.me/api/portraits/women/66.jpg",
    status: "Typically replies within an hour"
  },
  text: "Hey There \uD83D\uDC4B<br><br>I'm here to help, so let me know what's up and I'll be happy to find a solution \uD83E\uDD13",
  button_text: "Need Help?",
  chat_name: "Support",
  tooltipText: "We're on WhatsApp",
  tooltipTimeout: 5000
});
/* harmony default export */ const app = (WAChatBox);
;// CONCATENATED MODULE: ./index.js
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
window.createElement = function (tagName) {
  var attrs = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var elem = Object.assign(document.createElement(tagName), attrs);
  if (attrs !== null && attrs !== void 0 && attrs.dangerouslySetInnerHTML) {
    elem.innerHTML = attrs.dangerouslySetInnerHTML.__html;
    delete attrs.dangerouslySetInnerHTML;
  }
  for (var _len = arguments.length, children = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
    children[_key - 2] = arguments[_key];
  }
  for (var _i = 0, _children = children; _i < _children.length; _i++) {
    var child = _children[_i];
    if (Array.isArray(child)) elem.append.apply(elem, _toConsumableArray(child));else elem.append(child);
  }
  return elem;
};

window.WAChatBox = app;
})();

/******/ })()
;