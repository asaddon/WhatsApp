window.createElement = (tagName, attrs = {}, ...children) => {
  const elem = Object.assign(document.createElement(tagName), attrs);

  // if arrt is dangerouslySetInnerHTML then set innerHTML
  if (attrs?.dangerouslySetInnerHTML) {
    elem.innerHTML = attrs.dangerouslySetInnerHTML.__html;
    // remove dangerouslySetInnerHTML from attrs
    delete attrs.dangerouslySetInnerHTML;
  }

  for (const child of children) {
    if (child === null || child === undefined || typeof child === "boolean" || child === "") {
      continue;
    }
    if (Array.isArray(child)) {
      const valid = child.filter(c => c !== null && c !== undefined && typeof c !== "boolean" && c !== "");
      if (valid.length) elem.append(...valid);
    } else {
      elem.append(child);
    }
  }
  return elem;
};

import WAChatBox from "./src/app.js";

window.WAChatBox = WAChatBox;
