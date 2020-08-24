<h1 align="center">Welcome to Chat App</h1>
<p>
  <a href="https://www.npmjs.com/package/@saulmaldonado/chat-app" target="_blank" rel="noopener">
    <img alt="Version" src="https://img.shields.io/npm/v/@saulmaldonado/chat-app.svg">
  </a>
  <a href="#" target="_blank" rel="noopener">
    <img alt="License: MIT" src="https://img.shields.io/badge/License-MIT-yellow.svg" />
  </a>
  <a href="https://twitter.com/saul_mal" target="_blank" rel="noopener">
    <img alt="Twitter: saul\_mal" src="https://img.shields.io/twitter/follow/saul_mal.svg?style=social" />
  </a>
</p>

> A functioning socket.io chat client component for Vue.js

> design by [Frontend Mentor](https://www.frontendmentor.io/challenges/chat-app-css-illustration-O5auMkFqY)

## Install

```sh
yarn install @saulmaldonado/chat-app
```

or

```sh
npm install @saulmaldonado/chat-app
```

### Install plugin

```js
import Vue from 'vue';
import App from './App.vue';
import ChatApp from '@saulmaldonado/chat-app';

Vue.use(ChatApp); // makes component available globally

new Vue({
  render: (h) => h(App),
}).$mount('#app');
```

## Configuration

### Props

```ts
type Props = {
  socket: {
    hostname: string; // URL of the Socket.io server
    sendMessageEvent: string; // Event name used for sending messages to and receiving messages from the server
  };
  name: string; // Username to be displayed in navigation section header
  status: string; // status text to be displayed in the navigation section subtext
  profileImage: string; // image to be used in the navigation section profile picture
};
```

### Styles

#### Package is built with extracted css to allow for further customization

```html
// App.vue
<style>
  @import url('~@saulmaldonado/chat-app/dist/chat-app.css');
</style>
```

## Example

```html
<template>
  <div id="app">
    <ChatApp
      :name="name"
      :status="status"
      :socket="socket"
      :profileImage="profileImage"
    />
  </div>
</template>

<script>
  import Profile from './assets/images/profile.jpg';

  export default {
    name: 'App',

    data: function() {
      return {
        name: 'Samuel Green',
        status: 'Available to Walk',
        socket: {
          hostname: 'http://192.168.29.192:5000',
          sendMessageEvent: 'SEND_MESSAGE'
        }
        profileImage: Profile,
      };
    },
  };
</script>

<style>
  @import url('~@saulmaldonado/chat-app/dist/chat-app.css');
</style>
```

## Author

👤 **Saul Maldonado**

- Website: https://saulmaldonado.tech/
- Twitter: [@saul_mal](https://twitter.com/saul_mal)
- Github: [@saulmaldonado](https://github.com/saulmaldonado)
- LinkedIn: [@saulmaldonado4](https://linkedin.com/in/saulmaldonado4)

## Show your support

Give a ⭐️ if this project helped you!

---

_This README was generated with ❤️ by [readme-md-generator](https://github.com/kefranabg/readme-md-generator)_
