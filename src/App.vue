<template>
  <div id="app">
    <ChatApp
      name="Samuel Green"
      status="Available to Walk"
      :socket="{
        hostname: 'http://192.168.29.192:5000',
        sendMessageEvent: 'SEND_MESSAGE',
      }"
      :profileImage="profileImage"
    />
    <div class="text">
      <h1>Simple booking</h1>
      <p>
        Stay in touch with our dog walking through the chat interface.
        This makes it easy to discuss arrangments and make bookings.
        Once the walk has been completed you can rate your walker and
        book again all through the chat.
      </p>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import ChatApp from './components/ChatApp.vue';
import profileImage from './assets/images/avatar.jpg';

@Component({
  components: {
    ChatApp,
  },
})
export default class App extends Vue {
  profileImage = profileImage;
}
</script>

<style lang="scss">
body,
html {
  font-size: 16px;
  height: 100%;
  margin: 0px;
}

/deep/ .frame {
  transform: translateX(-6vw);
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
    z-index: -2;
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
    z-index: -2;
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

  animation: SlideInFromLeft 0.8s 0.5s ease-in-out both;
}

@media (max-width: 870px) {
  #app {
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    &:before {
      border-bottom-left-radius: 100px;
      width: 35vw;
      height: 70vh;
    }

    .text {
      margin-top: 10px;

      text-align: center;
    }

    &:after {
      position: fixed;
    }
  }
}

@media (max-width: 475px) {
  #app {
    margin-top: 10px;

    &:after {
      display: none;
    }
  }
  .text {
    box-sizing: border-box;
    width: 95%;
    min-width: 0px;
    padding-left: 20px;
    padding-right: 20px;
  }
}

@keyframes SlideInFromLeft {
  from {
    opacity: 0;
    transform: translateX(20px);
  }

  to {
    opacity: 1;
    transform: translateX(0px);
  }
}
</style>
