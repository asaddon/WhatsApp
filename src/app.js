import "./styles.css";
import whatsappSvg from "./whatsapp.svg";
import crossSvg from "./cross.svg";
const whatsappIcon = `
  <svg aria-hidden="true" width="50" height="50" viewBox="0 0 39 39" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="19.4395" cy="19.4395" r="19.4395" fill="#49E670"></circle>
    <path d="M12.9821 10.1115C12.7029 10.7767 11.5862 11.442 10.7486 11.575C10.1902 11.7081 9.35269 11.8411 6.84003 10.7767C3.48981 9.44628 1.39593 6.25317 1.25634 6.12012C1.11674 5.85403 2.13001e-06 4.39053 2.13001e-06 2.92702C2.13001e-06 1.46351 0.83755 0.665231 1.11673 0.399139C1.39592 0.133046 1.8147 1.01506e-06 2.23348 1.01506e-06C2.37307 1.01506e-06 2.51267 1.01506e-06 2.65226 1.01506e-06C2.93144 1.01506e-06 3.21063 -2.02219e-06 3.35022 0.532183C3.62941 1.19741 4.32736 2.66092 4.32736 2.79397C4.46696 2.92702 4.46696 3.19311 4.32736 3.32616C4.18777 3.59225 4.18777 3.59224 3.90858 3.85834C3.76899 3.99138 3.6294 4.12443 3.48981 4.39052C3.35022 4.52357 3.21063 4.78966 3.35022 5.05576C3.48981 5.32185 4.18777 6.38622 5.16491 7.18449C6.42125 8.24886 7.39839 8.51496 7.81717 8.78105C8.09636 8.91409 8.37554 8.9141 8.65472 8.648C8.93391 8.38191 9.21309 7.98277 9.49228 7.58363C9.77146 7.31754 10.0507 7.1845 10.3298 7.31754C10.609 7.45059 12.2841 8.11582 12.5633 8.38191C12.8425 8.51496 13.1217 8.648 13.1217 8.78105C13.1217 8.78105 13.1217 9.44628 12.9821 10.1115Z" transform="translate(12.9597 12.9597)" fill="#FAFAFA"></path>
    <path d="M0.196998 23.295L0.131434 23.4862L0.323216 23.4223L5.52771 21.6875C7.4273 22.8471 9.47325 23.4274 11.6637 23.4274C18.134 23.4274 23.4274 18.134 23.4274 11.6637C23.4274 5.19344 18.134 -0.1 11.6637 -0.1C5.19344 -0.1 -0.1 5.19344 -0.1 11.6637C-0.1 13.9996 0.624492 16.3352 1.93021 18.2398L0.196998 23.295ZM5.87658 19.8847L5.84025 19.8665L5.80154 19.8788L2.78138 20.8398L3.73978 17.9646L3.75932 17.906L3.71562 17.8623L3.43104 17.5777C2.27704 15.8437 1.55796 13.8245 1.55796 11.6637C1.55796 6.03288 6.03288 1.55796 11.6637 1.55796C17.2945 1.55796 21.7695 6.03288 21.7695 11.6637C21.7695 17.2945 17.2945 21.7695 11.6637 21.7695C9.64222 21.7695 7.76778 21.1921 6.18227 20.039L6.17557 20.0342L6.16817 20.0305L5.87658 19.8847Z" transform="translate(7.7758 7.77582)" fill="white" stroke="white" stroke-width="0.2"></path>
  </svg>
`;
class WAChatBox {
  static DEFAULT_CONFIG = {
    link: "https://wa.me/919999999999",
    user: {
      name: "Alice",
      avatar: "https://randomuser.me/api/portraits/women/66.jpg",
      status: "Typically replies within an hour",
    },
    text: `Hey There 👋<br><br>I'm here to help, so let me know what's up and I'll be happy to find a solution 🤓`,
    chat_name: "Support",
    tooltipText: "We're on WhatsApp",
    tooltipTimeout: 5000,
  };

  constructor(config) {
    this.config = { ...WAChatBox.DEFAULT_CONFIG, ...config };
    this.showTooltip = true;
    this.setupIframe();
    this.bindEvents();
  }

  setupIframe() {
    this.iframe = document.createElement("iframe");
    this.iframe.onload = this.iframeLoaded;
    this.iframe.src = "about:blank";
    
    Object.assign(this.iframe.style, {
      position: "fixed",
      bottom: "0",
      left: "0",
      maxWidth: "100%",
      width: "300px",
      height: "150px",
      border: "none",
      zIndex: "10"
    });

    document.body.append(this.iframe);
  }

  bindEvents() {
    const handleDocumentClick = (e) => {
      if (this.iframe.contentDocument) {
        this.handleClickOutside(e, this.iframe.contentDocument);
      }
    };

    document.addEventListener("click", handleDocumentClick);

    // Cleanup tooltip after timeout
  setTimeout(() => {
  this.showTooltip = false;
  const tooltip = this.iframe.contentDocument?.querySelector("#wa-tooltip");
  tooltip?.remove();
  // Resize the iframe to 100px by 120px only if the chat box is not open
  if (!this.iframe.contentDocument?.querySelector("#wa-box")?.classList.contains("show")) {
    this.iframe.style.width = "100px";
    this.iframe.style.height = "120px";
  }
}, this.config.tooltipTimeout);
  }

  formatTime(date) {
    const hours = date.getHours() % 12 || 12;
    const minutes = String(date.getMinutes()).padStart(2, '0');
    const ampm = date.getHours() >= 12 ? 'PM' : 'AM';
    return `${hours}:${minutes} ${ampm}`;
  }

