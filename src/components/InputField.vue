<template>
  <form @submit.prevent="onSubmit">
    <input
      v-model="text"
      name="message"
      type="text"
      placeholder="Type a message..."
    />
    <button type="submit">
      <img
        src="../assets/images/chevron-right-solid.svg"
        alt="submit"
        class="submit-chevron"
      />
    </button>
  </form>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import { Message } from './MessageBubble.vue';

@Component
export default class InputField extends Vue {
  @Prop({ type: Function }) addMessage!: (messages: Message) => void;

  text = '';

  onSubmit() {
    this.addMessage(new Message(10, this.text, 'outgoing'));
    this.text = '';
  }
}
</script>

<style scoped lang="scss">
@import './styles/InputField.scss';
</style>
