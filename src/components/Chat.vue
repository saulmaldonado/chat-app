<template>
  <div class="messages">
    <MessageBubble
      v-for="message in messages"
      :key="message.id"
      :message="message"
    />
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
}
</script>

<style scoped lang="scss">
@import './styles/Chat.scss';
</style>
