## MrNotify SDK - Node.js

Package to send SMS via [MrNotify](https://mrnotify.lk)

### Installation

```sh
npm install mrnotify-sdk --save
```

### Configure Package

```js
const mrnotifySMS = require("mrnotify-sdk");
const apiKey = "xxxxxxxxxxxxxxxxxxxxxxxx";
const requestData = {
  msisdn: "947xxxxxxxx",
  name: "xxxxxx xxxxxx",
  groups: ["xxxxxx", "xxxxxx", "xxxxxx"],
  message: "xxxxxxxxxxxx xxxxxxxxxxxx xxxxxxxxxxxx xxxxxxxxxxxx",
};
mrnotifySMS.sendSMS(apiKey, requestData);
```
