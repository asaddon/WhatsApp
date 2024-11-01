import "./styles.css";
import whatsappSvg from "./whatsapp.svg";
import crossSvg from "./cross.svg";

class WAChatBox {
  static DEFAULT_CONFIG = {
    link: "https://wa.me/919999999999",
    user: {
      name: "Alice",
      avatar: "https://randomuser.me/api/portraits/women/66.jpg",
      status: "Typically replies within an hour",
    },
    text: `Hey There 👋<br><br>I'm here to help, so let me know what's up and I'll be happy to find a solution 🤓`,
    button_text: "Need Help?",
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
      top: "50%",
      transform: "translateY(-50%)",
      bottom: "0",
      right: "0",
      maxWidth: "100%",
      width: "300px",
      height: "200px",
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
      
      requestAnimationFrame(() => {
        iframeDocument.querySelector(".chat-box")?.classList.add("show");
        this.iframe.style.width = "408px";
        this.iframe.style.height = iframeDocument.querySelector("#full-waBox")?.offsetHeight + "px";
      });
    } else {
      waBox.classList.remove("show");
      waBox.classList.add("hide");
      
      setTimeout(() => {
        this.iframe.style.width = "300px";
        this.iframe.style.height = "200px";
      }, 500);
    }
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
    const { user = {}, text, button_text, chat_name, tooltipText } = this.config;
    const { name = '', avatar = '', status = '' } = user;
  
    return (
      <div className="fixed bottom-1 right-0 p-3" id="full-waBox" onClick={(e) => e.stopPropagation()}>
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
        <div className="relative float-right my-4 flex cursor-pointer group">
          <div 
            id="wa-tooltip"
            className={`absolute right-full mr-2 top-1/2 -translate-y-1/2 bg-black text-white px-4 py-1 rounded-lg text-sm whitespace-nowrap transition-opacity duration-200 ${this.showTooltip ? 'opacity-100' : 'opacity-0'}`}
          >
            {tooltipText}
            <div className="absolute top-1/2 -translate-y-1/2 right-[-6px] w-0 h-0 border-y-[6px] border-y-transparent border-l-[6px] border-l-black"></div>
          </div>
          
          <div 
            className="relative flex cursor-pointer justify-center rounded-full bg-black p-1 font-semibold text-white need-btn bounce" 
            id="toggleWaBox"
            onClick={(e) => e.stopPropagation()}
          >
            <div className={button_text ? "flex mx-4" : "flex"}>
              <div className="chat-whatsapp-icon">
                <div className="w-5 h-5" dangerouslySetInnerHTML={{ __html: whatsappSvg }} />
              </div>
              {button_text ? <div className="ml-2 flex items-center justify-center">{button_text}</div> : ""}
            </div>
            <div className="absolute right-1 top-1 h-2.5 w-2.5 rounded-full bg-[#ff0000]"></div>
          </div>
        </div>
      </div>
    );
  };
}

export default WAChatBox;