  handleClickOutside = (event, iframeDocument) => {
    const waBox = iframeDocument.querySelector("#wa-box");
    if (!waBox?.classList.contains("show")) return;

    const isClickInside = event.target.closest("#wa-box") || 
                         event.target.closest("#toggleWaBox") ||
                         event.target.id === "toggleWaBox";
    
    if (!isClickInside) {
      this.toggleChatBox(iframeDocument, "hide");
    }
  };

  toggleChatBox = (iframeDocument, forcedAction) => {
    const waBox = iframeDocument.querySelector("#wa-box");
    const action = forcedAction || (waBox.classList.contains("show") ? "hide" : "show");
  
    if (action === "show") {
      waBox.classList.remove("hide");
      waBox.classList.add("show");
  
      // Re-enable the "Start Chat" button
      const startChatButton = iframeDocument.querySelector("#open-wa");
      if (startChatButton) {
        startChatButton.style.pointerEvents = "auto"; // Re-enable pointer events
        startChatButton.style.opacity = "1"; // Make it fully visible
      }
  
      requestAnimationFrame(() => {
        iframeDocument.querySelector(".chat-box")?.classList.add("show");
        this.iframe.style.width = "408px";
        this.iframe.style.height = iframeDocument.querySelector("#full-waBox")?.offsetHeight + "px";
      });
    } else {
      waBox.classList.remove("show");
      waBox.classList.add("hide");
  
      // Disable the "Start Chat" button
      const startChatButton = iframeDocument.querySelector("#open-wa");
      if (startChatButton) {
        startChatButton.style.pointerEvents = "none"; // Disable pointer events
        startChatButton.style.opacity = "0.5"; // Visually indicate it's disabled
      }
      if (!this.showTooltip) {
      setTimeout(() => {
        this.iframe.style.width = "100px";
        this.iframe.style.height = "120px";
      }, 500); // Match the timeout duration with the CSS transition
    }}
  };

  iframeLoaded = () => {
    const iframeDocument = this.iframe.contentDocument;
    if (!iframeDocument) return;

    iframeDocument.body.append(this.render());
    iframeDocument.body.append(chatBoxStyle);

    this.setupIframeEventListeners(iframeDocument);
  };

  setupIframeEventListeners(iframeDocument) {
    iframeDocument.addEventListener("click", (e) => this.handleClickOutside(e, iframeDocument));

    const openWa = iframeDocument.querySelector("#open-wa");
    openWa?.addEventListener("click", (e) => {
      e.stopPropagation();
      this.config.link && window.open(this.config.link, "popup", "width=600,height=600");
    });

    iframeDocument.querySelectorAll("#toggleWaBox").forEach(el => {
      el.addEventListener("click", (e) => {
        e.stopPropagation();
        this.toggleChatBox(iframeDocument);
      });
    });

    const waTooltip = iframeDocument.querySelector("#wa-tooltip");
    waTooltip?.addEventListener("click", (e) => {
      e.stopPropagation();
      this.toggleChatBox(iframeDocument);
    });

    const waBox = iframeDocument.querySelector("#wa-box");
    waBox?.addEventListener("click", (e) => e.stopPropagation());
  }


  render = () => {
    const { user = {}, text, chat_name, tooltipText } = this.config;
    const { name = '', avatar = '', status = '' } = user;
  
    return (
      <div className="fixed bottom-1 left-0 p-3" id="full-waBox" onClick={(e) => e.stopPropagation()}>
        <div 
          className="max-w-sm overflow-hidden rounded-lg bg-slate-900 shadow-lg" 
          style="display: none" 
          id="wa-box"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="relative flex p-8 py-4">
            <div className="relative">
              {avatar && <img src={avatar} alt="Website Logo" className="h-16 rounded-full" />}
              <div className="absolute bottom-1 right-1 h-3 w-3 rounded-full border-2 border-white bg-green-500"></div>
            </div>
            <div className="flex flex-col p-3">
              <div className="name-head font-bold">{name}</div>
              <div className="replies-in">{status}</div>
            </div>
            <div className="text-bold absolute right-2 top-2">
              <a id="toggleWaBox" className="cursor-pointer">
                <div className="w-4 h-4" dangerouslySetInnerHTML={{ __html: crossSvg }} />
              </a>
            </div>
          </div>
          <div className="chat-bg relative bg-slate-900 p-7">
            <div className="chat-box">
              <div className="chat-name">{chat_name}</div>
              <div className="chat-message" dangerouslySetInnerHTML={{ __html: text }}></div>
              <div className="chat-time">{this.formatTime(new Date())}</div>
            </div>
          </div>
          <div className="bg-slate-900">
            <div>
              <a className="hover:no-underline" id="open-wa">
                <div className="chat-btn">
                  <div className="w-4 h-4 mr-2" dangerouslySetInnerHTML={{ __html: whatsappSvg.replace(/fill="[^"]*"/g, `fill="#000000"`) }} />
                  Start Chat
                </div>
              </a> </div>
          </div>
        </div>
        <div className="relative float-left my-4 flex cursor-pointer group">
        <div className={`chaty-widget-i-title ${this.showTooltip ? 'opacity-100' : 'opacity-0'}`} id="wa-tooltip"> <p>{tooltipText}</p> </div>     
          <div 
           className="relative flex cursor-pointer justify-center"
            id="toggleWaBox"
            onClick={(e) => e.stopPropagation()}
          >
            
            <div className="chaty-widget-i" id="chaty-animation-0">
              <div className="chat-whatsapp-icon">
              <div className="animation-svg chaty-animation-fade" dangerouslySetInnerHTML={{ __html: whatsappIcon }} />
              <div className="unread-indicator"></div>
              </div>
              </div>
            </div>
            
          </div>
        </div>
      
    );
  };
}

export default WAChatBox;
