# WhatsApp Chat widget for websites

## Instructions

* Download <a href="https://cdn.jsdelivr.net/gh/asaddon/WhatsApp@refs/heads/main/dist/WhatsAppChatBox.min.js">WhatsappChatBox.min.js</a> from here.<br>
* Add the file to your header
```<script src="WhatsappChatBox.min.js"></script>```

* Initiate with the configuration
Configure with your settings
```javascript
  new WAChatBox({
     link: "https://wa.me/123456789",
                        user: {
                            name: "My Company",
                            avatar: "https://randomuser.me/api/portraits/women/66.jpg",
                            status: "Typically replies within few hours!"
                        },
                        chat_name: "Sales", 
                        text: "Hey There 👋<br>Let's talk to get a Price Quote!",
                        button_text: "",
                        tooltipText: "We're on WhatsApp!",
                        tooltipTimeout: 15000,
  });
 ```
