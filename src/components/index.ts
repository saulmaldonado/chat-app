import ChatApp from './ChatApp.vue';
import { PluginObject } from 'vue/types/umd';

export default {
  install(Vue) {
    Vue.component('ChatApp', ChatApp);
  },
} as PluginObject<undefined>;
