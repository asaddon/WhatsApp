# WhatsApp Chat widget for websites

Demo: https://asaddon.github.io/WhatsApp/

![Screenshot 2024-11-03 at 3 49 35 AM](https://github.com/user-attachments/assets/049384d4-5d38-496c-84eb-a207d9d34489)
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
