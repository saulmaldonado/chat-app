<template>
  <div class="messages" ref="chatWindow">
    <MessageBubble v-for="message in messages" :key="message.id" :message="message" />
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import { Message } from './MessageBubble.vue';
import MessageBubble from './MessageBubble.vue';

@Component({
  components: { MessageBubble },
})
export default class Chat extends Vue {
  @Prop({
    type: Array,
    validator: (value: unknown[]) =>
      value.every((v) => {
        return (
          v instanceof Message &&
          ((Array.isArray(v.text) &&
            v.text.every((v) => v.startsWith('blob:'))) ||
            typeof v.text === 'string')
        );
      }),
  })
  messages!: Message[];

  $refs!: {
    chatWindow: HTMLDivElement;
  };

  public scrollDown(): void {
    this.$refs.chatWindow.scrollTop = this.$refs.chatWindow.scrollHeight;
  }
}
</script>

<style scoped lang="scss">
@import './styles/Chat.scss';
</style>
