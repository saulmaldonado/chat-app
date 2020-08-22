<template>
  <div class="messages" ref="chatWindow">
    <MessageBubble v-for="message in messages" :key="message.id" :message="message" />
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import { Message } from './MessageBubble.vue';
import MessageBubble from './MessageBubble.vue';

export interface ChatInterface extends Vue {
  messages: Message[];

  scrollDown: () => void;
}

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
          (() => {
            if (Array.isArray(v.text)) {
              return v.text.every((v) => v.startsWith('blob:'));
            } else {
              return true;
            }
          })
        );
      }),
  })
  messages!: Message[];

  $refs!: {
    chatWindow: HTMLDivElement;
  };

  scrollDown(): void {
    this.$refs.chatWindow.scrollTop = this.$refs.chatWindow.scrollHeight;
  }
}
</script>

<style scoped lang="scss">
@import './styles/Chat.scss';
</style>
