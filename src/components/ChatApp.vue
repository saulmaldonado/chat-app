<template>
  <div class="frame">
    <div class="content">
      <Navigation v-bind:name="name" v-bind:status="status" />
      <InputField />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import Navigation from './Navigation.vue';
import InputField from './InputField.vue';

@Component({
  components: { Navigation, InputField },
})
export default class ChatApp extends Vue {
  @Prop() private name!: string;
  @Prop() private status!: string;
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import './styles/ChatApp.scss';
</style>
