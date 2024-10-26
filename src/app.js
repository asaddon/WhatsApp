import "./styles.css";
import whatsappSvg from "./whatsapp.svg";
import crossSvg from "./cross.svg";

class WAChatBox {
  iframe = null;
  link = null;
  user = null;
  text = null;
  chat_name = null;
  button_text = null;

  formatTime(date) {
    let hours = date.getHours();
    let minutes = date.getMinutes();
    const ampm = hours >= 12 ? 'PM' : 'AM';

    // Convert to 12-hour format
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'

    // Add leading zeros to minutes if needed
    minutes = minutes < 10 ? '0' + minutes : minutes;

    return `${hours}:${minutes} ${ampm}`;
  }

  handleClickOutside = (event, iframeDocument) => {
    const waBox = iframeDocument.querySelector("#wa-box");
    const toggleButton = iframeDocument.querySelector("#toggleWaBox");
    
    // Check if the click was inside the widget or toggle button
    if (waBox && waBox.classList.contains("show")) {
      const isClickInside = event.target.closest("#wa-box") || 
                           event.target.closest("#toggleWaBox") ||
                           event.target.id === "toggleWaBox";
      
      if (!isClickInside) {
        waBox.classList.remove("show");
        waBox.classList.add("hide");
        setTimeout(() => {
          this.iframe.style.width = "200px";
          this.iframe.style.height = "100px";
        }, 500);
      }
    }
  };

  constructor({
    link = "https://wa.me/919999999999",
    user = {
      name: "Alice",
      avatar: "https://randomuser.me/api/portraits/women/66.jpg",
      status: "Typically replies within an hour",
    },
    text = `Hey There 👋<br><br>I'm here to help, so let me know what's up and I'll be happy to find a solution 🤓`,
    button_text = "Need Help?",
    chat_name = "Support",
  }) {
    this.link = link;
    this.user = user;
    this.text = text;
    this.button_text = button_text;
    this.chat_name = chat_name;
    this.iframe = document.createElement("iframe");
    this.iframe.onload = this.iframeLoaded;
    this.iframe.src = "about:blank";
    document.body.append(this.iframe);
    this.iframe.style.position = "fixed";
    this.iframe.style.top = "50%";
    this.iframe.style.transform = "translateY(-50%)";
    this.iframe.style.bottom = "0";
    this.iframe.style.right = "0";
    this.iframe.style.maxWidth = "100%";
    this.iframe.style.width = "200px";
    this.iframe.style.height = "100px";
    this.iframe.style.border = "none";
    this.iframe.style.zIndex = "999999999";

    // Add click event listener to main document
    document.addEventListener("click", (e) => {
      if (this.iframe.contentDocument) {
        this.handleClickOutside(e, this.iframe.contentDocument);
      }
    });
  }

  iframeLoaded = () => {
    let iframeDocument = this.iframe.contentDocument;
    iframeDocument.body.append(this.render());
    iframeDocument.body.append(chatBoxStyle);

    // Add click event listener to iframe document
    iframeDocument.addEventListener("click", (e) => {
      this.handleClickOutside(e, iframeDocument);
    });

    iframeDocument.body.querySelector("#open-wa").onclick = (e) => {
      e.stopPropagation(); // Prevent closing when clicking chat button
      this.link && window.open(this.link, "popup", "width=600,height=600");
    };

    iframeDocument.querySelectorAll("#toggleWaBox").forEach((el) => {
      el.addEventListener("click", (e) => {
        e.stopPropagation(); // Prevent click from bubbling up
        let action = "show";
        if (iframeDocument.querySelector("#wa-box").classList.contains("show")) {
          action = "hide";
        } else {
          action = "show";
        }

        if (action == "show") {
          iframeDocument.querySelector("#wa-box").classList.remove("hide");
          iframeDocument.querySelector("#wa-box").classList.add("show");
          setTimeout(() => {
            iframeDocument.querySelector(".chat-box").classList.add("show");
          }, 200);

          this.iframe.style.width = "408px";
          this.iframe.style.height = iframeDocument.querySelector("#full-waBox").offsetHeight + "px";
        } else {
          iframeDocument.querySelector("#wa-box").classList.remove("show");
          iframeDocument.querySelector("#wa-box").classList.add("hide");
          setTimeout(() => {
            this.iframe.style.width = "200px";
            this.iframe.style.height = "100px";
          }, 500);
        }
      });
    });

    // Prevent closing when clicking inside the chat box
    iframeDocument.querySelector("#wa-box").addEventListener("click", (e) => {
      e.stopPropagation();
    });
  };

  render = () => {
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
              <img src={this.user.avatar} alt="" className="h-16 rounded-full" />
              <div className="absolute bottom-1 right-1 h-3 w-3 rounded-full border-2 border-white bg-green-500"></div>
            </div>
            <div className="flex flex-col p-3">
              <div className="name-head font-bold">{this.user.name}</div>
              <div className="replies-in">{this.user.status}</div>
            </div>
            <div className="text-bold absolute right-2 top-2">
              <a id="toggleWaBox" className="cursor-pointer">
                <div className="w-4 h-4" dangerouslySetInnerHTML={{ __html: crossSvg }} />
              </a>
            </div>
          </div>
          <div className="chat-bg relative bg-slate-900 p-7">
            <div className="chat-box">
              <div className="chat-name">{this.chat_name}</div>
              <div className="chat-message" dangerouslySetInnerHTML={{ __html: this.text }}></div>
              <div className="chat-time">{this.formatTime(new Date())}</div>
            </div>
          </div>
          <div className="bg-slate-900">
            <div>
              <a className="hover:no-underline" id="open-wa">
                <div className="chat-btn">
                  <div className="w-4 h-4 mr-2" dangerouslySetInnerHTML={{ __html: whatsappSvg }} />
                  Start Chat
                </div>
              </a>
            </div>
          </div>
        </div>
        <div 
          className="relative float-right my-4 flex cursor-pointer justify-center rounded-full bg-black p-1 font -semibold text-white need-btn" 
          id="toggleWaBox"
          onClick={(e) => e.stopPropagation()}
        >
          <div className={this.button_text ? "flex mx-4" : "flex"}>
            <div className="chat-whatsapp-icon">
              <div className="w-5 h-5" dangerouslySetInnerHTML={{ __html: whatsappSvg }} />
            </div>
            {this.button_text ? <div className="ml-2 flex items-center justify-center">{this.button_text}</div> : ""}
          </div>
          <div className="absolute right-1 top-1 h-2.5 w-2.5 rounded-full bg-[#ff0000]"></div>
        </div>
      </div>
    );
  };
}

export default WAChatBox;
