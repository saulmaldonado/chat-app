<template>
  <div id="app">
    <ChatApp name="Samuel Green" status="Available to Walk" />
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
}
</style>
