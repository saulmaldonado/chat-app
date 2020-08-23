<template>
  <div id="app">
    <ChatApp
      name="Samuel Green"
      status="Available to Walk"
      :socket="{
        hostname: 'http://192.168.29.192:5000',
        sendMessageEvent: 'SEND_MESSAGE',
      }"
    />
    <div class="text">
      <h1>Simple booking</h1>
      <p>Stay in touch with our dog walking through the chat interface. This makes it easy to discuss arrangments and make bookings. Once the walk has been completed you can rate your walker and book again all through the chat.</p>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import ChatApp from './components/ChatApp.vue';

@Component({
  components: {
    ChatApp,
  },
})
export default class App extends Vue {}
</script>

<style lang="scss">
body,
html {
  font-size: 16px;

  margin: 0px;
  height: 100%;
}
#app {
  @import url('https://fonts.googleapis.com/css2?family=Rubik:wght@400;500;700&display=swap');

  font-family: 'Rubik', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  height: 100%;
  text-align: center;
  color: #2c3e50;
  display: flex;
  align-items: center;
  justify-content: center;
  outline: none;

  *:focus {
    outline: none;
  }

  &:before {
    content: '';
    background: linear-gradient(
      180deg,
      hsl(293, 100%, 63%),
      hsl(264, 100%, 61%)
    );
    border-bottom-right-radius: 450px;
    border-bottom-left-radius: 450px;
    width: 35vw;
    height: 86vh;
    position: absolute;
    top: 0;
    left: -6vw;
    z-index: -1;
  }

  &:after {
    content: '';
    background: hsl(0, 0%, 90%);
    border-top-left-radius: 270px;
    width: 21vw;
    height: 84vh;
    position: absolute;
    bottom: 0;
    right: 0;
    z-index: -1;
  }
}

.text {
  width: 22vw;
  min-width: 475px;
  text-align: left;
  position: relative;
  z-index: -1;

  h1 {
    font-size: 2.5rem;
  }

  p {
    line-height: 30px;
    font-size: 1.05rem;
    color: hsl(270, 7%, 64%);
  }
}
</style>
