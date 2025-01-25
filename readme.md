# WhatsApp Chat widget for websites

For Full Animation Preview see Demo: https://asaddon.github.io/WhatsApp/

![Screenshot 2025-01-26 at 4 00 34 AM](https://github.com/user-attachments/assets/5d6e134d-1ecd-4396-a531-70da583580ab)

## Instructions

* Download <a href="https://cdn.jsdelivr.net/gh/asaddon/WhatsApp@refs/heads/main/dist/WhatsAppChatBox.min.js">WhatsappChatBox.min.js</a> from here.<br>
* Add the file to your header
```<script src="WhatsappChatBox.min.js"></script>```
* Or directly embed it via
```<script src="https://cdn.jsdelivr.net/gh/asaddon/WhatsApp@refs/heads/main/dist/WhatsAppChatBox.min.js)"></script>```

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
                        tooltipText: "Hi, I am here to assist you!",
                        tooltipTimeout: 15000,
  });
 ```
